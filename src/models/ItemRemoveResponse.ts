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
 * ItemRemoveResponse defines the response schema for `/item/remove`
 * @export
 * @interface ItemRemoveResponse
 */
export interface ItemRemoveResponse {
    [key: string]: any | any;
    /**
     * A unique identifier for the request, which can be used for troubleshooting. This identifier, like all Plaid identifiers, is case sensitive.
     * @type {string}
     * @memberof ItemRemoveResponse
     */
    request_id: string;
}

/**
 * Check if a given object implements the ItemRemoveResponse interface.
 */
export function instanceOfItemRemoveResponse(value: object): boolean {
    if (!('request_id' in value)) return false;
    return true;
}

export function ItemRemoveResponseFromJSON(json: any): ItemRemoveResponse {
    return ItemRemoveResponseFromJSONTyped(json, false);
}

export function ItemRemoveResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ItemRemoveResponse {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'request_id': json['request_id'],
    };
}

export function ItemRemoveResponseToJSON(value?: ItemRemoveResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'request_id': value['request_id'],
    };
}

