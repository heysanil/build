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
 * An object representing the status of the student loan
 * @export
 * @interface StudentLoanStatus
 */
export interface StudentLoanStatus {
    [key: string]: any | any;
    /**
     * The date until which the loan will be in its current status. Dates are returned in an [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format (YYYY-MM-DD).
     * 
     * @type {Date}
     * @memberof StudentLoanStatus
     */
    end_date: Date | null;
    /**
     * The status type of the student loan
     * @type {string}
     * @memberof StudentLoanStatus
     */
    type: StudentLoanStatusTypeEnum | null;
}


/**
 * @export
 */
export const StudentLoanStatusTypeEnum = {
    Cancelled: 'cancelled',
    ChargedOff: 'charged off',
    Claim: 'claim',
    Consolidated: 'consolidated',
    Deferment: 'deferment',
    Delinquent: 'delinquent',
    Discharged: 'discharged',
    Extension: 'extension',
    Forbearance: 'forbearance',
    InGrace: 'in grace',
    InMilitary: 'in military',
    InSchool: 'in school',
    NotFullyDisbursed: 'not fully disbursed',
    Other: 'other',
    PaidInFull: 'paid in full',
    Refunded: 'refunded',
    Repayment: 'repayment',
    Transferred: 'transferred',
    PendingIdr: 'pending idr'
} as const;
export type StudentLoanStatusTypeEnum = typeof StudentLoanStatusTypeEnum[keyof typeof StudentLoanStatusTypeEnum];


/**
 * Check if a given object implements the StudentLoanStatus interface.
 */
export function instanceOfStudentLoanStatus(value: object): boolean {
    if (!('end_date' in value)) return false;
    if (!('type' in value)) return false;
    return true;
}

export function StudentLoanStatusFromJSON(json: any): StudentLoanStatus {
    return StudentLoanStatusFromJSONTyped(json, false);
}

export function StudentLoanStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): StudentLoanStatus {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'end_date': (json['end_date'] == null ? null : new Date(json['end_date'])),
        'type': json['type'],
    };
}

export function StudentLoanStatusToJSON(value?: StudentLoanStatus | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'end_date': (value['end_date'] == null ? null : (value['end_date'] as any).toISOString().substring(0,10)),
        'type': value['type'],
    };
}

