import { Router } from 'express';
import dictionaryController from '../controllers/dictionaryController';
import searchController from '../controllers/searchController';
import weatherController from '../controllers/weatherController';
import calculatorController from '../controllers/calculatorController';
import mongoController from '../controllers/mongoController';
import youtubeController from '../controllers/youtubeController';
import yelpController from '../controllers/yelpController';
import quotesController from '../controllers/quotesController';
import mapsController from '../controllers/mapsController';
// import redis from '../../dictionary/redisDictionary';

const router = new Router();

router.route('/api/dict').post(dictionaryController.getDefinition);
router.route('/api/thes').post(dictionaryController.getSynonyms);

router.route('/api/searches/').post(searchController.getSearch);
router.route('/api/news/').post(searchController.getNews);
router.route('/api/website/').post(searchController.getWebsite);
router.route('/api/images/').post(searchController.getImages);

router.route('/api/weather').post(weatherController.getWeather);

router.route('/api/calculate').post(calculatorController.getCalculation);

router.route('/api/writemongo').post(mongoController.writeWord);
router.route('/api/searchmongo').post(mongoController.searchWord);

router.route('/api/youtube').post(youtubeController.searchVideo);

router.route('/api/yelp').post(yelpController.searchYelp);

// router.route('/api/writeredis').post(redis.addWord);
// router.route('/api/searchredis').post(redis.searchWord);

router.route('/api/maps').post(mapsController.getMap);

router.route('/api/quote').post(quotesController.getInspirationalQuotes);

export default router;
