import mongoose from "mongoose";

const dbConnect = async() => {
  await mongoose
    .connect(
      "mongodb+srv://abhaysharma0480:wQL6z9x9ROllbijx@cluster0.7mks0.mongodb.net/"
    )
    .then(() => console.log("Connected!"));
};

export default dbConnect;
