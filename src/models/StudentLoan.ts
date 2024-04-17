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
import type { PSLFStatus } from './PSLFStatus';
import {
    PSLFStatusFromJSON,
    PSLFStatusFromJSONTyped,
    PSLFStatusToJSON,
} from './PSLFStatus';
import type { ServicerAddressData } from './ServicerAddressData';
import {
    ServicerAddressDataFromJSON,
    ServicerAddressDataFromJSONTyped,
    ServicerAddressDataToJSON,
} from './ServicerAddressData';
import type { StudentLoanStatus } from './StudentLoanStatus';
import {
    StudentLoanStatusFromJSON,
    StudentLoanStatusFromJSONTyped,
    StudentLoanStatusToJSON,
} from './StudentLoanStatus';
import type { StudentRepaymentPlan } from './StudentRepaymentPlan';
import {
    StudentRepaymentPlanFromJSON,
    StudentRepaymentPlanFromJSONTyped,
    StudentRepaymentPlanToJSON,
} from './StudentRepaymentPlan';

/**
 * Contains details about a student loan account
 * @export
 * @interface StudentLoan
 */
export interface StudentLoan {
    [key: string]: any | any;
    /**
     * The ID of the account that this liability belongs to. Each account can only contain one liability.
     * @type {string}
     * @memberof StudentLoan
     */
    account_id: string | null;
    /**
     * The account number of the loan. For some institutions, this may be a masked version of the number (e.g., the last 4 digits instead of the entire number).
     * @type {string}
     * @memberof StudentLoan
     */
    account_number: string | null;
    /**
     * The dates on which loaned funds were disbursed or will be disbursed. These are often in the past. Dates are returned in an [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format (YYYY-MM-DD).
     * @type {Array<Date>}
     * @memberof StudentLoan
     */
    disbursement_dates: Array<Date> | null;
    /**
     * The date when the student loan is expected to be paid off. Availability for this field is limited. Dates are returned in an [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format (YYYY-MM-DD).
     * @type {Date}
     * @memberof StudentLoan
     */
    expected_payoff_date: Date | null;
    /**
     * The guarantor of the student loan.
     * @type {string}
     * @memberof StudentLoan
     */
    guarantor: string | null;
    /**
     * The interest rate on the loan as a percentage.
     * @type {number}
     * @memberof StudentLoan
     */
    interest_rate_percentage: number;
    /**
     * `true` if a payment is currently overdue. Availability for this field is limited.
     * @type {boolean}
     * @memberof StudentLoan
     */
    is_overdue: boolean | null;
    /**
     * The amount of the last payment.
     * @type {number}
     * @memberof StudentLoan
     */
    last_payment_amount: number | null;
    /**
     * The date of the last payment. Dates are returned in an [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format (YYYY-MM-DD).
     * @type {Date}
     * @memberof StudentLoan
     */
    last_payment_date: Date | null;
    /**
     * The date of the last statement. Dates are returned in an [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format (YYYY-MM-DD).
     * @type {Date}
     * @memberof StudentLoan
     */
    last_statement_issue_date: Date | null;
    /**
     * The type of loan, e.g., "Consolidation Loans".
     * @type {string}
     * @memberof StudentLoan
     */
    loan_name: string | null;
    /**
     * 
     * @type {StudentLoanStatus}
     * @memberof StudentLoan
     */
    loan_status: StudentLoanStatus;
    /**
     * The minimum payment due for the next billing cycle. There are some exceptions:
     * Some institutions require a minimum payment across all loans associated with an account number. Our API presents that same minimum payment amount on each loan. The institutions that do this are: Great Lakes ( `ins_116861`), Firstmark (`ins_116295`), Commonbond Firstmark Services (`ins_116950`), Nelnet (`ins_116528`), EdFinancial Services (`ins_116304`), Granite State (`ins_116308`), and Oklahoma Student Loan Authority (`ins_116945`).
     * Firstmark (`ins_116295` ) and Navient (`ins_116248`) will display as $0 if there is an autopay program in effect.
     * @type {number}
     * @memberof StudentLoan
     */
    minimum_payment_amount: number | null;
    /**
     * The due date for the next payment. The due date is `null` if a payment is not expected. A payment is not expected if `loan_status.type` is `deferment`, `in_school`, `consolidated`, `paid in full`, or `transferred`. Dates are returned in an [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format (YYYY-MM-DD).
     * @type {Date}
     * @memberof StudentLoan
     */
    next_payment_due_date: Date | null;
    /**
     * The date on which the loan was initially lent. Dates are returned in an [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format (YYYY-MM-DD).
     * 
     * @type {Date}
     * @memberof StudentLoan
     */
    origination_date: Date | null;
    /**
     * The original principal balance of the loan.
     * @type {number}
     * @memberof StudentLoan
     */
    origination_principal_amount: number | null;
    /**
     * The total dollar amount of the accrued interest balance. For Sallie Mae ( `ins_116944`), this amount is included in the current balance of the loan, so this field will return as `null`.
     * @type {number}
     * @memberof StudentLoan
     */
    outstanding_interest_amount: number | null;
    /**
     * The relevant account number that should be used to reference this loan for payments. In the majority of cases, `payment_reference_number` will match `account_number,` but in some institutions, such as Great Lakes (`ins_116861`), it will be different.
     * @type {string}
     * @memberof StudentLoan
     */
    payment_reference_number: string | null;
    /**
     * 
     * @type {PSLFStatus}
     * @memberof StudentLoan
     */
    pslf_status: PSLFStatus;
    /**
     * 
     * @type {StudentRepaymentPlan}
     * @memberof StudentLoan
     */
    repayment_plan: StudentRepaymentPlan;
    /**
     * The sequence number of the student loan. Heartland ECSI (`ins_116948`) does not make this field available.
     * @type {string}
     * @memberof StudentLoan
     */
    sequence_number: string | null;
    /**
     * 
     * @type {ServicerAddressData}
     * @memberof StudentLoan
     */
    servicer_address: ServicerAddressData;
    /**
     * The year to date (YTD) interest paid. Availability for this field is limited.
     * @type {number}
     * @memberof StudentLoan
     */
    ytd_interest_paid: number | null;
    /**
     * The year to date (YTD) principal paid. Availability for this field is limited.
     * @type {number}
     * @memberof StudentLoan
     */
    ytd_principal_paid: number | null;
}

/**
 * Check if a given object implements the StudentLoan interface.
 */
export function instanceOfStudentLoan(value: object): boolean {
    if (!('account_id' in value)) return false;
    if (!('account_number' in value)) return false;
    if (!('disbursement_dates' in value)) return false;
    if (!('expected_payoff_date' in value)) return false;
    if (!('guarantor' in value)) return false;
    if (!('interest_rate_percentage' in value)) return false;
    if (!('is_overdue' in value)) return false;
    if (!('last_payment_amount' in value)) return false;
    if (!('last_payment_date' in value)) return false;
    if (!('last_statement_issue_date' in value)) return false;
    if (!('loan_name' in value)) return false;
    if (!('loan_status' in value)) return false;
    if (!('minimum_payment_amount' in value)) return false;
    if (!('next_payment_due_date' in value)) return false;
    if (!('origination_date' in value)) return false;
    if (!('origination_principal_amount' in value)) return false;
    if (!('outstanding_interest_amount' in value)) return false;
    if (!('payment_reference_number' in value)) return false;
    if (!('pslf_status' in value)) return false;
    if (!('repayment_plan' in value)) return false;
    if (!('sequence_number' in value)) return false;
    if (!('servicer_address' in value)) return false;
    if (!('ytd_interest_paid' in value)) return false;
    if (!('ytd_principal_paid' in value)) return false;
    return true;
}

export function StudentLoanFromJSON(json: any): StudentLoan {
    return StudentLoanFromJSONTyped(json, false);
}

export function StudentLoanFromJSONTyped(json: any, ignoreDiscriminator: boolean): StudentLoan {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'account_id': json['account_id'],
        'account_number': json['account_number'],
        'disbursement_dates': json['disbursement_dates'],
        'expected_payoff_date': (json['expected_payoff_date'] == null ? null : new Date(json['expected_payoff_date'])),
        'guarantor': json['guarantor'],
        'interest_rate_percentage': json['interest_rate_percentage'],
        'is_overdue': json['is_overdue'],
        'last_payment_amount': json['last_payment_amount'],
        'last_payment_date': (json['last_payment_date'] == null ? null : new Date(json['last_payment_date'])),
        'last_statement_issue_date': (json['last_statement_issue_date'] == null ? null : new Date(json['last_statement_issue_date'])),
        'loan_name': json['loan_name'],
        'loan_status': StudentLoanStatusFromJSON(json['loan_status']),
        'minimum_payment_amount': json['minimum_payment_amount'],
        'next_payment_due_date': (json['next_payment_due_date'] == null ? null : new Date(json['next_payment_due_date'])),
        'origination_date': (json['origination_date'] == null ? null : new Date(json['origination_date'])),
        'origination_principal_amount': json['origination_principal_amount'],
        'outstanding_interest_amount': json['outstanding_interest_amount'],
        'payment_reference_number': json['payment_reference_number'],
        'pslf_status': PSLFStatusFromJSON(json['pslf_status']),
        'repayment_plan': StudentRepaymentPlanFromJSON(json['repayment_plan']),
        'sequence_number': json['sequence_number'],
        'servicer_address': ServicerAddressDataFromJSON(json['servicer_address']),
        'ytd_interest_paid': json['ytd_interest_paid'],
        'ytd_principal_paid': json['ytd_principal_paid'],
    };
}

export function StudentLoanToJSON(value?: StudentLoan | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'account_id': value['account_id'],
        'account_number': value['account_number'],
        'disbursement_dates': value['disbursement_dates'],
        'expected_payoff_date': (value['expected_payoff_date'] == null ? null : (value['expected_payoff_date'] as any).toISOString().substring(0,10)),
        'guarantor': value['guarantor'],
        'interest_rate_percentage': value['interest_rate_percentage'],
        'is_overdue': value['is_overdue'],
        'last_payment_amount': value['last_payment_amount'],
        'last_payment_date': (value['last_payment_date'] == null ? null : (value['last_payment_date'] as any).toISOString().substring(0,10)),
        'last_statement_issue_date': (value['last_statement_issue_date'] == null ? null : (value['last_statement_issue_date'] as any).toISOString().substring(0,10)),
        'loan_name': value['loan_name'],
        'loan_status': StudentLoanStatusToJSON(value['loan_status']),
        'minimum_payment_amount': value['minimum_payment_amount'],
        'next_payment_due_date': (value['next_payment_due_date'] == null ? null : (value['next_payment_due_date'] as any).toISOString().substring(0,10)),
        'origination_date': (value['origination_date'] == null ? null : (value['origination_date'] as any).toISOString().substring(0,10)),
        'origination_principal_amount': value['origination_principal_amount'],
        'outstanding_interest_amount': value['outstanding_interest_amount'],
        'payment_reference_number': value['payment_reference_number'],
        'pslf_status': PSLFStatusToJSON(value['pslf_status']),
        'repayment_plan': StudentRepaymentPlanToJSON(value['repayment_plan']),
        'sequence_number': value['sequence_number'],
        'servicer_address': ServicerAddressDataToJSON(value['servicer_address']),
        'ytd_interest_paid': value['ytd_interest_paid'],
        'ytd_principal_paid': value['ytd_principal_paid'],
    };
}

