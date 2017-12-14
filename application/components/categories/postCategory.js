const env = process.env.NODE_ENV || 'development';
const config = require(`../../config/${env}`)
const hat = require('hat');

const db = config.DB;

module.exports = function(req, res) {
	db('categories').insert({
		name: req.body.name
	})
	.returning('id')
	.then((rows) => {
		return res.json({
			'status_code': 201,
			'message': 'category successfully added'
		})
	})
	.catch(function(err){
		return res.json({
			'error': err
		})
	})
}
