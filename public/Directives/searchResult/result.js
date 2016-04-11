angular.module('WutPlay').directive('searchResult', function () {
    
    return {
        restrict: 'EA',
        templateUrl: './resultDirective.html',
        controller: function ($scope, mainSrv) {
            $scope.game = mainSrv.getGames();
        }
    }
    
});