# Foreign Keys + DB and Server Review

## Foreign Keys - connects two tables to form a relationship

- normalization -> DO NOT REPEAT DATA in a table

## Relationships

- one-to-one
  - employees to employee_details
  - students to contact_info
- one-to-many
  - employees to departments
  - teams to players
- many-to-many
  - teachers to students (high school / college)
  - authors to books

## client.js

- define the connection to the DB

## Seed File - set up DB and add fake data

- create tables
- drop tables (if they exist)
- create fake pets, owners, etc.

## other db files (pets.js, owners.js)

- contain function for talking to the DB
  - creating pets, owners
  - deleting pets, owners
  - getting all pets, owners
  - etc.

## Notes

- nodemon - re-runs a file when saved
- .gitignore - files/folders that you DO NOT WANT TO PUSH TO GITHUB
  - node_modules (should always be listed in this file)
- process.env - private file (used for secret variables and deployment)
- app.use(express.json()) - used to get the body off of a POST request