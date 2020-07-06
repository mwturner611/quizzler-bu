// const usersController = require('../../controllers/usersController');
const User = require('../../models/User');

module.exports = (app) => {
	// Get all users
	app.get('/api/users', (req, res) => {
		User.find()
			.then((users) => res.json(users))
			.catch((err) => console.log(err));
	});
	// Get one user by id
	app.get('/api/:id', (req, res) => {
		User.findById(req.params.id)
		.then(user => res.json(user))
		.catch(err => console.log(err));
	});

	app.post('/api/users', (req, res) => {
		User.create(req.body)
		.then(user => res.json(user))
		.catch(err => console.log(err));
	});
};