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
 * 
 * @export
 * @interface LinkTokenCreateRequestUserIdNumber
 */
export interface LinkTokenCreateRequestUserIdNumber {
    /**
     * Value of identity document value typed in by user. Alpha-numeric, with all formatting characters stripped.
     * @type {string}
     * @memberof LinkTokenCreateRequestUserIdNumber
     */
    value: string;
    /**
     * 
     * @type {IDNumberType}
     * @memberof LinkTokenCreateRequestUserIdNumber
     */
    type: IDNumberType;
}

/**
 * Check if a given object implements the LinkTokenCreateRequestUserIdNumber interface.
 */
export function instanceOfLinkTokenCreateRequestUserIdNumber(value: object): boolean {
    if (!('value' in value)) return false;
    if (!('type' in value)) return false;
    return true;
}

export function LinkTokenCreateRequestUserIdNumberFromJSON(json: any): LinkTokenCreateRequestUserIdNumber {
    return LinkTokenCreateRequestUserIdNumberFromJSONTyped(json, false);
}

export function LinkTokenCreateRequestUserIdNumberFromJSONTyped(json: any, ignoreDiscriminator: boolean): LinkTokenCreateRequestUserIdNumber {
    if (json == null) {
        return json;
    }
    return {
        
        'value': json['value'],
        'type': IDNumberTypeFromJSON(json['type']),
    };
}

export function LinkTokenCreateRequestUserIdNumberToJSON(value?: LinkTokenCreateRequestUserIdNumber | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'value': value['value'],
        'type': IDNumberTypeToJSON(value['type']),
    };
}

