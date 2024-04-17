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
 * An object containing data on the overall period of the statement.
 * @export
 * @interface CreditBankStatementUploadBankAccountPeriod
 */
export interface CreditBankStatementUploadBankAccountPeriod {
    /**
     * The start date of the statement period in ISO 8601 format (YYYY-MM-DD).
     * @type {Date}
     * @memberof CreditBankStatementUploadBankAccountPeriod
     */
    start_date: Date | null;
    /**
     * The end date of the statement period in ISO 8601 format (YYYY-MM-DD).
     * @type {Date}
     * @memberof CreditBankStatementUploadBankAccountPeriod
     */
    end_date: Date | null;
    /**
     * The starting balance of the bank account for the period.
     * @type {number}
     * @memberof CreditBankStatementUploadBankAccountPeriod
     */
    starting_balance: number | null;
    /**
     * The ending balance of the bank account for the period.
     * @type {number}
     * @memberof CreditBankStatementUploadBankAccountPeriod
     */
    ending_balance: number | null;
}

/**
 * Check if a given object implements the CreditBankStatementUploadBankAccountPeriod interface.
 */
export function instanceOfCreditBankStatementUploadBankAccountPeriod(value: object): boolean {
    if (!('start_date' in value)) return false;
    if (!('end_date' in value)) return false;
    if (!('starting_balance' in value)) return false;
    if (!('ending_balance' in value)) return false;
    return true;
}

export function CreditBankStatementUploadBankAccountPeriodFromJSON(json: any): CreditBankStatementUploadBankAccountPeriod {
    return CreditBankStatementUploadBankAccountPeriodFromJSONTyped(json, false);
}

export function CreditBankStatementUploadBankAccountPeriodFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreditBankStatementUploadBankAccountPeriod {
    if (json == null) {
        return json;
    }
    return {
        
        'start_date': (json['start_date'] == null ? null : new Date(json['start_date'])),
        'end_date': (json['end_date'] == null ? null : new Date(json['end_date'])),
        'starting_balance': json['starting_balance'],
        'ending_balance': json['ending_balance'],
    };
}

export function CreditBankStatementUploadBankAccountPeriodToJSON(value?: CreditBankStatementUploadBankAccountPeriod | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'start_date': (value['start_date'] == null ? null : (value['start_date'] as any).toISOString().substring(0,10)),
        'end_date': (value['end_date'] == null ? null : (value['end_date'] as any).toISOString().substring(0,10)),
        'starting_balance': value['starting_balance'],
        'ending_balance': value['ending_balance'],
    };
}

