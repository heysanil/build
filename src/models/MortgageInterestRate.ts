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
 * Object containing metadata about the interest rate for the mortgage.
 * @export
 * @interface MortgageInterestRate
 */
export interface MortgageInterestRate {
    [key: string]: any | any;
    /**
     * Percentage value (interest rate of current mortgage, not APR) of interest payable on a loan.
     * @type {number}
     * @memberof MortgageInterestRate
     */
    percentage: number | null;
    /**
     * The type of interest charged (fixed or variable).
     * @type {string}
     * @memberof MortgageInterestRate
     */
    type: string | null;
}

/**
 * Check if a given object implements the MortgageInterestRate interface.
 */
export function instanceOfMortgageInterestRate(value: object): boolean {
    if (!('percentage' in value)) return false;
    if (!('type' in value)) return false;
    return true;
}

export function MortgageInterestRateFromJSON(json: any): MortgageInterestRate {
    return MortgageInterestRateFromJSONTyped(json, false);
}

export function MortgageInterestRateFromJSONTyped(json: any, ignoreDiscriminator: boolean): MortgageInterestRate {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'percentage': json['percentage'],
        'type': json['type'],
    };
}

export function MortgageInterestRateToJSON(value?: MortgageInterestRate | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'percentage': value['percentage'],
        'type': value['type'],
    };
}

