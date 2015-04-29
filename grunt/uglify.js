module.exports = {
    all: {
        files: [{
            expand: true,
            cwd: 'gruntsrc/js',
            src: '**/*.js',
            dest: 'src/main/webapp/js',
            ext: '.min.js'
        }]
    },
    depend: {
        files : {
            'src/main/webapp/js/dependencies.min.js': [ 'bower_components/jquery/dist/jquery.js',  
                                             'bower_components/angular/angular.js', 
                                             'bower_components/angular-ui-router/release/angular-ui-router.js',  
                                             'bower_components/bootstrap/dist/js/bootstrap.js', 
                                             'bower_components/angular-animate/angular-animate.js', 
                                             'bower_components/angularjs-toaster/toaster.js',
                                             'bower_components/ng-lodash/build/ng-lodash.js']                                             
        }
    }
};
