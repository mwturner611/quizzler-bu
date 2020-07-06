// const usersController = require('../../controllers/usersController');
const User = require('../../models/User');

module.exports = (app) => {
	// Get all users
	app.get('/users', (req, res) => {
		User.find()
			.then((users) => res.json(users))
			.catch((err) => console.log(err));
	});
	// Get one user by id
	app.get('/:id', (req, res) => {
		User.findById(req.params.id)
		.then(user => res.json(user))
		.catch(err => console.log(err));
	});

	app.post('/users', (req, res) => {
		User.create(req.body)
		.then(user => res.json(user))
		.catch(err => console.log(err));
	});

	app.put('/decks/:id', (req, res) => {
		User.findOneAndUpdate({ _id: req.params.id }, {decks: req.body})
		.then(newDeck => res.json(newDeck))
		.catch(err => console.log(err));
	});

	app.put('/cards/:id', (req, res) => {
		User.findOneAndUpdate({ _id: req.params.id }, 
		{
			decks: 
			[{
				cards: req.body
			}]
		})
		.then(newDeck => res.json(newDeck))
		.catch(err => console.log(err));
	});
};