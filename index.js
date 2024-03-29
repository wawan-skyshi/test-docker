const express = require('express');

const app = express();

const db = require("./models");

app.use(express.json());

db.sequelize
    .authenticate()
    .then(() => {
        console.log('Koneksi ke database berhasil.');
    })
    .catch(err => {
        console.error('Gagal koneksi ke database: ', err);
    });

app.get('/', (req, res) => {
    return res.status(200)
        .json({
            message: "it's working now! for test untuk testing lagi"
        });
});

const port = 8000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
