module IMS::LTI::Services
  class ToolProxyRegistrationService
    def initialize(registration_request)
      @registration_request = registration_request
    end

    def tool_consumer_profile
      return @tool_consumer_profile if @tool_consumer_profile

      connection = Faraday.new
      response = connection.get(@registration_request.tc_profile_url)
      @tool_consumer_profile = IMS::LTI::Models::ToolConsumerProfile.new.from_json(response.body)
    end

    def service_profiles
      tool_consumer_profile.services_offered.map(&:profile)
    end

    def register_tool_proxy(tool_proxy)
      service = tool_consumer_profile.services_offered.find { |s| s.formats.include?('application/vnd.ims.lti.v2.toolproxy+json') && s.actions.include?('POST') }

      conn = Faraday.new do |conn|
        conn.request :oauth, {:consumer_key => @registration_request.reg_key, :consumer_secret => @registration_request.reg_password}
        conn.adapter :net_http
      end

      response = conn.post do |req|
        req.url service.endpoint
        req.headers['Content-Type'] = 'application/json'
        req.body = tool_proxy.to_json
      end

      if response.status == 201
        IMS::LTI::Models::ToolProxy.new.from_json(tool_proxy.to_json).from_json(response.body)
      end
    end


    def remove_invalid_capabilities!(message_handler)
      {
        invalid_capabilities: remove_capabilites!(message_handler),
        invalid_parameters: remove_params!(message_handler)
      }
    end

    private

    def remove_params!(message_handler)
      orig_parameters = message_handler.parameter || []
      parameters = orig_parameters.select {|p| p.fixed? || tool_consumer_profile.capability_offered.include?(p.variable)}
      message_handler.parameter = parameters
      orig_parameters - parameters
    end

    def remove_capabilites!(message_handler)
      orig_capabilities = message_handler.enabled_capability || []
      capabilites = orig_capabilities & tool_consumer_profile.capability_offered
      capabilites.reject! { |cap| IMS::LTI::Models::ToolConsumerProfile::MESSAGING_CAPABILITIES.include? cap }
      message_handler.enabled_capability = capabilites
      orig_capabilities - capabilites
    end



  end
end