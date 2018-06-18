var path = require('path')
var BeerController = require('./beer/controllers/BeerController');

class Router {
	setupRouters (app) {
		var beerController = new BeerController();
		app.get('/api/beers', function (req, res) { 
			beerController.getAll(req, res); 
		});
		app.get('/api/beers/:id', function (req, res) { 
			beerController.getById(req, res); 
		});
		app.post('/api/beers', function (req, res) { 
			beerController.insert(req, res); 
		});
		app.patch('/api/beers', function (req, res) { 
			beerController.update(req, res); 
		});
		app.delete('/api/beers/:id', function (req, res) { 
			beerController.delete(req, res); 
		});

		app.get('*', function(req, res) {
			res.sendfile(path.resolve('src/index.html'));
		});
	}
}
module.exports = Router;