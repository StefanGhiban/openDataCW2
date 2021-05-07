const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const citySchema = new Schema({
  cpi_and_rent_index: { type: Number, required: false },
  purchasing_power_incl_rent_index:{ type: Number, required: false },
  rent_index:{ type: Number, required: false },
  groceries_index:{ type: Number, required: false },
  restaurant_price_index:{ type: Number, required: false },
  cpi_index:{ type: Number, required: false },
  name:{ type: String, required: true },
  city_id:{ type: Number, required: true }

}, {
  timestamps: true,
});

const City = mongoose.model('City', citySchema);

module.exports = City;