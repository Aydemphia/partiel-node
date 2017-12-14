const express = require('express');
const _ = require('lodash');
const parser = require('body-parser');

const env = process.env.NODE_ENV || 'development';
const config = require(`./config/${env}`)

const db = config.DB;

const app = express();
app.use(parser.json());

const services = {
	users: {
		getSingleUser: require('./components/users/getSingleUser'),
		postUser: require('./components/users/postUser'),
		deleteUser: require('./components/users/deleteUser'),
	},
	bookmarks: {
		getBookmarksByUserId: require('./components/bookmarks/getBookmarksByUserId'),
		getBookmarkById: require('./components/bookmarks/getBookmarkById'),
		postBookmark: require('./components/bookmarks/postBookmark'),
		deleteBookmark: require('./components/bookmarks/deleteBookmark')
	},
	categories: {
		postCategory: require('./components/categories/postCategory'),
		deleteCategory: require('./components/categories/deleteCategory'),
	}
}

// get all users
app.get('/user/:user_id', services.users.getSingleUser);
// add a new user
app.post('/user', services.users.postUser);
// delete a user
app.delete('/user', services.users.deleteUser);


// get bookmarks via user id
app.get('/user/:user_id/bookmarks', services.bookmarks.getBookmarksByUserId);
// get a bookmark via its ID
app.get('/bookmark/:bookmark_id', services.bookmarks.getBookmarkById);
// add a bookmark
app.post('/bookmark', services.bookmarks.postBookmark);
// delete a bookmark
app.delete('/bookmark', services.bookmarks.deleteBookmark);


// add a new category
app.post('/category', services.categories.postCategory);
// delete a category
app.delete('/category', services.categories.deleteCategory);



app.listen(config.PORT, function () {
  console.log(`Listening on port ${config.PORT}`);
});
