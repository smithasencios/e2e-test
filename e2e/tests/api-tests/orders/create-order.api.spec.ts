import { Session } from "../../../apis/apibase/model/Session";
import { SessionApi } from "../../../apis/session-api";
import { OrderResponse } from "../../../apis/services.orders/models/order-response";
import { OrderApi } from "../../../apis/services.orders/order-api";
import { expect } from 'chai';

describe('Create Order Api test', async () => {
    let session: Session;

    beforeEach((async () => {                
        session = await SessionApi.getSession('apiorder','secret','FVARGAS','123456');        
    }));
    
    it('Create Order', (async () => {     

        for (let index = 0; index < 100; index++) {
            const order: OrderResponse = await OrderApi.createOrder(session.access_token);     
            expect(order.data.id).exist;
        }
    
    }));

});