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
    var observerCallbacks = [];

  this.registerObserverCallback = function(callback){
    observerCallbacks.push(callback);
  };

  var notifyObservers = function(){
    angular.forEach(observerCallbacks, function(callback){
      callback();
    });
  };
  this.setUser = function(aUser){
            user = aUser;
            notifyObservers();
        };
    this.isLoggedIn = function(){
            return (user)?user:false;
        };
    var user;
    return this;
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
}])
.controller('LogoutController', ['$scope', 'Auth', 'Restangular','$state', function($scope, Auth, Restangular, $state){
    $scope.logout = function logout(){
        Auth.setUser(undefined);
        $state.go('login');
    };
    $scope.logout();
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
        .state('logout',{
            url:'/logout',
            templateUrl: 'partials/logout.html',
            controller: 'LogoutController'
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

/**
* CONTROLLERS FILE
* controllers.js
*/
ngListApp.controller('SiteController', ['$scope', 'toaster', '$window', '$http', '$stateParams', '$state', 'Auth', function ($scope, toaster, $window, $http, $stateParams, $state, Auth){
    $scope.loggedin = false;
    $scope.user = {};
    $scope.init = function init(){
        $scope.loggedin = Auth.isLoggedIn()? true : false;
        $scope.user = Auth.isLoggedIn();
    };
    Auth.registerObserverCallback($scope.init);
    $scope.init();
}]);
ngListApp.controller('HomePageController', ['$scope', '$http', '$stateParams', '$window','lodash', '$timeout', function($scope, $http, $stateParams, $window, lodash, $timeout){
    $scope.init =  function init(){
       
    };
    $scope.init();
}]);
ngListApp.controller('SavedListController', ['$scope', '$http', '$stateParams', '$window','lodash', '$timeout', function($scope, $http, $stateParams, $window, lodash, $timeout){
    $scope.init =  function init(){
       
    };
    $scope.init();
}]);
ngListApp.controller('UnsoldListController', ['$scope', '$http', '$stateParams', '$window','lodash', '$timeout', function($scope, $http, $stateParams, $window, lodash, $timeout){
    $scope.init =  function init(){
       
    };
    $scope.init();
}]);
ngListApp.controller('NewListController', ['$scope', '$http', '$stateParams', '$window','lodash', '$timeout', function($scope, $http, $stateParams, $window, lodash, $timeout){
    $scope.init =  function init(){
       
    };
    $scope.init();
}]);

ngListApp.controller('ListMainController', ['$scope', '$http', '$stateParams', '$window','lodash', '$timeout', function($scope, $http, $stateParams, $window, lodash, $timeout){
    $scope.init =  function init(){
       
    };
    $scope.init();
}]);
