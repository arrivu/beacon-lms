require "spec_helper"

describe Fontcustom::Generator::Template do
  context "#generate" do
    it "should generate templates (integration)", :integration => true do
      live_test do |testdir|
        FileUtils.cp_r fixture("generators/mixed-output"), "fontcustom"
        test_manifest(
          :input => "vectors", 
          :quiet => true,
          :templates => %w|preview css scss scss-rails|
        )
        manifest = File.join testdir, ".fontcustom-manifest.json"
        Fontcustom::Generator::Font.new(manifest).generate
        Fontcustom::Generator::Template.new(manifest).generate

        content = File.read manifest
        expect(content).to match(/fontcustom\/fontcustom-preview.html/)
      end
    end
  end

  context ".set_relative_paths" do
    it "should assign @font_path, @font_path_alt, and @font_path_preview" do
      gen = Fontcustom::Generator::Template.new fixture("generators/.fontcustom-manifest.json")
      options = gen.instance_variable_get :@options
      options[:output] = {:fonts => fixture("sandbox/test/fonts"), :css => fixture("sandbox/test/css"), :preview => fixture("sandbox/test")}

      gen.send :set_relative_paths
      expect(gen.instance_variable_get(:@font_path)).to match("../fonts")
      expect(gen.instance_variable_get(:@font_path_alt)).to match("../fonts")
      expect(gen.instance_variable_get(:@font_path_preview)).to match(".")
    end

    it "should assign @font_path_alt if :preprocessor_path is set" do
      gen = Fontcustom::Generator::Template.new fixture("generators/.fontcustom-manifest.json")
      options = gen.instance_variable_get :@options
      options[:preprocessor_path] = "fonts/fontcustom"
      options[:output] = {:fonts => fixture("sandbox/test/fonts"), :css => fixture("sandbox/test/css"), :preview => fixture("sandbox/test")}

      gen.send :set_relative_paths
      expect(gen.instance_variable_get(:@font_path_alt)).to match("fonts/fontcustom")
    end

    it "should assign @font_path_alt as bare font name if :preprocessor_path is false" do
      gen = Fontcustom::Generator::Template.new fixture("generators/.fontcustom-manifest.json")
      options = gen.instance_variable_get :@options
      options[:preprocessor_path] = false
      options[:output] = {:fonts => fixture("sandbox/test/fonts"), :css => fixture("sandbox/test/css"), :preview => fixture("sandbox/test")}

      gen.send :set_relative_paths
      expect(gen.instance_variable_get(:@font_path_alt)).to_not match("../fonts")
    end

    it "should assign '.' when paths are the same" do
      gen = Fontcustom::Generator::Template.new fixture("generators/.fontcustom-manifest.json")
      options = gen.instance_variable_get :@options
      options[:output] = {:fonts => fixture("sandbox/test/fonts"), :css => fixture("sandbox/test/fonts"), :preview => fixture("sandbox/test/fonts")}

      gen.send :set_relative_paths
      expect(gen.instance_variable_get(:@font_path)).to match("./")
    end
  end

  context ".create_files" do
    it "should not include the template path in custom output file paths" do
      gen = Fontcustom::Generator::Template.new fixture("generators/.fontcustom-manifest.json")

      # Set options to specify a custom CSS template with a custom output location.
      options = gen.instance_variable_get :@options
      options[:input][:templates] = fixture("shared/templates")
      options[:templates] = ['custom.css']
      options[:output][:'custom.css'] = fixture("sandbox/test")

      # Don't update the manifest based on these options.
      manifest = gen.instance_variable_get :@manifest
      expect(manifest).to receive(:set)

      # Confirm that the output file doesn't include the template path.
      expect(gen).to receive(:template).once do |source, target|
        expect(source).to match("shared/templates")
        expect(target).to_not match("shared/templates")
      end

      gen.send :create_files
    end
  end
end
