const express = require("express");
const app = express();
const { fetchJS } = require("vnft-tools")
const path = require("path")

app.get("/", (req, res) => {
  res.json({ status: "OK!" });
});

let files = fetchJS(path.join(__dirname,"emoji"));
for(let file of files){
  let site = require(file)
  if( file.name && file.get ){
    app.get(file.name, file.get);
  }
}

module.exports = app;
