const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.static('public'));

const products = [
    { id: 1, name: "Alien Red", price: 134.90, image: "./asset/alien_red.png" },
    { id: 2, name: "FaceMask Tempered", price: 196.15, image: "./asset/facemask_temp.png" },
    { id: 3, name: "Press Vest", price: 20.12, image: "./asset/press_vest.png" }
];

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});