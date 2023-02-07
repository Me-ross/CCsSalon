const mongoose = require('mongoose');

const { Schema } = mongoose;

const servicesSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
  },
  price: {
    type: String,
  },
  duration: {
    type: String,
  },
  image: {
    type: String,
  },
  reviews: [
    {
      reviewText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      reviewAuthor: {
        type: String,
        required: true,
      },
      reviewImg: {
        type: String,
      },
    },
  ],
});

const Services = mongoose.model('Services', servicesSchema);    


module.exports = Services;