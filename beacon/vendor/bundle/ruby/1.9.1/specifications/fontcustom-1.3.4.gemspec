# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name = "fontcustom"
  s.version = "1.3.4"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.authors = ["Kai Zau", "Joshua Gross"]
  s.date = "2014-10-11"
  s.description = "Font Custom makes using vector icons easy. Generate icon fonts and supporting templates (e.g. @font-face CSS) from a collection of SVGs."
  s.email = ["kai@kaizau.com", "joshua@gross.is"]
  s.executables = ["fontcustom"]
  s.files = ["bin/fontcustom"]
  s.homepage = "http://fontcustom.com"
  s.post_install_message = ">> Thanks for installing Font Custom! Please ensure that fontforge is installed before compiling any icons. Visit <http://fontcustom.com> for instructions."
  s.require_paths = ["lib"]
  s.rubygems_version = "1.8.23.2"
  s.summary = "Generate icon fonts from the command line."

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<json>, ["~> 1.4"])
      s.add_runtime_dependency(%q<thor>, ["~> 0.14"])
      s.add_runtime_dependency(%q<listen>, ["< 3.0", ">= 1.0"])
      s.add_development_dependency(%q<rake>, [">= 0"])
      s.add_development_dependency(%q<bundler>, [">= 0"])
      s.add_development_dependency(%q<rspec>, [">= 0"])
    else
      s.add_dependency(%q<json>, ["~> 1.4"])
      s.add_dependency(%q<thor>, ["~> 0.14"])
      s.add_dependency(%q<listen>, ["< 3.0", ">= 1.0"])
      s.add_dependency(%q<rake>, [">= 0"])
      s.add_dependency(%q<bundler>, [">= 0"])
      s.add_dependency(%q<rspec>, [">= 0"])
    end
  else
    s.add_dependency(%q<json>, ["~> 1.4"])
    s.add_dependency(%q<thor>, ["~> 0.14"])
    s.add_dependency(%q<listen>, ["< 3.0", ">= 1.0"])
    s.add_dependency(%q<rake>, [">= 0"])
    s.add_dependency(%q<bundler>, [">= 0"])
    s.add_dependency(%q<rspec>, [">= 0"])
  end
end
