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
import type { SignalAddressData } from './SignalAddressData';
import {
    SignalAddressDataFromJSON,
    SignalAddressDataFromJSONTyped,
    SignalAddressDataToJSON,
} from './SignalAddressData';
import type { SignalPersonName } from './SignalPersonName';
import {
    SignalPersonNameFromJSON,
    SignalPersonNameFromJSONTyped,
    SignalPersonNameToJSON,
} from './SignalPersonName';

/**
 * Details about the end user initiating the transaction (i.e., the account holder). When calling `/signal/evaluate` or `/signal/processor/evaluate`, this field is optional, but strongly recommended to increase the accuracy of Signal results.
 * @export
 * @interface SignalUser
 */
export interface SignalUser {
    /**
     * 
     * @type {SignalPersonName}
     * @memberof SignalUser
     */
    name?: SignalPersonName;
    /**
     * The user's phone number, in E.164 format: +{countrycode}{number}. For example: "+14151234567"
     * @type {string}
     * @memberof SignalUser
     */
    phone_number?: string;
    /**
     * The user's email address.
     * @type {string}
     * @memberof SignalUser
     */
    email_address?: string;
    /**
     * 
     * @type {SignalAddressData}
     * @memberof SignalUser
     */
    address?: SignalAddressData;
}

/**
 * Check if a given object implements the SignalUser interface.
 */
export function instanceOfSignalUser(value: object): boolean {
    return true;
}

export function SignalUserFromJSON(json: any): SignalUser {
    return SignalUserFromJSONTyped(json, false);
}

export function SignalUserFromJSONTyped(json: any, ignoreDiscriminator: boolean): SignalUser {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : SignalPersonNameFromJSON(json['name']),
        'phone_number': json['phone_number'] == null ? undefined : json['phone_number'],
        'email_address': json['email_address'] == null ? undefined : json['email_address'],
        'address': json['address'] == null ? undefined : SignalAddressDataFromJSON(json['address']),
    };
}

export function SignalUserToJSON(value?: SignalUser | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': SignalPersonNameToJSON(value['name']),
        'phone_number': value['phone_number'],
        'email_address': value['email_address'],
        'address': SignalAddressDataToJSON(value['address']),
    };
}

