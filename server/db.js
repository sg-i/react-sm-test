import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const productSchema = new Schema({
  name: {
    type: String,
    default: 'None',
  },
  description: {
    type: String,
    default: 'None',
  },
  typeProduct: {
    type: String,
    default: 'None',
  },
  price: {
    type: Number,
    default: 0,
  },
  brand: {
    type: String,
    default: 'None',
  },
});

const conn = 'mongodb://localhost:27017/smart-design-test';
// const conn = 'mongodb://localhost:27017/';
const connection = mongoose.connect(conn, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

export const Product = mongoose.model('Product', productSchema);
