import express from 'express';
const app = express();

app.get('/test', async (req, res) => {
  try {
    const mod = await import('@consumet/extensions');
    res.json({ keys: Object.keys(mod) });
  } catch (e) {
    res.json({ error: e.message });
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Running on ' + (process.env.PORT || 3000));
});
