module.exports = {
    options: {
        separator: ';',
    },
    dist: {
        src: ['bower_components/jquery/dist/jquery.js',  
              'bower_components/bootstrap/dist/js/bootstrap.js', 
              'bower_components/angular/angular.js', 
              'bower_components/angular-ui-router/release/angular-ui-router.js',  
              'bower_components/angular-animate/angular-animate.js', 
              'bower_components/restangular/dist/restangular.js',
              'bower_components/angularjs-toaster/toaster.js',
              'bower_components/lodash/lodash.js',
              'bower_components/angular-strap/dist/angular-strap.js',
              'bower_components/angular-strap/dist/angular-strap.tpl.js',
              'bower_components/ng-table/dist/ng-table.js',
              'bower_components/ng-lodash/build/ng-lodash.js'],
      dest: 'src/main/webapp/js/dependencies.min.js',
    },
    basic: {
      src: ['gruntsrc/js/custom.js'],
      dest: 'src/main/webapp/js/custom.min.js',
    }
};
