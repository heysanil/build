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
/**
 * The billing contact for the end customer. Defaults to partner's billing contact if omitted.
 * @export
 * @interface PartnerEndCustomerBillingContact
 */
export interface PartnerEndCustomerBillingContact {
    [key: string]: any | any;
    /**
     * 
     * @type {string}
     * @memberof PartnerEndCustomerBillingContact
     */
    given_name?: string;
    /**
     * 
     * @type {string}
     * @memberof PartnerEndCustomerBillingContact
     */
    family_name?: string;
    /**
     * 
     * @type {string}
     * @memberof PartnerEndCustomerBillingContact
     */
    email?: string;
}

/**
 * Check if a given object implements the PartnerEndCustomerBillingContact interface.
 */
export function instanceOfPartnerEndCustomerBillingContact(value: object): boolean {
    return true;
}

export function PartnerEndCustomerBillingContactFromJSON(json: any): PartnerEndCustomerBillingContact {
    return PartnerEndCustomerBillingContactFromJSONTyped(json, false);
}

export function PartnerEndCustomerBillingContactFromJSONTyped(json: any, ignoreDiscriminator: boolean): PartnerEndCustomerBillingContact {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'given_name': json['given_name'] == null ? undefined : json['given_name'],
        'family_name': json['family_name'] == null ? undefined : json['family_name'],
        'email': json['email'] == null ? undefined : json['email'],
    };
}

export function PartnerEndCustomerBillingContactToJSON(value?: PartnerEndCustomerBillingContact | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'given_name': value['given_name'],
        'family_name': value['family_name'],
        'email': value['email'],
    };
}

