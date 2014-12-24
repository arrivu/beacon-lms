# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name = "encrypted_cookie_store-instructure"
  s.version = "1.1.8"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.authors = ["Cody Cutrer", "Jacob Fugal", "James Williams"]
  s.date = "2013-12-20"
  s.description = "A secure version of Rails' built in CookieStore"
  s.extra_rdoc_files = ["LICENSE.txt"]
  s.files = ["LICENSE.txt"]
  s.homepage = "http://github.com/ccutrer/encrypted_cookie_store"
  s.require_paths = ["lib"]
  s.rubygems_version = "1.8.23.2"
  s.summary = "EncryptedCookieStore for Ruby on Rails 3.2"

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<actionpack>, ["< 4.2", ">= 3.2"])
      s.add_development_dependency(%q<bundler>, ["~> 1.3"])
      s.add_development_dependency(%q<rake>, [">= 0"])
      s.add_development_dependency(%q<rspec-rails>, ["~> 2.0"])
      s.add_development_dependency(%q<debugger>, [">= 0"])
    else
      s.add_dependency(%q<actionpack>, ["< 4.2", ">= 3.2"])
      s.add_dependency(%q<bundler>, ["~> 1.3"])
      s.add_dependency(%q<rake>, [">= 0"])
      s.add_dependency(%q<rspec-rails>, ["~> 2.0"])
      s.add_dependency(%q<debugger>, [">= 0"])
    end
  else
    s.add_dependency(%q<actionpack>, ["< 4.2", ">= 3.2"])
    s.add_dependency(%q<bundler>, ["~> 1.3"])
    s.add_dependency(%q<rake>, [">= 0"])
    s.add_dependency(%q<rspec-rails>, ["~> 2.0"])
    s.add_dependency(%q<debugger>, [">= 0"])
  end
end
