import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import url from '../providers/api';

@Injectable()
export class ApiService{
    api:any = url.api;
	constructor(
		private http: HttpClient
        ){

        }

        getNotice(){
           /*  return new Promise<any>(async (resolve, reject) => {
                this.http.get(`${this.api}`).subscribe((res:any) => {
                    console.log(res);
                    resolve(res);
                },(error:any) => {
					reject(error.error);
				});
            }); */
            return this.http.get(this.api);
            /* this.http.get(`${url.api}`)._subscribe((res)=>) */
        }
}