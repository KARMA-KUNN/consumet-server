import express from 'express';
const app = express();

app.get('/test', async (req, res) => {
  const mod = await import('@consumet/extensions');
  const animeKeys = Object.keys(mod.ANIME);
  res.json({ animeKeys });
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Running on ' + (process.env.PORT || 3000));
});
