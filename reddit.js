let fs = require("fs");
let arr = [];

const request = require("request");

request("https://reddit.com/r/popular.json", (err, res, body) => {
  JSON.parse(body).data.children.forEach(item => {
    arr.push({
      title: item.data.title,
      url: item.data.url,
      author: item.data.author
    });

    let articles = JSON.stringify(arr);
    fs.writeFileSync("popular-articles.json", articles);
  });
});
