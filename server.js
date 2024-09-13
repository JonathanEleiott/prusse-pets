const express = require('express');
const app = express();

app.use(express.json());

const client = require('./db/client.js');
client.connect();

const { getPets, createPet } = require('./db/pets.js');

app.get('/', (req, res, next) => {
  res.send('Hello World!');
})

app.get('/api/v1/pets', async(req, res, next) => {
  try {
    const allPets = await getPets();

    res.send(allPets);
  } catch(err) {
    console.log()
  }
});

app.post('/api/v1/pets', async(req, res, next) => {
  const createdPet = await createPet(req.body.type, req.body.name, null)
  res.send(createdPet);
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));