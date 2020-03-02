let path = require("path");
let fs = require("fs");

let arr = [
  {
    name: "Jessica Jones",
    message: "look out for purple man"
  },
  {
    name: "Jon Hamm",
    message: "Lucky strike man"
  },
  {
    name: "Megan Markle",
    message: "Hello there"
  }
];

var dataPath = path.join(__dirname, "../data.json");

fs.writeFile(dataPath, JSON.stringify(arr), err => {
  if (err) throw err;
});


