const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.json());

const corsOptions = {
  origin: '*',
  credentials: true,
};
app.use(cors(corsOptions));

app.post("/", async (req, res) => {
  try {
    let l_Id = parseInt(req.body.lotteryID);
    let result = await axios.get(`http://localhost:8000/${l_Id}`);
    // let result = await axios.get(`https://randomuser.me/api/?results=10`);
    // console.log(result);
    res.send(result.data);
  } catch (e) {
    console.log(e.message);
  }
});

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
