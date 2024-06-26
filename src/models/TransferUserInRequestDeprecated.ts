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
import type { TransferUserAddressInRequest } from './TransferUserAddressInRequest';
import {
    TransferUserAddressInRequestFromJSON,
    TransferUserAddressInRequestFromJSONTyped,
    TransferUserAddressInRequestToJSON,
} from './TransferUserAddressInRequest';

/**
 * The legal name and other information for the account holder.
 * @export
 * @interface TransferUserInRequestDeprecated
 */
export interface TransferUserInRequestDeprecated {
    /**
     * The user's legal name.
     * @type {string}
     * @memberof TransferUserInRequestDeprecated
     */
    legal_name?: string;
    /**
     * The user's phone number.
     * @type {string}
     * @memberof TransferUserInRequestDeprecated
     */
    phone_number?: string;
    /**
     * The user's email address.
     * @type {string}
     * @memberof TransferUserInRequestDeprecated
     */
    email_address?: string;
    /**
     * 
     * @type {TransferUserAddressInRequest}
     * @memberof TransferUserInRequestDeprecated
     */
    address?: TransferUserAddressInRequest;
}

/**
 * Check if a given object implements the TransferUserInRequestDeprecated interface.
 */
export function instanceOfTransferUserInRequestDeprecated(value: object): boolean {
    return true;
}

export function TransferUserInRequestDeprecatedFromJSON(json: any): TransferUserInRequestDeprecated {
    return TransferUserInRequestDeprecatedFromJSONTyped(json, false);
}

export function TransferUserInRequestDeprecatedFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransferUserInRequestDeprecated {
    if (json == null) {
        return json;
    }
    return {
        
        'legal_name': json['legal_name'] == null ? undefined : json['legal_name'],
        'phone_number': json['phone_number'] == null ? undefined : json['phone_number'],
        'email_address': json['email_address'] == null ? undefined : json['email_address'],
        'address': json['address'] == null ? undefined : TransferUserAddressInRequestFromJSON(json['address']),
    };
}

export function TransferUserInRequestDeprecatedToJSON(value?: TransferUserInRequestDeprecated | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'legal_name': value['legal_name'],
        'phone_number': value['phone_number'],
        'email_address': value['email_address'],
        'address': TransferUserAddressInRequestToJSON(value['address']),
    };
}

