# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name = "acts_as_rails3_generator"
  s.version = "0.0.1"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.authors = ["Joakim Kolsj\u{c3}\u{b6}"]
  s.date = "2010-11-27"
  s.description = "This is a wrapper that enables you to write your generator using the Rails 3 syntax but still support Rails 2."
  s.email = ["joakim.kolsjo@gmail.com"]
  s.homepage = "http://github.com/joakimk/acts_as_rails3_generator"
  s.require_paths = ["lib"]
  s.rubygems_version = "1.8.23.2"
  s.summary = "Write Rails 2 generators with Rails 3 generator syntax."

  if s.respond_to? :specification_version then
    s.specification_version = 3

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
    else
    end
  else
  end
end
