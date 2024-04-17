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
 * CreditRelayRemoveResponse defines the response schema for `/credit/relay/remove`
 * @export
 * @interface CreditRelayRemoveResponse
 */
export interface CreditRelayRemoveResponse {
    [key: string]: any | any;
    /**
     * `true` if the relay token was successfully removed.
     * @type {boolean}
     * @memberof CreditRelayRemoveResponse
     */
    removed: boolean;
    /**
     * A unique identifier for the request, which can be used for troubleshooting. This identifier, like all Plaid identifiers, is case sensitive.
     * @type {string}
     * @memberof CreditRelayRemoveResponse
     */
    request_id: string;
}

/**
 * Check if a given object implements the CreditRelayRemoveResponse interface.
 */
export function instanceOfCreditRelayRemoveResponse(value: object): boolean {
    if (!('removed' in value)) return false;
    if (!('request_id' in value)) return false;
    return true;
}

export function CreditRelayRemoveResponseFromJSON(json: any): CreditRelayRemoveResponse {
    return CreditRelayRemoveResponseFromJSONTyped(json, false);
}

export function CreditRelayRemoveResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreditRelayRemoveResponse {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'removed': json['removed'],
        'request_id': json['request_id'],
    };
}

export function CreditRelayRemoveResponseToJSON(value?: CreditRelayRemoveResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'removed': value['removed'],
        'request_id': value['request_id'],
    };
}

