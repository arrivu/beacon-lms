#
# Copyright (C) 2013 Instructure, Inc.
#
# This file is part of Canvas.
#
# Canvas is free software: you can redistribute it and/or modify it under
# the terms of the GNU Affero General Public License as published by the Free
# Software Foundation, version 3 of the License.
#
# Canvas is distributed in the hope that it will be useful, but WITHOUT ANY
# WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
# A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
# details.
#
# You should have received a copy of the GNU Affero General Public License along
# with this program. If not, see <http://www.gnu.org/licenses/>.
#

class CiscoWebexConference < WebConference

  after_save :format_scheduled_date

  user_setting_field :scheduled_date, {
    name: -> { t('scheduled_date_setting', 'Scheduled Date') },
    description: -> { t('scheduled_date_setting_description', 'Scheduled Date') },
    type: :date_picker,
    visible: true,
    default: '',
    location: 'userSettings'
  }

  user_setting_field :external_emails, {
    name: -> { t('external_emails_setting', 'External Emails') },
    description: -> { t('external_emails_setting_description', 'External emails') },
    type: :text,
    visible: true,
    default: '',
    location: 'members'
  }

  # Public: Start a new conference and return its key. (required by WebConference)
  #
  # Returns a meeting.
  def initiate_conference
    unless self.conference_key.present?
      options = {
        duration: self.duration || 0,
        emails: settings[:external_emails].nil? ? [] : settings[:external_emails].strip.split(';'),
        time_zone: user.time_zone
      }
      options[:scheduled_date] = scheduled_date.in_time_zone(user.time_zone) if scheduled_date.present?
      webex_session = CanvasWebex::WebexSession.create(self.title, options)
      self.conference_key = webex_session.session_key
      save
    end
    self.conference_key
  end

  # Public: Determine the status of the conference (required by WebConference).
  #
  # Returns conference status as a symbol (either :active or :closed).
  def conference_status
    begin
      if self.started_at.nil?
        initiate_conference if self.conference_key.blank? && scheduled_date.present?
        :created
      elsif self.ended_at.nil? && meeting
        if self.end_at && self.end_at > Time.now
          :active
        elsif self.end_at.nil?
          :active
        else
          :closed
        end
      else
        unless self.ended_at
          self.close
          self.end_at = self.ended_at
          self.save
        end
        :closed
      end
    rescue CanvasWebex::ConnectionError
      nil
    end
  end

  # Public: The schedule date of the conference
  #
  # Returns the scheduled date of the conference or nil if there isn't a scheduled date
  def scheduled_date
    @scheduled_date ||= user.time_zone.parse(settings[:scheduled_date]).utc unless settings[:scheduled_date].blank?
  end

  # Public: Add an admin to the conference and create a meeting URL (required by WebConference).
  #
  # admin - The user to add to the conference as an admin.
  # _ - Included for compatibility w/ web_conference.rb
  #
  # Returns a meeting URL string.
  def admin_join_url(admin, _ = nil)
    if meeting
      meeting.host_url
    end
  end

  # Public: Add a participant to the conference and create a meeting URL.
  #         Make the user a conference admin if they have permissions to create
  #         a conference (required by WebConference).
  #
  # user - The user to add to the conference as an admin.
  # _ - Included for compatibility w/ web_conference.rb
  #
  # Returns a meeting URL string.
  def participant_join_url(user, _ = nil)
    if meeting
      if grants_right?(user, nil, :initiate)
        meeting.host_url
      else
        meeting.join_url
      end
    end
  end

  # Public: List all of the recordings for a meeting
  #
  # Returns an Array of recording hashes, or an empty Array if there are no recordings
  def recordings
    CanvasWebex::WebexSession.recordings(self.conference_key)
  end

  def after_find
    conference_status
  end

  def as_json(options={})
    format_scheduled_date
    super(options)
  end

  protected

  def webex_client
    CanvasWebex.client
  end

  # Protected: Retrieve the meeting if it is still active
  #
  # Returns the meeting object, or nil if the meeting is ended
  def meeting
    @meeting ||= if self.conference_key
                   case CanvasWebex.client.webex_service
                     when 'meeting'
                       CanvasWebex::Meeting.retrieve(self.conference_key)
                     when 'training'
                       CanvasWebex::Training.retrieve(self.conference_key)
                   end
                 end
  end

  def format_scheduled_date
    if date = user.time_zone &&!user_settings[:scheduled_date].blank? && user_settings[:scheduled_date]
      unless date =~ /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/
        user_settings[:scheduled_date] = user.time_zone.parse(date).utc.iso8601
        save
      end
    end
  end

end
