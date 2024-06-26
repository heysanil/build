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
 * The status of the given Payment Profile.
 * 
 * `READY`: This Payment Profile is ready to be used to create transfers using `/transfer/authorization/create` and `/transfer/create`.
 * 
 * `PENDING`: This Payment Profile is not ready to be used. You’ll need to call `/link/token/create` and provide the `payment_profile_token` in the `transfer.payment_profile_token` field to initiate the account linking experience.
 * 
 * `REMOVED`: This Payment Profile has been removed.
 * @export
 */
export const PaymentProfileStatus = {
    Pending: 'PENDING',
    Ready: 'READY',
    Removed: 'REMOVED'
} as const;
export type PaymentProfileStatus = typeof PaymentProfileStatus[keyof typeof PaymentProfileStatus];


export function PaymentProfileStatusFromJSON(json: any): PaymentProfileStatus {
    return PaymentProfileStatusFromJSONTyped(json, false);
}

export function PaymentProfileStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentProfileStatus {
    return json as PaymentProfileStatus;
}

export function PaymentProfileStatusToJSON(value?: PaymentProfileStatus | null): any {
    return value as any;
}

