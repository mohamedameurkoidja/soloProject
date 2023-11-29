const express = require("express");
const cors = require("cors");
const PORT = 8080;
const app = express();
app.use(express.json());
app.use(cors());
const Data = require("./database/mongodb/index");
const {
  serchbook,
  updetebook,
  deletebook,
  getall,
  add,
} = require("./database/mongodb/index");

app.get("/api/book", async (req, res) => {
  try {
    const getdata = await getall(req.body);
    res.status(200).json(getdata);
  } catch (err) {
    res.json(err);
  }
});
app.post("/api/book", async (req, res) => {
  try {
    const postdata = await add(req.body);
    res.status(201).json(postdata);
  } catch (err) {
    throw err;
  }
});
app.delete("/api/book/:id", async (req, res) => {
  try {
    await deletebook({ _id: req.params.id });
    res.status(200).json("delete");
  } catch (err) {
    res.json(err);
  }
});

app.put("/api/book/:id", async (req, res) => {
  try {
    await updetebook(req.params.id, { prix: req.body.prix });
    res.status(200).json("updata");
  } catch (err) {
    res.json(err);
  }
});
app.get("/:title", (req, res) => {
  // let Title = req.params.title;
  serchbook(req.params.title)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
