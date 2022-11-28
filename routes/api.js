__path = process.cwd()

var express = require('express');
var db = require(__path + '/database/db');
try {
var zahirr = db.get("zahirr");
} catch (e) {
	console.log('')
}

var creator = "@arjn.me"

const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}


var ytdl = require('ytdl-core');
const { default: Axios } = require('axios');
const fs = require('fs-extra');
var ytpl = require('ytpl');
var secure = require('ssl-express-www');
var cors = require('cors');
var scrapeYt = require("scrape-yt");
var fetch = require('node-fetch');
var cheerio = require('cheerio');
var request = require('request');
var TikTokScraper = require('tiktok-scraper');
var tktd = require('tiktok-scraper-without-watermark')
var router  = express.Router();
var app = express();
var { spawn } = require('child_process')

var { color, bgcolor } = require(__path + '/lib/color.js');
var { fetchJson } = require(__path + '/lib/fetcher.js')
var options = require(__path + '/lib/options.js');
var {
	Vokal,
	Base,
    ytmp3,
    ytmp4,
    igdl,
    igstory,
    kbbi,
    igreels,
	Searchnabi,
    heroDetail,
    zodiac,
    ucapanRes,
    wikiRes,
    tiktokNoWm,
    chordRes,
    lirikRes,
    newsRes,
    xsearch,
    xdetail,
    heroList,
    getUser,
    mfireRes,
    ytPlay,
    ytSearch,
    jadwaltv,
    Gempa,
    kbbi,
    pinterest,
    playstore,
    fbdown,
    twtdl,
    shoope,
    textpro,
    photooxy
} = require('./../lib');

const game = require('./../lib/game')


const timer = function (endDate, callback) {
    endDate = new Date(endDate);

        var currentDate = new Date()
            , milisecondsDif = endDate.getTime() - currentDate.getTime()
            , timeRemaining = {
                days: 0
                , hours: 0
                , minutes: 0
                , seconds: 0
            };
        if (milisecondsDif > 0) {
            milisecondsDif = Math.floor(milisecondsDif/1000);

            timeRemaining.days = Math.floor(milisecondsDif/86400);
            milisecondsDif = milisecondsDif % 86400;

            timeRemaining.hours = Math.floor(milisecondsDif/3600);
            milisecondsDif = milisecondsDif % 3600;

            timeRemaining.minutes = Math.floor(milisecondsDif/60);
            milisecondsDif = milisecondsDif % 60;

            timeRemaining.seconds = Math.floor(milisecondsDif);
        }
        callback(timeRemaining)
}

var cookie = "HSID=A7EDzLn3kae2B1Njb;SSID=AheuwUjMojTWvA5GN;APISID=cgfXh13rQbb4zbLP/AlvlPJ2xBJBsykmS_;SAPISID=m82rJG4AC9nxQ5uG/A1FotfA_gi9pvo91C;__Secure-3PAPISID=m82rJG4AC9nxQ5uG/A1FotfA_gi9pvo91C;VISITOR_INFO1_LIVE=RgZLnZtCoPU;LOGIN_INFO=AFmmF2swRQIhAOXIXsKVou2azuz-kTsCKpbM9szRExAMUD-OwHYiuB6eAiAyPm4Ag3O9rbma7umBK-AG1zoGqyJinh4ia03csp5Nkw:QUQ3MjNmeXJ0UHFRS3dzaTNGRmlWR2FfMDRxa2NRYTFiN3lfTEdOVTc4QUlwbUI4S2dlVngxSG10N3ZqcHZwTHBKano5SkN2dDlPSkhRMUtReE42TkhYeUVWS3kyUE1jY2I1QzA1MDZBaktwd1llWU9lOWE4NWhoZV92aDkxeE9vMTNlcG1uMU9rYjhOaDZWdno2ZzN3TXl5TVNhSjNBRnJaMExrQXpoa2xzRVUteFNWZDI5S0Fn;PREF=app=desktop&f4=4000000&al=id;SID=2wezCMTUkWN3YS1VmS_DXaEU84J0pZIQdemM8Zry-uzWm8y1njBpLTOpxSfN-EaYCRSiDg.;YSC=HCowA1fmvzo;__Secure-3PSID=2wezCMTUkWN3YS1VmS_DXaEU84J0pZIQdemM8Zry-uzWm8y1dajgWzlBh9TgKapGOwuXfA.;SIDCC=AJi4QfFK0ri9fSfMjMQ4tOJNp6vOb9emETXB_nf2S05mvr2jBlmeEvlSsQSzPMuJl_V0wcbL1r8;__Secure-3PSIDCC=AJi4QfGeWHx-c4uTpU1rXCciO1p0s2fJWU07KrkZhWyD1Tqi8LyR-kHuBwHY9mViVYu1fRh2PA";

loghandler = {
    notparam: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'MASUKAN APIKEYLU TOD!'
    },
    notkey: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter key'
    },
    noturl: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter url'
    },
    notkata: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter kata'
    },
    nottext: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text'
    },
    nottext2: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text2'
    },
    notnabi: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter nabi'
    },
    nottext3: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text3'
    },
    nottheme: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter theme'
    },
    notusername: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter username'
    },
    notvalue: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter value'
    },
    notheme: {
    	status: false,
        creator: `${creator}`,
        code: 406,
        message: 'theme tidak tersedia silahkan masukkan texmaker/list atau baca documentasi'
     },
    invalidKey: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'APIKEYLU INVALID TOD!'
    },
    invalidlink: {
        status: false,
        creator: `${creator}`,
        message: 'error, mungkin link anda tidak valid.'
    },
    invalidkata: {
        status: false,
        creator: `${creator}`,
        message: 'error, mungkin kata tidak ada dalam api.'
    },
    notAddApiKey: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter status, apikeyInput, email, nomorhp, name, age, country, exp'
    },
    error: {
        status: false,
        creator: `${creator}`,
        message: 'mungkin sedang dilakukan perbaikan'
    }
}

var len = 15
        var arr = '123456789abcdefghijklmnopqrstuvwxyz'
        var random = '';

        for (var i = len; i > 0; i--) {
            random += arr[Math.floor(Math.random() * arr.length)];
        }

        var lenn = 5
        var randomlagi = '';

        for (var i = lenn; i > 0; i--) {
            randomlagi += arr[Math.floor(Math.random() * arr.length)];
        }

        var randomTextNumber = random+randomlagi+'ArjnAja';
        
 
 async function cekApiKey(api) {
 	ap = await zahirr.findOne({apikey:api})
 return ap;
 }
router.get('/find', async (req, res, next) => {
    var apikey = req.query.apikey
    if (!apikey) return res.sendFile(__path + '/views/404.html')
    if (apikey != 'youreyes') return res.sendFile(__path + '/views/invalid.html')

    try {
        zahirr.find()
            .then(result => {
                res.json({
                    status: true,
                    creator: `${creator}`,
                    result
                })
        })
    } catch (e) {
        console.log(e)
        res.json(loghandler.error)
    }
})

/*router.get('/download/play.mp3', function(req, res) {
    res.sendFile(__path + '/download/play.mp3')
    sleep(20000)
    fs.unlinkSync('./download/play.mp3')
})*/

router.get('/cekapikey', async (req, res, next) => {
	var apikeyInput = req.query.apikey
	if(!apikeyInput) return res.sendFile(__path + '/views/404.html')
	a = await cekApiKey(apikeyInput)
	if (a) {
	json = JSON.stringify({
		status: true,
		creator: creator,
		result: {
            status:a.status,
			id: a._id,
			apikey: a.apikey,
			more_info: {
				email: a.email,
				nomor_hp: a.nomor_hp,
				name: a.name,
				age: a.age,
				country: a.country,
				exp:a.exp,
			},
		},
		message: `jangan lupa follow ${creator}`
	})
} else {
	json = JSON.stringify({
		status: false
	})
}
res.send(JSON.parse(json))
})

router.get('/addapikey', (req, res, next) => {
    var apikey = req.query.apikey,
        status = req.query.status,
        apikeyInput  = req.query.apikeyInput,
        email = req.query.email,
        nomorhp = req.query.nomorhp
        name = req.query.name,
        age = req.query.age,
        country = req.query.country;
        exp = req.query.exp;

    if (!apikey) return res.sendFile(__path + '/views/404.html')
    if (!(status && apikeyInput && email && nomorhp && name && age && country && exp)) return res.json(loghandler.notAddApiKey)
    if (apikey != 'youreyes') return res.sendFile(__path + '/views/invalid.html')

    try {
        zahirr.insert({
        	status: status,
            apikey: apikeyInput,
            email: email,
            nomor_hp: nomorhp,
            name: name,
            age: age,
            country: country,
            exp: exp
        })
        .then(() => {
              res.json({
                  status: true,
                  creator: `${creator}`,
                  result: 'berhasil menambah data, status : ' + status + ', apikey : ' + apikeyInput + ', email : ' + email + ', nomor_hp : ' + nomorhp + ', name :  ' + name + ', age : ' + age + ', country : ' + country + ', exp : ' + exp
              })
        })
    } catch (e) {
        console.log(e)
        res.json(loghandler.error)
    }
})

router.get('/remove', (req, res, next) => {
    var apikey = req.query.apikey,
        status = req.query.status,
        apikeyInput  = req.query.apikeyInput,
        email = req.query.email,
        nomorhp = req.query.nomorhp
        name = req.query.name,
        age = req.query.age,
        country = req.query.country;
        exp = req.query.exp;

    if (!apikey) return res.sendFile(__path + '/views/404.html')
    if (!(status && apikeyInput && email && nomorhp && name && age && country && exp)) return res.json(loghandler.notAddApiKey)
    if (apikey != 'youreyes') return res.sendFile(__path + '/views/invalid.html')

    try {
        zahirr.remove({
            status: status,
            apikey: apikeyInput,
            email: email,
            nomor_hp: nomorhp,
            name: name,
            age: age,
            country: country,
            exp: exp
        })
        .then(() => {
             res.json({
                  status: true,
                  creator: `${creator}`,
                  result: 'berhasil menghapus data, status : ' + status + ', apikey : ' + apikeyInput + ', email : ' + email + ', nomor_hp : ' + nomorhp + ', name :  ' + name + ', age : ' + age + ', country : ' + country + ', exp : ' + exp
              })
        })
    } catch (e) {
        console.log(e)
        res.json(loghandler.error)
    }
})

router.get('/tiktokdl/tiktok', async (req, res, next) => {
    var apikeyInput = req.query.apikey,
        url = req.query.url


	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'youreyes') return res.json(loghandler.invalidKey)
     if (!url) return res.json(loghandler.noturl)

     TikTokScraper.getVideoMeta(url, options)
         .then(vid => {
             console.log(vid)
             res.json({
                 status: true,
                 creator: `${creator}`,
                 videoNoWm: vid
             })
         })
         .catch(e => {
             res.json(loghandler.invalidlink)
         })
})

router.get('/tiktok/stalk', async (req, res, next) => {
    var apikeyInput = req.query.apikey,
        username = req.query.username

	if(!apikeyInput) return res.sendFile(__path + '/views/404.html')
	if(apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')
    if (!username) return res.json(loghandler.notusername)


    TikTokScraper.getUserProfileInfo(username)
        .then(user => {
            res.json({
                status : true,
                creator : `${creator}`,
                result : user
            })
        })
        .catch(e => {
             res.json({
                 status : false,
                 creator : `${creator}`,
                 message : "error, mungkin username anda tidak valid"
             })
         })
})

router.get('/randomquote', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.sendFile(__path + '/views/404.html')
	if(apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')

       fetch(encodeURI(`https://python-api-zhirrr.herokuapp.com/api/random/quotes`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 creator : `${creator}`,
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/infonpm', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            query = req.query.query
            
	if(!apikeyInput) return res.sendFile(__path + '/views/404.html')
	if(apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')
    if (!query) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})

       fetch(encodeURI(`https://registry.npmjs.org/${query}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result,
                 message : `jangan lupa follow ${creator}`
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/jadwal-bioskop', (req, res) => {
var apikeyInput = req.query.apikey

if(!apikeyInput) return res.sendFile(__path + '/views/404.html')
if(apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')
const { default: Axios } = require('axios')
const cheerio = require('cheerio')

Axios.get('https://jadwalnonton.com/now-playing')
.then(({ data }) => {
     const $ = cheerio.load(data)
     let title = []
     let url = []
     let img = []
 	$('div.row > div.item > div.clearfix > div.rowl > div.col-xs-6 > a').get().map((rest) => {
         url.push($(rest).attr('href'))
         })
         $('div.row > div.item > div.clearfix > div.rowl > div.col-xs-6 > a > img').get().map((rest) => {
        	title.push($(rest).attr('alt'))
         })
         $('div.row > div.item > div.clearfix > div.rowl > div.col-xs-6 > a > img').get().map((rest) => {
        	img.push($(rest).attr('src'))
         })
     let result = []
     for (let i = 0; i < url.length; i++) {
          result.push({
               	url: url[i],
               	title: title[i],
               	img: img[i]
          })
     }
     res.send({
     creator:  `${creator}`,
     status: true,
     result: result
     })
})
})

router.get('/short/tiny', async (req, res, next) => {
    var apikeyInput = req.query.apikey,
        url = req.query.url

	if(!apikeyInput) return res.sendFile(__path + '/views/404.html')
	if(apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')
     if (!url) return res.json(loghandler.noturl)

     request(`https://tinyurl.com/api-create.php?url=${url}`, function (error, response, body) {
         try {
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result : {
                     link : `${body}`,
                 },
                 message : `jangan lupa follow ${creator}`
             })
         } catch (e) {
             console.log('Error :', color(e,'red'))
             res.json(loghandler.invalidlink)
         }
     })
})

router.get('/base', async (req, res, next) => {
	var type = req.query.type,
		encode = req.query.encode,
		decode = req.query.decode,
		apikeyInput = req.query.apikey;
		if (!apikeyInput) return res.sendFile(__path + '/views/404.html')
		if (apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')
		if (!type) return res.json({status: false, creator, code: 404, message: 'masukan parameter type, type yang tersedia : base64 , base32'})
		if (type == 'base64' && encode){
				Base("b64enc", encode)
				.then(result => {
					res.json({
						status:true,
						creator: `${creator}`,
						result
					})
				})
			} else if (type == 'base64' && decode){
				Base("b64dec", decode)
				.then(result => {
					res.json({
						status: true,
						creator: `${creator}`,
						result
					})
				})
			} else if (type == 'base32' && encode){
				Base('b32enc', encode)
				.then(result => {
					res.json({
						status:true,
						creator: `${creator}`,
						result
					})
				})
			} else if (type == 'base32' && decode){
				Base('b32dec', decode)
				.then(result => {
					res.json({
						status:true,
						creator: `${creator}`,
						result
					})
				})
			} else if(!(encode || decode)){
				res.json({
					status:false,
					creator: `${creator}`,
					message: "tambahkan parameter encode/decode"
				})
			} else {
				res.json(loghandler.error)
			}
})

router.get('/playstore', async (req, res, next) => {
    var name = req.query.name
    apikeyInput = req.query.apikey
    if (!apikeyInput) return res.sendFile(__path + '/views/404.html')
    if (apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')
    if (!name) return res.json('Masukan parameter name!')
    playstore(name)
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            res.json(err)
        })
})

router.get('/heroml', async (req, res, next) => {
    var hero = req.query.hero,
    apikeyInput = req.query.apikey;
    if (!apikeyInput) return res.sendFile(__path + '/views/404.html')
    if (apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')
    if (!hero) return res.json(loghandler.nottext)
    heroDetail(hero)
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            res.json(err)
        })
})

router.get('/herolist', async (req, res, next) => {
    var apikeyInput = req.query.apikey
    if (!apikeyInput) return res.sendFile(__path + '/views/404.html')
    if (apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')
    heroList()
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            res.json(err)
        })
})

router.get('/zodiac', async (req, res, next) => {
    var query = req.query.query
    apikeyInput = req.query.apikey
    if (!apikeyInput) return res.sendFile(__path + '/views/404.html')
    if (apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')
    zodiac(query)
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            res.json(err)
        })
})

router.get('/nulis/bukukiri', async (req, res, next) => {
    var text = req.query.text
    apikeyInput = req.query.apikey
    if (!apikeyInput) return res.sendFile(__path + '/views/404.html')
    if (apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')
    if(!text) return res.json('Masukan parameter text!')
    const splitText = text.replace(/(\S+\s*){1,9}/g, '$&\n')
    const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
    spawn('convert', [
        './media/nulis/image/buku/sebelumkiri.jpg',
        '-font',
        './media/nulis/font/Indie-Flower.ttf',
        '-size',
        '960x1280',
        '-pointsize',
        '22',
        '-interline-spacing',
        '2',
        '-annotate',
        '+140+153',
        fixHeight,
        './media/nulis/image/buku/setelahkiri.jpg'
    ])
    .on('error', (e) => console.error(e))
    .on('exit', () => {
        res.sendFile(__path + '/media/nulis/image/buku/setelahkiri.jpg')
    })
})

router.get('/nulis/bukukanan', async (req, res, next) => {
    var text = req.query.text
    apikeyInput = req.query.apikey
    if (!apikeyInput) return res.sendFile(__path + '/views/404.html')
    if (apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')
    if(!text) return res.json('Masukan parameter text!')
    const splitTexts = text.replace(/(\S+\s*){1,9}/g, '$&\n')
    const fixHeights = splitTexts.split('\n').slice(0, 31).join('\n')
    spawn('convert', [
        './media/nulis/image/buku/sebelumkanan.jpg',
        '-font',
        './media/nulis/font/Indie-Flower.ttf',
        '-size',
        '960x1280',
        '-pointsize',
        '23',
        '-interline-spacing',
        '2',
        '-annotate',
        '+128+129',
        fixHeights,
        './media/nulis/image/buku/setelahkanan.jpg'
    ])
    .on('error', (e) => console.error(e))
    .on('exit', () => {
        res.sendFile(__path + '/media/nulis/image/buku/setelahkanan.jpg')
    })
})

router.get('/nulis/foliokiri', async (req, res, next) => {
    var text = req.query.text
    apikeyInput = req.query.apikey
    if (!apikeyInput) return res.sendFile(__path + '/views/404.html')
    if (apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')
    if(!text) return res.json('Masukan parameter text!')
    const splitTextk = text.replace(/(\S+\s*){1,9}/g, '$&\n')
    const fixHeightk = splitTextk.split('\n').slice(0, 31).join('\n')
    spawn('convert', [
        './media/nulis/image/folio/sebelumkiri.jpg',
        '-font',
        './media/nulis/font/Indie-Flower.ttf',
        '-size',
        '1720x1280',
        '-pointsize',
        '23',
        '-interline-spacing',
        '4',
        '-annotate',
        '+48+185',
        fixHeightk,
        './media/nulis/image/folio/setelahkiri.jpg'
    ])
    .on('error', (e) => console.error(e))
    .on('exit', () => {
        res.sendFile(__path + '/media/nulis/image/folio/setelahkiri.jpg')
    })
})

router.get('/nulis/foliokanan', async (req, res, next) => {
    var text = req.query.text
    apikeyInput = req.query.apikey
    if (!apikeyInput) return res.sendFile(__path + '/views/404.html')
    if (apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')
    if(!text) return res.json('Masukan parameter text!')
    const splitTextss = text.replace(/(\S+\s*){1,9}/g, '$&\n')
    const fixHeightss = splitTextss.split('\n').slice(0, 31).join('\n')
    spawn('convert', [
        './media/nulis/image/folio/sebelumkanan.jpg',
        '-font',
        './media/nulis/font/Indie-Flower.ttf',
        '-size',
        '960x1280',
        '-pointsize',
        '23',
        '-interline-spacing',
        '3',
        '-annotate',
        '+89+190',
        fixHeightss,
        './media/nulis/image/folio/setelahkanan.jpg'
    ])
    .on('error', (e) => console.error(e))
    .on('exit', () => {
        res.sendFile(__path + '/media/nulis/image/folio/setelahkanan.jpg')
    })
})

router.get('/shoope', async (req, res, next) => {
    var query = req.query.query
    apikeyInput = req.query.apikey
    if (!apikeyInput) return res.sendFile(__path + '/views/404.html')
    if (apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')
    if (!query) return res.json('Masukan parameter query!')
    shoope(query)
        .then(result => res.json(result))
        .catch(err => res.json(err))
})

router.get('/kuis/family100', async (req, res, next) => {
    var apikeyInput = req.query.apikey
    if (!apikeyInput) return res.sendFile(__path + '/views/404.html')
    if (apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')
    game.family()
        .then(result => res.json(result))
        .catch(err => res.json(err))
})


router.get('/kisahnabi', async (req, res, next) => {
	var nabi = req.query.nabi,
		apikeyInput = req.query.apikey;

		if (!apikeyInput) return res.sendFile(__path + '/views/404.html')
		if (apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')
		Searchnabi(nabi)
		.then(result => {
			res.json({
				creator: creator,
				result
			})
		})
		.catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
})

router.get('/xnxx-search', async (req, res, next) => {
    var query = req.query.query
    apikeyInput = req.query.apikey
    if (!apikeyInput) return res.sendFile(__path + '/views/404.html')
    if (apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')
    if (!query) return res.json('Masukan parameter query!')
    xsearch(query)
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            res.json(err)
        })
})

router.get('/dl/xnxx', async (req, res, next) => {
    var url = req.query.url
    apikeyInput = req.query.apikey
    if (!apikeyInput) return res.sendFile(__path + '/views/404.html')
    if (apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')
    if (!url) return res.json('Masukan parameter url!')
    xdetail(url)
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            res.json(err)
        })
})

router.get('/dl/tiktok', async (req, res, next) => {
    var url = req.query.url
    apikeyInput = req.query.apikey
    if (!apikeyInput) return res.sendFile(__path + '/views/404.html')
    if (apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')
    if (!url) return res.json('Masukan parameter url!')
    tiktokNoWm(url)
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            res.json(err)
        })
})

router.get('/igstalk', async (req, res, next) => {
    var username = req.query.username
    apikeyInput = req.query.apikey
    if (!apikeyInput) return res.sendFile(__path + '/views/404.html')
    if (apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')
    getUser(username)
    .then(result => {
        res.json(result)
    })
    .catch(e => {
        console.log(e)
        res.json(e)
    })
})

router.get('/dl/igdl', async (req, res, next) => {
    var url = req.query.url
    apikeyInput = req.query.apikey
    if (!apikeyInput) return res.sendFile(__path + '/views/404.html')
    if (apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')
    if (!url) return res.json('Masukan parameter url!')
    igdl(url)
        .then(result => {
            res.json(result)
        })
        .catch(e => {
            res.json(e)
        })
})

router.get('/dl/igreels', async (req, res, next) => {
    var url = req.query.url
    apikeyInput = req.query.apikey
    if (!apikeyInput) return res.sendFile(__path + '/views/404.html')
    if (apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')
    if (!url) return res.json('Masukan parameter URL!')
    igreels(url)
        .then(result => {
            res.json(result)
        })
        .catch(e => {
            res.json(e)
        })
})

router.get('/dl/igstory', async (req, res, next) => {
    var username = req.query.username
    apikeyInput = req.query.apikey
    if (!apikeyInput) return res.sendFile(__path + '/views/404.html')
    if (apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')
    if (!username) return res.json('Masukan parameter username!')
    igstory(username)
        .then(result => {
            res.json(result)
        })
        .catch(e => {
            res.json(e)
        })
})

router.get('/tiktokdl/tiktoknowm', async (req, res, next) => {
    var url = req.query.url
    apikeyInput = req.query.apikey
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (apikeyInput != 'youreyes') return res.json(loghandler.invalidKey)
    tktd.ssstik(url)
        .then(resp => {
            res.json({
                creator: "Arjn",
                code: 200,
                status: true,
                result: {
                    text: resp.text,
                    video: resp.videonowm
                }
            })
        })
        .catch(() => {
            res.json({
                creator: "Arjn",
                code: 404,
                status: false,
                message: "Error!"
            })
        })
})

router.get('/dl/ytmp4', async (req, res, next) => {
    var url = req.query.url.toString()
    apikeyInput = req.query.apikey
    if (!apikeyInput) return res.sendFile(__path + '/views/404.html')
    if (apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')
    ytmp4(url)
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            res.json(err)
        })
})

router.get('/pinterest', async (req, res, next) => {
    var query = req.query.query
    apikeyInput = req.query.apikey
    if (!apikeyInput) return res.sendFile(__path + '/views/404.html')
    if (apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')
    if (!query) return res.json('Masukan parameter query!')
    pinterest(query)
        .then(result => {
            res.json(result)
        })
        .catch(e => {
            res.json(e)
        })
})

router.get('/chord', async (req, res, next) => {
    var query = req.query.query
    // apikeyInput = req.query.apikey
    // if (!apikeyInput) return res.sendFile(__path + '/views/404.html')
    // if (apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')
    if (!query) return res.json({ creator: '@arjn.me', status: false, message: '[!] Masukkan paramater query'})
    chordRes(query)
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            res.json(err)
            console.error(err)
        })
})

router.get('/lirik', async (req, res, next) => {
    var query = req.query.query
    apikeyInput = req.query.apikey
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (apikeyInput != 'youreyes') return res.json(loghandler.invalidKey)
    if (!query) return res.json('Masukan parameter query!')
    lirikRes(query)
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            res.json(err)
        })
})

router.get('/ucapan', async (req, res, next) => {
    var apikeyInput = req.query.apikey
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (apikeyInput != 'youreyes') return res.json(loghandler.invalidKey)
    ucapanRes()
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            res.json(err)
        })
})

router.get('/countdown', async (req, res, next) => {
    var waktu = req.query.waktu
    apikeyInput = req.query.apikey
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (apikeyInput != 'youreyes') return res.json(loghandler.invalidKey)
    if (!waktu) return res.json({ creator: "Arjn", status: false, message: "Masukan parameter waktu!" })
    timer(waktu, async function (timeRemaining) {
        try {
            const road = `${timeRemaining.days}Hari, ${timeRemaining.hours}Jam, ${timeRemaining.minutes}Menit, ${timeRemaining.seconds}Detik`
            res.json({
                creator: "Arjn",
                code: 200,
                status: true,
                result: road
            })
        } catch (err) {
            res.json({
                creator: "Arjn",
                code: 503,
                status: false,
                message: "Server maintenance!"
            })
        }
    })
})

router.get('/ytsearch', async (req, res, next) => {
    var query = req.query.query.replace(' ', '+')
    apikeyInput = req.query.apikey
    if (!apikeyInput) return res.sendFile(__path + '/views/404.html')
    if (apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')
    ytSearch(query)
        .then(resp => {
            res.json(resp)
        })
        .catch(err => {
            res.json(err)
            console.log(err)
        })
})

router.get('/dl/ytmp3', async (req, res, next) => {
    var url = req.query.url
    // apikeyInput = req.query.apikey
    // if (!apikeyInput) return res.sendFile(__path + '/views/404.html')
    // if (apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')
    ytmp3(url)
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            res.json(err)
        })
})

router.get('/dl/play', async (req, res, next) => {
    var query = req.query.query
    apikeyInput = req.query.apikey
    if (!apikeyInput) return res.sendFile(__path + '/views/404.html')
    if (apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')
    ytPlay(query)
    .then(result => {
        res.json(result)
    })
    .catch(err => {
        console.log(err)
        res.json(err)
    })

})

router.get('/mediafire', async (req, res, next) => {
    var url = req.query.url
    apikeyInput = req.query.apikey
    if (!apikeyInput) return res.sendFile(__path + '/views/404.html')
    if (apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')
    mfireRes(url)
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            res.json(err)
        })
})

router.get('/jadwaltv', async (req, res, next) => {
    var query = req.query.query
    apikeyInput = req.query.apikey
    if (!apikeyInput) return res.sendFile(__path + '/views/404.html')
    if (apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')
    jadwaltv(query)
        .then(resp => {
            res.json(resp)
        })
        .catch(err => {
            res.json(err)
        })
})

router.get('/infogempa', async (req, res, next) => {
	        var apikeyInput = req.query.apikey

		if (!apikeyInput) return res.sendFile(__path + '/views/404.html')
		if (apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')
		Gempa()
		.then(result => {
			res.json({
				creator: creator,
				result
			})
		})
		.catch(e => {
			console.log('Error :', color(e, 'red'))
			res.json(loghandler.error)
		})
})

router.get('/hadits', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            kitab = req.query.kitab,
            nomor = req.query.nomor
            
	if(!apikeyInput) return res.sendFile(__path + '/views/404.html')
	if(apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')
    if (!kitab) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kitab"})
    if (!nomor) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter nomor"})

       fetch(encodeURI(`https://hadits-api-zhirrr.vercel.app/books/${kitab}/${nomor}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/quran', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            surah = req.query.surah,
            ayat = req.query.ayat
            
	if(!apikeyInput) return res.sendFile(__path + '/views/404.html')
	if(apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')
    if (!surah) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter surah"})
    if (!ayat) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter ayat"})

       fetch(encodeURI(`https://alquran-apiii.vercel.app/surah/${surah}/${ayat}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/fbdown', async (req, res, next) => {
    var url = req.query.url
    apikeyInput = req.query.apikey
    if (!apikeyInput) return res.sendFile(__path + '/views/404.html')
    if (apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')
    fbdown(url)
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            res.json(err)
        })
})

router.get('/dl/twitter', async (req, res, next) => {
    var url = req.query.url
    apikeyInput = req.query.apikey
    if (!apikeyInput) return res.sendFile(__path + '/views/404.html')
    if (apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')
    twtdl(url)
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            res.json(err)
        })
})


router.get('/textmaker/metallic', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.sendFile(__path + '/views/404.html')
	if(apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'neon' && theme != 'glow') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'neon') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            creator: "Arjn",
                                            code: 200,
                                            status: true,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'glow') {
            request.post({
                url: "https://photooxy.com/other-design/create-metallic-text-glow-online-188.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/textmaker/alam', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.sendFile(__path + '/views/404.html')
	if(apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'summer' && theme != 'flower') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'summer') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            creator: "Arjn",
                                            code: 200,
                                            status: true,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'flower') {
            request.post({
                url: "https://photooxy.com/art-effects/flower-typography-text-effect-164.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            creator: "Arjn",
                                            code: 200,
                                            status: true,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/muslim/tahlil', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.sendFile(__path + '/views/404.html')
	if(apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataTahlil.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/muslim/wirid', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.sendFile(__path + '/views/404.html')
	if(apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataWirid.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/muslim/ayatkursi', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.sendFile(__path + '/views/404.html')
	if(apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataAyatKursi.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/muslim/doaharian', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.sendFile(__path + '/views/404.html')
	if(apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataDoaHarian.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/muslim/bacaanshalat', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.sendFile(__path + '/views/404.html')
	if(apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataBacaanShalat.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/muslim/niatshalat', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.sendFile(__path + '/views/404.html')
	if(apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataNiatShalat.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/muslim/kisahnabi', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.sendFile(__path + '/views/404.html')
	if(apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataKisahNabi.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/muslim/asmaulhusna', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.sendFile(__path + '/views/404.html')
	if(apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/dataAsmaulHusna.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/muslim/niatshubuh', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.sendFile(__path + '/views/404.html')
	if(apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatShubuh.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/muslim/niatdzuhur', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.sendFile(__path + '/views/404.html')
	if(apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatDzuhur.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/muslim/niatmaghrib', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.sendFile(__path + '/views/404.html')
	if(apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatMaghrib.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/muslim/niatisya', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.sendFile(__path + '/views/404.html')
	if(apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatIsya.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/muslim/niatashar', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.sendFile(__path + '/views/404.html')
	if(apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/data/NiatAshar.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/wallpaper/cyberspace', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.sendFile(__path + '/views/404.html')
	if(apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/CyberSpace.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/wallpaper/teknologi', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.sendFile(__path + '/views/404.html')
	if(apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/Technology.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/wallpaper/muslim', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.sendFile(__path + '/views/404.html')
	if(apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/Islamic.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/wallpaper/programming', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.sendFile(__path + '/views/404.html')
	if(apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/Programming.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/wallpaper/pegunungan', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.sendFile(__path + '/views/404.html')
	if(apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/Mountain.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/news', async (req, res, next) => {
    // var apikeyInput = req.query.apikey
    // if (!apikeyInput) return res.sendFile(__path + '/views/404.html')
    // if (apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')
    newsRes()
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            res.json(err)
            console.error(err)
        })
})

router.get('/wikipedia', async (req, res, next) => {
    var search = req.query.search
    // apikeyInput = req.query.apikey
    // if (!apikeyInput) return res.sendFile(__path + '/views/404.html')
    // if (apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')
    if (!search) return res.json({ creator: '@arjn.me', status: false, message: '[!] Masukan parameter search'})
    wikiRes(search)
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            res.json(err)
            console.log(err)
        })
})

router.get('/randomquote/muslim', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.sendFile(__path + '/views/404.html')
	if(apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/quote?type=agamis`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/drakorasia', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            search = req.query.search
            
	if(!apikeyInput) return res.sendFile(__path + '/views/404.html')
	if(apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')
        if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})

       fetch(encodeURI(`http://docs-api-zahirrr.herokuapp.com/api/drakorasia?search=${search}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/jadwalshalat', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            kota = req.query.kota
            
	if(!apikeyInput) return res.sendFile(__path + '/views/404.html')
	if(apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')
        if(!kota) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kota"})

       fetch(encodeURI(`https://raw.githubusercontent.com/Zhirrr/Zhirrr-Database/main/adzan/${kota}/2021/03.json`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/fakedata', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            country = req.query.country
            
	if(!apikeyInput) return res.sendFile(__path + '/views/404.html')
	if(apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')
        if(!country) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter country"})

       fetch(encodeURI(`https://fakename-api-zhirrr.vercel.app/api/fakename?country=${country}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/hilih', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            kata = req.query.kata
            
	if(!apikeyInput) return res.sendFile(__path + '/views/404.html')
	if(apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')
        if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})

       fetch(encodeURI(`https://hilih-api-zhirrr.vercel.app/api/hilih?kata=${kata}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/liriklagu', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            lagu = req.query.lagu
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'youreyes') return res.json(loghandler.invalidKey)
        if(!lagu) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})

       fetch(encodeURI(`https://python-api-zhirrr.herokuapp.com/api/lirik?search=${lagu}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/chordlagu', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            lagu = req.query.lagu
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'youreyes') return res.json(loghandler.invalidKey)
        if(!lagu) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})

       fetch(encodeURI(`https://python-api-zhirrr.herokuapp.com/api/chord?q=${lagu}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/random/asmaulhusna', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.sendFile(__path + '/views/404.html')
	if(apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')

       fetch(encodeURI(`https://python-api-zhirrr.herokuapp.com/api/random/asmaulhusna`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/kbbi', async (req, res, next) => {
    var query = req.query.query
    // apikeyInput = req.query.apikey
            
	// if(!apikeyInput) return res.sendFile(__path + '/views/404.html')
	// if(apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')
    if(!query) return res.json({ creator: '@arjn.me', status: false, message: '[!] Masukkan parameter query'})
    kbbi(query)
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            res.json(err)
        })
       
})


router.get('/kodepos', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    kota = req.query.kota
            
	if(!apikeyInput) return res.sendFile(__path + '/views/404.html')
	if(apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')
	if(!kota) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kota"})

       fetch(encodeURI(`https://kodepos-api-zhirrr.vercel.app/?q=${kota}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/cuaca', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    kabupaten = req.query.kabupaten
            
	if(!apikeyInput) return res.sendFile(__path + '/views/404.html')
	if(apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')
	if(!kabupaten) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kabupaten"})
       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/cuaca?kabupaten=${kabupaten}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/random/meme', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.sendFile(__path + '/views/404.html')
	if(apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/meme`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/quotes/kanye', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.sendFile(__path + '/views/404.html')
	if(apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/quote?type=kanye`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/translate', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    kata = req.query.kata
            
	if(!apikeyInput) return res.sendFile(__path + '/views/404.html')
	if(apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')
	if(!kata) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter kata"})
       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/translate?text=${kata}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/anime/kusonime', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    search = req.query.search
            
	if(!apikeyInput) return res.sendFile(__path + '/views/404.html')
	if(apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')
	if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})
       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/kusonime?search=${search}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/gabut', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.sendFile(__path + '/views/404.html')
	if(apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/bosan`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/manga', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
	    search = req.query.search
            
	if(!apikeyInput) return res.sendFile(__path + '/views/404.html')
	if(apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')
	if(!search) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter search"})
       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/manga?keyword=${search}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/random/wallpaper', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.sendFile(__path + '/views/404.html')
	if(apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')

       fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/random/wallpaper?genre=acak`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/kuis/caklontong', async (req, res, next) => {
    var apikeyInput = req.query.apikey

    if (!apikeyInput) return res.sendFile(__path + '/views/404.html')
    if (apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')
    game.ttsLontong()
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            res.json(err)
        })
})

router.get('/kuis/asahotak', async (req, res, next) => {
    var apikeyInput = req.query.apikey

    if (!apikeyInput) return res.sendFile(__path + '/views/404.html')
    if (apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')
    game.asahOtak()
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            res.json(err)
        })
})


router.get('/kuis/tebakgambar', async (req, res, next) => {
    var apikeyInput = req.query.apikey

    if (!apikeyInput) return res.sendFile(__path + '/views/404.html')
    if (apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')
    game.isTg()
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            res.json(err)
        })
})

router.get('/kuis/susunkata', async (req, res, next) => {
    var apikeyInput = req.query.apikey

    if (!apikeyInput) return res.sendFile(__path + '/views/404.html')
    if (apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')
    game.susunKata()
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            res.json(err)
        })
})

router.get('/kuis/tekateki', async (req, res, next) => {
    var apikeyInput = req.query.apikey

    if (!apikeyInput) return res.sendFile(__path + '/views/404.html')
    if (apikeyInput != 'youreyes') return res.sendFile(__path + '/views/invalid.html')
    game.tekaTeki()
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            res.json(err)
        })
})

router.get('/textpro/pencil', async (req, res, next) => {
	var text1 = req.query.text
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"})   
	textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
})


router.get('/textpro/glitch', async (req, res, next) => {
	var text1 = req.query.text
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"})   
	textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
})


router.get('/textpro/blackpink', async (req, res, next) => {
	var text1 = req.query.text
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"})   
	textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
})


router.get('/textpro/berry', async (req, res, next) => {
	var text1 = req.query.text
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"})   
	textpro("https://textpro.me/create-berry-text-effect-online-free-1033.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
})


router.get('/textpro/neon', async (req, res, next) => {
	var text1 = req.query.text
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"})   
	textpro("https://textpro.me/neon-light-text-effect-online-882.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
})



router.get('/textpro/logobear', async (req, res, next) => {
	var text1 = req.query.text
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"})   
	textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
})


router.get('/textpro/3dchristmas', async (req, res, next) => {
	var text1 = req.query.text
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"})   
	textpro("https://textpro.me/3d-christmas-text-effect-by-name-1055.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
})


router.get('/textpro/thunder', async (req, res, next) => {
	var text1 = req.query.text
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"})   
	textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
})


router.get('/textpro/3dboxtext', async (req, res, next) => {
	var text1 = req.query.text
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"})   
	textpro("https://textpro.me/3d-box-text-effect-online-880.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
})


router.get('/textpro/glitch2', async (req, res, next) => {
	var text1 = req.query.text
	var text2 = req.query.text2
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"})   
	if (!text2 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text2"}) 
	textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html", [text1,text2])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
})

router.get('/textpro/glitchtiktok', async (req, res, next) => {
	var text1 = req.query.text
	var text2 = req.query.text2
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"})   
	if (!text2 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text2"}) 
	textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [text1,text2])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
})

router.get('/textpro/video-game-classic', async (req, res, next) => {
	var text1 = req.query.text
	var text2 = req.query.text2
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"})   
	if (!text2 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text2"}) 
	textpro("https://textpro.me/video-game-classic-8-bit-text-effect-1037.html", [text1,text2])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
})

router.get('/textpro/marvel-studios', async (req, res, next) => {
	var text1 = req.query.text
	var text2 = req.query.text2
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"})   
	if (!text2 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text2"}) 
	textpro("https://textpro.me/create-logo-style-marvel-studios-online-971.html", [text1,text2])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
})

router.get('/textpro/ninja-logo', async (req, res, next) => {
	var text1 = req.query.text
	var text2 = req.query.text2
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"})   
	if (!text2 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text2"}) 
	textpro("https://textpro.me/create-ninja-logo-online-935.html", [text1,text2])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
})

router.get('/textpro/green-horror', async (req, res, next) => {
	var text1 = req.query.text
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"})   
	textpro("https://textpro.me/create-green-horror-style-text-effect-online-1036.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
})

router.get('/textpro/magma', async (req, res, next) => {
	var text1 = req.query.text
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"})   
	textpro("https://textpro.me/create-a-magma-hot-text-effect-online-1030.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
})

router.get('/textpro/3d-neon-light', async (req, res, next) => {
	var text1 = req.query.text
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"})   
	textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
})

router.get('/textpro/3d-orange-juice', async (req, res, next) => {
	var text1 = req.query.text
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"})   
	textpro("https://textpro.me/create-a-3d-orange-juice-text-effect-online-1084.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
})

router.get('/textpro/chocolate-cake', async (req, res, next) => {
	var text1 = req.query.text
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"})   
	textpro("https://textpro.me/chocolate-cake-text-effect-890.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
})

router.get('/textpro/strawberry', async (req, res, next) => {
	var text1 = req.query.text
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"})   
	textpro("https://textpro.me/strawberry-text-effect-online-889.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
})


router.get('/photooxy/flaming', async (req, res, next) => {
	var text1 = req.query.text
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"})   
	photooxy("https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
})


router.get('/photooxy/shadow-sky', async (req, res, next) => {
	var text1 = req.query.text
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"})   
	photooxy("https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
})


router.get('/photooxy/metallic', async (req, res, next) => {
	var text1 = req.query.text
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"})   
	photooxy("https://photooxy.com/other-design/create-metallic-text-glow-online-188.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
})


router.get('/photooxy/naruto', async (req, res, next) => {
	var text1 = req.query.text
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"})   
	photooxy("https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
})


router.get('/photooxy/pubg', async (req, res, next) => {
	var text1 = req.query.text
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"})   
	var text2 = req.query.text2
	if (!text2 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text2"})  
	photooxy("https://photooxy.com/battlegrounds/make-wallpaper-battlegrounds-logo-text-146.html", [text1,text2])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
})

router.get('/photooxy/under-grass', async (req, res, next) => {
	var text1 = req.query.text
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"})   
	photooxy("https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
})

router.get('/photooxy/harry-potter', async (req, res, next) => {
	var text1 = req.query.text
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"})   
	photooxy("https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
})

router.get('/photooxy/flower-typography', async (req, res, next) => {
	var text1 = req.query.text
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"})   
	photooxy("https://photooxy.com/art-effects/flower-typography-text-effect-164.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
})

router.get('/photooxy/picture-of-love', async (req, res, next) => {
	var text1 = req.query.text
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"})   
	photooxy("https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
})

router.get('/photooxy/coffee-cup', async (req, res, next) => {
	var text1 = req.query.text
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"})   
	photooxy("https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
})

router.get('/photooxy/butterfly', async (req, res, next) => {
	var text1 = req.query.text
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"})   
	photooxy("https://photooxy.com/logo-and-text-effects/butterfly-text-with-reflection-effect-183.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
})

router.get('/photooxy/night-sky', async (req, res, next) => {
	var text1 = req.query.text
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"})   
	photooxy("https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
})


router.get('/photooxy/carved-wood', async (req, res, next) => {
	var text1 = req.query.text
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"})   
	photooxy("https://photooxy.com/logo-and-text-effects/carved-wood-effect-online-171.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
})


router.get('/photooxy/illuminated-metallic', async (req, res, next) => {
	var text1 = req.query.text
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"})   
	photooxy("https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
})

router.get('/photooxy/sweet-candy', async (req, res, next) => {
	var text1 = req.query.text
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"})   
	photooxy("https://photooxy.com/logo-and-text-effects/sweet-andy-text-online-168.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
.catch((err) =>{
 res.json(loghandler.error)
})
})

module.exports = router
