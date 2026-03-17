import pkg from '@consumet/extensions';
import express from 'express';

const { ANIME } = pkg;
const app = express();
const gogoanime = new ANIME.Gogoanime();

app.get('/anime/gogoanime/:query', async (req, res) => {
  try {
    const data = await gogoanime.search(req.params.query);
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.get('/anime/gogoanime/info/:id', async (req, res) => {
  try {
    const data = await gogoanime.fetchAnimeInfo(req.params.id);
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.get('/anime/gogoanime/watch/:episodeId', async (req, res) => {
  try {
    const data = await gogoanime.fetchEpisodeSources(req.params.episodeId);
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server running on port ' + (process.env.PORT || 3000));
});
