module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      compileCore: {
        options: {
          strictMath: true,
          sourceMap: true,
          outputSourceFiles: true,
          sourceMapURL: 'style.css.map',
          sourceMapFilename: 'css/style.css.map'
        },
        files: {
          'css/style.css': 'less/style.less'
        }
      },
    },
    watch: {
      less: {
        files: 'less/*.less',
        tasks: 'less',
        options: {
          spawn: false,
        },
      }
    },
    csslint: {
      options: {
        "import": 2
      },
      src: 'css\\**\\*.css'
    },
    concat: {
      dist: {
        src: ['css/*.css'],
        dest: 'css/style.css',
      },
    },
    uglify: {
      my_target: {
        files: {
          'js/custom.min.js': ['src/input1.js', 'src/input2.js']
        }
      }
    },
    cssmin: {
      combine: {
        files: {
          'path/to/output.css': ['path/to/input_one.css', 'path/to/input_two.css']
        }
      }
    },
    jshint: {
      all: ['Gruntfile.js', 'lib/**/*.js', 'test/**/*.js']
    }
  });


  // These plugins provide necessary tasks.
  require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});

  // Default task(s).
  grunt.registerTask('default', ['less' ,'concat']);
  grunt.registerTask('watch', ['less' ,'watch']);
  grunt.registerTask('csslint', ['csslint']);
  grunt.registerTask('uglify', ['uglify']);


};

