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
 * Valid account subtypes for depository accounts. For a list containing descriptions of each subtype, see [Account schemas](https://plaid.com/docs/api/accounts/#StandaloneAccountType-depository).
 * @export
 */
export const DepositoryAccountSubtype = {
    Checking: 'checking',
    Savings: 'savings',
    Hsa: 'hsa',
    Cd: 'cd',
    MoneyMarket: 'money market',
    Paypal: 'paypal',
    Prepaid: 'prepaid',
    CashManagement: 'cash management',
    Ebt: 'ebt',
    All: 'all'
} as const;
export type DepositoryAccountSubtype = typeof DepositoryAccountSubtype[keyof typeof DepositoryAccountSubtype];


export function DepositoryAccountSubtypeFromJSON(json: any): DepositoryAccountSubtype {
    return DepositoryAccountSubtypeFromJSONTyped(json, false);
}

export function DepositoryAccountSubtypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DepositoryAccountSubtype {
    return json as DepositoryAccountSubtype;
}

export function DepositoryAccountSubtypeToJSON(value?: DepositoryAccountSubtype | null): any {
    return value as any;
}

