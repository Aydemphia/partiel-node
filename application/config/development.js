module.exports =  {

	PORT: 8080,
	DB: require('knex') ({
		client: 'pg',
		connection: 'postgres://eovwpeiuxvbzgb:57ab8c315aeae0ccce7bc01c7fecd46aa97298bd2371545c86ace0297a41beff@ec2-46-51-174-85.eu-west-1.compute.amazonaws.com:5432/dcmfj68ntbg57m?ssl=true'
	})

};
