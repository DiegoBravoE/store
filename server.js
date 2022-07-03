const { app } = require("./app");

//models
const { Reviews} = require('./models/reviews.model');
const { User } = require('./models/users.model');
const {GameInConsole}=require('./models/gamesInConsoles.model')
const {Game}=require('./models/games.model')
const {Console}=require('./models/consoles.model')
// Utils
const { db } = require("./utils/database.util");

db.authenticate()
  .then(() => console.log("Db authenticated"))
  .catch((err) => console.log(err));

//establecer relaciones
User.hasMany(Reviews,{foreignKey:'userId'});
Reviews.belongsTo(User)

Game.hasMany(Reviews,{foreignKey:'userId'});
Reviews.belongsTo(Game)


 db.sync()
	.then(() => console.log('Db synced'))
	.catch(err => console.log(err));
  
app.listen(4000, () => {
  console.log("Express app running!!");
});
