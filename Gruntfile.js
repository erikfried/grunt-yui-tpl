/*global module:false*/
module.exports = function(grunt) {

  var JS_SOURCES = 'app/assets/javascript/src/**/*.js';

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
        maxparams: 3,
        globals: {
          YUI: true,
          YUI_config: true
        }
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      sources: {
        src: JS_SOURCES
      }
    },
    jasmine : {
      src : JS_SOURCES,
      options : {
        vendor   : 'app/assets/javascript/vendor/**/*.js',
        specs    : 'test/javascript/specs/**/*spec.js',
        template : 'test/javascript/YuiJasmineRunner.tmpl'
      }
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile'],
        options: {
          forceWatchMethod: 'old',
          interrupt: true
        }
      },
      sources: {
        files: '<%= jshint.sources.src %>',
        tasks: ['jshint:sources'],
        options: {
          forceWatchMethod: 'old',
          interrupt: true
        }
      }
    }
  });

  // Project configuration.

  //Load tasks
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jasmine');


    // Default task.
  grunt.registerTask('default', ['jshint']);

};
