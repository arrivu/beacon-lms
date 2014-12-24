# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name = "bullet_instructure"
  s.version = "4.0.3"

  s.required_rubygems_version = Gem::Requirement.new(">= 1.3.6") if s.respond_to? :required_rubygems_version=
  s.authors = ["Richard Huang"]
  s.date = "2014-07-29"
  s.description = "help to kill N+1 queries and unused eager loading, pretty formatter for Instructure."
  s.email = ["flyerhzm@gmail.com"]
  s.homepage = "http://github.com/flyerhzm/bullet"
  s.licenses = ["MIT"]
  s.require_paths = ["lib"]
  s.rubygems_version = "1.8.23.2"
  s.summary = "help to kill N+1 queries and unused eager loading, pretty formatter for Instructure."

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<activesupport>, [">= 3.0.0"])
      s.add_runtime_dependency(%q<uniform_notifier>, [">= 1.6.0"])
    else
      s.add_dependency(%q<activesupport>, [">= 3.0.0"])
      s.add_dependency(%q<uniform_notifier>, [">= 1.6.0"])
    end
  else
    s.add_dependency(%q<activesupport>, [">= 3.0.0"])
    s.add_dependency(%q<uniform_notifier>, [">= 1.6.0"])
  end
end
