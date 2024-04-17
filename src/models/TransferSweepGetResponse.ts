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
import type { TransferSweep } from './TransferSweep';
import {
    TransferSweepFromJSON,
    TransferSweepFromJSONTyped,
    TransferSweepToJSON,
} from './TransferSweep';

/**
 * Defines the response schema for `/transfer/sweep/get`
 * @export
 * @interface TransferSweepGetResponse
 */
export interface TransferSweepGetResponse {
    [key: string]: any | any;
    /**
     * 
     * @type {TransferSweep}
     * @memberof TransferSweepGetResponse
     */
    sweep: TransferSweep;
    /**
     * A unique identifier for the request, which can be used for troubleshooting. This identifier, like all Plaid identifiers, is case sensitive.
     * @type {string}
     * @memberof TransferSweepGetResponse
     */
    request_id: string;
}

/**
 * Check if a given object implements the TransferSweepGetResponse interface.
 */
export function instanceOfTransferSweepGetResponse(value: object): boolean {
    if (!('sweep' in value)) return false;
    if (!('request_id' in value)) return false;
    return true;
}

export function TransferSweepGetResponseFromJSON(json: any): TransferSweepGetResponse {
    return TransferSweepGetResponseFromJSONTyped(json, false);
}

export function TransferSweepGetResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransferSweepGetResponse {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'sweep': TransferSweepFromJSON(json['sweep']),
        'request_id': json['request_id'],
    };
}

export function TransferSweepGetResponseToJSON(value?: TransferSweepGetResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'sweep': TransferSweepToJSON(value['sweep']),
        'request_id': value['request_id'],
    };
}

