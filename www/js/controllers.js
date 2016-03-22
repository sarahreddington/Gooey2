angular.module('gooeyApp.controllers', [])
.constant('NUTRITIONIX_APP_ID', '16886103')
.constant('NUTRITIONIX_APP_KEY', 'f48a6931988afceffa7536fb40b20497')

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
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