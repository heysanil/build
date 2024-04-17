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
import type { AccountBase } from './AccountBase';
import {
    AccountBaseFromJSON,
    AccountBaseFromJSONTyped,
    AccountBaseToJSON,
} from './AccountBase';

/**
 * ProcessorAccountGetResponse defines the response schema for `/processor/account/get`
 * @export
 * @interface ProcessorAccountGetResponse
 */
export interface ProcessorAccountGetResponse {
    [key: string]: any | any;
    /**
     * 
     * @type {AccountBase}
     * @memberof ProcessorAccountGetResponse
     */
    account: AccountBase;
    /**
     * The Plaid Institution ID associated with the Account.
     * @type {string}
     * @memberof ProcessorAccountGetResponse
     */
    institution_id: string;
    /**
     * A unique identifier for the request, which can be used for troubleshooting. This identifier, like all Plaid identifiers, is case sensitive.
     * @type {string}
     * @memberof ProcessorAccountGetResponse
     */
    request_id: string;
}

/**
 * Check if a given object implements the ProcessorAccountGetResponse interface.
 */
export function instanceOfProcessorAccountGetResponse(value: object): boolean {
    if (!('account' in value)) return false;
    if (!('institution_id' in value)) return false;
    if (!('request_id' in value)) return false;
    return true;
}

export function ProcessorAccountGetResponseFromJSON(json: any): ProcessorAccountGetResponse {
    return ProcessorAccountGetResponseFromJSONTyped(json, false);
}

export function ProcessorAccountGetResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProcessorAccountGetResponse {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'account': AccountBaseFromJSON(json['account']),
        'institution_id': json['institution_id'],
        'request_id': json['request_id'],
    };
}

export function ProcessorAccountGetResponseToJSON(value?: ProcessorAccountGetResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'account': AccountBaseToJSON(value['account']),
        'institution_id': value['institution_id'],
        'request_id': value['request_id'],
    };
}
