const express = require("express");
//routes
const {usersRouter}=require('./routes/users.routes')
const {gamesRouter}= require('./routes/games.routes');
const {reviewsRouter}= require('./routes/reviews.routes')
const { consoleRouter } = require("./routes/console.routes");
const {gamesInConsoleRouter}= require('./routes/gameInConsole.routes')


// Global err controller
const { globalErrorHandler } = require('./controllers/error.controller');

// Utils
const { AppError } = require('./utils/appError.util');
// Init express app
const app = express();

app.use(express.json());



app.use('/api/v1/users',usersRouter)
app.use('/api/v1/games',gamesRouter)
app.use('/api/v1/console',consoleRouter)
app.use('/api/v1/review',reviewsRouter)
app.use('/api/v1/gameInConsole',gamesInConsoleRouter)


app.all('*', (req, res, next) => {
	next(
		new AppError(
			`${req.method} ${req.originalUrl} not found in this server`,
			404
		)
	);
});

module.exports = { app };
