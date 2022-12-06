import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors';
import Routermovie from './routes/movie.js'

const caaqil = express();
// caaqil.use(cors())
caaqil.use(cookieParser())
caaqil.use(express.json())

var allowlist = ['http://example1.com', 'http://example2.com']
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (allowlist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}

caaqil.use('/movie' , cors(corsOptionsDelegate) , Routermovie)

caaqil.listen(8008 , ()=> {
    console.log('port is open 8008');
})

///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


//ssh -T munasarabokar@github.com