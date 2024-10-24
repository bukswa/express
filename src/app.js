const express = require("express");

const app = express();
const PORT = 3001;

// app.use("/", (req, res, next) => {
//   res.sendFile(__dirname + "/index.html");
// });

app.get("/test/:testId", (req, res) => {
  console.log(req.params);
  res.send(`I am the /test route: userid is ${req.params.testId}`);
});
app.get("/test/:testId1/:testId2/:testId3", (req, res) => {
  console.log(req.params);
  res.send(
    `I am the /test route: userid is ${req.params.testId1} ${req.params.testId2} ${req.params.testId3}`
  );
});

app.get("/test", (req, res) => {
  res.send("I am the /test route");
});

app.get("/test", (req, res) => {
  // /test?userid=20&ps=21
  console.log(req.query); // {userid: 20, ps: 21}
  res.send(`I am the /test route`);
});

app.get("/ab?c", (req, res) => {
  res.send("I am the /test route");
});

app.post("/test", (req, res) => {
  res.send("POST request was successfully");
});

app.listen(PORT, () => {
  console.log("server listening on:", PORT);
});

// Advance routing techniques

// => /ab?c    => abc, ac
// => /ab+c    => abc, abbc, abbbc
// => /ab*c    => abc, absdfsdbc, abbbsdfsdfsdc
// => /a(bc)?d    => /ad, /abcd
// => /a(bc)+d    => /abcd, /abcbcbcd

// We can write regex also
