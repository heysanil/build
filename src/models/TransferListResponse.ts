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
import type { Transfer } from './Transfer';
import {
    TransferFromJSON,
    TransferFromJSONTyped,
    TransferToJSON,
} from './Transfer';

/**
 * Defines the response schema for `/transfer/list`
 * @export
 * @interface TransferListResponse
 */
export interface TransferListResponse {
    [key: string]: any | any;
    /**
     * 
     * @type {Array<Transfer>}
     * @memberof TransferListResponse
     */
    transfers: Array<Transfer>;
    /**
     * A unique identifier for the request, which can be used for troubleshooting. This identifier, like all Plaid identifiers, is case sensitive.
     * @type {string}
     * @memberof TransferListResponse
     */
    request_id: string;
}

/**
 * Check if a given object implements the TransferListResponse interface.
 */
export function instanceOfTransferListResponse(value: object): boolean {
    if (!('transfers' in value)) return false;
    if (!('request_id' in value)) return false;
    return true;
}

export function TransferListResponseFromJSON(json: any): TransferListResponse {
    return TransferListResponseFromJSONTyped(json, false);
}

export function TransferListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransferListResponse {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'transfers': ((json['transfers'] as Array<any>).map(TransferFromJSON)),
        'request_id': json['request_id'],
    };
}

export function TransferListResponseToJSON(value?: TransferListResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'transfers': ((value['transfers'] as Array<any>).map(TransferToJSON)),
        'request_id': value['request_id'],
    };
}

