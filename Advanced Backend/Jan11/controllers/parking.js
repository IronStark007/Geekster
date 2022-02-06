const parking = require('../models/parking')


const getAllParkingSlots = (req, res) => {
    res.send(parking);
}

const getParkingSlotById = (req, res) => {
    var id = req.url.split('/')[1];
    var parking_slot = parking.filter((slot) => slot.slotId == id)
    res.send(parking_slot);
}


module.exports = {
    getAllParkingSlots: getAllParkingSlots,
    getParkingSlotById: getParkingSlotById
}