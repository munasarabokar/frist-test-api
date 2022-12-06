function check(slug) {
    if(slug == 'movies') {
    const data = {
        title: "Movie" , type: "201" , cat:"browse" , page: "movies"
    }
      return data

    } else if(slug == 'tv') {
        const data = {
            title: "Tv" , type: "205" , cat:"browse" , page: "tv"
        }
     return data
    }
    else if(slug == 'apps') {
        const data = {
            title: "Apps" , type: "301" , cat:"browse" , page: "apps"
        }
        return data
     }
     else if(slug == 'games') {
        const data = {
            title: "Games" , type: "401" , cat:"browse" , page: "games"
        }
      return data
     }
     else if(slug == 'topmovie') {
        const data = {
            title: "Top 100 Movies" , type: "201" , cat:"top" , page: "movies"
        }
      return data
     }
     else if(slug == 'toptv') {
        const data = {
            title: "Top 100 Tv" , type: "205" , cat:"top" , page: "tv"
        }
      return data
     }
     else if(slug == 'topapps') {
        const data = {
            title: "Top 100 Apps" , type: "301" , cat:"top" , page: "apps"
        }
      return data
     } else if(slug == 'topgames') {
        const data = {
            title: "Top 100 Games" , type: "401" , cat:"top" , page: "games"
        }
      return data
     } else {
      return null
     }
     
  }

  export default check