var app = angular.module('ListeningToApp', ['ngAnimate']);

function MainController($scope, $http) {
    $scope.topArtists = [];
    $scope.recentTracks = [];
    $scope.topAlbums = [];
    $scope.playedToday = 0;
    $scope.today = new Date().toLocaleString('en-US', { timeZone: 'America/New_York', weekday:'long', year:'numeric', month:'long', day:'numeric'});
    $scope.displayData = {
       showRecentTracks: true,
       showTopArtists: false,
       showTopAlbums: false,
       connectError: false,
       hideSpinner: true
    };

    $scope.getRecentTracks = function(recentTracks, displayData) {
        displayData.hideSpinner = false;
        $http.get('https://music-stats.herokuapp.com/musicstats/recenttracks')
            .success(function(data) {
                recentTracks.length = 0;
                angular.forEach(data.items, function(track, index) {
                    track.IsNowPlaying = track.lastPlayed === "Now Playing";
                    if(!track.albumArtLocation) {
                        track.albumArtLocation = "/img/no-image-available.png";
                    }
                    recentTracks.push(track);
                });
                displayData.showRecentTracks = true;
                displayData.showTopArtists = false;
                displayData.showTopAlbums = false;
                displayData.connectError = false;
                displayData.hideSpinner = true;
             })
             .error(function(error) {
                displayData.connectError = true;
                displayData.hideSpinner = true;
             });
    };   

    $scope.getTopArtists = function(topArtists, displayData) {
       displayData.hideSpinner = false;
       $http.get('https://music-stats.herokuapp.com/musicstats/topartists')
           .success(function(data) {
              topArtists.length = 0;
              angular.forEach(data.items, function(artist, index) {
                 topArtists.push(artist);
              });
              displayData.showRecentTracks = false;
              displayData.showTopArtists = true;
              displayData.showTopAlbums = false;
              displayData.connectError = false;
              displayData.hideSpinner = true;
            })
            .error(function(error) {
               displayData.connectError = true;
               displayData.hideSpinner = true;
            });
    };

    $scope.getTopAlbums = function(topAlbums, displayData) {
      displayData.hideSpinner = false;
      $http.get('https://music-stats.herokuapp.com/musicstats/topalbums')
          .success(function(data) {
             topAlbums.length = 0;
             angular.forEach(data.items, function(album, index) {
               if(!album.albumUrl) {
                  album.albumUrl = "/img/no-image-available.png";
              }
                topAlbums.push(album);
             });
             displayData.showRecentTracks = false;
             displayData.showTopArtists = false;
             displayData.showTopAlbums = true;
             displayData.connectError = false;
             displayData.hideSpinner = true;
           })
           .error(function(error) {
              displayData.connectError = true;
              displayData.hideSpinner = true;
           });
   };

   $scope.getTodaysPlayCount = function(displayData) {
      $http.get('https://music-stats.herokuapp.com/musicstats/recenttracks/playcount/today')
         .success(function(data){
            $scope.playedToday = data;
            today = new Date().toLocaleString('en-US', { timeZone: 'America/New_York', weekday:'long', year:'numeric', month:'long', day:'numeric'});
         })
         .error(function(error) {
            displayData.connectError = true;
            displayData.hideSpinner = true;
         });
   };

   $scope.init = function(recentTracks, displayData) {
      $scope.getRecentTracks(recentTracks, displayData);
      $scope.getTodaysPlayCount(displayData);
   }
}
