import { Apibase } from "../apibase/apibase";
import { OrderResponse } from "./models/order-response";

export class OrderApi extends Apibase {

    public static async createOrder(token:string): Promise<OrderResponse> {
        const param = {
            "orderExternalId": "123",
            "store": {
             "id": "2001",
             "brand": "KFC"
            },
            "orderType": {
            "id": "DEL"
            },
            "customer": {
            "customerType":{
            "id": "JUR"
            },
            "naturalPerson": {
            "firstName": "",
            "lastName": "",
            "secondLastName": ""
            },
            "legalPerson": {
            "businessName": "Traslado Seguro",
            "referencePerson": "Sin Referencia",
            "referencePhone": "3306630"
            },
            "identityDocument": {
            "documentType": {
            "id": "RUC"
            },
            "documentNumber": "20661188701"
            },
            "addressInformation": {
            "addressType":"AV",
            "formattedAddress":"Av. Las Brisas, Arequipa",
            "exteriorNumber":"3030",
            "interiorNumber":"",
            "additionalInformation":"Address reference",
            "geoLocation": {
            "lat": -30.39891,
            "lng": -85.53700000000004
            }
            },
            "contactInformation": {
            "phone": {
            "phoneType": "PERSONAL",
            "phoneNumber": "989706954"
            },
            "email": "yaritza.rebaza@tektonlabs.com"
            }
            },
            "payment": [{
            "paymentMethod": {
            "id": "CASH_SOLES"
            },
            "amountToPay": {
            "amount": 80.3,
            "currency": "PEN"
            },
            "onlineTransactionId": "23333"
            }], 
            "orderTotalAmount": {
            "amount": 80.3,
            "currency": "PEN"
            },
            "products": [
                {
                  "id": "2876",
                  "name": "Mega Familiar",
                  "groupAttributes": [
                    {
                      "id": "1",
                      "name": "Paso 1",
                      "attributes": [
                        {
                          "id": "115",
                          "name": "Pieza de Pollo",
                          "quantity": 1
                        }
                      ]
                    },
                    {
                      "id": "2",
                      "name": "Paso 2",
                      "attributes": [
                       
                        {
                          "id": "80",
                          "name": "Crispy",
                          "quantity": 6
                        },
                        
                         {
                          "id": "79",
                          "name": "Original",
                          "quantity": 2
                        }
                        
                      ]
                    },
                    {
                      "id": "3",
                      "name": "Paso 3",
                      "attributes": [
                        {
                          "id": "14",
                          "name": "Nuggets x6",
                          "quantity": 1
                        }
                      ]
                    },
                    {
                      "id": "4",
                      "name": "Paso 4",
                      "attributes": [
                        {
                          "id": "102",
                          "name": "Papa familiar",
                          "quantity": 1
                        }
                      ]
                    },
                    {
                      "id": "5",
                      "name": "Paso 5",
                      "attributes": [
                        {
                          "id": "113",
                          "name": "Ensalada familiar",
                          "quantity": 1
                        }
                      ]
                    },
                    {
                      "id": "6",
                      "name": "Paso 6",
                      "attributes": [
                        {
                          "id": "105",
                          "name": "Gaseosa Grande",
                          "quantity": 1
                        }
                      ]
                    },
                    {
                      "id": "7",
                      "name": "Paso 7",
                      "attributes": [
                        {
                          "id": "111",
                          "name": "Coca Cola",
                          "quantity": 1
                        }
                      ]
                    }
                  ],
                  
                  
                  "price": {
                    "amount": 58.9,
                    "currency": "PEN"
                  }
                },
                {
                  "id": "487",
                  "name": "CMB TTW tradicional",
                  "groupAttributes": [
                    {
                      "id": "1",
                      "name": "Paso 1",
                      "attributes": [
                        {
                          "id": "4054",
                          "name": "TTW TRADICIONAL",
                          "quantity": 1
                        }
                      ]
                    },
                    {
                      "id": "2",
                      "name": "Paso 2",
                      "attributes": [
                       
                        {
                          "id": "74",
                          "name": "Sin Adicional",
                          "quantity": 1
                        }
                        
                      ]
                    },
                    {
                      "id": "3",
                      "name": "Paso 3",
                      "attributes": [
                        {
                          "id": "6662",
                          "name": "Papa personal",
                          "quantity": 1
                        }
                      ]
                    },
                    
                    {
                      "id": "4",
                      "name": "Paso 4",
                      "attributes": [
                        {
                          "id": "37",
                          "name": "Coca cola personal",
                          "quantity": 1
                        }
                      ]
                    }
                    
                  ],
                  
                  
                  "price": {
                    "amount": 16.9,
                    "currency": "PEN"
                  }
                }
              ],
            "additionalInfo": "Additional order information",
            "additionalInfoForDriver": "",
            "callCenterInfo": {
            "startCallTime": "",
            "endCallTime": "",
            "callTime": ""
            },
            "requestSystemOrigin": "",
            "channelTransactionDate": "2019-09-06T12:09:03"
            };
        // const url = Apibase.getBaseUrl() + 'order-management/orders';
        const url = 'https://localhost:44311/api/order';
        
        return await Apibase.httpPost(token,url,OrderResponse,param,null) ;
    }

}
