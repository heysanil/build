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
import type { BankTransferSweep } from './BankTransferSweep';
import {
    BankTransferSweepFromJSON,
    BankTransferSweepFromJSONTyped,
    BankTransferSweepToJSON,
} from './BankTransferSweep';

/**
 * BankTransferSweepGetResponse defines the response schema for `/bank_transfer/sweep/get`
 * @export
 * @interface BankTransferSweepGetResponse
 */
export interface BankTransferSweepGetResponse {
    [key: string]: any | any;
    /**
     * 
     * @type {BankTransferSweep}
     * @memberof BankTransferSweepGetResponse
     */
    sweep: BankTransferSweep;
    /**
     * A unique identifier for the request, which can be used for troubleshooting. This identifier, like all Plaid identifiers, is case sensitive.
     * @type {string}
     * @memberof BankTransferSweepGetResponse
     */
    request_id: string;
}

/**
 * Check if a given object implements the BankTransferSweepGetResponse interface.
 */
export function instanceOfBankTransferSweepGetResponse(value: object): boolean {
    if (!('sweep' in value)) return false;
    if (!('request_id' in value)) return false;
    return true;
}

export function BankTransferSweepGetResponseFromJSON(json: any): BankTransferSweepGetResponse {
    return BankTransferSweepGetResponseFromJSONTyped(json, false);
}

export function BankTransferSweepGetResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BankTransferSweepGetResponse {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'sweep': BankTransferSweepFromJSON(json['sweep']),
        'request_id': json['request_id'],
    };
}

export function BankTransferSweepGetResponseToJSON(value?: BankTransferSweepGetResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'sweep': BankTransferSweepToJSON(value['sweep']),
        'request_id': value['request_id'],
    };
}

