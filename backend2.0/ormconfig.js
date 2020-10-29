module.exports = {
  "type": "postgres",
  "url": process.env.DATABASE_URL,
	"host": "localhost",
  "port": 5434,
  "username": "postgres",
  "password": "docker",
  "database": "imora",
  "entities": [
		"./dist/models/*.ts"
	],
  "migrations": [
    "./dist/database/migrations/*.ts"
  ],
  "cli": {
    "migrationsDir": "./src/database/migrations/"
  }
}
