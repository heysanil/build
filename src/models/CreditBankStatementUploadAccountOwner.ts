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
import type { CreditBankStatementUploadAccountOwnerAddress } from './CreditBankStatementUploadAccountOwnerAddress';
import {
    CreditBankStatementUploadAccountOwnerAddressFromJSON,
    CreditBankStatementUploadAccountOwnerAddressFromJSONTyped,
    CreditBankStatementUploadAccountOwnerAddressToJSON,
} from './CreditBankStatementUploadAccountOwnerAddress';

/**
 * An object containing data about the owner of the bank account for the uploaded bank statement.
 * @export
 * @interface CreditBankStatementUploadAccountOwner
 */
export interface CreditBankStatementUploadAccountOwner {
    [key: string]: any | any;
    /**
     * The name of the account owner
     * @type {string}
     * @memberof CreditBankStatementUploadAccountOwner
     */
    name: string | null;
    /**
     * 
     * @type {CreditBankStatementUploadAccountOwnerAddress}
     * @memberof CreditBankStatementUploadAccountOwner
     */
    address: CreditBankStatementUploadAccountOwnerAddress;
}

/**
 * Check if a given object implements the CreditBankStatementUploadAccountOwner interface.
 */
export function instanceOfCreditBankStatementUploadAccountOwner(value: object): boolean {
    if (!('name' in value)) return false;
    if (!('address' in value)) return false;
    return true;
}

export function CreditBankStatementUploadAccountOwnerFromJSON(json: any): CreditBankStatementUploadAccountOwner {
    return CreditBankStatementUploadAccountOwnerFromJSONTyped(json, false);
}

export function CreditBankStatementUploadAccountOwnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreditBankStatementUploadAccountOwner {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'name': json['name'],
        'address': CreditBankStatementUploadAccountOwnerAddressFromJSON(json['address']),
    };
}

export function CreditBankStatementUploadAccountOwnerToJSON(value?: CreditBankStatementUploadAccountOwner | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'name': value['name'],
        'address': CreditBankStatementUploadAccountOwnerAddressToJSON(value['address']),
    };
}
