app.controller('mainController', function($scope, $http) {
    $scope.topArtists = [];
    $scope.recentTracks = [];
    $scope.showRecentTracks = true;
    $scope.showTopArtists = false;
    $scope.hideRecentTracks = false;
    $scope.hideTopArtists = true;
    $scope.recentTracksActive="active";
    $scope.topArtistsActive="";

    $scope.getRecentTracks = function() {
        $http.jsonp('http://listeningto.apphb.com/api/recenttracks?callback=JSON_CALLBACK')
            .success(function(data) {
                $scope.recentTracks.length = 0;
                angular.forEach(data, function(track, index) {
		    track.nowPlayingClass = track.LastPlayed === "Now Playing" ? "nowplaying" : "";
                    $scope.recentTracks.push(track);
                });
                $scope.showRecentTrakcs = true;
                $scope.showTopArtists = false;
                $scope.hideRecentTracks = false;
                $scope.hideTopArtists = true;
                $scope.recentTracksActive = "active";
                $scope.topArtistsActive = "";
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
                $scope.recentTracksActive = "";
                $scope.topArtistsActive = "active";
            })
            .error(function(error) {
            });
    };
});
