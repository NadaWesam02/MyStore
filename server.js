const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();

app.use(cors());
app.use(express.json());

const DATA_FILE = 'products.json';
let products = [];

try {
  const data = fs.readFileSync(DATA_FILE);
  products = JSON.parse(data);
} catch (err) {
  products = [
    {
      "id": 1,
      "title": "Wireless Headphones",
      "description": "Experience high-quality sound with noise cancellation",
      "price": 99.99,
      "image": "images/wireless-headphones.jpg",
      "category": "Electronics",
      "rating": 4.5
    }
  ];
}

function saveProducts() {
  fs.writeFileSync(DATA_FILE, JSON.stringify(products, null, 2));
}

app.get('/api/products', (req, res) => {
  res.json({
    "success": true,
    "count": products.length,
    "data": products
  });
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).json({
      "success": false,
      "error": "Product not found"
    });
  }
  res.json({
    "success": true,
    "data": product
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});