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
 * Category of Notification
 * @export
 */
export const FDXNotificationCategory = {
    Security: 'SECURITY',
    Maintenance: 'MAINTENANCE',
    Fraud: 'FRAUD',
    Consent: 'CONSENT',
    NewData: 'NEW_DATA'
} as const;
export type FDXNotificationCategory = typeof FDXNotificationCategory[keyof typeof FDXNotificationCategory];


export function FDXNotificationCategoryFromJSON(json: any): FDXNotificationCategory {
    return FDXNotificationCategoryFromJSONTyped(json, false);
}

export function FDXNotificationCategoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): FDXNotificationCategory {
    return json as FDXNotificationCategory;
}

export function FDXNotificationCategoryToJSON(value?: FDXNotificationCategory | null): any {
    return value as any;
}

