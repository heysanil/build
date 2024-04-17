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
 * ItemPublicTokenCreateRequest defines the request schema for `/item/public_token/create`
 * @export
 * @interface ItemPublicTokenCreateRequest
 */
export interface ItemPublicTokenCreateRequest {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     * @type {string}
     * @memberof ItemPublicTokenCreateRequest
     */
    client_id?: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     * @type {string}
     * @memberof ItemPublicTokenCreateRequest
     */
    secret?: string;
    /**
     * The access token associated with the Item data is being requested for.
     * @type {string}
     * @memberof ItemPublicTokenCreateRequest
     */
    access_token: string;
}

/**
 * Check if a given object implements the ItemPublicTokenCreateRequest interface.
 */
export function instanceOfItemPublicTokenCreateRequest(value: object): boolean {
    if (!('access_token' in value)) return false;
    return true;
}

export function ItemPublicTokenCreateRequestFromJSON(json: any): ItemPublicTokenCreateRequest {
    return ItemPublicTokenCreateRequestFromJSONTyped(json, false);
}

export function ItemPublicTokenCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ItemPublicTokenCreateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'client_id': json['client_id'] == null ? undefined : json['client_id'],
        'secret': json['secret'] == null ? undefined : json['secret'],
        'access_token': json['access_token'],
    };
}

export function ItemPublicTokenCreateRequestToJSON(value?: ItemPublicTokenCreateRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'client_id': value['client_id'],
        'secret': value['secret'],
        'access_token': value['access_token'],
    };
}

