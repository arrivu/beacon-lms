module HairTrigger
  VERSION = "0.2.9"

  def VERSION.<=>(other)
    split(/\./).map(&:to_i) <=> other.split(/\./).map(&:to_i)
  end
end
