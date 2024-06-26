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
import type { Employee } from './Employee';
import {
    EmployeeFromJSON,
    EmployeeFromJSONTyped,
    EmployeeToJSON,
} from './Employee';
import type { PaystubEmployer } from './PaystubEmployer';
import {
    PaystubEmployerFromJSON,
    PaystubEmployerFromJSONTyped,
    PaystubEmployerToJSON,
} from './PaystubEmployer';
import type { W2Box12 } from './W2Box12';
import {
    W2Box12FromJSON,
    W2Box12FromJSONTyped,
    W2Box12ToJSON,
} from './W2Box12';
import type { W2StateAndLocalWages } from './W2StateAndLocalWages';
import {
    W2StateAndLocalWagesFromJSON,
    W2StateAndLocalWagesFromJSONTyped,
    W2StateAndLocalWagesToJSON,
} from './W2StateAndLocalWages';

/**
 * W2 is an object that represents income data taken from a W2 tax document.
 * @export
 * @interface W2
 */
export interface W2 {
    [key: string]: any | any;
    /**
     * 
     * @type {PaystubEmployer}
     * @memberof W2
     */
    employer?: PaystubEmployer;
    /**
     * 
     * @type {Employee}
     * @memberof W2
     */
    employee?: Employee;
    /**
     * The tax year of the W2 document.
     * @type {string}
     * @memberof W2
     */
    tax_year?: string;
    /**
     * An employee identification number or EIN.
     * @type {string}
     * @memberof W2
     */
    employer_id_number?: string;
    /**
     * Wages from tips and other compensation.
     * @type {string}
     * @memberof W2
     */
    wages_tips_other_comp?: string;
    /**
     * Federal income tax withheld for the tax year.
     * @type {string}
     * @memberof W2
     */
    federal_income_tax_withheld?: string;
    /**
     * Wages from social security.
     * @type {string}
     * @memberof W2
     */
    social_security_wages?: string;
    /**
     * Social security tax withheld for the tax year.
     * @type {string}
     * @memberof W2
     */
    social_security_tax_withheld?: string;
    /**
     * Wages and tips from medicare.
     * @type {string}
     * @memberof W2
     */
    medicare_wages_and_tips?: string;
    /**
     * Medicare tax withheld for the tax year.
     * @type {string}
     * @memberof W2
     */
    medicare_tax_withheld?: string;
    /**
     * Tips from social security.
     * @type {string}
     * @memberof W2
     */
    social_security_tips?: string;
    /**
     * Allocated tips.
     * @type {string}
     * @memberof W2
     */
    allocated_tips?: string;
    /**
     * Contents from box 9 on the W2.
     * @type {string}
     * @memberof W2
     */
    box_9?: string;
    /**
     * Dependent care benefits.
     * @type {string}
     * @memberof W2
     */
    dependent_care_benefits?: string;
    /**
     * Nonqualified plans.
     * @type {string}
     * @memberof W2
     */
    nonqualified_plans?: string;
    /**
     * 
     * @type {Array<W2Box12>}
     * @memberof W2
     */
    box_12?: Array<W2Box12>;
    /**
     * Statutory employee.
     * @type {string}
     * @memberof W2
     */
    statutory_employee?: string;
    /**
     * Retirement plan.
     * @type {string}
     * @memberof W2
     */
    retirement_plan?: string;
    /**
     * Third party sick pay.
     * @type {string}
     * @memberof W2
     */
    third_party_sick_pay?: string;
    /**
     * Other.
     * @type {string}
     * @memberof W2
     */
    other?: string;
    /**
     * 
     * @type {Array<W2StateAndLocalWages>}
     * @memberof W2
     */
    state_and_local_wages?: Array<W2StateAndLocalWages>;
}

/**
 * Check if a given object implements the W2 interface.
 */
export function instanceOfW2(value: object): boolean {
    return true;
}

export function W2FromJSON(json: any): W2 {
    return W2FromJSONTyped(json, false);
}

export function W2FromJSONTyped(json: any, ignoreDiscriminator: boolean): W2 {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'employer': json['employer'] == null ? undefined : PaystubEmployerFromJSON(json['employer']),
        'employee': json['employee'] == null ? undefined : EmployeeFromJSON(json['employee']),
        'tax_year': json['tax_year'] == null ? undefined : json['tax_year'],
        'employer_id_number': json['employer_id_number'] == null ? undefined : json['employer_id_number'],
        'wages_tips_other_comp': json['wages_tips_other_comp'] == null ? undefined : json['wages_tips_other_comp'],
        'federal_income_tax_withheld': json['federal_income_tax_withheld'] == null ? undefined : json['federal_income_tax_withheld'],
        'social_security_wages': json['social_security_wages'] == null ? undefined : json['social_security_wages'],
        'social_security_tax_withheld': json['social_security_tax_withheld'] == null ? undefined : json['social_security_tax_withheld'],
        'medicare_wages_and_tips': json['medicare_wages_and_tips'] == null ? undefined : json['medicare_wages_and_tips'],
        'medicare_tax_withheld': json['medicare_tax_withheld'] == null ? undefined : json['medicare_tax_withheld'],
        'social_security_tips': json['social_security_tips'] == null ? undefined : json['social_security_tips'],
        'allocated_tips': json['allocated_tips'] == null ? undefined : json['allocated_tips'],
        'box_9': json['box_9'] == null ? undefined : json['box_9'],
        'dependent_care_benefits': json['dependent_care_benefits'] == null ? undefined : json['dependent_care_benefits'],
        'nonqualified_plans': json['nonqualified_plans'] == null ? undefined : json['nonqualified_plans'],
        'box_12': json['box_12'] == null ? undefined : ((json['box_12'] as Array<any>).map(W2Box12FromJSON)),
        'statutory_employee': json['statutory_employee'] == null ? undefined : json['statutory_employee'],
        'retirement_plan': json['retirement_plan'] == null ? undefined : json['retirement_plan'],
        'third_party_sick_pay': json['third_party_sick_pay'] == null ? undefined : json['third_party_sick_pay'],
        'other': json['other'] == null ? undefined : json['other'],
        'state_and_local_wages': json['state_and_local_wages'] == null ? undefined : ((json['state_and_local_wages'] as Array<any>).map(W2StateAndLocalWagesFromJSON)),
    };
}

export function W2ToJSON(value?: W2 | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'employer': PaystubEmployerToJSON(value['employer']),
        'employee': EmployeeToJSON(value['employee']),
        'tax_year': value['tax_year'],
        'employer_id_number': value['employer_id_number'],
        'wages_tips_other_comp': value['wages_tips_other_comp'],
        'federal_income_tax_withheld': value['federal_income_tax_withheld'],
        'social_security_wages': value['social_security_wages'],
        'social_security_tax_withheld': value['social_security_tax_withheld'],
        'medicare_wages_and_tips': value['medicare_wages_and_tips'],
        'medicare_tax_withheld': value['medicare_tax_withheld'],
        'social_security_tips': value['social_security_tips'],
        'allocated_tips': value['allocated_tips'],
        'box_9': value['box_9'],
        'dependent_care_benefits': value['dependent_care_benefits'],
        'nonqualified_plans': value['nonqualified_plans'],
        'box_12': value['box_12'] == null ? undefined : ((value['box_12'] as Array<any>).map(W2Box12ToJSON)),
        'statutory_employee': value['statutory_employee'],
        'retirement_plan': value['retirement_plan'],
        'third_party_sick_pay': value['third_party_sick_pay'],
        'other': value['other'],
        'state_and_local_wages': value['state_and_local_wages'] == null ? undefined : ((value['state_and_local_wages'] as Array<any>).map(W2StateAndLocalWagesToJSON)),
    };
}

