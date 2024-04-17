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
import type { PartnerEndCustomer } from './PartnerEndCustomer';
import {
    PartnerEndCustomerFromJSON,
    PartnerEndCustomerFromJSONTyped,
    PartnerEndCustomerToJSON,
} from './PartnerEndCustomer';

/**
 * Response schema for `/partner/customer/get`.
 * @export
 * @interface PartnerCustomerGetResponse
 */
export interface PartnerCustomerGetResponse {
    [key: string]: any | any;
    /**
     * 
     * @type {PartnerEndCustomer}
     * @memberof PartnerCustomerGetResponse
     */
    end_customer?: PartnerEndCustomer;
    /**
     * A unique identifier for the request, which can be used for troubleshooting. This identifier, like all Plaid identifiers, is case sensitive.
     * @type {string}
     * @memberof PartnerCustomerGetResponse
     */
    request_id?: string;
}

/**
 * Check if a given object implements the PartnerCustomerGetResponse interface.
 */
export function instanceOfPartnerCustomerGetResponse(value: object): boolean {
    return true;
}

export function PartnerCustomerGetResponseFromJSON(json: any): PartnerCustomerGetResponse {
    return PartnerCustomerGetResponseFromJSONTyped(json, false);
}

export function PartnerCustomerGetResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PartnerCustomerGetResponse {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'end_customer': json['end_customer'] == null ? undefined : PartnerEndCustomerFromJSON(json['end_customer']),
        'request_id': json['request_id'] == null ? undefined : json['request_id'],
    };
}

export function PartnerCustomerGetResponseToJSON(value?: PartnerCustomerGetResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'end_customer': PartnerEndCustomerToJSON(value['end_customer']),
        'request_id': value['request_id'],
    };
}

