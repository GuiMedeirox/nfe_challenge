import { Builder } from 'xml2js';
import { Product } from '../types/NF/Product';
export class NFCeService  {

    async getByRef(){
        return 1;
    }

    parseToXML(obj: Product){
        const builder = new Builder();
        if (obj.pis || obj.cofins || obj.icms) {
            if (obj.pis) {
                obj.pis.total = this.calculatePISandCOFINSandICMS(obj).pis;
            }
            if (obj.cofins) {
                obj.cofins.total = this.calculatePISandCOFINSandICMS(obj).cofins;
            }
            if (obj.icms) {
                obj.icms.total = this.calculatePISandCOFINSandICMS(obj).icms;
            }
        }

        return builder.buildObject(obj);
    }

    calculateTaxes(price: number, aliquot: number){
        return price * (aliquot/100);
    }

    calculatePISandCOFINSandICMS(product: Product){
        const pis = this.calculateTaxes(product.price, product.pis?.aliquota || 0); 
        const cofins = this.calculateTaxes(product.price, product.cofins?.aliquota || 0);
        const icms = this.calculateTaxes(product.price, product.icms?.aliquota || 0); 
        return {pis, cofins, icms};
    }

}
