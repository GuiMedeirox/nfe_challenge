import { NFCeService } from "../services/NFCeService";
import { Context } from "koa";
import { Product } from "../types/NF/Product";
const nfceService = new NFCeService();
export class NFCeController {
    async getNFCeByRef(ctx: Context) {
        ctx.body = await nfceService.getByRef();
    }

    parseToXML(ctx: Context){
        ctx.body = nfceService.parseToXML(ctx.request.body as { nfce: Product })
        console.log(nfceService.parseToXML(ctx.request.body as { nfce: Product }));
    }

}