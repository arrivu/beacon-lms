# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name = "switchman"
  s.version = "1.2.21"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.authors = ["Cody Cutrer", "James Williams", "Jacob Fugal"]
  s.date = "2014-10-22"
  s.description = "Sharding"
  s.email = ["cody@instructure.com"]
  s.homepage = "http://www.instructure.com/"
  s.licenses = ["MIT"]
  s.require_paths = ["lib"]
  s.rubygems_version = "1.8.23.2"
  s.summary = "Rails 3 sharding magic"

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<railties>, ["< 4.2", ">= 3.2"])
      s.add_runtime_dependency(%q<activerecord>, ["< 4.2", ">= 3.2"])
      s.add_runtime_dependency(%q<shackles>, ["~> 1.0"])
      s.add_development_dependency(%q<mysql2>, ["~> 0.3"])
      s.add_development_dependency(%q<pg>, ["~> 0"])
      s.add_development_dependency(%q<rspec-rails>, ["~> 3.0"])
      s.add_development_dependency(%q<sqlite3>, ["~> 1.3"])
    else
      s.add_dependency(%q<railties>, ["< 4.2", ">= 3.2"])
      s.add_dependency(%q<activerecord>, ["< 4.2", ">= 3.2"])
      s.add_dependency(%q<shackles>, ["~> 1.0"])
      s.add_dependency(%q<mysql2>, ["~> 0.3"])
      s.add_dependency(%q<pg>, ["~> 0"])
      s.add_dependency(%q<rspec-rails>, ["~> 3.0"])
      s.add_dependency(%q<sqlite3>, ["~> 1.3"])
    end
  else
    s.add_dependency(%q<railties>, ["< 4.2", ">= 3.2"])
    s.add_dependency(%q<activerecord>, ["< 4.2", ">= 3.2"])
    s.add_dependency(%q<shackles>, ["~> 1.0"])
    s.add_dependency(%q<mysql2>, ["~> 0.3"])
    s.add_dependency(%q<pg>, ["~> 0"])
    s.add_dependency(%q<rspec-rails>, ["~> 3.0"])
    s.add_dependency(%q<sqlite3>, ["~> 1.3"])
  end
end
