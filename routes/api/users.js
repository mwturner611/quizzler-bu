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
	app.get('/users/:id', (req, res) => {
		User.findById(req.params.id)
		.then(user => res.json(user))
		.catch(err => console.log(err));
	});

	// Route for creating new user
	app.post('/users', (req, res) => {
		User.create(req.body)
		.then(user => res.json(user))
		.catch(err => console.log(err));
	});

	// Route for updating user info
	app.put('/users/:id', (req, res) => {
		User.findOneAndUpdate({ _id: req.params.id }, 
			{
				decks: [
					{
						'name': 'Front End Languages',
						'descr': 'Help with learning the front end languages of programming.',
						'cards': [
							{
								"keyWord": "HTML",
								"definition": "Stands for Hyper Text Markup Language. The standard markup language for Web pages."
							},
							{
								"keyWord": "CSS",
								"definition": "Stands for Cascading Style Sheets. This describes how HTML elements are to be displayed on screen, paper, or in other media."
							},
							{
								"keyWord": "JavaScript",
								"definition": "Scripting or programming language that allows you to implement complex features on web pages."
							}
						]
					}
				]
			}
		)
		.then(newDeck => res.json(newDeck))
		.catch(err => console.log(err));
	});

	// Route for deleting a user
	app.delete('/users/:id', (req, res) => {
		User.findByIdAndRemove(req.params.id)
		.then(user => res.json(user))
		.catch(err => console.log(err));
	});

};