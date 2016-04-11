var  express = require('express'),
	 app = express(),
	 bodyParser = require('body-parser'),
	 mongoose = require('mongoose'),
	 session = require('express-session'),
	 cors = require('cors'),
	 port = 9115,
	 corsOptions = {
        origin: 'http://localhost:' + port
     },
     mongoUri = 'mongodb://localhost:27017/wutplay',
	 SteamStore = require('steam-store');

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
        console.log('Connected to MongoDB at ' + mongoUri);
   });

require('./features/search/searchRoutes.js')(app);

// var store = new SteamStore();
//
// var searchTerm = 'Creed';



// store.steam('storeSearch', 'Job Simulator').then(function (results) {
// 	results = results.map(function (result) {
// 		return result.id;
// 	});
// 	store.getProductsDetails(results).then(function (details) {
// 		for (var i = 0; i < details.length; i++) {
//             console.log(details);
//         }
//		
// 	});
// });

// var parser = require('steam-store-parser');
//
// var params = {
//     tags: [
//         'platformer'
//     ],
//     os: [
//         'windows'
//     ],
//     playerAmount: [
//         'singleplayer'
//     ],
//     gamesOnly: true
// };
//
// parser(params, function(err, list){
//     if(err){ console.log(err); }
//
//     console.log(list);
//     console.log("total nb: " + list.length);
// });

app.listen(port, function() {
	console.log('Listening on ' + port);
});