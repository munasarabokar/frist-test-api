import check from '../model/checking.js';
import find from '../model/list.js';
import gis from 'async-g-i-s'
import cheerio from 'cheerio'
import request from 'request';
import title from '../model/loop/title.js';


export const details = (req , res ) => {
    (async () => {
      var link = 'https://piratebayproxy.live/torrent/'+req.params.links
      const data = []
      request(link, (err , response , html) => {
           
        if (!err && response.statusCode == 200) {
            (async () => {
              try {
                const $ = cheerio.load(html)
                const title = $("div#title").text()
                const download = $('.download').find('a').attr('href')
                const file = $("dt:contains('Files:') + dd").text()
                const type = $("dt:contains('Type:') + dd a").text()
                const size = $("dt:contains('Size:') + dd").text()
                const by = $("dt:contains('By:') + dd a").text()
                const upload = $("dt:contains('Uploaded:') + dd").text()
                const desc = $("pre").text().trim()
                const results = await gis(`"${title.substring(0,20)}"` ,{safe:"on"});
                 let images = results.slice(0, 1)
                 let urls = images[0]
                 data.push({ title, download, file , type , size, by, upload , desc, urls }) 
                 res.json(data)
              }  catch (error) {
              res.json('')
            }
           })();
        } else {
          res.json('')
        }
       })
       })()
   
}

export const list = (req , res ) => {
(async() => {
   const checking = check(req.params.url)
  if(checking) {
    let urls = checking.cat+'/'+checking.type
    const data = await find(urls)
    res.json(data)
  } else {
    res.json('')
  }
  
})()
}

export const raadi = (req , res ) => {
  const search = req.query.search 
  const types = req.query.type
  
    const t_check = check(types)
    if (t_check) {
      (async () => {
        const ca = check(t_check.page)
        const urls = `search/${search}/1/99/${ca.type}`
        const data = await find(urls)
        if(data[0].title == '' && data[1] == null) {
          res.json('')
        } else {
          res.json(data)
        }
      })()
    } else {
      res.json('')
    } 
 
}