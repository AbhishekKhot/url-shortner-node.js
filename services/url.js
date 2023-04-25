const { Url } = require('../models')
const uuid = require('uuid');
const { NotFoundError } = require('../lib/serverErrors')

class UrlService {
    async createShortUrl(body) {
        const data = await Url.create({
            original_url: body.url,
            short_url: uuid.v4()
        })
        return data.short_url
    }

    async getShortUrl(params) {
        const short_url = params.id
        const data = await Url.findOne({
            where: {
                short_url: short_url
            }
        })
        if (!data) throw new NotFoundError("URL not found")
        
        return data.original_url
    }

    async updateUrlVisitedCount(params) {
        const short_url = params.url
        const data = await Url.findOne({
            where: {
                short_url: short_url
            }
        })
        if (!data) throw new NotFoundError("URL not found")
        const updated_data = {
            original_url: data.original_url,
            short_url: data.short_url,
            visited_count: data.visited_count + 1
        }
        await Url.update(updated_data, {
            where: { id: data.id }
        })
        return data.visited_count + 1
    }
}

module.exports = new UrlService()
