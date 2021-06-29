import Router from 'koa-router';
import combineRouters from 'koa-combine-routers';
//import { selectController, insertController } from './controller/testcontroller.js';
import { selectController, insertController } from './controller/filecontroller.js';

const router = new Router();

const defaultRouter = combineRouters(router);


router.get('/read', selectController);

router.post('/create', insertController);





// router.post('/match', selectController);

//router.post('/createdata', insertController);

export default defaultRouter;