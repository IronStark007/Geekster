const fs = require('fs');
const booking = require('../models/booking')

const createAndDeleteFileHandler = (modelname) => {
    file = `C:/Users/ansar/OneDrive/Documents/Web development/geekster/Geekster/Advanced Backend/Jan8/models/booking.js`
    var content = fs.readFileSync(file, "utf8");
    end = content.indexOf("=")
    first_words = content.slice(0, end + 1)
    complete = `${first_words} ${JSON.stringify(modelname)}`
    fs.writeFileSync(file, complete, 'utf8');
}

const createBooking = (req, res) => {
    var id = req.body.bookingId
    booked = booking.filter((booking) => booking.bookingId == id)[0]
    if (booked.booking) {
        res.send({ "message": "Slot is already booked" })
    }
    booked.booking = true;
    createAndDeleteFileHandler(blogging);
    res.send({ "message": `Booking with Slot ${booked.slotId} created` })
}

const deleteBooking = (req, res) => {
    var id = req.body.bookingId
    booked = booking.filter((booking) => booking.bookingId == id)[0]
    if (booked.booking) {
        booked.booking = false;
        createAndDeleteFileHandler(blogging);
        res.send({ "message": `Booking with Slot ${booked.slotId} deleted` })
    }
    res.send({ "message": "Slot is not booked" })
}

module.exports = {
    createBooking: createBooking,
    deleteBooking: deleteBooking
}