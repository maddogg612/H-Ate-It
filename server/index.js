const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//const path = require('path');

const formRoutes = require('./Routes/form.js');

const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(cors());

// app.get('/', (req, res) =>
//   res.status(200).sendFile(path.join(__dirname, '../dist/index.html'))
// );

// app.use(
//   '/styles.css',
//   express.static(path.join(__dirname, '../client/public/styles.css'))
// );

// app.use(
//   '/bundle.js',
//   express.static(path.join(__dirname, '../dist/bundle.js'))
// );

app.use('/form', formRoutes);

const CONNECTION_URL =
  'mongodb+srv://dbUser-gordon:j4UgjtkhuMYQPI5d@cluster0.fj1r1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);
