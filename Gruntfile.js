'use strict';

module.exports = function(grunt) {

    grunt.initConfig({
    uncss: {
        dist: {
            src: ['index.html'],
            dest: 'dist/css/tidy.css',
            options: {
                report: 'min' // optional: include to report savings
            }
        }
    },

    processhtml: {
        dist: {
            files: {
                'dist/email.html': ['index.html']
            }
        }
    },

    premailer: {
        main: {
            options: {
                verbose: true
            },
            files: {
                'dist/email-inline.html': ['dist/email.html']
            }
        }
    }
});


grunt.loadNpmTasks('grunt-uncss');
grunt.loadNpmTasks('grunt-processhtml');
grunt.loadNpmTasks('grunt-premailer');

grunt.registerTask('email', ['uncss', 'processhtml', 'premailer']);

};
