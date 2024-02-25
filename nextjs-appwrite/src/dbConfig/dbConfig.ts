import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URL!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB successfully connected");
    });

    connection.on("err", (err) => {
      console.log(
        "MongoDb connection error. Please make sure MongoDB is running.",
        err
      );
      process.exit();
    });
  } catch (err) {
    console.error("Something went wrong", err);
  }
}
