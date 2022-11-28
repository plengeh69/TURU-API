const { BitlyClient } = require('bitly')
const request = require('request')

const bitly = (url) => new Promise((resolve, reject) => {
    let apibitly = ['6cfc18e9bfa554714fadc10a1f6aff7555642348','2243940c230ad0d748059aee58ddf126b65fd8e7','c71b6658a1d271ddaf2a5077de3dcb9d67f68025','cddbceccdc2f1c9d11e4cdd0d2b1d1078e447c43','7915c671fbd90eca96310e5c9442d761225a1080','e5dee46eb2d69fc9f4b0057266226a52a3555356','f09ab8db9cf778b37a1cf8bc406eee5063816dec','964080579f959c0cc3226b4b2053cd6520bb60ad','a4f429289bf8bf6291be4b1661df57dde5066525','3d48e2601f25800f375ba388c30266aad54544ae','4854cb9fbad67724a2ef9c27a9d1a4e9ded62faa','d375cf1fafb3dc17e711870524ef4589995c4f69','43f58e789d57247b2cf285d7d24ab755ba383a28','971f6c6c2efe6cb5d278b4164acef11c5f21b637','ae128b3094c96bf5fd1a349e7ac03113e21d82c9','e65f2948f584ffd4c568bf248705eee2714abdd2','08425cf957368db9136484145aa6771e1171e232','dc4bec42a64749b0f23f1a8f525a69184227e301','0f9eb729a7a08ff5e73fe1860c6dc587cc523035','037c5017712c8f5f154ebbe6f91db1f82793c375']
    let token_bitly = apibitly[Math.floor(Math.random() * apibitly.length)]
    let response = new BitlyClient(token_bitly)
    response
        .shorten(url)
        .then((result) => {
            resolve({
                creator: '@arjn.me',
                code: 200,
                status: true,
                result: result
            })
        })
        .catch(reject)
})

const tinyurl = (url) => new Promise((resolve, reject) => {
    request(`https://tinyurl.com/api-create.php?url=${url}`, function(err, req, res) {
        resolve({
            creator: '@arjn.me',
            code: 200,
            status: true,
            result: res
        })
    })
})

module.exports = {
    bitly,
    tinyurl
}