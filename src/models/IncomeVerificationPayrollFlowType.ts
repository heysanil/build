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


/**
 * Flow types to retrieve payroll income data
 * @export
 */
export const IncomeVerificationPayrollFlowType = {
    DigitalIncome: 'payroll_digital_income',
    DocumentIncome: 'payroll_document_income'
} as const;
export type IncomeVerificationPayrollFlowType = typeof IncomeVerificationPayrollFlowType[keyof typeof IncomeVerificationPayrollFlowType];


export function IncomeVerificationPayrollFlowTypeFromJSON(json: any): IncomeVerificationPayrollFlowType {
    return IncomeVerificationPayrollFlowTypeFromJSONTyped(json, false);
}

export function IncomeVerificationPayrollFlowTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): IncomeVerificationPayrollFlowType {
    return json as IncomeVerificationPayrollFlowType;
}

export function IncomeVerificationPayrollFlowTypeToJSON(value?: IncomeVerificationPayrollFlowType | null): any {
    return value as any;
}
