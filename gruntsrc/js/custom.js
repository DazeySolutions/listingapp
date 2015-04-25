var appDependencies = ['ui.router', 'toaster', 'ngAnimate', 'ngLodash', 'restangular', 'ngTable'];
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
           Auth.setUser(data);
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
            url:'/new',
            templateUrl: 'partials/list/new.html',
            controller: 'NewListController'
        })
        .state('list.unsold',{
            url:'/unsold',
            templateUrl: 'partials/list/unsold.html',
            controller: 'UnsoldListController'
        })
        .state('list.saved',{
            url:'/saved',
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
ngListApp.controller('UnsoldListController', ['$scope', '$http', '$stateParams', '$window','lodash', '$timeout','ngTableParams', 'Restangular', function($scope, $http, $stateParams, $window, lodash, $timeout, ngTableParams, Restangular){
    $scope.selectedItem;
    $scope.edit = false;
    var page = 1;
    $scope.init =  function init(){
        $scope.rows = undefined;
        Restangular.one('ebay/'+page).get().then(function(res){
            $scope.rows = res.listings;
            $scope.tableParams.reload();
            $scope.getItemsDetails();
        });
    };
    $scope.nextPage = function nextPage(){
        page++;
        $scope.init();
    };
    
    $scope.edit = function edit(ebayId){
        lodash.each($scope.row, function(currentItem){
            if(currentItem.ebayListingId === ebayId){
                $scope.selectedItem = currentItem;
                $scope.edit = true;
            }
        })
    };
    
    $scope.remove = function remove(ebayId){
        lodash.remove($scope.rows, function(currentItem){ return currentItem.ebayListingId === ebayId});
    };
    
    $scope.getItemsDetails = function getItemsDetails(itemid){
        lodash.each($scope.rows, function(item, index){
            $http.get('http://dazeysolutions.com/includes/amazonSearch.php',{
                params:{
                    ISBN: item.book.isbn
                }
            })
            .success(function(data){
                var as = data.payload[1][0].AttributeSets[0];
                var asin = data.payload[1][0].Identifiers.MarketplaceASIN.ASIN;
                item.book.asin = asin;
                item.book.author = as.Author;
                item.book.publishDate = as.PublicationDate;
                if(as.Binding === "Hardcover"){
                    item.book.hardcover = true;
                }
                var extra = 0.25;
                item.book.title = as.Title;
                if(!angular.isUndefinedOrNullOrEmpty(as.ItemDimensions)){
                    if(angular.isUndefinedOrNullOrEmpty(as.ItemDimensions.Weight)){
                        as.ItemDimensions.Weight = extra.toString();
                    }else{
                        as.ItemDimensions.Weight = parseFloat(as.ItemDimensions.Weight)+extra;
                        as.ItemDimensions.Weight = as.ItemDimensions.Weight.toString();
                    }
                    item.book.weightMajor = parseInt(as.ItemDimensions.Weight);
                    item.book.weigthMinor = Math.ceil((parseFloat(as.ItemDimensions.Weight)*16) % 16);
                    item.book.depth = as.ItemDimensions.Height;
                    item.book.height = as.ItemDimensions.Length;
                    item.book.width = as.ItemDimensions.Width;
                }
                var imageURL = as.SmallImage.URL.replace("SL75", "SL500")
                item.book.imageUrl = "http://dazeysolutions.com/images/"+asin+".jpg";
                $http.get("http://dazeysolutions.com/includes/get_image.php", {
                    params:{
                        imagename: asin+".jpg",
                        imageurl: imageURL
                    }
                })
                .success(function(data){
                   loadImage(item); 
                });
            });
        });
    };
    
    var loadImage = function loadImage(item) {
        var src = item.book.imageUrl;
        var img = new Image();
        img.setAttribute('crossOrigin', 'anonymous');
        img.onload = function() {
            var imageRatio = img.width / img.height,
                canvasRatio = 1000 / 690;
            if (imageRatio !== canvasRatio) {
                if ((1000 / imageRatio) > 690) {
                    img.width = 690 * imageRatio;
                    img.height = 690;
                } else {
                    img.width = 1000;
                    img.height = 1000 / imageRatio;
                }
            } else {
                img.width = 1000;
                img.height = 690;
            }
            var canvas = angular.element("<canvas height='690' width='1000'></canvas>");
            var context = canvas[0].getContext('2d');
            context.drawImage(img,((1000 / 2)-(img.width/2)), ((690 / 2)-(img.height/2)), img.width, img.height);
            var save = canvas[0].toDataURL("image/jpg");
            $http.post("http://dazeysolutions.com/includes/resize.php").post({
                fileName: item.book.asin + ".jpg",
                data: save
            }).success(function(data) {
                console.log(data.success);
            });
        };
        img.src = src;
    };
    
    $scope.rows;
    $scope.tableParams = new ngTableParams({
        page: 1,            // show first page
        count: 20           // count per page
    }, {
        counts: [],
        total: 0,
        getData: function($defer, params) {
               params.total(20);
               $defer.resolve($scope.rows);
           
        }
    });
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
