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
import type { AssetReportPDFGetRequestOptions } from './AssetReportPDFGetRequestOptions';
import {
    AssetReportPDFGetRequestOptionsFromJSON,
    AssetReportPDFGetRequestOptionsFromJSONTyped,
    AssetReportPDFGetRequestOptionsToJSON,
} from './AssetReportPDFGetRequestOptions';

/**
 * AssetReportPDFGetRequest defines the request schema for `/asset_report/pdf/get`
 * @export
 * @interface AssetReportPDFGetRequest
 */
export interface AssetReportPDFGetRequest {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     * @type {string}
     * @memberof AssetReportPDFGetRequest
     */
    client_id?: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     * @type {string}
     * @memberof AssetReportPDFGetRequest
     */
    secret?: string;
    /**
     * A token that can be provided to endpoints such as `/asset_report/get` or `/asset_report/pdf/get` to fetch or update an Asset Report.
     * @type {string}
     * @memberof AssetReportPDFGetRequest
     */
    asset_report_token: string;
    /**
     * 
     * @type {AssetReportPDFGetRequestOptions}
     * @memberof AssetReportPDFGetRequest
     */
    options?: AssetReportPDFGetRequestOptions;
}

/**
 * Check if a given object implements the AssetReportPDFGetRequest interface.
 */
export function instanceOfAssetReportPDFGetRequest(value: object): boolean {
    if (!('asset_report_token' in value)) return false;
    return true;
}

export function AssetReportPDFGetRequestFromJSON(json: any): AssetReportPDFGetRequest {
    return AssetReportPDFGetRequestFromJSONTyped(json, false);
}

export function AssetReportPDFGetRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AssetReportPDFGetRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'client_id': json['client_id'] == null ? undefined : json['client_id'],
        'secret': json['secret'] == null ? undefined : json['secret'],
        'asset_report_token': json['asset_report_token'],
        'options': json['options'] == null ? undefined : AssetReportPDFGetRequestOptionsFromJSON(json['options']),
    };
}

export function AssetReportPDFGetRequestToJSON(value?: AssetReportPDFGetRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'client_id': value['client_id'],
        'secret': value['secret'],
        'asset_report_token': value['asset_report_token'],
        'options': AssetReportPDFGetRequestOptionsToJSON(value['options']),
    };
}
