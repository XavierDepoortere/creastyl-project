const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

mongoose
  .connect(
    "mongodb+srv://" +
      process.env.DB_USER_PASS +
      "@creastyl.jxjlwat.mongodb.net/creastyl-project"
  )

  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MongoDB", err));
