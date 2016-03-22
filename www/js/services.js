
var Representatives = function ($http, NUTRITIONIX_APP_ID, NUTRITIONIX_APP_KEY) {

// 'use strict';
//var getRepresentatives = ['$q', '$resource', '$http', 'NUTRITIONIX_APP_ID', 'NUTRITIONIX_APP_KEY', 
//function($q, $resource, $http, NUTRITIONIX_APP_ID, NUTRITIONIX_APP_KEY) {
var base_url = 'https://api.nutritionix.com/v1_1/search/'

return {
  makeNutritionCall: function(search_query) {
    var url = base_url + search_query + '?results=0:20&fields=item_name,brand_name,item_id,nf_calories&appId=' 
    + NUTRITIONIX_APP_ID + '&appKey=' + NUTRITIONIX_APP_KEY;

    console.log(search_query);
    console.log(url);
    return $http({
        method: 'get',
        url: url,
        responseType: "json"
    });
  }
};
}
//);

  // return {
  //   all: function() {
  //     return chats;
  //   },
  //   remove: function(chat) {
  //     chats.splice(chats.indexOf(chat), 1);
  //   },
  //   get: function(chatId) {
  //     for (var i = 0; i < chats.length; i++) {
  //       if (chats[i].id === parseInt(chatId)) {
  //         return chats[i];
  //       }
  //     }
  //     return null;
  //   }
  // };
// });
angular.module('gooeyApp.services', ['ionic'])
.factory('Representatives', ['$http',
  'NUTRITIONIX_APP_ID', 'NUTRITIONIX_APP_KEY', Representatives]);
