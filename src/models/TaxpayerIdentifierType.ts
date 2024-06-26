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
 * A value from a MISMO prescribed list that classifies identification numbers used by the Internal Revenue Service (IRS) in the administration of tax laws. A Social Security number (SSN) is issued by the SSA; all other taxpayer identification numbers are issued by the IRS.
 * @export
 */
export const TaxpayerIdentifierType = {
    IndividualTaxpayerIdentificationNumber: 'IndividualTaxpayerIdentificationNumber',
    SocialSecurityNumber: 'SocialSecurityNumber'
} as const;
export type TaxpayerIdentifierType = typeof TaxpayerIdentifierType[keyof typeof TaxpayerIdentifierType];


export function TaxpayerIdentifierTypeFromJSON(json: any): TaxpayerIdentifierType {
    return TaxpayerIdentifierTypeFromJSONTyped(json, false);
}

export function TaxpayerIdentifierTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaxpayerIdentifierType {
    return json as TaxpayerIdentifierType;
}

export function TaxpayerIdentifierTypeToJSON(value?: TaxpayerIdentifierType | null): any {
    return value as any;
}

