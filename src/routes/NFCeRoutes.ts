import  Router from '@koa/router'; 
import { NFCeController } from '../controllers/NFCeController';

const router = new Router();
const controller = new NFCeController(); 

router.get('/getByRef', controller.getNFCeByRef.bind(controller));
router.post('/parse2xml', controller.parseToXML.bind(controller));

export { router }; 