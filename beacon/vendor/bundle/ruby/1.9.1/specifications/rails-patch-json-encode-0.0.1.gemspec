# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name = "rails-patch-json-encode"
  s.version = "0.0.1"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.authors = ["lulalala", "Jason Hutchens"]
  s.date = "2013-09-19"
  s.description = "A monkey patch to speed up Rails' JSON generation time."
  s.email = ["mark@goodlife.tw"]
  s.homepage = "https://github.com/GoodLife/rails-patch-json-encode"
  s.licenses = ["MIT"]
  s.require_paths = ["lib"]
  s.rubygems_version = "1.8.23.2"
  s.summary = "A monkey patch to speed up Rails' JSON generation time."

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_development_dependency(%q<bundler>, ["~> 1.3"])
      s.add_development_dependency(%q<rake>, [">= 0"])
      s.add_runtime_dependency(%q<multi_json>, [">= 0"])
    else
      s.add_dependency(%q<bundler>, ["~> 1.3"])
      s.add_dependency(%q<rake>, [">= 0"])
      s.add_dependency(%q<multi_json>, [">= 0"])
    end
  else
    s.add_dependency(%q<bundler>, ["~> 1.3"])
    s.add_dependency(%q<rake>, [">= 0"])
    s.add_dependency(%q<multi_json>, [">= 0"])
  end
end
