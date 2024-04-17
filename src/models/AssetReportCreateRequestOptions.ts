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
import type { AssetReportAddOns } from './AssetReportAddOns';
import {
    AssetReportAddOnsFromJSON,
    AssetReportAddOnsFromJSONTyped,
    AssetReportAddOnsToJSON,
} from './AssetReportAddOns';
import type { AssetReportUser } from './AssetReportUser';
import {
    AssetReportUserFromJSON,
    AssetReportUserFromJSONTyped,
    AssetReportUserToJSON,
} from './AssetReportUser';

/**
 * An optional object to filter `/asset_report/create` results. If provided, must be non-`null`. The optional `user` object is required for the report to be eligible for Fannie Mae's Day 1 Certainty program.
 * @export
 * @interface AssetReportCreateRequestOptions
 */
export interface AssetReportCreateRequestOptions {
    /**
     * Client-generated identifier, which can be used by lenders to track loan applications.
     * @type {string}
     * @memberof AssetReportCreateRequestOptions
     */
    client_report_id?: string;
    /**
     * URL to which Plaid will send Assets webhooks, for example when the requested Asset Report is ready.
     * @type {string}
     * @memberof AssetReportCreateRequestOptions
     */
    webhook?: string;
    /**
     * true to return balance and identity earlier as a fast report. Defaults to false if omitted.
     * @type {boolean}
     * @memberof AssetReportCreateRequestOptions
     * @deprecated
     */
    include_fast_report?: boolean;
    /**
     * Additional information that can be included in the asset report. Possible values: `"investments"`
     * @type {Array<string>}
     * @memberof AssetReportCreateRequestOptions
     * @deprecated
     */
    products?: Array<string>;
    /**
     * Use this field to request a `fast_asset` report. When Fast Assets is requested, Plaid will create two versions of the Asset Report: first, the Fast Asset Report, which will contain only current identity and balance information, and later, the Full Asset Report, which will also contain historical balance information and transaction data. A `PRODUCT_READY` webhook will be fired for each Asset Report when it is ready, and the `report_type` field will indicate whether the webhook is firing for the `full` or `fast` Asset Report. To retrieve the Fast Asset Report, call `/asset_report/get` with `fast_report` set to `true`. There is no additional charge for using Fast Assets.
     * @type {Array<AssetReportAddOns>}
     * @memberof AssetReportCreateRequestOptions
     */
    add_ons?: Array<AssetReportAddOns>;
    /**
     * 
     * @type {AssetReportUser}
     * @memberof AssetReportCreateRequestOptions
     */
    user?: AssetReportUser;
}

/**
 * Check if a given object implements the AssetReportCreateRequestOptions interface.
 */
export function instanceOfAssetReportCreateRequestOptions(value: object): boolean {
    return true;
}

export function AssetReportCreateRequestOptionsFromJSON(json: any): AssetReportCreateRequestOptions {
    return AssetReportCreateRequestOptionsFromJSONTyped(json, false);
}

export function AssetReportCreateRequestOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AssetReportCreateRequestOptions {
    if (json == null) {
        return json;
    }
    return {
        
        'client_report_id': json['client_report_id'] == null ? undefined : json['client_report_id'],
        'webhook': json['webhook'] == null ? undefined : json['webhook'],
        'include_fast_report': json['include_fast_report'] == null ? undefined : json['include_fast_report'],
        'products': json['products'] == null ? undefined : json['products'],
        'add_ons': json['add_ons'] == null ? undefined : ((json['add_ons'] as Array<any>).map(AssetReportAddOnsFromJSON)),
        'user': json['user'] == null ? undefined : AssetReportUserFromJSON(json['user']),
    };
}

export function AssetReportCreateRequestOptionsToJSON(value?: AssetReportCreateRequestOptions | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'client_report_id': value['client_report_id'],
        'webhook': value['webhook'],
        'include_fast_report': value['include_fast_report'],
        'products': value['products'],
        'add_ons': value['add_ons'] == null ? undefined : ((value['add_ons'] as Array<any>).map(AssetReportAddOnsToJSON)),
        'user': AssetReportUserToJSON(value['user']),
    };
}

