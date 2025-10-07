const supabase = require('../index');

exports.getAllStudents = async (req, res) => {
	const {data, error} = await supabase.from('Students').select("*");
	if (error) return res.status(500).json({error: error.message});
	res.json(data);
}

exports.getStudent = async(req, res) => {
	const id = req.params.id;
	const {data, error} = await supabase.from('Students').select("*").eq('id', id).single();
	if (error) return res.status(500).json({error: error.message});
	res.json(data);
}

exports.addStudent = async (req, res) => {
	const body = req.body;
	const {data, error} = await supabase.from('Students').insert([body]);
	if (error) return res.status(500).json({error: error.message});
	res.json(data);
}

exports.editStudent = async (req, res) => {
	const id = req.params.id;
	const body = req.body;
	const {data, error} = await supabase.from('Students').update(body).eq('id', id);
	if (error) return res.status(500).json({error: error.message});
	res.json(data);
}

exports.deleteStudent = async (req, res) => {
	const id = req.params.id;
	const {data, error} = await supabase.from('Students').delete().eq('id', id);
	if (error) return res.status(500).json({error: error.message});
	res.json(data);
}