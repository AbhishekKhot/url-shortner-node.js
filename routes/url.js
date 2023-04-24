const {
    createShortUrlHandler,
    getShortUrlHandler
} = require('../controller/handler/url');

const {
    createShortUrlSchema,
    getShortUrlSchema
} = require('../controller/schema/url');

module.exports = (fastify, options, done) => {
    fastify.post('/', {
        schema: createShortUrlSchema,
        handler: createShortUrlHandler
    })
    fastify.get('/:id', {
        schema: getShortUrlSchema,
        handler: getShortUrlHandler
    })
    done()
}