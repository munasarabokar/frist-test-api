import express from 'express'
import { list , details , raadi } from '../controller/movie.js';

const router = express.Router()

router.get('/torrent/:links' , details)

router.get('/page/:url' , list)
router.get('/search' , raadi)

export default router