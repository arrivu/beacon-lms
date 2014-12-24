# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name = "iso8601"
  s.version = "0.8.2"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.authors = ["Arnau Siches"]
  s.date = "2014-09-16"
  s.description = "    ISO8601 is a simple implementation in Ruby of the ISO 8601 (Data elements and\n    interchange formats - Information interchange - Representation of dates\n    and times) standard.\n"
  s.email = "arnau.siches@gmail.com"
  s.homepage = "https://github.com/arnau/ISO8601"
  s.licenses = ["MIT"]
  s.require_paths = ["lib"]
  s.required_ruby_version = Gem::Requirement.new(">= 1.9.3")
  s.rubyforge_project = "iso8601"
  s.rubygems_version = "1.8.23.2"
  s.summary = "Ruby parser to work with ISO 8601 dateTimes and durations - http://en.wikipedia.org/wiki/ISO_8601"

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_development_dependency(%q<rspec>, ["~> 3.1"])
      s.add_development_dependency(%q<rubocop>, ["~> 0.26"])
    else
      s.add_dependency(%q<rspec>, ["~> 3.1"])
      s.add_dependency(%q<rubocop>, ["~> 0.26"])
    end
  else
    s.add_dependency(%q<rspec>, ["~> 3.1"])
    s.add_dependency(%q<rubocop>, ["~> 0.26"])
  end
end
