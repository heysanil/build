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
 * AssetReportCreateResponse defines the response schema for `/asset_report/create`
 * @export
 * @interface AssetReportCreateResponse
 */
export interface AssetReportCreateResponse {
    [key: string]: any | any;
    /**
     * A token that can be provided to endpoints such as `/asset_report/get` or `/asset_report/pdf/get` to fetch or update an Asset Report.
     * @type {string}
     * @memberof AssetReportCreateResponse
     */
    asset_report_token: string;
    /**
     * A unique ID identifying an Asset Report. Like all Plaid identifiers, this ID is case sensitive.
     * @type {string}
     * @memberof AssetReportCreateResponse
     */
    asset_report_id: string;
    /**
     * A unique identifier for the request, which can be used for troubleshooting. This identifier, like all Plaid identifiers, is case sensitive.
     * @type {string}
     * @memberof AssetReportCreateResponse
     */
    request_id: string;
}

/**
 * Check if a given object implements the AssetReportCreateResponse interface.
 */
export function instanceOfAssetReportCreateResponse(value: object): boolean {
    if (!('asset_report_token' in value)) return false;
    if (!('asset_report_id' in value)) return false;
    if (!('request_id' in value)) return false;
    return true;
}

export function AssetReportCreateResponseFromJSON(json: any): AssetReportCreateResponse {
    return AssetReportCreateResponseFromJSONTyped(json, false);
}

export function AssetReportCreateResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AssetReportCreateResponse {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'asset_report_token': json['asset_report_token'],
        'asset_report_id': json['asset_report_id'],
        'request_id': json['request_id'],
    };
}

export function AssetReportCreateResponseToJSON(value?: AssetReportCreateResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'asset_report_token': value['asset_report_token'],
        'asset_report_id': value['asset_report_id'],
        'request_id': value['request_id'],
    };
}
