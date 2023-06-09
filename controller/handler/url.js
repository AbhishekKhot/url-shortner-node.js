const HTTPStatus = require('../../lib/HTTPStatus');
const UrlService = require('../../services/url')

async function createShortUrlHandler(req, reply) {
    const short_url = await UrlService.createShortUrl(req.body)
    reply
        .status(HTTPStatus.CREATED.code)
        .send({ message: "short url created successfully", short_url: short_url });
}

async function getShortUrlHandler(req, reply) {
    const data = await UrlService.getShortUrl(req.params)
    reply.status(HTTPStatus.OK.code).send(data);
}

async function updateVisitedCountHandler(req, reply) {
    const visited_count = await UrlService.updateUrlVisitedCount(req.params)
    reply
        .status(HTTPStatus.OK.code)
        .send({ message: "visited count updated successfully", count: visited_count })
}

module.exports = {
    createShortUrlHandler,
    getShortUrlHandler,
    updateVisitedCountHandler
}