const express = require("express");
const bodyParser = require("body-parser");
const ApiRoutes = require("./routes/index");

const { PORT } = require("./config/serverConfig");

const db = require("./models/index");

const setupAndStartServer = async () => {
  const app = express();

  // Middleware
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api", ApiRoutes);

  app.listen(PORT, (err) => {
    if (err) {
      console.log(`Error : ${err}`);
    }
    console.log(`Server is up & running on ${PORT}`);
    db.sequelize.sync({alter : true});
  });
};

setupAndStartServer();
