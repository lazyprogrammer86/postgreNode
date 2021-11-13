const express = require('express');
const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(require('./routes'));


//port configuration
app.listen(port, (err) => {
    if (err) throw err;
    console.log(`Server up and running on port ${port}`);
});