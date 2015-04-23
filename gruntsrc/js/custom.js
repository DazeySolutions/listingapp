var appDependencies = ['ui.router', 'toaster', 'ngAnimate', 'ngLodash', 'restangular'];
var ngListApp = angular.module("ngListApp", appDependencies);

angular.isUndefinedOrNull = function undefinedOrNull(value){
    return angular.isUndefined(value) || value === null;
};
angular.isUndefinedOrNullOrEmpty = function undefinedOrNull(value){
    return angular.isUndefined(value) || value === null || value === "";
};
ngListApp.filter('to_trusted', ['$sce', function($sce){
        return function(text) {
            return $sce.trustAsHtml(text);
        };
    }]);
ngListApp.config(function(RestangularProvider) {
    RestangularProvider.setBaseUrl('/rest');
});
ngListApp.run(function($rootScope, $state, Auth){
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
        if(!Auth.isLoggedIn() && toState.name !== 'login'){
            event.preventDefault();
            $state.go('login');
        }
    });
})
.factory('Auth', function(){
    var user;
    return {
        setUser : function(aUser){
            user = aUser;
        },
        isLoggedIn : function(){
            return (user)?user:false;
        }
    }
})
.controller('LoginController', ['$scope', 'Auth', 'Restangular','$state', function($scope, Auth, Restangular, $state){
    $scope.userName = '';
    $scope.password = '';
    $scope.login = function login(){
        Restangular.all('users/login').post({user:$scope.userName, password:$scope.password}).then(function(data){
           Auth.setUser({'loggedIn':true});
           $state.go('default');
        });
    };
}]);

/**
* UI ROUTER CONFIG FILE
* router.js
*/
ngListApp.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider){
   
    $urlRouterProvider.when('',['$state', function($state){
        $state.go('default');
    }]);
    $urlRouterProvider.when('/',['$state', function($state){
        $state.go('default');
    }]);
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('default', {
            url:'/',
            templateUrl: 'partials/home.html',
            controller: 'HomePageController'
        })
        .state('login',{
            url:'/login',
            templateUrl: 'partials/login.html',
            controller: 'LoginController'
        })
        .state('list', {
            url:'/list',
            templateUrl: 'partials/list.html',
            controller: 'ListMainController'
        })
        .state('list.new',{
            url:'/list/new',
            templateUrl: 'partials/list/new.html',
            controller: 'NewListController'
        })
        .state('list.unsold',{
            url:'/list/unsold',
            templateUrl: 'partials/list/unsold.html',
            controller: 'UnsoldListController'
        })
        .state('list.saved',{
            url:'/list/saved',
            templateUrl: 'partials/list/saved.html',
            controller: 'SavedListController'
        });
}] );
ngListApp.config(['$locationProvider', function($locationProvider){
    $locationProvider.html5Mode(true);
}]);

/**
* CONTROLLERS FILE
* controllers.js
*/
ngListApp.controller('SiteController', ['$scope', 'toaster', '$window', '$http', '$stateParams', '$state', function ($scope, toaster, $window, $http, $stateParams, $state){
    $scope.init = function init(){

    };
    $scope.init();
}]);
ngListApp.controller('HomePageController', ['$scope', '$http', '$stateParams', '$window','lodash', '$timeout', function($scope, $http, $stateParams, $window, lodash, $timeout){
    $scope.init =  function init(){
       
    };
    $scope.init();
}]);
