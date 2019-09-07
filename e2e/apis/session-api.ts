import { Apibase } from './apibase/apibase';
import { Session } from './apibase/model/Session';

export class SessionApi extends Apibase {

	public static async getSession(client_id: string, Client_secret: string, username: string,password): Promise<Session> {
		// const sessionUrl =  super.getBaseUrl() + 'authorization/connect/token';
		const sessionUrl = 'https://localhost:44311/api/values';	
		var form = {
			'grant_type': 'password',
			'client_id': client_id,
            'Client_secret': Client_secret,
            'username': username,
            'password': password
		}
		var request = {
			"id":1
		};
		return  await Apibase.httpPost(null, sessionUrl, Session, request, null);
	}
}