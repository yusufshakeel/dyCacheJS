/*!
 * dyCacheJS
 *
 * Author: Yusuf Shakeel
 * https://github.com/yusufshakeel
 *
 * GitHub Link: https://github.com/yusufshakeel/dyCacheJS
 *
 * MIT license
 * Copyright (c) 2018 Yusuf Shakeel
 *
 * Date: 2016-12-27 Tuesday
 */

/*! dyCacheJS | (c) 2018 Yusuf Shakeel | https://github.com/yusufshakeel/dyCacheJS */

module.exports = function (grunt) {

    // project configurations
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            distVersion: {
                options: {
                    banner: "/*! dyCacheJS | Author: Yusuf Shakeel | GitHub Link: https://github.com/yusufshakeel/dyCacheJS | MIT license | Copyright (c) 2018 Yusuf Shakeel | Date: 2016-12-27 Tuesday | Build: <%= grunt.template.today(\"yyyy-mm-dd HH:MM:ss\") %> */",
                    mangle: true
                },
                files: {
                    'dist/js/dyCache.min.js': [
                        'src/ts/dyCache.js'
                    ]
                }
            }
        }

    });

    // load plugin
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // create default task
    grunt.registerTask("default", ["uglify:distVersion"]);

};