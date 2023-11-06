const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    return res.status(200)
        .json({
            message: "it's working now!"
        });
});

const port = 8000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
