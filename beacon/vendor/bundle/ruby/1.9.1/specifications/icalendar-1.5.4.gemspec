# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name = "icalendar"
  s.version = "1.5.4"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.authors = ["Ryan Ahearn"]
  s.date = "2014-04-27"
  s.description = "    Implements the iCalendar specification (RFC-2445) in Ruby.  This allows\n    for the generation and parsing of .ics files, which are used by a\n    variety of calendaring applications.\n"
  s.email = ["ryan.c.ahearn@gmail.com"]
  s.homepage = "https://github.com/icalendar/icalendar"
  s.require_paths = ["lib"]
  s.required_ruby_version = Gem::Requirement.new(">= 1.9.2")
  s.rubygems_version = "1.8.23.2"
  s.summary = "A ruby implementation of the iCalendar specification (RFC-2445)."

  if s.respond_to? :specification_version then
    s.specification_version = 3

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_development_dependency(%q<rake>, ["~> 10.0"])
      s.add_development_dependency(%q<bundler>, ["~> 1.3"])
      s.add_development_dependency(%q<tzinfo>, ["~> 0.3"])
      s.add_development_dependency(%q<timecop>, ["~> 0.6.3"])
    else
      s.add_dependency(%q<rake>, ["~> 10.0"])
      s.add_dependency(%q<bundler>, ["~> 1.3"])
      s.add_dependency(%q<tzinfo>, ["~> 0.3"])
      s.add_dependency(%q<timecop>, ["~> 0.6.3"])
    end
  else
    s.add_dependency(%q<rake>, ["~> 10.0"])
    s.add_dependency(%q<bundler>, ["~> 1.3"])
    s.add_dependency(%q<tzinfo>, ["~> 0.3"])
    s.add_dependency(%q<timecop>, ["~> 0.6.3"])
  end
end
