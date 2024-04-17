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
 * Response schema for `/partner/customer/enable`.
 * @export
 * @interface PartnerCustomerEnableResponse
 */
export interface PartnerCustomerEnableResponse {
    [key: string]: any | any;
    /**
     * The end customer's secret key for the Production environment.
     * @type {string}
     * @memberof PartnerCustomerEnableResponse
     */
    production_secret?: string;
    /**
     * A unique identifier for the request, which can be used for troubleshooting. This identifier, like all Plaid identifiers, is case sensitive.
     * @type {string}
     * @memberof PartnerCustomerEnableResponse
     */
    request_id?: string;
}

/**
 * Check if a given object implements the PartnerCustomerEnableResponse interface.
 */
export function instanceOfPartnerCustomerEnableResponse(value: object): boolean {
    return true;
}

export function PartnerCustomerEnableResponseFromJSON(json: any): PartnerCustomerEnableResponse {
    return PartnerCustomerEnableResponseFromJSONTyped(json, false);
}

export function PartnerCustomerEnableResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PartnerCustomerEnableResponse {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'production_secret': json['production_secret'] == null ? undefined : json['production_secret'],
        'request_id': json['request_id'] == null ? undefined : json['request_id'],
    };
}

export function PartnerCustomerEnableResponseToJSON(value?: PartnerCustomerEnableResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'production_secret': value['production_secret'],
        'request_id': value['request_id'],
    };
}
