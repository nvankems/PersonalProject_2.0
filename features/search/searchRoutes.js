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

            parser(params, function(err, list){
                if(err){ console.log(err); }

                var app = Math.floor(Math.random() * (100 + 1));

                
            // console.log(list);
            // console.log("total nb: " + list.length);

            res.send( list );
        })
        })

    
}