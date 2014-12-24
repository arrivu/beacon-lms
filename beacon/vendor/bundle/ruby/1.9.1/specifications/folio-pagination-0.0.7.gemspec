# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name = "folio-pagination"
  s.version = "0.0.7"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.authors = ["Jacob Fugal"]
  s.date = "2014-03-06"
  s.description = "A pagination library."
  s.email = ["jacob@instructure.com"]
  s.homepage = "https://github.com/instructure/folio"
  s.licenses = ["MIT"]
  s.require_paths = ["lib"]
  s.rubygems_version = "1.8.23.2"
  s.summary = "Folio is a library for pagination. It's meant to be nearly compatible with WillPaginate, but with broader -- yet more well-defined -- semantics to allow for sources whose page identifiers are non-ordinal."

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_development_dependency(%q<bundler>, ["~> 1.3"])
      s.add_development_dependency(%q<rake>, [">= 0"])
    else
      s.add_dependency(%q<bundler>, ["~> 1.3"])
      s.add_dependency(%q<rake>, [">= 0"])
    end
  else
    s.add_dependency(%q<bundler>, ["~> 1.3"])
    s.add_dependency(%q<rake>, [">= 0"])
  end
end
