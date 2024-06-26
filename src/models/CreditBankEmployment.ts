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
import type { CreditBankEmployer } from './CreditBankEmployer';
import {
    CreditBankEmployerFromJSON,
    CreditBankEmployerFromJSONTyped,
    CreditBankEmployerToJSON,
} from './CreditBankEmployer';

/**
 * Detailed information for the bank employment.
 * @export
 * @interface CreditBankEmployment
 */
export interface CreditBankEmployment {
    /**
     * A unique identifier for the bank employment.
     * @type {string}
     * @memberof CreditBankEmployment
     */
    bank_employment_id: string;
    /**
     * Plaid's unique identifier for the account.
     * @type {string}
     * @memberof CreditBankEmployment
     */
    account_id: string;
    /**
     * 
     * @type {CreditBankEmployer}
     * @memberof CreditBankEmployment
     */
    employer: CreditBankEmployer;
    /**
     * The date of the most recent deposit from this employer.
     * @type {Date}
     * @memberof CreditBankEmployment
     */
    latest_deposit_date: Date;
    /**
     * The date of the earliest deposit from this employer from within the period of the days requested.
     * @type {Date}
     * @memberof CreditBankEmployment
     */
    earliest_deposit_date: Date;
}

/**
 * Check if a given object implements the CreditBankEmployment interface.
 */
export function instanceOfCreditBankEmployment(value: object): boolean {
    if (!('bank_employment_id' in value)) return false;
    if (!('account_id' in value)) return false;
    if (!('employer' in value)) return false;
    if (!('latest_deposit_date' in value)) return false;
    if (!('earliest_deposit_date' in value)) return false;
    return true;
}

export function CreditBankEmploymentFromJSON(json: any): CreditBankEmployment {
    return CreditBankEmploymentFromJSONTyped(json, false);
}

export function CreditBankEmploymentFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreditBankEmployment {
    if (json == null) {
        return json;
    }
    return {
        
        'bank_employment_id': json['bank_employment_id'],
        'account_id': json['account_id'],
        'employer': CreditBankEmployerFromJSON(json['employer']),
        'latest_deposit_date': (new Date(json['latest_deposit_date'])),
        'earliest_deposit_date': (new Date(json['earliest_deposit_date'])),
    };
}

export function CreditBankEmploymentToJSON(value?: CreditBankEmployment | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'bank_employment_id': value['bank_employment_id'],
        'account_id': value['account_id'],
        'employer': CreditBankEmployerToJSON(value['employer']),
        'latest_deposit_date': ((value['latest_deposit_date']).toISOString().substring(0,10)),
        'earliest_deposit_date': ((value['earliest_deposit_date']).toISOString().substring(0,10)),
    };
}

