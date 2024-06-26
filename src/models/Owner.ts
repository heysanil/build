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
import type { Address } from './Address';
import {
    AddressFromJSON,
    AddressFromJSONTyped,
    AddressToJSON,
} from './Address';
import type { Email } from './Email';
import {
    EmailFromJSON,
    EmailFromJSONTyped,
    EmailToJSON,
} from './Email';
import type { PhoneNumber } from './PhoneNumber';
import {
    PhoneNumberFromJSON,
    PhoneNumberFromJSONTyped,
    PhoneNumberToJSON,
} from './PhoneNumber';

/**
 * Data returned from the financial institution about the owner or owners of an account. Only the `names` array must be non-empty.
 * @export
 * @interface Owner
 */
export interface Owner {
    [key: string]: any | any;
    /**
     * A list of names associated with the account by the financial institution. In the case of a joint account, Plaid will make a best effort to report the names of all account holders.
     * 
     * If an Item contains multiple accounts with different owner names, some institutions will report all names associated with the Item in each account's `names` array.
     * @type {Array<string>}
     * @memberof Owner
     */
    names: Array<string>;
    /**
     * A list of phone numbers associated with the account by the financial institution. May be an empty array if no relevant information is returned from the financial institution.
     * @type {Array<PhoneNumber>}
     * @memberof Owner
     */
    phone_numbers: Array<PhoneNumber>;
    /**
     * A list of email addresses associated with the account by the financial institution. May be an empty array if no relevant information is returned from the financial institution.
     * @type {Array<Email>}
     * @memberof Owner
     */
    emails: Array<Email>;
    /**
     * Data about the various addresses associated with the account by the financial institution. May be an empty array if no relevant information is returned from the financial institution.
     * @type {Array<Address>}
     * @memberof Owner
     */
    addresses: Array<Address>;
    /**
     * document_id is the id of the document that this identity belongs to
     * @type {string}
     * @memberof Owner
     */
    document_id?: string;
}

/**
 * Check if a given object implements the Owner interface.
 */
export function instanceOfOwner(value: object): boolean {
    if (!('names' in value)) return false;
    if (!('phone_numbers' in value)) return false;
    if (!('emails' in value)) return false;
    if (!('addresses' in value)) return false;
    return true;
}

export function OwnerFromJSON(json: any): Owner {
    return OwnerFromJSONTyped(json, false);
}

export function OwnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): Owner {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'names': json['names'],
        'phone_numbers': ((json['phone_numbers'] as Array<any>).map(PhoneNumberFromJSON)),
        'emails': ((json['emails'] as Array<any>).map(EmailFromJSON)),
        'addresses': ((json['addresses'] as Array<any>).map(AddressFromJSON)),
        'document_id': json['document_id'] == null ? undefined : json['document_id'],
    };
}

export function OwnerToJSON(value?: Owner | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'names': value['names'],
        'phone_numbers': ((value['phone_numbers'] as Array<any>).map(PhoneNumberToJSON)),
        'emails': ((value['emails'] as Array<any>).map(EmailToJSON)),
        'addresses': ((value['addresses'] as Array<any>).map(AddressToJSON)),
        'document_id': value['document_id'],
    };
}

