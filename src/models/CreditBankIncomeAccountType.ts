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
 * The account type. This will always be `depository`.
 * @export
 */
export const CreditBankIncomeAccountType = {
    Depository: 'depository'
} as const;
export type CreditBankIncomeAccountType = typeof CreditBankIncomeAccountType[keyof typeof CreditBankIncomeAccountType];


export function CreditBankIncomeAccountTypeFromJSON(json: any): CreditBankIncomeAccountType {
    return CreditBankIncomeAccountTypeFromJSONTyped(json, false);
}

export function CreditBankIncomeAccountTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreditBankIncomeAccountType {
    return json as CreditBankIncomeAccountType;
}

export function CreditBankIncomeAccountTypeToJSON(value?: CreditBankIncomeAccountType | null): any {
    return value as any;
}

