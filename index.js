const express = require("express");
const mongoose = require("mongoose");
const scoreRoute = require("./routes/score.route");
const cors = require("cors");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/score", scoreRoute);
app.get("/", (req, res) => res.send("welcome"));

app.get("/getWord", (req, res) => {
  let word = genWord();
  res.status(200).send(word);
});

function genWord() {
  const words = [
    "apple",
    "banana",
    "orange",
    "pear",
    "strawberry",
    "raspberry",
    "blueberry",
    "blackberry",
    "peach",
    "plum",
    "watermelon",
    "cantaloupe",
    "honeydew",
    "apricot",
    "mango",
    "pineapple",
    "kiwi",
    "papaya",
    "avocado",
    "lemon",
    "lime",
    "grapefruit",
    "tangerine",
    "clementine",
    "nectarine",
    "pomegranate",
    "cranberry",
    "gooseberry",
    "currant",
    "elderberry",
    "boysenberry",
    "loganberry",
    "cloudberry",
    "blackcurrant",
    "redcurrant",
    "whitecurrant",
    "greengage",
    "damson",
    "quince",
    "medlar",
    "loquat",
    "satsuma",
    "mandarin",
    "tangelo",
    "ugli fruit",
    "feijoa",
    "passionfruit",
    "carambola",
    "durian",
    "lychee",
    "rambutan",
    "longan",
    "starfruit",
    "guava",
    "persimmon",
    "pomelo",
    "kumquat",
    "fig",
    "date",
    "olive",
    "raisin",
    "currant",
    "sultana",
    "grape",
    "cranberry",
    "blueberry",
    "raspberry",
    "blackberry",
    "cherry",
    "strawberry",
    "blackcurrant",
    "redcurrant",
    "whitecurrant",
    "gooseberry",
    "elderberry",
    "currant",
    "bilberry",
    "raspberry",
    "blackberry",
    "loganberry",
    "cloudberry",
    "cranberry",
    "gooseberry",
    "currant",
    "elderberry",
    "boysenberry",
    "loganberry",
    "cloudberry",
  ];
  const i = Math.floor(Math.random() * words.length);
  return words[i];
}

mongoose.connect("mongodb+srv://masthotel:masthotel@masthotel.orap6vu.mongodb.net/mock14?retryWrites=true&w=majority").then(() => {
  app.listen(3000, () => {
    console.log(`Server started on 3000`);
  });
});

