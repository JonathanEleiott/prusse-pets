const client = require('./client.js');

const createPet = async(petType, petName, ownerId) => {
  try {
    const { rows } = await client.query(`
      INSERT INTO pets (type, name, owner_id)
      VALUES ('${petType}', '${petName}', ${ownerId})
      RETURNING *;
    `);

    return rows[0];
  } catch(err) {
    console.log('ERROR CREATING A PET: ', err);
  }
}

const getPets = async() => {
  try {
    const { rows } = await client.query(`
      SELECT * FROM pets;
    `);
    return rows;
  } catch(err) {
    console.log('ERROR GETTING PETS: ', err);
  }
}

module.exports = {
  createPet: createPet,
  getPets: getPets
}