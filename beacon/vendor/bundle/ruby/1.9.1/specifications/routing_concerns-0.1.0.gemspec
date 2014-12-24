# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name = "routing_concerns"
  s.version = "0.1.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.authors = ["David Heinemeier Hansson"]
  s.date = "2012-06-28"
  s.email = ["david@heinemeierhansson.com"]
  s.require_paths = ["lib"]
  s.rubygems_version = "1.8.23.2"
  s.summary = "Routing concerns for Action Pack"

  if s.respond_to? :specification_version then
    s.specification_version = 3

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<actionpack>, [">= 3.2.0"])
      s.add_runtime_dependency(%q<activemodel>, [">= 3.2.0"])
      s.add_runtime_dependency(%q<railties>, [">= 3.2.0"])
      s.add_development_dependency(%q<rake>, [">= 0"])
    else
      s.add_dependency(%q<actionpack>, [">= 3.2.0"])
      s.add_dependency(%q<activemodel>, [">= 3.2.0"])
      s.add_dependency(%q<railties>, [">= 3.2.0"])
      s.add_dependency(%q<rake>, [">= 0"])
    end
  else
    s.add_dependency(%q<actionpack>, [">= 3.2.0"])
    s.add_dependency(%q<activemodel>, [">= 3.2.0"])
    s.add_dependency(%q<railties>, [">= 3.2.0"])
    s.add_dependency(%q<rake>, [">= 0"])
  end
end
