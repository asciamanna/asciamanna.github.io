app.controller('mainController', function($scope, $http) {
    $scope.topArtists = [];
    $scope.recentTracks = [];
    $scope.showRecentTracks = true;
    $scope.showTopArtists = false;
    $scope.hideRecentTracks = false;
    $scope.hideTopArtists = true;
    $scope.recentTracksActive = true;
    $scope.topArtistsActive = false;

    $scope.getRecentTracks = function() {
        $http.jsonp('http://listeningto.apphb.com/api/recenttracks?callback=JSON_CALLBACK')
            .success(function(data) {
                $scope.recentTracks.length = 0;
                angular.forEach(data, function(track, index) {
		    track.IsNowPlaying = track.LastPlayed === 'Now Playing';
                    $scope.recentTracks.push(track);
                });
                $scope.showRecentTrakcs = true;
                $scope.showTopArtists = false;
                $scope.hideRecentTracks = false;
                $scope.hideTopArtists = true;
                $scope.recentTracksActive = true; 
                $scope.topArtistsActive = false;
            })
            .error(function(error) {
            });
    };


    $scope.getTopArtists = function() {
        $http.jsonp('http://listeningto.apphb.com/api/topArtists?callback=JSON_CALLBACK')
            .success(function(data) {
                $scope.topArtists.length = 0;
                angular.forEach(data, function(artist, index) {
                    $scope.topArtists.push(artist);
                });
                $scope.showRecentTrakcs = false;
                $scope.showTopArtists = true;
                $scope.hideRecentTracks = true;
                $scope.hideTopArtists = false;
                $scope.recentTracksActive = false;
                $scope.topArtistsActive = true; 
            })
            .error(function(error) {
            });
    };
});
