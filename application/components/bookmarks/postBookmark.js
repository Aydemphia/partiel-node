const env = process.env.NODE_ENV || 'development';
const config = require(`../../config/${env}`)

const db = config.DB;

module.exports = function(req, res) {

 	db('bookmarks').insert({
 		url: req.body.url,
 		name: req.body.name,
 		user_id: req.body.user_id,
 		category_id: req.body.category_id
 	})

 	.then(function (row) {
 		return res.json({
 			status_code: 200,
 			errors: [],
 			message: "bookmark successfully posted",
 			data: req.body
 		})
 	})
 	.catch(function (err) {	
 		return res.json({
 			status_code: 403,
 			errors: "could not post bookmark",
 			data: {}
 		})
 	})
}