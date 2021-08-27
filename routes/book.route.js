const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// @route GET /
// @description get all lists of books
// @access Public

router.get('/', (req, res) => {
	Book.find()
		.then((books) => {
			res.status(200).send(books);
		})
		.catch((err) => {
			res.status(500).json({ error: err });
		});
});

// @route GET /add
// @description add books
// @access Public

router.post('/add', (req, res) => {
	const {
		title,
		isbn,
		author,
		description,
		published_date,
		publisher,
	} = req.body;
	const newBook = new Book({
		title,
		isbn,
		author,
		description,
		published_date,
		publisher,
	});
	newBook
		.save()
		.then((book) => {
			res.status(200).send(book);
		})
		.catch((err) => {
			res.status(500).json({ error: err });
		});
});

// @route delete /:id
// @description delete a perticular book
// @access Public

router.delete('/:id', (req, res) => {
	Book.findByIdAndDelete(req.params.id)
		.then((book) => {
			res.status(200).send(book);
		})
		.catch((err) => {
			res.status(500).json({ error: err });
		});
});

// @route GET /:id
// @description get a single book
// @access Public

router.get('/', (req, res) => {
	Book.findById(req.params.id)
		.then((book) => {
			res.status(200).send(book);
		})
		.catch((err) => {
			res.status(500).json({ error: err });
		});
});

// @route PUT /:id
// @description update a single book
// @access Public

router.put('/:id', (req, res) => {
	const {
		title,
		isbn,
		author,
		description,
		published_date,
		publisher,
	} = req.body;
	Book.findByIdAndUpdate(
		req.params.id,
		{
			title,
			isbn,
			author,
			description,
			published_date,
			publisher,
		},
		{
			new: true,
		}
	)
		.then((book) => {
			res.status(200).send(book);
		})
		.catch((err) => {
			res.status(500).json({ error: err });
		});
});

module.exports = router;
