module.exports = function(grunt) {

  grunt.initConfig({
    ngmin: {
      controllers: {
        src: ['scripts/controllers/*.js'],
        dest: 'build/controllers.js'
      },
      directives: {
        src: ['scripts/directives/*.js'],
        dest: 'build/directives.js'
      }
    },
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      dist: {
        src: ['scripts/libs/core-libs/*.js','scripts/libs/*.js', 'scripts/config/*.js', 'build/*.js'],
        dest: 'dist/utopia.js'
      }
    },
    uglify : {
      dist: {
        src: 'dist/utopia.js',
        dest: 'dist/utopia.min.js'
      }
    },
    cssmin :{
      minify : {
        src: ['css/*.css'],
        dest: 'dist/utopia.min.css',
      }
    },
    copy : {
      main : {
        files: [{
            src : ['css/*.png'],
            dest : 'dist/',
            flatten : true,
            filter : 'isFile',
            expand :true
          },
          {
              src : ['css/images/*.*'],
              dest : 'dist/images/',
              flatten : true,
              filter : 'isFile',
              expand :true
          }]
      }
    } 
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-ngmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['ngmin', 'concat', 'cssmin', 'copy']);
};
