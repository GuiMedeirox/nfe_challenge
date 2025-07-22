import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import {router} from './routes/NFCeRoutes'

const app = new Koa(); 

app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});