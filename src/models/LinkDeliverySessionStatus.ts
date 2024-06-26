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
 * The status of the given Hosted Link session.
 * 
 * `CREATED`: The session is created but not yet accessed by the user
 * 
 * `OPENED`: The session is opened by the user but not yet completed
 * 
 * `EXITED`: The session has been exited by the user
 * 
 * `COMPLETED`: The session has been completed by the user
 * 
 * `EXPIRED`: The session has expired
 * @export
 */
export const LinkDeliverySessionStatus = {
    Created: 'CREATED',
    Opened: 'OPENED',
    Exited: 'EXITED',
    Completed: 'COMPLETED',
    Expired: 'EXPIRED'
} as const;
export type LinkDeliverySessionStatus = typeof LinkDeliverySessionStatus[keyof typeof LinkDeliverySessionStatus];


export function LinkDeliverySessionStatusFromJSON(json: any): LinkDeliverySessionStatus {
    return LinkDeliverySessionStatusFromJSONTyped(json, false);
}

export function LinkDeliverySessionStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): LinkDeliverySessionStatus {
    return json as LinkDeliverySessionStatus;
}

export function LinkDeliverySessionStatusToJSON(value?: LinkDeliverySessionStatus | null): any {
    return value as any;
}

