 import express from 'express';
const app = express();

const { ANIME } = await import('@consumet/extensions');
const hianime = new ANIME.Hianime();

app.get('/anime/hianime/:query', async (req, res) => {
  try {
    const data = await hianime.search(req.params.query);
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.get('/anime/hianime/info/:id', async (req, res) => {
  try {
    const data = await hianime.fetchAnimeInfo(req.params.id);
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.get('/anime/hianime/watch/:episodeId', async (req, res) => {
  try {
    const data = await hianime.fetchEpisodeSources(req.params.episodeId);
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Running on ' + (process.env.PORT || 3000));
});
