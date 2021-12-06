import * as redis from "redis";
import express, { Application, Request, Response } from "express";

const app: Application = express();

const client = redis.createClient({ url: "redis://@redis:6379" });

client.connect();

console.log(client.isOpen);


client.on("connect", (lll) => {
  console.log("Merhaba Redis");
});

client.SET("name", "serhans");

client.GET("name").then((data) => {
  console.log(data);
});
app.get("/", (req, res) => {
  res.send(`Hello World!<br><p>I have been loaded times.</p>`);
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
