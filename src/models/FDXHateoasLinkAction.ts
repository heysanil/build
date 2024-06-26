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
 * HTTP Method to use for the request
 * @export
 */
export const FDXHateoasLinkAction = {
    Get: 'GET',
    Post: 'POST',
    Patch: 'PATCH',
    Delete: 'DELETE',
    Put: 'PUT'
} as const;
export type FDXHateoasLinkAction = typeof FDXHateoasLinkAction[keyof typeof FDXHateoasLinkAction];


export function FDXHateoasLinkActionFromJSON(json: any): FDXHateoasLinkAction {
    return FDXHateoasLinkActionFromJSONTyped(json, false);
}

export function FDXHateoasLinkActionFromJSONTyped(json: any, ignoreDiscriminator: boolean): FDXHateoasLinkAction {
    return json as FDXHateoasLinkAction;
}

export function FDXHateoasLinkActionToJSON(value?: FDXHateoasLinkAction | null): any {
    return value as any;
}

