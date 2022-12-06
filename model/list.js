import cheerio from 'cheerio'
import axios from 'axios'

const find = async (url) => {
  var link = 'https://piratebayproxy.live/'+url
  const data =[]
  try {
    let res = await axios.get(link);
      let html = res.data;
      const $ = cheerio.load(html)
      $('#searchResult tr' , html).each(function() {
          let title = $(this).find('a.detLink').text()
          let link = $(this).find('.detName a').attr('href')
          var pagges = $('#searchResult tr td[colspan="9"]').text().trim() 
          let cats = $(this).find('.vertTh > center > a').text()
          let size = $(this).find('font.detDesc').text().replace("ULed by" , "     ")
          let upload = $(this).find('font.detDesc').text().replace("Size" , "     ")
          data.push({ title, link, cats , size , upload })
       })
  return data
  } catch (error) {
    return error
  }
}
  export default find;

