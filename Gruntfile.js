module.exports = function(grunt) {


  grunt.initConfig({
    uglify: {
        options: {
          force: true
        },
        dist: {
            files: {
                'out/js/main.js': ['out/js/twitter.js', 'out/js/svg-fallback.js', 'out/js/map.js']
            }
        }
    },

    cssmin: {
        compress: {
            files: {
                'out/main.css': ['out/assets/css/styles.css', 'out/assets/css/normalize.css', 'out/assets/css/fonts.css']
            }
        }
    },

    clean: {
        after: ['out/assets/css', 'out/js/svg-fallback.js', 'out/js/map.js', 'out/js/twitter.js'],
        before: ['out/main.js', 'out/main.css']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task.
  grunt.registerTask('default', ['clean:before', 'cssmin', 'uglify', 'clean:after']);

  // Development task
  grunt.registerTask('dev', ['clean:before', 'cssmin', 'uglify']);
};