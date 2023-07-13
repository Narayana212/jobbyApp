const { PrismaClient } = require("@prisma/client");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const prisma = new PrismaClient();

app.get("/", async (req, res) => {
  const users = await prisma.jobOpening.findMany({
  });
  res.status(200).send(users);
});

const PORT = 5123;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

