var api = {};

var frases2 = [
	{_id: 0, texto:'Hold the doooooor!', tempo: 15 },
	{_id: 1, texto:'Family, duty, honor.',tempo: 8 },
	{_id: 2, texto:'I drink and i know things.', tempo: 5 },
	{_id: 3, texto:'We do not sow.', tempo: 15 },
	{_id: 4, texto:'Ours is the fury!', tempo: 15 },
	{_id: 5, texto:'The winter is coming.', tempo: 5 },
	{_id: 6, texto:'A Lannister always pays his debts.', tempo: 12 },
	{_id: 7, texto:'Unbowed, unbend, unbroken. ', tempo: 10 },
	{_id: 8, texto:'Hear me roar!.', tempo: 7},
	{_id: 9, texto:'Fire and Blood.', tempo: 20},

	];

api.lista = function(req, res) {

	setTimeout(function(){
		if(req.query.id) return res.json(frases2[req.query.id]);

		res.json(frases2);
	},1500);

};

module.exports = api;
