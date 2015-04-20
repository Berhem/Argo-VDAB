angular.module('starter.services', [])

.factory('Api', function($http, $q, ApiEndPoint) {

        console.log('ApiEndPoint', ApiEndPoint)

        //$http.defaults.headers.common.Authorization = 'Bearer HA8PY7UFsExsV5xfmR2UZCOIT4Ea'qRjrz69MCWV2m83VfwiTpLxaFpYa
        $http.defaults.headers.common.Authorization = 'Bearer {qRjrz69MCWV2m83VfwiTpLxaFpYa}'
        var getApiData = function(){
            var q = $q.defer();

            var config ={
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Http-request-method': 'POST',

                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'POST'


                }};

            $http.get(ApiEndPoint.url, config)
                .success(function(data) {
                    console.log('Got some data: ', data)
                    q.resolve(data);
                })
                .error(function(error) {
                    console.log('Had an error',error)
                    q.reject(error);
                })
            return q.promise;
        }

        return {
            getApiData: getApiData
        };
})

    .factory('Profile', function(){
        var profile = [{
            id:0,
            name: 'Marty Mcfly',
            level: 'Level 1',
            face: '../img/mcfly.jpg',
            adres: {
                id:0,
                straat: 'HillDaleStraat 45',
                postcode: '1000',
                gemeente: 'HillVally'
            },
            telefoon: '555-123456',
            ervaringen :[{
                id:0,
                titel: 'Tijdrijder',
                duur: '3 Jaar',
                nota: 'Samen met doc naar het verleden en naar de toekomst'
                }, {
                id: 1,
                titel: 'Rockstar',
                duur: '1 Jaar',
                nota: 'Johny B.Goode uitgevonden tijdens de schoolbal'
            }]

        }]

        return {
            get: function(profileId) {
                for (var i = 0; i < profile.length; i++) {
                    if (profile[i].id === parseInt(profileId)) {
                        return profile[i];
                    }
                }
                return null;
            }
        };
    })

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Andrew Jostlin',
    lastText: 'Did you get the ice cream?',
    face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
  }, {
    id: 3,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 4,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

.factory('Favs', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
    var favs = [{
        id: 0,
        title: 'Card 1',
        image: '../img/2000px-M_box.svg.png',
        vacPlacer: 'Microsoft',
        description: 'This is a Description'
    },{
        id: 1,
        title: 'Card 2',
        image: '../img/Cisco_logo.svg',
        vacPlacer: 'Cisco',
        description: 'This is a Description'
    },{
        id: 2,
        title: 'Card 3',
        image: '../img/ibm-logo-3-620x350.jpg',
        vacPlacer: 'IBM',
        description: 'This is a Description'
    },{
        id: 3,
        title: 'Card 4',
        image: '../img/Apple_logo_black.svg.png',
        vacPlacer: 'Apple',
        description: 'This is a Description'
    },{
        id: 4,
        title: 'Card 5',
        image: '../img/favicon.png',
        vacPlacer: 'Google',
        description: 'This is a Description'
    }
    ];

  return {
    all: function() {
      return favs;

        //Get Alle Localstorage from interest
        var projectString = window.localStorage['interests'];
        if(projectString){
            return angular.fromJson(projectString);
        }
        return[];
    },
    save: function(interests){

        window.localStorage['interests'] = angular.toJson(interests);
    },
    new: function(projectTitle){
        //add a new Interests
        return{
            title: projectTitle,
            tasks: []
        };
    },
      /*
    getLastActiveIndex: function(){
        return.parseInt(window.localStorage['lastActiveInterest']) ;

    },
    setLastActiveindex: function(){
        window.localStorage['lastActiveInterest'] = index;

    },*/
    remove: function(fav) {
      favs.splice(favs.indexOf(fav), 1);
    },
    get: function(favId) {
      for (var i = 0; i < favs.length; i++) {
        if (favs[i].id === parseInt(favId)) {
          return favs[i];
        }
      }
      return null;
    }
  };
});