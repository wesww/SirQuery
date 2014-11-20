module.exports = function(grunt) {
	var banner = ['/*!',
                   ' * SirQuery v1.0.0',
                   ' *',
                   ' * Released under the MIT license',
                   ' * www.opensource.org/licenses/MIT',
                   ' *',
                   ' * <%= grunt.template.today("yyyy-mm-dd") %>',
                   ' */\n\n'
                   ].join("\n");
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			all: ['Gruntfile.js', 'index.js']
		}
		browserify: {
			dist: {
				files: {
					'sirquery.js': ['index.js'],
				}
			}
		}
		uglify: {
			options: {
				banner: banner
			},
			build: {
				src: 'sirquery.js',
				dest: 'sirquery.min.js'
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-verb');
	grunt.registerTask('default', ['jshint', 'browserify', 'uglify', 'verb']);
}