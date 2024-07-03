// const http = require("http");
// const server = http.createServer((req, res) => {
//   console.log(req.url);
//   res.writeHead(200);
//   res.end("Hellon world");
// });

// server.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });

const express = require("express");
import { Request, Response } from "express";
const server = new express();

server.get("/employee", (req: Request, res: Response) => {
  console.log(req.url);
  res.status(200).send("Sidharth Venugopal");
});

interface profile {
  name: string;
  age: number;
}

interface data {
  profile: profile;
}

server.get("/getData", (req: Request, res: Response) => {
  let data: data = {
    profile: {
      name: "Sidharth Venugopal",
      age: 23,
    },
  };

  console.log(data.profile.name);
  res.status(200).send(data);
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
