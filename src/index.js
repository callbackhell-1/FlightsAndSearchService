const express = require("express");

const { PORT } = require("./config/serverConfig");

const setupAndStartServer = async () => {
  const app = express();
  // const PORT = 3000;

  app.listen(PORT, (err) => {
    if (err) {
      console.log(`Error : ${err}`);
    }
    console.log(`Server is up & running on ${PORT}`);
  });
};

setupAndStartServer();
