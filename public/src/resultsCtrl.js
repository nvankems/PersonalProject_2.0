angular.module('WutPlay').controller('resultsCtrl', function($scope, $rootScope, $state) {
    
    $scope.game = $rootScope.gameList;
    console.log($scope.game);
    $scope.price = $scope.game.data.price_overview.final / 100;
    
    $scope.home = function () {
        $state.go('home');
    }
    
});