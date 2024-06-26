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
import type { ReportingInformation } from './ReportingInformation';
import {
    ReportingInformationFromJSON,
    ReportingInformationFromJSONTyped,
    ReportingInformationToJSON,
} from './ReportingInformation';
import type { ServiceProductFulfillment } from './ServiceProductFulfillment';
import {
    ServiceProductFulfillmentFromJSON,
    ServiceProductFulfillmentFromJSONTyped,
    ServiceProductFulfillmentToJSON,
} from './ServiceProductFulfillment';
import type { VerificationOfAssetResponse } from './VerificationOfAssetResponse';
import {
    VerificationOfAssetResponseFromJSON,
    VerificationOfAssetResponseFromJSONTyped,
    VerificationOfAssetResponseToJSON,
} from './VerificationOfAssetResponse';

/**
 * Documentation not found in the MISMO model viewer and not provided by Freddie Mac.
 * @export
 * @interface VerificationOfAsset
 */
export interface VerificationOfAsset {
    [key: string]: any | any;
    /**
     * 
     * @type {ReportingInformation}
     * @memberof VerificationOfAsset
     */
    REPORTING_INFORMATION: ReportingInformation;
    /**
     * 
     * @type {ServiceProductFulfillment}
     * @memberof VerificationOfAsset
     */
    SERVICE_PRODUCT_FULFILLMENT: ServiceProductFulfillment;
    /**
     * 
     * @type {VerificationOfAssetResponse}
     * @memberof VerificationOfAsset
     */
    VERIFICATION_OF_ASSET_RESPONSE: VerificationOfAssetResponse;
}

/**
 * Check if a given object implements the VerificationOfAsset interface.
 */
export function instanceOfVerificationOfAsset(value: object): boolean {
    if (!('REPORTING_INFORMATION' in value)) return false;
    if (!('SERVICE_PRODUCT_FULFILLMENT' in value)) return false;
    if (!('VERIFICATION_OF_ASSET_RESPONSE' in value)) return false;
    return true;
}

export function VerificationOfAssetFromJSON(json: any): VerificationOfAsset {
    return VerificationOfAssetFromJSONTyped(json, false);
}

export function VerificationOfAssetFromJSONTyped(json: any, ignoreDiscriminator: boolean): VerificationOfAsset {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'REPORTING_INFORMATION': ReportingInformationFromJSON(json['REPORTING_INFORMATION']),
        'SERVICE_PRODUCT_FULFILLMENT': ServiceProductFulfillmentFromJSON(json['SERVICE_PRODUCT_FULFILLMENT']),
        'VERIFICATION_OF_ASSET_RESPONSE': VerificationOfAssetResponseFromJSON(json['VERIFICATION_OF_ASSET_RESPONSE']),
    };
}

export function VerificationOfAssetToJSON(value?: VerificationOfAsset | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'REPORTING_INFORMATION': ReportingInformationToJSON(value['REPORTING_INFORMATION']),
        'SERVICE_PRODUCT_FULFILLMENT': ServiceProductFulfillmentToJSON(value['SERVICE_PRODUCT_FULFILLMENT']),
        'VERIFICATION_OF_ASSET_RESPONSE': VerificationOfAssetResponseToJSON(value['VERIFICATION_OF_ASSET_RESPONSE']),
    };
}

