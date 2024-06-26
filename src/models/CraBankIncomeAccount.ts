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
import type { CreditBankIncomeAccountType } from './CreditBankIncomeAccountType';
import {
    CreditBankIncomeAccountTypeFromJSON,
    CreditBankIncomeAccountTypeFromJSONTyped,
    CreditBankIncomeAccountTypeToJSON,
} from './CreditBankIncomeAccountType';
import type { DepositoryAccountSubtype } from './DepositoryAccountSubtype';
import {
    DepositoryAccountSubtypeFromJSON,
    DepositoryAccountSubtypeFromJSONTyped,
    DepositoryAccountSubtypeToJSON,
} from './DepositoryAccountSubtype';
import type { Owner } from './Owner';
import {
    OwnerFromJSON,
    OwnerFromJSONTyped,
    OwnerToJSON,
} from './Owner';

/**
 * The Item's bank accounts that have the selected data.
 * @export
 * @interface CraBankIncomeAccount
 */
export interface CraBankIncomeAccount {
    /**
     * The last 2-4 alphanumeric characters of an account's official account number.
     * Note that the mask may be non-unique between an Item's accounts, and it may also not match the mask that the bank displays to the user.
     * @type {string}
     * @memberof CraBankIncomeAccount
     */
    mask: string | null;
    /**
     * The name of the bank account.
     * @type {string}
     * @memberof CraBankIncomeAccount
     */
    name: string;
    /**
     * The official name of the bank account.
     * @type {string}
     * @memberof CraBankIncomeAccount
     */
    official_name: string | null;
    /**
     * 
     * @type {DepositoryAccountSubtype}
     * @memberof CraBankIncomeAccount
     */
    subtype: DepositoryAccountSubtype;
    /**
     * 
     * @type {CreditBankIncomeAccountType}
     * @memberof CraBankIncomeAccount
     */
    type: CreditBankIncomeAccountType;
    /**
     * Data returned by the financial institution about the account owner or owners. Identity information is optional, so field may return an empty array.
     * @type {Array<Owner>}
     * @memberof CraBankIncomeAccount
     */
    owners: Array<Owner>;
}

/**
 * Check if a given object implements the CraBankIncomeAccount interface.
 */
export function instanceOfCraBankIncomeAccount(value: object): boolean {
    if (!('mask' in value)) return false;
    if (!('name' in value)) return false;
    if (!('official_name' in value)) return false;
    if (!('subtype' in value)) return false;
    if (!('type' in value)) return false;
    if (!('owners' in value)) return false;
    return true;
}

export function CraBankIncomeAccountFromJSON(json: any): CraBankIncomeAccount {
    return CraBankIncomeAccountFromJSONTyped(json, false);
}

export function CraBankIncomeAccountFromJSONTyped(json: any, ignoreDiscriminator: boolean): CraBankIncomeAccount {
    if (json == null) {
        return json;
    }
    return {
        
        'mask': json['mask'],
        'name': json['name'],
        'official_name': json['official_name'],
        'subtype': DepositoryAccountSubtypeFromJSON(json['subtype']),
        'type': CreditBankIncomeAccountTypeFromJSON(json['type']),
        'owners': ((json['owners'] as Array<any>).map(OwnerFromJSON)),
    };
}

export function CraBankIncomeAccountToJSON(value?: CraBankIncomeAccount | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'mask': value['mask'],
        'name': value['name'],
        'official_name': value['official_name'],
        'subtype': DepositoryAccountSubtypeToJSON(value['subtype']),
        'type': CreditBankIncomeAccountTypeToJSON(value['type']),
        'owners': ((value['owners'] as Array<any>).map(OwnerToJSON)),
    };
}

