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
 * A match summary describing the cross comparison between the subject's name, extracted from the document image, and the name they separately provided to identity verification attempt.
 * @export
 */
export const DocumentNameMatchCode = {
    Match: 'match',
    PartialMatch: 'partial_match',
    NoMatch: 'no_match',
    NoData: 'no_data'
} as const;
export type DocumentNameMatchCode = typeof DocumentNameMatchCode[keyof typeof DocumentNameMatchCode];


export function DocumentNameMatchCodeFromJSON(json: any): DocumentNameMatchCode {
    return DocumentNameMatchCodeFromJSONTyped(json, false);
}

export function DocumentNameMatchCodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DocumentNameMatchCode {
    return json as DocumentNameMatchCode;
}

export function DocumentNameMatchCodeToJSON(value?: DocumentNameMatchCode | null): any {
    return value as any;
}

