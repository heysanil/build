/* tslint:disable */
/* eslint-disable */
/**
 * The Plaid API
 * The Plaid REST API. Please see https://plaid.com/docs/api for more details.
 *
 * The version of the OpenAPI document: 2020-09-14_1.503.5
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * Request schema for `/partner/customer/get`.
 * @export
 * @interface PartnerCustomerGetRequest
 */
export interface PartnerCustomerGetRequest {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     * @type {string}
     * @memberof PartnerCustomerGetRequest
     */
    client_id?: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     * @type {string}
     * @memberof PartnerCustomerGetRequest
     */
    secret?: string;
    /**
     * 
     * @type {string}
     * @memberof PartnerCustomerGetRequest
     */
    end_customer_client_id: string;
}

/**
 * Check if a given object implements the PartnerCustomerGetRequest interface.
 */
export function instanceOfPartnerCustomerGetRequest(value: object): boolean {
    if (!('end_customer_client_id' in value)) return false;
    return true;
}

export function PartnerCustomerGetRequestFromJSON(json: any): PartnerCustomerGetRequest {
    return PartnerCustomerGetRequestFromJSONTyped(json, false);
}

export function PartnerCustomerGetRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PartnerCustomerGetRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'client_id': json['client_id'] == null ? undefined : json['client_id'],
        'secret': json['secret'] == null ? undefined : json['secret'],
        'end_customer_client_id': json['end_customer_client_id'],
    };
}

export function PartnerCustomerGetRequestToJSON(value?: PartnerCustomerGetRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'client_id': value['client_id'],
        'secret': value['secret'],
        'end_customer_client_id': value['end_customer_client_id'],
    };
}
