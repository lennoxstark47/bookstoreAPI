const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const bookRouter = require('./routes/book.route');
const db = require('./keys').ATLAS_URI;

const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});

mongoose
	.connect(db)
	.then(() => {
		console.log('MongoDb connected ......');
	})
	.catch((err) => {
		console.log(err);
	});

app.use('/books', bookRouter);
