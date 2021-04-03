import mongoose from "mongoose";

const connection = {};

export const dbConnect = async () => {
  if (connection.isConnected) {
    return;
  }

  const db = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  connection.isConnected = db.connections[0].readyState;
  if (connection.isConnected)
    console.log("Se conecto exitosamente a la base de datos");
};
