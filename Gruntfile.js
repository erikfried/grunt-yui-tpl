/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata, not needed but useful for future refence
    pkg: grunt.file.readJSON('package.json'),
    gruntfile: {
      src: 'Gruntfile.js'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {
          YUI: true,
          YUI_config: true
        }
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      sources: {
        src: 'app/assets/javascript/**/*.js'
      }
    }
  });

  //Load tasks
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task.
  grunt.registerTask('default', ['jshint']);

};
