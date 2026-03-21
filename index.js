import express from 'express';
const app = express();

app.get('/anime/search/:query', async (req, res) => {
  try {
    const mod = await import('@consumet/extensions');
    const provider = new mod.ANIME.Gogoanime();
    const data = await provider.search(req.params.query);
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.get('/anime/info/:id', async (req, res) => {
  try {
    const mod = await import('@consumet/extensions');
    const provider = new mod.ANIME.Gogoanime();
    const data = await provider.fetchAnimeInfo(req.params.id);
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.get('/anime/watch/:episodeId', async (req, res) => {
  try {
    const mod = await import('@consumet/extensions');
    const provider = new mod.ANIME.Gogoanime();
    const data = await provider.fetchEpisodeSources(req.params.episodeId);
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Running on ' + (process.env.PORT || 3000));
});
