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
import type { IDNumberType } from './IDNumberType';
import {
    IDNumberTypeFromJSON,
    IDNumberTypeFromJSONTyped,
    IDNumberTypeToJSON,
} from './IDNumberType';

/**
 * The ID number associated with a Beacon User.
 * @export
 * @interface BeaconUserIDNumber
 */
export interface BeaconUserIDNumber {
    [key: string]: any | any;
    /**
     * Value of identity document value typed in by user. Alpha-numeric, with all formatting characters stripped.
     * @type {string}
     * @memberof BeaconUserIDNumber
     */
    value: string;
    /**
     * 
     * @type {IDNumberType}
     * @memberof BeaconUserIDNumber
     */
    type: IDNumberType;
}

/**
 * Check if a given object implements the BeaconUserIDNumber interface.
 */
export function instanceOfBeaconUserIDNumber(value: object): boolean {
    if (!('value' in value)) return false;
    if (!('type' in value)) return false;
    return true;
}

export function BeaconUserIDNumberFromJSON(json: any): BeaconUserIDNumber {
    return BeaconUserIDNumberFromJSONTyped(json, false);
}

export function BeaconUserIDNumberFromJSONTyped(json: any, ignoreDiscriminator: boolean): BeaconUserIDNumber {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'value': json['value'],
        'type': IDNumberTypeFromJSON(json['type']),
    };
}

export function BeaconUserIDNumberToJSON(value?: BeaconUserIDNumber | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'value': value['value'],
        'type': IDNumberTypeToJSON(value['type']),
    };
}

