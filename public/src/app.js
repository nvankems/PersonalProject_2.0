angular.module('WutPlay', ['ui.router'])

    .config(function($urlRouterProvider, $stateProvider) {

        $urlRouterProvider.otherwise( '/' );

        $stateProvider
            .state( 'home' , {
                url        : '/' ,
                templateUrl: '../templates/home.html' ,
                controller : 'mainCtrl'
            })
            .state( 'results', {
                url         : '/games',
                templateUrl : '../templates/results.html',
                controller  : 'resultsCtrl'
            })
    });