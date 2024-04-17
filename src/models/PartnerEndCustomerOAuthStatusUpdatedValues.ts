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
 * The OAuth status of the update
 * @export
 */
export const PartnerEndCustomerOAuthStatusUpdatedValues = {
    NotStarted: 'not-started',
    Processing: 'processing',
    Approved: 'approved',
    Enabled: 'enabled',
    AttentionRequired: 'attention-required'
} as const;
export type PartnerEndCustomerOAuthStatusUpdatedValues = typeof PartnerEndCustomerOAuthStatusUpdatedValues[keyof typeof PartnerEndCustomerOAuthStatusUpdatedValues];


export function PartnerEndCustomerOAuthStatusUpdatedValuesFromJSON(json: any): PartnerEndCustomerOAuthStatusUpdatedValues {
    return PartnerEndCustomerOAuthStatusUpdatedValuesFromJSONTyped(json, false);
}

export function PartnerEndCustomerOAuthStatusUpdatedValuesFromJSONTyped(json: any, ignoreDiscriminator: boolean): PartnerEndCustomerOAuthStatusUpdatedValues {
    return json as PartnerEndCustomerOAuthStatusUpdatedValues;
}

export function PartnerEndCustomerOAuthStatusUpdatedValuesToJSON(value?: PartnerEndCustomerOAuthStatusUpdatedValues | null): any {
    return value as any;
}
