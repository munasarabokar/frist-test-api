function title(page) {
    var n_arr = []
    const words = page.split(". ")
    words.forEach(counts)
    function counts(title) {
      n_arr.push({ title })
    }
    return n_arr
  }

  export default title