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


function GoodreadsController($scope, $http) {
   $scope.currentBooks = [];
   $scope.readBooks = [];
   $scope.displayData = {
      showCurrentBooks: true,
      showReadBooks: false,
      connectError: false,
      hideSpinner: true
   };
   $scope.readThisYear = 0;
   $scope.readLastYear = 0;
   $scope.currentYear = new Date().toLocaleString('en-US', { year: 'numeric', timeZone: 'America/New_York' });
   $scope.lastYear = Number($scope.currentYear) - 1;

   $scope.getCurrentBooks = function(currentBooks, displayData) {
       displayData.hideSpinner = false;
       $http.get('https://goodreads-scraper-app-7faef6ed56fd.herokuapp.com/current_books')
           .success(function(data) {
               currentBooks.length = 0;
               angular.forEach(data.current_books, function(book, index) {
                   currentBooks.push(book);
               });
               displayData.showCurrentBooks = true;
               displayData.showReadBooks = false;
               displayData.connectError = false;
               displayData.hideSpinner = true;
            })
            .error(function(error) {
               console.log("ERROR: failed to get current books");
               displayData.connectError = true;
               displayData.hideSpinner = true;
            });
   };   

   $scope.getReadBooks = function(readBooks, displayData) {
      displayData.hideSpinner = false;
      $http.get('https://goodreads-scraper-app-7faef6ed56fd.herokuapp.com/read_books')
          .success(function(data) {
            console.log("READ BOOKS: " + data.read_books)
             readBooks.length = 0;
             angular.forEach(data.read_books, function(book, index) {
                readBooks.push(book);
             });
             displayData.showCurrentBooks = false;
             displayData.showReadBooks = true;
             displayData.connectError = false;
             displayData.hideSpinner = true;
           })
           .error(function(error) {
              console.log("ERROR: failed to get read books");
              displayData.connectError = true;
              displayData.hideSpinner = true;
           });
   };

   $scope.getThisYearsReadCount = function(displayData) {

      $http.get('https://goodreads-scraper-app-7faef6ed56fd.herokuapp.com/books_read_count/'+ $scope.currentYear) 
         .success(function(data) {
             $scope.readThisYear = data.books_read_count;
         });
   };

   $scope.getLastYearsReadCount = function(displayData) {

      $http.get('https://goodreads-scraper-app-7faef6ed56fd.herokuapp.com/books_read_count/'+ $scope.lastYear) 
         .success(function(data) {
             $scope.readLastYear = data.books_read_count;
         });
   };

  $scope.initBooks = function(currentBooks, displayData) {
     $scope.getCurrentBooks(currentBooks, displayData);
     $scope.getThisYearsReadCount(displayData);
     $scope.getLastYearsReadCount(displayData);
  };
};

