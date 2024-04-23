import express from 'express';
import dotenv from 'dotenv';
import path from 'path'; // Import path module

dotenv.config();
const app = express();

const __dirname = path.dirname(new URL(import.meta.url).pathname); // Get current directory name

const PORT = process.env.PORT || 5000;
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
