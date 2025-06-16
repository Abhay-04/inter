import express from 'express'
import cors from 'cors';
import dbConnect from './db.js'
import Opportunity from './schema.js';

const app = express()
app.use(cors());

app.use(express.json());


dbConnect()

app.get('/', async (req, res) => {
  try {
    const opportunities = await Opportunity.find();
    res.json(opportunities);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.post('/', async (req, res) => {
  try {
    const opportunity = new Opportunity(req.body);
    const saved = await opportunity.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
})
app.put('/:id', async (req, res) => {
  try {
    const updated = await Opportunity.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updated) return res.status(404).json({ error: 'Not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
app.delete('/:id', async (req, res) => {
  try {
    const deleted = await Opportunity.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Not found' });
    res.json({ message: 'Opportunity deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.listen(3000)