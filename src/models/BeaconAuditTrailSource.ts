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
 * A type indicating what caused a resource to be changed or updated.
 * 
 * 
 * `dashboard` - The resource was created or updated by a member of your team via the Plaid dashboard.
 * 
 * `api` - The resource was created or updated via the Plaid API.
 * 
 * `system` - The resource was created or updated automatically by a part of the Plaid Beacon system. For example, if another business using Plaid Beacon created a fraud report that matched one of your users, your matching user's status would automatically be updated and the audit trail source would be `system`.
 * 
 * `bulk_import` - The resource was created or updated as part of a bulk import process. For example, if your company provided a CSV of user data as part of your initial onboarding, the audit trail source would be `bulk_import`.
 * @export
 */
export const BeaconAuditTrailSource = {
    Dashboard: 'dashboard',
    Api: 'api',
    System: 'system',
    BulkImport: 'bulk_import'
} as const;
export type BeaconAuditTrailSource = typeof BeaconAuditTrailSource[keyof typeof BeaconAuditTrailSource];


export function BeaconAuditTrailSourceFromJSON(json: any): BeaconAuditTrailSource {
    return BeaconAuditTrailSourceFromJSONTyped(json, false);
}

export function BeaconAuditTrailSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): BeaconAuditTrailSource {
    return json as BeaconAuditTrailSource;
}

export function BeaconAuditTrailSourceToJSON(value?: BeaconAuditTrailSource | null): any {
    return value as any;
}

