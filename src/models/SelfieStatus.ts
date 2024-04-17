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
 * An outcome status for this specific selfie. Distinct from the overall `selfie_check.status` that summarizes the verification outcome from one or more selfies.
 * @export
 */
export const SelfieStatus = {
    Success: 'success',
    Failed: 'failed'
} as const;
export type SelfieStatus = typeof SelfieStatus[keyof typeof SelfieStatus];


export function SelfieStatusFromJSON(json: any): SelfieStatus {
    return SelfieStatusFromJSONTyped(json, false);
}

export function SelfieStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): SelfieStatus {
    return json as SelfieStatus;
}

export function SelfieStatusToJSON(value?: SelfieStatus | null): any {
    return value as any;
}

