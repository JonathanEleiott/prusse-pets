const client = require('./client.js');

const createOwner = async(ownerName) => {
  try {
    const { rows } = await client.query(`
      INSERT INTO owners (name)
      VALUES ('${ownerName}')
      RETURNING *;  
    `);
    const owner = rows[0];
    return owner;
  } catch(err) {
    console.log('ERROR CREATING OWNER: ', err);
  }
}

module.exports = {
  createOwner: createOwner
}