import express, { Request, Response } from 'express';
import pool from './db';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.get('/', async (req: Request, res: Response) => {
  try {
    // res.json({ message: 'Hello from TypeScript!' });
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM test')
    const message = result.rows[0].id
    res.json({ message })
  } catch (err) {
    console.error('Error executing SQL ', err);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
