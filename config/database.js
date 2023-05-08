const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URI2, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(
      (con) => {
        console.log(
          `MongoDB Database connected with HOST: ${con.connection.host}`
        );
      },
      (err) => {
        console.log(err);
      }
    );
};

module.exports = connectDatabase;
