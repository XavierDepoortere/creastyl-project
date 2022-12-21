const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

mongoose
  .connect(
    "mongodb+srv://" +
      process.env.DB_USER_PASS +
      "@cluster0.i0f5vky.mongodb.net/creastyl-project"
  )

  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MongoDB", err));
