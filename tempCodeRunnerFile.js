const dbName = 'ToDo'
const collectionName = "Profile"

db.use(dbName);
db.createCollection(collectionName)