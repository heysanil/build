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
import type { Item } from './Item';
import {
    ItemFromJSON,
    ItemFromJSONTyped,
    ItemToJSON,
} from './Item';

/**
 * ItemWebhookUpdateResponse defines the response schema for `/item/webhook/update`
 * @export
 * @interface ItemWebhookUpdateResponse
 */
export interface ItemWebhookUpdateResponse {
    [key: string]: any | any;
    /**
     * 
     * @type {Item}
     * @memberof ItemWebhookUpdateResponse
     */
    item: Item;
    /**
     * A unique identifier for the request, which can be used for troubleshooting. This identifier, like all Plaid identifiers, is case sensitive.
     * @type {string}
     * @memberof ItemWebhookUpdateResponse
     */
    request_id: string;
}

/**
 * Check if a given object implements the ItemWebhookUpdateResponse interface.
 */
export function instanceOfItemWebhookUpdateResponse(value: object): boolean {
    if (!('item' in value)) return false;
    if (!('request_id' in value)) return false;
    return true;
}

export function ItemWebhookUpdateResponseFromJSON(json: any): ItemWebhookUpdateResponse {
    return ItemWebhookUpdateResponseFromJSONTyped(json, false);
}

export function ItemWebhookUpdateResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ItemWebhookUpdateResponse {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'item': ItemFromJSON(json['item']),
        'request_id': json['request_id'],
    };
}

export function ItemWebhookUpdateResponseToJSON(value?: ItemWebhookUpdateResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'item': ItemToJSON(value['item']),
        'request_id': value['request_id'],
    };
}

