const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');

//* Cors Policy */
const corsOptions = {
  origin: 'http://localhost:5173',
  methods: "GET,POST,PUT,DELETE",
  credentials: true,
}
app.use(cors(corsOptions));

//* Connection */
dotenv.config({ path: "./config.env" });
require('./db/conn.js');
//* -------------------------------- */

//* Router */
app.use(express.json());
app.use(require('./router/auth-router.js'));
//* -------------------------------- */

//* Listening To Port */
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server Running... at port ${port}`);
});
//* -------------------------------- */