const cheerio = require('cheerio')
const { default: Axios } = require('axios')

const heroList = () => {
    return new Promise(async (resolve, reject) => {
        Axios.get('https://mobile-legends.fandom.com/wiki/Mobile_Legends:_Bang_Bang_Wiki')
            .then(({ data }) => {
                var $ = cheerio.load(data)
                let data_hero = []
                let url = []
                $('div > div > span > span > a').get().map((result) => {
                    const name = decodeURIComponent($(result).attr('href').replace('/wiki/', ''))
                    const urln = 'https://mobile-legends.fandom.com' + $(result).attr('href')
                    data_hero.push(name)
                    url.push(urln)
                })
                resolve({
                    creator: "Arjn",
                    code: 200,
                    status: true,
                    result: {
                        data_hero
                    }
                })
            })
            .catch(() => reject({ creator: "Arjn", code: 404, status: false, message: "Not Found" }))
    })
}

module.exports = heroList