var searchCtrl = require('./searchCtrl'),
    parser = require('steam-store-parser'),
    steamStore = require('steam-store');

module.exports = function (app) {
    
    app.route('/api/getGames')
        .get(function(req, res) {

            var params = {
                tags: [
                    req.query.tags
                ],
                os: [
                    req.query.os
                ],
                playerAmount: [
                    req.query.players
                ],
                gamesOnly: true
            };

            var priceRange = req.query.price.split('-');
            
            parser(params, function(err, list){
                if(err){ console.log(err); }

                var app = Math.floor(Math.random() * (100 + 1));
                
                var store = new steamStore();


                var gameToPlay = list[app].steamappId;

                store.steam( 'appDetails' , gameToPlay ).then( function ( results ) {

                        return res.send( results );

                });


        })
        })

    
};