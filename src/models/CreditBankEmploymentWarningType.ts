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
 * The warning type which will always be `BANK_EMPLOYMENT_WARNING`.
 * @export
 */
export const CreditBankEmploymentWarningType = {
    BankEmploymentWarning: 'BANK_EMPLOYMENT_WARNING'
} as const;
export type CreditBankEmploymentWarningType = typeof CreditBankEmploymentWarningType[keyof typeof CreditBankEmploymentWarningType];


export function CreditBankEmploymentWarningTypeFromJSON(json: any): CreditBankEmploymentWarningType {
    return CreditBankEmploymentWarningTypeFromJSONTyped(json, false);
}

export function CreditBankEmploymentWarningTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreditBankEmploymentWarningType {
    return json as CreditBankEmploymentWarningType;
}

export function CreditBankEmploymentWarningTypeToJSON(value?: CreditBankEmploymentWarningType | null): any {
    return value as any;
}

