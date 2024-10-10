const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

const publicPath = path.join(__dirname, 'public');


app.use(express.static(publicPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.htnml'));
});
// Rute untuk halaman lainnya
app.get('/:page', (req, res) => {
    const page = req.params.page;
    const filePath = path.join(publicPath, `${page}.html`);
    
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(404).send('Halaman tidak ditemukan');
        }
    });
});


app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
    
});