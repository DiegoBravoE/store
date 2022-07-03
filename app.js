const express = require("express");
//routes
const {usersRouter}=require('./routes/users.routes')
const {gamesRouter}= require('./routes/games.routes');
const {reviewsRouter}= require('./routes/reviews.routes')
const { consoleRouter } = require("./routes/console.routes");
// Init express app
const app = express();

app.use(express.json());



app.use('/api/v1/users',usersRouter)
app.use('/api/v1/games',gamesRouter)
app.use('/api/v1/console',consoleRouter)
app.use('/api/v1/review',reviewsRouter)
module.exports = { app };
