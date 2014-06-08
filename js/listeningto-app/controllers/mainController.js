app.controller('mainController', function($scope, $http) {
    $scope.topArtists = [];
    $scope.recentTracks = [];
    $scope.showRecentTracks = true;
    $scope.showTopArtists = false;
    $scope.recentTracksActive = true;
    $scope.topArtistsActive = false;
    $scope.connectError = false;

    $scope.getRecentTracks = function() {
        $http.jsonp('http://listeningto.apphb.com/api/recenttracks?callback=JSON_CALLBACK')
            .success(function(data) {
                $scope.recentTracks.length = 0;
                angular.forEach(data, function(track, index) {
		    track.IsNowPlaying = track.LastPlayed === 'Now Playing';
		    if(!track.AlbumArtLocation) {
			track.AlbumArtLocation = '/images/No_Cover.gif';
		    }		
                    $scope.recentTracks.push(track);
                });
                $scope.showRecentTracks = true;
                $scope.showTopArtists = false;
                $scope.recentTracksActive = true; 
                $scope.topArtistsActive = false;
		$scope.connectError = false;
            })
            .error(function(error) {
		$scope.connectError = true;
            });
    };


    $scope.getTopArtists = function() {
        $http.jsonp('http://listeningto.apphb.com/api/topArtists?callback=JSON_CALLBACK')
            .success(function(data) {
                $scope.topArtists.length = 0;
                angular.forEach(data, function(artist, index) {
                    $scope.topArtists.push(artist);
                });
                $scope.showRecentTracks = false;
                $scope.showTopArtists = true;
                $scope.recentTracksActive = false;
                $scope.topArtistsActive = true; 
		$scope.connectError = false;
            })
            .error(function(error) {
		$scope.connectError = true;
            });
    };
});
