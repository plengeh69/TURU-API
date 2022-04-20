const { default: Axios } = require('axios')
const request = require('request')
const cheerio = require('cheerio')

const heroDetail = (name) => {
    return new Promise(async (resolve, reject) => {
        var splitStr = name.toLowerCase().split(' ');
        for (var i = 0; i < splitStr.length; i++) {
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }
        const query = splitStr.join(' ')
        Axios.get(`https://mobile-legends.fandom.com/wiki/${query}`)
        .then(({ data }) => {
            const $ = cheerio.load(data)
            let mw = []
            let attrib = []
            let skill = []
            const name = $('#mw-content-text > div > div > div > div > div > div > table > tbody > tr > td > table > tbody > tr > td > font > b').text() 
            $('.mw-headline').get().map((resp) => {
                const mwna = $(resp).text()
                mw.push(mwna)
            })
            $('#mw-content-text > div > div > div > div > div > div > table > tbody > tr > td').get().map((response) => {
                const has = $(response).text().replace(/\n/g, '')
                attrib.push(has)
            })
            $('#mw-content-text > div > div > div > div > div > div > table > tbody > tr > td > div.progressbar-small.progressbar > div').get().map((respo) => {
            skill.push($(respo).attr('style').replace('width:',''))
            })
            Axios.get(`https://mobile-legends.fandom.com/wiki/${query}/Story`)
            .then(({ data }) => {
                const $ = cheerio.load(data)
                let pre = []
                $('#mw-content-text > div > p').get().map((respon) => {
                    pre.push($(respon).text())
                })
                const story = pre.slice(3).join('\n')
                const items = []
                const karakter = []
                $('#mw-content-text > div > aside > section > div').get().map((rest) => {
                    karakter.push($(rest).text().replace(/\n\t\n\t\t/g, '').replace(/\n\t\n\t/g,'').replace(/\n/g,''))
                })
                $('#mw-content-text > div > aside > div').get().map((rest) => {
                    items.push($(rest).text().replace(/\n\t\n\t\t/g, '').replace(/\n\t\n\t/g,'').replace(/\n/g,''))
                })
                const img = $('#mw-content-text > div > aside > figure > a').attr('href')
                const karakte = karakter.slice(0,2)
                request(`https://tinyurl.com/api-create.php?url=${img}`, function(err, res, body) {
                    const hasile = {
                        creator: "Arjn",
                        code: 200,
                        status: true,
                        source: "mobile-legends.fandom.com",
                        result: {
                            hero_name: name + ` ( ${mw[0].replace('CV:',' CV:')} )`,
                            hero_quotes: attrib[2].replace('Entrance Quotes','').replace('\n',''),
                            hero_feature: attrib[attrib.length - 1].replace('Hero Feature', ''),
                            image: body,
                            items: items,
                            attributes: {
                                movement_speed: attrib[12].replace('● Movement Speed',''),
                                physical_attack: attrib[13].replace('● Physical Attack',''),
                                magic_power: attrib[14].replace('● Magic Power',''),
                                attack_speed: attrib[15].replace('● Attack Speed',''),
                                physical_defense: attrib[16].replace('● Physical Defense',''),
                                magic_defense: attrib[17].replace('● Magic Defense',''),
                                basic_atk_crit_rate: attrib[18].replace('● Basic ATK Crit Rate',''),
                                hp: attrib[19].replace('● HP',''),
                                mana: attrib[20].replace('● Mana',''),
                                ability_crit_rate: attrib[21].replace('● Ability Crit Rate',''),
                                hp_regen: attrib[22].replace('● HP Regen',''),
                                mana_regen: attrib[23].replace('● Mana Regen','')
                            },
                            price: { 
                                battle_point: mw[1].split('|')[0].replace(/ /g,'').replace('\n', '').replace('\n', ''),
                                diamond: mw[1].split('|')[1].replace(/ /g,''),
                                hero_fragment: mw[1].split('|')[2] ? mw[1].split('|')[2].replace(/ /g,'') : 'none'
                            },
                            role: mw[2],
                                skill: {
                                durability: skill[0],
                                offense: skill[1],
                                skill_effects: skill[2],
                                difficulty: skill[3]
                            },
                            speciality: mw[3],
                            laning_recommendation: mw[4],
                            release_date: mw[5],
                            // background_story: story
                        }
                    }
                    resolve(hasile)
                })
            })
            .catch((e) => reject({
                creator: "Arjn",
                code: 404,
                status: false,
                message: "Hero Not Found!"
            }))
        })
        .catch((err) => reject({
            creator: "Arjn",
            code: 404,
            status: false,
            message: "Hero Not Found!"
        }))
    })
}

module.exports = heroDetail