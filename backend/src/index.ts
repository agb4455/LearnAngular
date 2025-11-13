import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const client = new OpenAI({baseURL: "https://router.huggingface.co/v1", apiKey: process.env.OPENAI_API_KEY });

app.post('/api/chat', async (req, res) => {
  const { message } = req.body;

  try {
    const response = await client.chat.completions.create({
      model: "moonshotai/Kimi-K2-Thinking:novita",
      messages: [
        { role: "user", content: message }
      ],
    });

    const text = response.choices?.[0]?.message?.content ?? 'No hay respuesta';
    res.json({ text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al conectar con la IA' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Backend corriendo en http://localhost:${PORT}`));