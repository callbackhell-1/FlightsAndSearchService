const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig");

const setupAndStartServer = async () => {
  const app = express();

  // Middleware
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, (err) => {
    if (err) {
      console.log(`Error : ${err}`);
    }
    console.log(`Server is up & running on ${PORT}`);
  });
};

setupAndStartServer();
