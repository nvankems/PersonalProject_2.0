angular.module('WutPlay').service('mainSrv', function($http, $q) {

    var bUrl = 'http://localhost:9115/api/getGames';

    this.getGames = function (params) {
        var dfd = $q.defer();
        
        
        
        $http.get(bUrl + '?tags=' + params.genre + '&os=' + params.os + '&players=' + params.players + '&price=' + params.price)
            .then(function(res, err) {
                
                if (err) {
                    dfd.reject(err);
                }

                
                dfd.resolve(res);
                
                
                
            });
        
        // console.log($http.get('http://localhost:9115/api/getGames?tags=platformer&os=windows&players=multiplayer'));
        return dfd.promise;
    }
    
});