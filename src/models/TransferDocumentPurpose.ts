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
 * Specifies the purpose of the uploaded file.
 * 
 * `"DUE_DILIGENCE"` - The transfer due diligence document of the originator.
 * @export
 */
export const TransferDocumentPurpose = {
    DueDiligence: 'DUE_DILIGENCE'
} as const;
export type TransferDocumentPurpose = typeof TransferDocumentPurpose[keyof typeof TransferDocumentPurpose];


export function TransferDocumentPurposeFromJSON(json: any): TransferDocumentPurpose {
    return TransferDocumentPurposeFromJSONTyped(json, false);
}

export function TransferDocumentPurposeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransferDocumentPurpose {
    return json as TransferDocumentPurpose;
}

export function TransferDocumentPurposeToJSON(value?: TransferDocumentPurpose | null): any {
    return value as any;
}
