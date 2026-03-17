import express from 'express';

const app = express();

async function getProvider() {
  const mod = await import('@consumet/extensions');
  const keys = Object.keys(mod);
  console.log('Module keys:', keys);
  return mod;
}

app.get('/test', async (req, res) => {
  const mod = await getProvider();
  res.json({ keys: Object.keys(mod) });
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server running on port ' + (process.env.PORT || 3000));
});
```

Commit → Manual Deploy → once it's live open:
```
https://consumet-server.onrender.com/test
