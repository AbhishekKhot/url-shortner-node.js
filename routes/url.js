const {
    createShortUrlHandler,
    getShortUrlHandler,
    updateVisitedCountHandler
} = require('../controller/handler/url');

const {
    createShortUrlSchema,
    getShortUrlSchema,
    updateVisitedCountSchema
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
    fastify.put('/:url', {
        schema: updateVisitedCountSchema,
        handler: updateVisitedCountHandler
    })
    done()
}