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

module.exports = {
    createShortUrlSchema,
    getShortUrlSchema
}