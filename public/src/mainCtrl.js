angular.module('WutPlay').controller('mainCtrl', function($scope, $rootScope, mainSrv, $state) {
    // setInterval(function () {
    //     console.log($scope.genre)
    // }, 2000);

    $scope.getGames = function(params) {
        params.genre = params.genre.toLowerCase();
        
        console.log("Hello world!");
        
        mainSrv.getGames(params).then(function(res) {
            
            $rootScope.gameList = res;
            console.log(res);
            $state.go('results');
        })


    }
    
});