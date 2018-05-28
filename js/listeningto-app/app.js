var app = angular.module('ListeningToApp', ['ngAnimate']);

function MainController($scope, $http) {
    $scope.topArtists = [];
    $scope.recentTracks = [];
    $scope.displayData = {
       showRecentTracks: true,
       connectError: false,
       hideSpinner: true
    };

    $scope.getRecentTracks = function(recentTracks, displayData) {
        displayData.hideSpinner = false;
        $http.jsonp('https://listeningto.apphb.com/api/recenttracks?callback=JSON_CALLBACK')
            .success(function(data) {
                recentTracks.length = 0;
                angular.forEach(data, function(track, index) {
                    track.IsNowPlaying = track.LastPlayed === "Now Playing";
                    if(!track.AlbumArtLocation) {
                        track.AlbumArtLocation = "/img/no-image-available.png";
                    }
                    recentTracks.push(track);
                });
                displayData.showRecentTracks = true;
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
       $http.jsonp('https://listeningto.apphb.com/api/topArtists?callback=JSON_CALLBACK')
           .success(function(data) {
              topArtists.length = 0;
              angular.forEach(data, function(artist, index) {
                 topArtists.push(artist);
              });
              displayData.showRecentTracks = false;
              displayData.connectError = false;
              displayData.hideSpinner = true;
            })
            .error(function(error) {
               dispayData.connectError = true;
               displayData.hideSpinner = true;
            });
    };
}
