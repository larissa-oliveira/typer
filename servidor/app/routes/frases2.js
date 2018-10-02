module.exports = function(app) {

	var api = app.api.frases2;

	app.route('/frases2/')
		.get(api.lista);
};
