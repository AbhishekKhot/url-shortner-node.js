const fastify = require("fastify")({ logger: true })
const db = require('./models')

const env = process.env.NODE_ENV || "development"
if (env === 'development') require("dotenv").config()
const PORT = process.env.PORT || 3000


fastify.register(require("./routes/url.js"), { prefix: "/urlshortner" });

const start = async () => {
    try {
        await fastify.listen({ port: PORT })
    } catch (error) {
        process.exit(1);
    }
}

db.sequelize
    .sync({ alter: true })
    .then(() => {
        console.log("Synched successfully with database")
        start();
    })
    .catch((error) => {
        console.log('something went wrong while connecting to database')
    })