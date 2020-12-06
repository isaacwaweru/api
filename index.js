const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Docker project here');
});

app.listen(3000, () => console.log('Docker app listening on port 3000!'));