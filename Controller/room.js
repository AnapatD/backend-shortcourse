const supabase = require('../index.js');

exports.getAllRooms = async (req, res) => {
	const {data, error} = await supabase.from('Rooms').select("*");
	if (error) return res.status(500).json({error: error.message});
	res.json(data);
}

exports.getRoom = async(req, res) => {
	const id = req.params.id;
	const {data, error} = await supabase.from('Rooms').select("*").eq('id', id).single();
	if (error) return res.status(500).json({error: error.message});
	res.json(data);
}

exports.addRoom = async (req, res) => {
	const body = req.body;
	const {data, error} = await supabase.from('Rooms').insert([body]);
	if (error) return res.status(500).json({error: error.message});
	res.json(data);
}

exports.editRoom = async (req, res) => {
	const id = req.params.id;
	const body = req.body;
	const {data, error} = await supabase.from('Rooms').update(body).eq('id', id);
	if (error) return res.status(500).json({error: error.message});
	res.json(data);
}

exports.deleteRoom = async (req, res) => {
	const id = req.params.id;
	const {data, error} = await supabase.from('Rooms').delete().eq('id', id);
	if (error) return res.status(500).json({error: error.message});
	res.json(data);
}