import { SerializationHelper } from './serialization-helper';
import * as request from 'request-promise';

export class Apibase {

	constructor() { }

	public static getBaseUrl(): string {
		return process.env.API_BASE_URL;
	}

	private static makeHttpPost(token:string, url: string, requestBody: any, form: any): request.RequestPromise {
	
		var options = {
			url: url,
			method: 'POST',
			headers: {
                'content-type': 'application/json',
                 'Authorization': 'Bearer ' + token
			},
			rejectUnauthorized: false,
			json: true,
			body: requestBody ? requestBody : null,
			form: form ? form : null 
		};	
		var result= request(options);		
		return result;
	}

	static async httpPost<T>(token:string, url: string, responseClass: { new(): T }, jsonBody: any, form: any): Promise<T> {
		
		let response = await this.makeHttpPost(token, url, jsonBody,form);				
		return SerializationHelper.toInstance(new responseClass(), response);
	}
}
