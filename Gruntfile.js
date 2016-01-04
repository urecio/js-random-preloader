module.exports = function(grunt) {
	'use strict';
	// Project configuration
	grunt.initConfig({
		uglify: {
			my_target: {
				files: {
					'dist/js/random-preloader.min.js': ['lib/**/*.js']
				}
			}
		},
		cssmin: {
			target: {
				files: [{
					expand: true,
					cwd: 'lib/css',
					src: ['*.css', '!*.min.css'],
					dest: 'dist/css',
					ext: '.min.css'
				}]
			}
		}
	});

	// These plugins provide necessary tasks
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// Default task
	grunt.registerTask('default', ['cssmin', 'uglify']);
};
