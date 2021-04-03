import { dbConnect } from "../../backend/lib/dbConnect";

dbConnect();

export default async (req, res) => {
  res.json({ test: "test" });
};
