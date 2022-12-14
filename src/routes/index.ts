import { Router } from 'express';
import * as PageController from '../controllers/pageController';
import * as SearchController from '../controllers/searchController';

const router = Router();

router.get('/',PageController.home);
router.get('/solar',PageController.solar);
router.get('/lighting',PageController.lighting);
router.get('/innovation',PageController.innovation);

router.get('/search', SearchController.search);

export default router;
