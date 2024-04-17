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
import type { Credit1099 } from './Credit1099';
import {
    Credit1099FromJSON,
    Credit1099FromJSONTyped,
    Credit1099ToJSON,
} from './Credit1099';
import type { CreditPayStub } from './CreditPayStub';
import {
    CreditPayStubFromJSON,
    CreditPayStubFromJSONTyped,
    CreditPayStubToJSON,
} from './CreditPayStub';
import type { CreditW2 } from './CreditW2';
import {
    CreditW2FromJSON,
    CreditW2FromJSONTyped,
    CreditW2ToJSON,
} from './CreditW2';

/**
 * An object representing payroll data.
 * @export
 * @interface PayrollIncomeObject
 */
export interface PayrollIncomeObject {
    [key: string]: any | any;
    /**
     * ID of the payroll provider account.
     * @type {string}
     * @memberof PayrollIncomeObject
     */
    account_id: string | null;
    /**
     * Array of pay stubs for the user.
     * @type {Array<CreditPayStub>}
     * @memberof PayrollIncomeObject
     */
    pay_stubs: Array<CreditPayStub>;
    /**
     * Array of tax form W-2s.
     * @type {Array<CreditW2>}
     * @memberof PayrollIncomeObject
     */
    w2s: Array<CreditW2>;
    /**
     * Array of tax form 1099s.
     * @type {Array<Credit1099>}
     * @memberof PayrollIncomeObject
     */
    form1099s: Array<Credit1099>;
}

/**
 * Check if a given object implements the PayrollIncomeObject interface.
 */
export function instanceOfPayrollIncomeObject(value: object): boolean {
    if (!('account_id' in value)) return false;
    if (!('pay_stubs' in value)) return false;
    if (!('w2s' in value)) return false;
    if (!('form1099s' in value)) return false;
    return true;
}

export function PayrollIncomeObjectFromJSON(json: any): PayrollIncomeObject {
    return PayrollIncomeObjectFromJSONTyped(json, false);
}

export function PayrollIncomeObjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): PayrollIncomeObject {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'account_id': json['account_id'],
        'pay_stubs': ((json['pay_stubs'] as Array<any>).map(CreditPayStubFromJSON)),
        'w2s': ((json['w2s'] as Array<any>).map(CreditW2FromJSON)),
        'form1099s': ((json['form1099s'] as Array<any>).map(Credit1099FromJSON)),
    };
}

export function PayrollIncomeObjectToJSON(value?: PayrollIncomeObject | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'account_id': value['account_id'],
        'pay_stubs': ((value['pay_stubs'] as Array<any>).map(CreditPayStubToJSON)),
        'w2s': ((value['w2s'] as Array<any>).map(CreditW2ToJSON)),
        'form1099s': ((value['form1099s'] as Array<any>).map(Credit1099ToJSON)),
    };
}
