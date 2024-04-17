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
import type { AccountSubtype } from './AccountSubtype';
import {
    AccountSubtypeFromJSON,
    AccountSubtypeFromJSONTyped,
    AccountSubtypeToJSON,
} from './AccountSubtype';
import type { AccountType } from './AccountType';
import {
    AccountTypeFromJSON,
    AccountTypeFromJSONTyped,
    AccountTypeToJSON,
} from './AccountType';
import type { BeaconAccountRiskEvaluateAccountAttributes } from './BeaconAccountRiskEvaluateAccountAttributes';
import {
    BeaconAccountRiskEvaluateAccountAttributesFromJSON,
    BeaconAccountRiskEvaluateAccountAttributesFromJSONTyped,
    BeaconAccountRiskEvaluateAccountAttributesToJSON,
} from './BeaconAccountRiskEvaluateAccountAttributes';

/**
 * An account in the `/beacon/account_risk/v1/evaluate` response.
 * @export
 * @interface BeaconAccountRiskEvaluateAccount
 */
export interface BeaconAccountRiskEvaluateAccount {
    /**
     * The account ID.
     * @type {string}
     * @memberof BeaconAccountRiskEvaluateAccount
     */
    account_id?: string;
    /**
     * 
     * @type {AccountType}
     * @memberof BeaconAccountRiskEvaluateAccount
     */
    type?: AccountType;
    /**
     * 
     * @type {AccountSubtype}
     * @memberof BeaconAccountRiskEvaluateAccount
     */
    subtype?: AccountSubtype;
    /**
     * 
     * @type {BeaconAccountRiskEvaluateAccountAttributes}
     * @memberof BeaconAccountRiskEvaluateAccount
     */
    attributes?: BeaconAccountRiskEvaluateAccountAttributes;
}

/**
 * Check if a given object implements the BeaconAccountRiskEvaluateAccount interface.
 */
export function instanceOfBeaconAccountRiskEvaluateAccount(value: object): boolean {
    return true;
}

export function BeaconAccountRiskEvaluateAccountFromJSON(json: any): BeaconAccountRiskEvaluateAccount {
    return BeaconAccountRiskEvaluateAccountFromJSONTyped(json, false);
}

export function BeaconAccountRiskEvaluateAccountFromJSONTyped(json: any, ignoreDiscriminator: boolean): BeaconAccountRiskEvaluateAccount {
    if (json == null) {
        return json;
    }
    return {
        
        'account_id': json['account_id'] == null ? undefined : json['account_id'],
        'type': json['type'] == null ? undefined : AccountTypeFromJSON(json['type']),
        'subtype': json['subtype'] == null ? undefined : AccountSubtypeFromJSON(json['subtype']),
        'attributes': json['attributes'] == null ? undefined : BeaconAccountRiskEvaluateAccountAttributesFromJSON(json['attributes']),
    };
}

export function BeaconAccountRiskEvaluateAccountToJSON(value?: BeaconAccountRiskEvaluateAccount | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'account_id': value['account_id'],
        'type': AccountTypeToJSON(value['type']),
        'subtype': AccountSubtypeToJSON(value['subtype']),
        'attributes': BeaconAccountRiskEvaluateAccountAttributesToJSON(value['attributes']),
    };
}

