angular.module('WutPlay').controller('mainCtrl', function($scope, $rootScope, mainSrv, $state) {
    // setInterval(function () {
    //     console.log($scope.params.price)
    // }, 2000);

    $scope.getGames = function(params) {
        params.genre = params.genre.toLowerCase();
        $state.go('snake');
        
        
        mainSrv.getGames(params).then(function(res) {
            
            $rootScope.gameList = res;
            
            $state.go('results');
        })


    }
    
});