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
import type { LinkDeliveryVerificationStatus } from './LinkDeliveryVerificationStatus';
import {
    LinkDeliveryVerificationStatusFromJSON,
    LinkDeliveryVerificationStatusFromJSONTyped,
    LinkDeliveryVerificationStatusToJSON,
} from './LinkDeliveryVerificationStatus';

/**
 * Information related to account attached to the connected Item
 * @export
 * @interface LinkDeliveryAccount
 */
export interface LinkDeliveryAccount {
    [key: string]: any | any;
    /**
     * The Plaid `account_id`
     * @type {string}
     * @memberof LinkDeliveryAccount
     */
    id?: string;
    /**
     * The official account name
     * @type {string}
     * @memberof LinkDeliveryAccount
     */
    name?: string;
    /**
     * The last 2-4 alphanumeric characters of an account's official account number. Note that the mask may be non-unique between an Item's accounts. It may also not match the mask that the bank displays to the user.
     * @type {string}
     * @memberof LinkDeliveryAccount
     */
    mask?: string;
    /**
     * The account type. See the [Account schema](https://plaid.com/docs/api/accounts/#account-type-schema) for a full list of possible values
     * @type {string}
     * @memberof LinkDeliveryAccount
     */
    type?: string;
    /**
     * The account subtype. See the [Account schema](https://plaid.com/docs/api/accounts/#account-type-schema) for a full list of possible values
     * @type {string}
     * @memberof LinkDeliveryAccount
     */
    subtype?: string;
    /**
     * 
     * @type {LinkDeliveryVerificationStatus}
     * @memberof LinkDeliveryAccount
     */
    verification_status?: LinkDeliveryVerificationStatus;
    /**
     * If micro-deposit verification is being used, indicates whether the account being verified is a `business` or `personal` account.
     * @type {string}
     * @memberof LinkDeliveryAccount
     */
    class_type?: string;
}

/**
 * Check if a given object implements the LinkDeliveryAccount interface.
 */
export function instanceOfLinkDeliveryAccount(value: object): boolean {
    return true;
}

export function LinkDeliveryAccountFromJSON(json: any): LinkDeliveryAccount {
    return LinkDeliveryAccountFromJSONTyped(json, false);
}

export function LinkDeliveryAccountFromJSONTyped(json: any, ignoreDiscriminator: boolean): LinkDeliveryAccount {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
        'mask': json['mask'] == null ? undefined : json['mask'],
        'type': json['type'] == null ? undefined : json['type'],
        'subtype': json['subtype'] == null ? undefined : json['subtype'],
        'verification_status': json['verification_status'] == null ? undefined : LinkDeliveryVerificationStatusFromJSON(json['verification_status']),
        'class_type': json['class_type'] == null ? undefined : json['class_type'],
    };
}

export function LinkDeliveryAccountToJSON(value?: LinkDeliveryAccount | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'id': value['id'],
        'name': value['name'],
        'mask': value['mask'],
        'type': value['type'],
        'subtype': value['subtype'],
        'verification_status': LinkDeliveryVerificationStatusToJSON(value['verification_status']),
        'class_type': value['class_type'],
    };
}

