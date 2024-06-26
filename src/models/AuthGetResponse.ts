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
import type { AuthGetNumbers } from './AuthGetNumbers';
import {
    AuthGetNumbersFromJSON,
    AuthGetNumbersFromJSONTyped,
    AuthGetNumbersToJSON,
} from './AuthGetNumbers';
import type { Item } from './Item';
import {
    ItemFromJSON,
    ItemFromJSONTyped,
    ItemToJSON,
} from './Item';

/**
 * AuthGetResponse defines the response schema for `/auth/get`
 * @export
 * @interface AuthGetResponse
 */
export interface AuthGetResponse {
    [key: string]: any | any;
    /**
     * The `accounts` for which numbers are being retrieved.
     * @type {Array<AccountBase>}
     * @memberof AuthGetResponse
     */
    accounts: Array<AccountBase>;
    /**
     * 
     * @type {AuthGetNumbers}
     * @memberof AuthGetResponse
     */
    numbers: AuthGetNumbers;
    /**
     * 
     * @type {Item}
     * @memberof AuthGetResponse
     */
    item: Item;
    /**
     * A unique identifier for the request, which can be used for troubleshooting. This identifier, like all Plaid identifiers, is case sensitive.
     * @type {string}
     * @memberof AuthGetResponse
     */
    request_id: string;
}

/**
 * Check if a given object implements the AuthGetResponse interface.
 */
export function instanceOfAuthGetResponse(value: object): boolean {
    if (!('accounts' in value)) return false;
    if (!('numbers' in value)) return false;
    if (!('item' in value)) return false;
    if (!('request_id' in value)) return false;
    return true;
}

export function AuthGetResponseFromJSON(json: any): AuthGetResponse {
    return AuthGetResponseFromJSONTyped(json, false);
}

export function AuthGetResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthGetResponse {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'accounts': ((json['accounts'] as Array<any>).map(AccountBaseFromJSON)),
        'numbers': AuthGetNumbersFromJSON(json['numbers']),
        'item': ItemFromJSON(json['item']),
        'request_id': json['request_id'],
    };
}

export function AuthGetResponseToJSON(value?: AuthGetResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'accounts': ((value['accounts'] as Array<any>).map(AccountBaseToJSON)),
        'numbers': AuthGetNumbersToJSON(value['numbers']),
        'item': ItemToJSON(value['item']),
        'request_id': value['request_id'],
    };
}

