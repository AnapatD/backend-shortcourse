const express = require('express');
const { getAllRooms, getRoom, addRoom, editRoom, deleteRoom } = require('../Controller/room');
const router = express.Router();

router.get('/room', getAllRooms);
router.get('/room/:id', getRoom);
router.post('/room', addRoom);
router.put('/room/:id', editRoom);
router.delete('/room/:id', deleteRoom);

module.exports = router;