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

import { mapValues } from '../runtime';
/**
 * AssetReportAuditCopyCreateResponse defines the response schema for `/asset_report/audit_copy/get`
 * @export
 * @interface AssetReportAuditCopyCreateResponse
 */
export interface AssetReportAuditCopyCreateResponse {
    [key: string]: any | any;
    /**
     * A token that can be shared with a third party auditor to allow them to obtain access to the Asset Report. This token should be stored securely.
     * @type {string}
     * @memberof AssetReportAuditCopyCreateResponse
     */
    audit_copy_token: string;
    /**
     * A unique identifier for the request, which can be used for troubleshooting. This identifier, like all Plaid identifiers, is case sensitive.
     * @type {string}
     * @memberof AssetReportAuditCopyCreateResponse
     */
    request_id: string;
}

/**
 * Check if a given object implements the AssetReportAuditCopyCreateResponse interface.
 */
export function instanceOfAssetReportAuditCopyCreateResponse(value: object): boolean {
    if (!('audit_copy_token' in value)) return false;
    if (!('request_id' in value)) return false;
    return true;
}

export function AssetReportAuditCopyCreateResponseFromJSON(json: any): AssetReportAuditCopyCreateResponse {
    return AssetReportAuditCopyCreateResponseFromJSONTyped(json, false);
}

export function AssetReportAuditCopyCreateResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AssetReportAuditCopyCreateResponse {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'audit_copy_token': json['audit_copy_token'],
        'request_id': json['request_id'],
    };
}

export function AssetReportAuditCopyCreateResponseToJSON(value?: AssetReportAuditCopyCreateResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'audit_copy_token': value['audit_copy_token'],
        'request_id': value['request_id'],
    };
}

