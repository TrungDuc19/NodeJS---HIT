import { Router } from 'express';
import { getAddProduct, getHome, getProduct } from '../controllers/homeController.js';

const router = Router();

router.get('/', getHome);
router.get('/product', getProduct);
router.get('/add-product', getAddProduct);

export default router;
