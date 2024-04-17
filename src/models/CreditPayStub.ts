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
import type { CreditDocumentMetadata } from './CreditDocumentMetadata';
import {
    CreditDocumentMetadataFromJSON,
    CreditDocumentMetadataFromJSONTyped,
    CreditDocumentMetadataToJSON,
} from './CreditDocumentMetadata';
import type { CreditPayStubDeductions } from './CreditPayStubDeductions';
import {
    CreditPayStubDeductionsFromJSON,
    CreditPayStubDeductionsFromJSONTyped,
    CreditPayStubDeductionsToJSON,
} from './CreditPayStubDeductions';
import type { CreditPayStubEarnings } from './CreditPayStubEarnings';
import {
    CreditPayStubEarningsFromJSON,
    CreditPayStubEarningsFromJSONTyped,
    CreditPayStubEarningsToJSON,
} from './CreditPayStubEarnings';
import type { CreditPayStubEmployee } from './CreditPayStubEmployee';
import {
    CreditPayStubEmployeeFromJSON,
    CreditPayStubEmployeeFromJSONTyped,
    CreditPayStubEmployeeToJSON,
} from './CreditPayStubEmployee';
import type { CreditPayStubEmployer } from './CreditPayStubEmployer';
import {
    CreditPayStubEmployerFromJSON,
    CreditPayStubEmployerFromJSONTyped,
    CreditPayStubEmployerToJSON,
} from './CreditPayStubEmployer';
import type { CreditPayStubNetPay } from './CreditPayStubNetPay';
import {
    CreditPayStubNetPayFromJSON,
    CreditPayStubNetPayFromJSONTyped,
    CreditPayStubNetPayToJSON,
} from './CreditPayStubNetPay';
import type { PayStubPayPeriodDetails } from './PayStubPayPeriodDetails';
import {
    PayStubPayPeriodDetailsFromJSON,
    PayStubPayPeriodDetailsFromJSONTyped,
    PayStubPayPeriodDetailsToJSON,
} from './PayStubPayPeriodDetails';

/**
 * An object representing an end user's pay stub.
 * @export
 * @interface CreditPayStub
 */
export interface CreditPayStub {
    [key: string]: any | any;
    /**
     * 
     * @type {CreditPayStubDeductions}
     * @memberof CreditPayStub
     */
    deductions: CreditPayStubDeductions;
    /**
     * An identifier of the document referenced by the document metadata.
     * @type {string}
     * @memberof CreditPayStub
     */
    document_id: string | null;
    /**
     * 
     * @type {CreditDocumentMetadata}
     * @memberof CreditPayStub
     */
    document_metadata: CreditDocumentMetadata;
    /**
     * 
     * @type {CreditPayStubEarnings}
     * @memberof CreditPayStub
     */
    earnings: CreditPayStubEarnings;
    /**
     * 
     * @type {CreditPayStubEmployee}
     * @memberof CreditPayStub
     */
    employee: CreditPayStubEmployee;
    /**
     * 
     * @type {CreditPayStubEmployer}
     * @memberof CreditPayStub
     */
    employer: CreditPayStubEmployer;
    /**
     * 
     * @type {CreditPayStubNetPay}
     * @memberof CreditPayStub
     */
    net_pay: CreditPayStubNetPay;
    /**
     * 
     * @type {PayStubPayPeriodDetails}
     * @memberof CreditPayStub
     */
    pay_period_details: PayStubPayPeriodDetails;
}

/**
 * Check if a given object implements the CreditPayStub interface.
 */
export function instanceOfCreditPayStub(value: object): boolean {
    if (!('deductions' in value)) return false;
    if (!('document_id' in value)) return false;
    if (!('document_metadata' in value)) return false;
    if (!('earnings' in value)) return false;
    if (!('employee' in value)) return false;
    if (!('employer' in value)) return false;
    if (!('net_pay' in value)) return false;
    if (!('pay_period_details' in value)) return false;
    return true;
}

export function CreditPayStubFromJSON(json: any): CreditPayStub {
    return CreditPayStubFromJSONTyped(json, false);
}

export function CreditPayStubFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreditPayStub {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'deductions': CreditPayStubDeductionsFromJSON(json['deductions']),
        'document_id': json['document_id'],
        'document_metadata': CreditDocumentMetadataFromJSON(json['document_metadata']),
        'earnings': CreditPayStubEarningsFromJSON(json['earnings']),
        'employee': CreditPayStubEmployeeFromJSON(json['employee']),
        'employer': CreditPayStubEmployerFromJSON(json['employer']),
        'net_pay': CreditPayStubNetPayFromJSON(json['net_pay']),
        'pay_period_details': PayStubPayPeriodDetailsFromJSON(json['pay_period_details']),
    };
}

export function CreditPayStubToJSON(value?: CreditPayStub | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'deductions': CreditPayStubDeductionsToJSON(value['deductions']),
        'document_id': value['document_id'],
        'document_metadata': CreditDocumentMetadataToJSON(value['document_metadata']),
        'earnings': CreditPayStubEarningsToJSON(value['earnings']),
        'employee': CreditPayStubEmployeeToJSON(value['employee']),
        'employer': CreditPayStubEmployerToJSON(value['employer']),
        'net_pay': CreditPayStubNetPayToJSON(value['net_pay']),
        'pay_period_details': PayStubPayPeriodDetailsToJSON(value['pay_period_details']),
    };
}

