import express from "express";
import bodyParser from "body-parser";
import qr from "qrcode";

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/scan", (req, res) => {
  const url = req.body.url;
  if (url.length === 0) res.send("Empty Data!");

  qr.toDataURL(url, (err, src) => {
    if (err) res.send("Error occured");
    res.render("scan.ejs", { src });
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
