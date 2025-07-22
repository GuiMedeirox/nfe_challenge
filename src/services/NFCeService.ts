import { Builder } from 'xml2js';
export class NFCeService  {

    async getByRef(){
        return 1;
    }

    parseToXML(obj: Object){
        const builder = new Builder();
        return builder.buildObject(obj);
    }


}
