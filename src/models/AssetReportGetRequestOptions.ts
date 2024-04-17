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
 * An optional object to filter or add data to `/asset_report/get` results. If provided, must be non-`null`.
 * @export
 * @interface AssetReportGetRequestOptions
 */
export interface AssetReportGetRequestOptions {
    /**
     * The maximum number of days of history to include in the Asset Report.
     * @type {number}
     * @memberof AssetReportGetRequestOptions
     */
    days_to_include?: number;
}

/**
 * Check if a given object implements the AssetReportGetRequestOptions interface.
 */
export function instanceOfAssetReportGetRequestOptions(value: object): boolean {
    return true;
}

export function AssetReportGetRequestOptionsFromJSON(json: any): AssetReportGetRequestOptions {
    return AssetReportGetRequestOptionsFromJSONTyped(json, false);
}

export function AssetReportGetRequestOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AssetReportGetRequestOptions {
    if (json == null) {
        return json;
    }
    return {
        
        'days_to_include': json['days_to_include'] == null ? undefined : json['days_to_include'],
    };
}

export function AssetReportGetRequestOptionsToJSON(value?: AssetReportGetRequestOptions | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'days_to_include': value['days_to_include'],
    };
}

