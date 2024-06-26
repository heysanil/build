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
import type { PhoneType } from './PhoneType';
import {
    PhoneTypeFromJSON,
    PhoneTypeFromJSONTyped,
    PhoneTypeToJSON,
} from './PhoneType';

/**
 * Phone number information associated with the entity screening hit
 * @export
 * @interface EntityScreeningHitPhoneNumbers
 */
export interface EntityScreeningHitPhoneNumbers {
    [key: string]: any | any;
    /**
     * 
     * @type {PhoneType}
     * @memberof EntityScreeningHitPhoneNumbers
     */
    type: PhoneType;
    /**
     * A phone number in E.164 format.
     * @type {string}
     * @memberof EntityScreeningHitPhoneNumbers
     */
    phone_number: string;
}

/**
 * Check if a given object implements the EntityScreeningHitPhoneNumbers interface.
 */
export function instanceOfEntityScreeningHitPhoneNumbers(value: object): boolean {
    if (!('type' in value)) return false;
    if (!('phone_number' in value)) return false;
    return true;
}

export function EntityScreeningHitPhoneNumbersFromJSON(json: any): EntityScreeningHitPhoneNumbers {
    return EntityScreeningHitPhoneNumbersFromJSONTyped(json, false);
}

export function EntityScreeningHitPhoneNumbersFromJSONTyped(json: any, ignoreDiscriminator: boolean): EntityScreeningHitPhoneNumbers {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'type': PhoneTypeFromJSON(json['type']),
        'phone_number': json['phone_number'],
    };
}

export function EntityScreeningHitPhoneNumbersToJSON(value?: EntityScreeningHitPhoneNumbers | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'type': PhoneTypeToJSON(value['type']),
        'phone_number': value['phone_number'],
    };
}

