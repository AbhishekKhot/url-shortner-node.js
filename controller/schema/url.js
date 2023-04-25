const createShortUrlSchema = {
    body: {
        type: 'object',
        properties: {
            url: {
                type: 'string'
            }
        }
    },
    required: ["url"]
}

const getShortUrlSchema = {
    schema: {
        response: {
            200: {
                type: 'string'
            }
        }
    }
}

const updateVisitedCountSchema = {
    schema: {
        response: {
            200: {
                type: 'integer'
            }
        }
    }
}

module.exports = {
    createShortUrlSchema,
    getShortUrlSchema,
    updateVisitedCountSchema
}