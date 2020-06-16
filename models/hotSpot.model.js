const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hotSpotSchema = new Schema({
  name: { type: String, required: true, unique: false },
  address: { type: String, required: true },
  zipCode: { type: Number, required: true },
  /*  zipCode 5 digit limit add from front end
  location: {
    streetAddress: { type: String, required: true, unique: true},
    city: { type: String, required: true},
    state: { type: String, required: true},
    zipCode: { type: Number, required: true}
  },
  rating: { type: float, min: 0.00, max: 5.00},
  //add the write in time
  */
});

const hotSpots = mongoose.model("hotSpots", hotSpotSchema);

module.exports = hotSpots;
