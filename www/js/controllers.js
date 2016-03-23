angular.module('gooeyApp.controllers', [])
.constant('NUTRITIONIX_APP_ID', '16886103')
.constant('NUTRITIONIX_APP_KEY', 'f48a6931988afceffa7536fb40b20497')

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, $location) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.linkTo = function ( path ) {
    $location.path( path );
  };

  //$scope.chats = Chats.all();
  //$scope.remove = function(chat) {
  //  Chats.remove(chat);
  //};
})
controller('SummaryCtrl', function($scope, $location) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.linkTo = function ( path ) {
    $location.path( path );
  };

  //$scope.chats = Chats.all();
  //$scope.remove = function(chat) {
  //  Chats.remove(chat);
  //};
})
.controller('AccountCtrl', function($scope, Representatives) {
  $scope.settings = {
    enableFriends: true
  };

  $scope.findFood = function(item) {
//TODO acces API with userInput
  console.log(item)
  Representatives.makeNutritionCall(item).then(function(response) {
      $scope.items = response.data["hits"];
      // console.log('GOT CURRENT', $scope.representatives);
      // debugger;
    }, function(error) {
      // alert('Unable to get politicians');
      console.error(error);
    });
  }
});

// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
//setup angular
var app = angular.module('Gooey2', ['ionic', 'LocalStorageModule']);

app.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

            // Don't remove this line unless you know what you are doing. It stops the viewport
            // from snapping when text inputs are focused. Ionic handles this internally for
            // a much nicer keyboard experience.
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
});

app.config(function (localStorageServiceProvider) {
    localStorageServiceProvider
      .setPrefix('scotch-todo');
  });

app.controller('main', function ($scope, $ionicModal, localStorageService) { //store the entities name in a variable var taskData = 'task';

var taskData = 'task';

//initialize the tasks scope with empty array
$scope.tasks = [];

//initialize the task scope with empty object
$scope.task = {};

//configure the ionic modal before use
  $ionicModal.fromTemplateUrl('new-task-modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
  }).then(function (modal) {
      $scope.newTaskModal = modal;
  });

$scope.getTasks = function () {
          //fetches task from local storage
          if (localStorageService.get(taskData)) {
              $scope.tasks = localStorageService.get(taskData);
          } else {
              $scope.tasks = [];
          }
   }

$scope.createTask = function () {
          //creates a new task
          $scope.tasks.push($scope.task);
          localStorageService.set(taskData, $scope.tasks);
          $scope.task = {};
          //close new task modal
          $scope.newTaskModal.hide();
   }

$scope.removeTask = function (index) {
          //removes a task
          $scope.tasks.splice(index, 1);
          localStorageService.set(taskData, $scope.tasks);
     }

$scope.completeTask = function (index) { 
 //updates a task as completed 
 if (index !== -1) {
  $scope.tasks[index].completed = true; 
 } 

  localStorageService.set(taskData, $scope.tasks); 
}

$scope.openTaskModal = function () {
        $scope.newTaskModal.show();
    };

$scope.closeTaskModal = function () {
        $scope.newTaskModal.hide();
    };

})