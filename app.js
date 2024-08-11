// Import necessary modules
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to handle JSON and URL-encoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (CSS, images, etc.)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "public")));

// Define routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Mock API to get recent songs, trending music, and featured charts
app.get("/api/recently-played", (req, res) => {
  const recentlyPlayed = [
    {
      title: "Top 50 - Global",
      description: "Your daily update of the most played tracks...",
      img: "card1img.jpeg",
    },
    // Add more items here
  ];
  res.json(recentlyPlayed);
});

app.get("/api/trending", (req, res) => {
  const trending = [
    {
      title: "Top 50 - Global",
      description: "Your daily update of the most played tracks...",
      img: "card2img.jpeg",
    },
    {
      title: "Top 50 - Global",
      description: "Your daily update of the most played tracks...",
      img: "card3img.jpeg",
    },
    {
      title: "Top 50 - Global",
      description: "Your daily update of the most played tracks...",
      img: "card4img.jpeg",
    },
    // Add more items here
  ];
  res.json(trending);
});

app.get("/api/featured-charts", (req, res) => {
  const featuredCharts = [
    {
      title: "Top 50 - Global",
      description: "Your weekly update of the most played tracks right...",
      img: "card5img.jpeg",
    },
    {
      title: "Top songs - India",
      description: "Your weekly update of the most played tracks right...",
      img: "card6img.jpeg",
    },
    // Add more items here
  ];
  res.json(featuredCharts);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
