import { Injectable } from '@nestjs/common';
import mydata from './data.json';

@Injectable()
export class AppService {
    getjson():any{
    /*const jsondata = (<any>mydata);
    const values = Object.values(jsondata);
    const labels = Object.values(jsondata);
    console.log(jsondata);
    return [values];*/
    }
}
