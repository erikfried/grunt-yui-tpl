/*global module:false*/
module.exports = function(grunt) {

  var JS_SOURCES = 'app/assets/javascript/src/**/*.js';
  var STYLESHEETS_PATH = "app/assets/stylesheets";

    grunt.initConfig({
    // Metadata, not needed but useful for future refence
    pkg: grunt.file.readJSON('package.json'),
    gruntfile: {
      src: 'Gruntfile.js'
    },
    //JSHINT CONFIG
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
    //CONFIG FOR JASMINE TESTS
    jasmine : {
      src : JS_SOURCES,
      options : {
        vendor   : 'app/assets/javascript/vendor/**/*.js',
        specs    : 'test/javascript/specs/**/*spec.js',
        template : 'test/javascript/YuiJasmineRunner.tmpl'
      }
    },
    //CONFIG FOR LESS STYLESHEETS COMPILATION
    less: {
      compile: {
        options: {
          paths: [STYLESHEETS_PATH],
          compress: true
        },
        files: {
          "app/assets/stylesheets/style.css": "app/assets/stylesheets/style.less"
        }
      }
    },
    //WATCH CONFIG.
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
        tasks: ['jshint:sources', 'jasmine'],
        options: {
          forceWatchMethod: 'old',
          interrupt: true
        }
      },
      stylesheets: {
          files: STYLESHEETS_PATH + "/**/*.less",
          tasks: ['less'],
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
  grunt.loadNpmTasks('grunt-contrib-less');


    // Default task.
  grunt.registerTask('default', ['jshint','jasmine']);

};
