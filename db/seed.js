const client = require('./client.js');
const { createPet } = require('./pets.js');
const { createOwner } = require('./owners.js');

const dropTables = async() => {
  try {
    console.log('DROPPING TABLES!');

    await client.query(`
      DROP TABLE IF EXISTS pets;
      DROP TABLE IF EXISTS owners;
    `);

    console.log('TABLES DROPPED!');
  } catch(err) {
    console.log('ERROR DROPPING TABLES: ', err);
  }
}

const createTables = async() => {
  try {
    console.log('CREATING TABLES!');

    await client.query(`
        CREATE TABLE owners (
          id SERIAL PRIMARY KEY,
          name VARCHAR(30)
        );

        CREATE TABLE pets (
          id SERIAL PRIMARY KEY,
          type VARCHAR(30) NOT NULL,
          name VARCHAR(30) NOT NULL,
          owner_id INTEGER REFERENCES owners(id)
        );
    `);

    console.log('TABLES CREATED!');
  } catch(err) {
    console.log('ERROR CREATING TABLES: ', err);
  }
}

const syncAndSeed = async() => {
  await client.connect();
  console.log('CONNECTED!');

  await dropTables();
  await createTables();

  const sarah = await createOwner('sarah');
  const tom = await createOwner('tom');
  const lisa = await createOwner('lisa');
  const paul = await createOwner('paul');
  const mary = await createOwner('mary');
  const lisa2 = await createOwner('lisa');
  console.log('OWNERS CREATED!');

  await createPet('cat', 'venus', null);
  await createPet('tortoise', 'pepe', lisa.id);
  await createPet('bunny', 'floofer', lisa.id);
  await createPet('cat', 'jason', paul.id);
  console.log('PETS CREATED!');

  client.end();
  console.log('CONNECTION CLOSED');
}

syncAndSeed();