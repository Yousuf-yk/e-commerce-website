import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// static files
app.use(express.static(path.join(__dirname, "public")));

// ejs setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// route
app.get("/", (req, res) => {
  res.render("index");
});

// start server
app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});