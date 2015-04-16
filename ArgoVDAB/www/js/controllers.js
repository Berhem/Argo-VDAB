angular.module('starter.controllers', [])

.controller ('ConnectionCtrl', function($scope, Api){

    $scope.data = null;
    Api.getApiData()
        .then(function(result){
            $scope.data = result.data;
        })
})

.controller('DashCtrl', function($scope) {


})

.controller('ProfileDetailCtrl', function($scope, $stateParams, Profile) {
    $scope.profileDetail = Profile.get($stateParams.profileId);
})

.controller('FavsCtrl', function($scope, Favs) {
    $scope.favs = Favs.all();
    $scope.remove = function(fav){
        Favs.remove(fav);
    }

})

.controller('FavDetailCtrl', function($scope, $stateParams, Favs) {
    $scope.fav = Favs.get($stateParams.favId)
})

.controller('MapCtrl', function($scope, $ionicLoading) {
    $scope.mapCreated = function(map){
        $scope.map = map;
    };
    
    $scope.centerOnMe = function(){
        console.log("Centering");
        if (!$scope.map){
            return;
        }
        
        $scope.loading = $ionicLoading.show({
            content: 'Getting Current location..',
            showBackDrop: false
        });
        
        navigator.geolocation.getCurentPosition(function(pos){
            console.log('Got Pos', pos);
            $scope.map.setCenter(new google.maps.Latlng(pos.coords.latitude, pos.coords.longitude));
            $scope.loading.hide();
        }, function(error){
            alert('Unable to get location: ' +error.message);
        });
    };

})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('SettingCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
