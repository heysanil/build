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
import type { AddressData } from './AddressData';
import {
    AddressDataFromJSON,
    AddressDataFromJSONTyped,
    AddressDataToJSON,
} from './AddressData';

/**
 * A physical mailing address.
 * @export
 * @interface Address
 */
export interface Address {
    [key: string]: any | any;
    /**
     * 
     * @type {AddressData}
     * @memberof Address
     */
    data: AddressData;
    /**
     * When `true`, identifies the address as the primary address on an account.
     * @type {boolean}
     * @memberof Address
     */
    primary?: boolean;
}

/**
 * Check if a given object implements the Address interface.
 */
export function instanceOfAddress(value: object): boolean {
    if (!('data' in value)) return false;
    return true;
}

export function AddressFromJSON(json: any): Address {
    return AddressFromJSONTyped(json, false);
}

export function AddressFromJSONTyped(json: any, ignoreDiscriminator: boolean): Address {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'data': AddressDataFromJSON(json['data']),
        'primary': json['primary'] == null ? undefined : json['primary'],
    };
}

export function AddressToJSON(value?: Address | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'data': AddressDataToJSON(value['data']),
        'primary': value['primary'],
    };
}

