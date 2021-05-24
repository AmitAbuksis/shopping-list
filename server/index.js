const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());

const categoreis = [{id: 1, name:"מעדנייה"}, {id: 2, name:"מוצרי חלב"}, {id: 3, name:"ירקות"}, {id: 4, name:"שימורים"}, {id: 5, name:"תינוקות"}];

app.get("/api", (req, res) => {
    res.json({ status: 200, categoreis: categoreis});
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});