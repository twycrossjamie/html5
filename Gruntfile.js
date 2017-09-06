module.exports = function(grunt) {
    //configure main project settings 
    grunt.initConfig({
        //basic settings and info about our plugins
        pkg: grunt.file.readJSON('package.json'),
        
        //name of plugin (plugin name without the "grunt-contrib-")
        
        cssmin: {
            files: {
                'html5/styles.css': ['html5/styles.css']
            }
        ,
             //name of plugin (plugin name without the "grunt-contrib-")
        /* INSERT AN UGLIFY PLUGIN TO MIN THE JAVASCRIPT FILE
        uglify: {
            dist: {
                'html5/example.min.js.': ['html5/example.js']
            }
        }*/
        
    });
    
    //load the plug in 
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //do the task 
    grunt.registerTask('default', ['cssmin', 'uglify']);
};
