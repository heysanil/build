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
 * Severity level of notification
 * @export
 */
export const FDXNotificationSeverity = {
    Emergency: 'EMERGENCY',
    Alert: 'ALERT',
    Warning: 'WARNING',
    Notice: 'NOTICE',
    Info: 'INFO'
} as const;
export type FDXNotificationSeverity = typeof FDXNotificationSeverity[keyof typeof FDXNotificationSeverity];


export function FDXNotificationSeverityFromJSON(json: any): FDXNotificationSeverity {
    return FDXNotificationSeverityFromJSONTyped(json, false);
}

export function FDXNotificationSeverityFromJSONTyped(json: any, ignoreDiscriminator: boolean): FDXNotificationSeverity {
    return json as FDXNotificationSeverity;
}

export function FDXNotificationSeverityToJSON(value?: FDXNotificationSeverity | null): any {
    return value as any;
}

