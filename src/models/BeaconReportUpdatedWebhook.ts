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
import type { WebhookEnvironmentValues } from './WebhookEnvironmentValues';
import {
    WebhookEnvironmentValuesFromJSON,
    WebhookEnvironmentValuesFromJSONTyped,
    WebhookEnvironmentValuesToJSON,
} from './WebhookEnvironmentValues';

/**
 * Fired when one of your existing Beacon Reports has been modified or removed from the Beacon Network.
 * @export
 * @interface BeaconReportUpdatedWebhook
 */
export interface BeaconReportUpdatedWebhook {
    [key: string]: any | any;
    /**
     * `BEACON`
     * @type {string}
     * @memberof BeaconReportUpdatedWebhook
     */
    webhook_type: string;
    /**
     * `REPORT_UPDATED`
     * @type {string}
     * @memberof BeaconReportUpdatedWebhook
     */
    webhook_code: string;
    /**
     * The ID of the associated Beacon Report.
     * @type {string}
     * @memberof BeaconReportUpdatedWebhook
     */
    beacon_report_id: string;
    /**
     * 
     * @type {WebhookEnvironmentValues}
     * @memberof BeaconReportUpdatedWebhook
     */
    environment: WebhookEnvironmentValues;
}

/**
 * Check if a given object implements the BeaconReportUpdatedWebhook interface.
 */
export function instanceOfBeaconReportUpdatedWebhook(value: object): boolean {
    if (!('webhook_type' in value)) return false;
    if (!('webhook_code' in value)) return false;
    if (!('beacon_report_id' in value)) return false;
    if (!('environment' in value)) return false;
    return true;
}

export function BeaconReportUpdatedWebhookFromJSON(json: any): BeaconReportUpdatedWebhook {
    return BeaconReportUpdatedWebhookFromJSONTyped(json, false);
}

export function BeaconReportUpdatedWebhookFromJSONTyped(json: any, ignoreDiscriminator: boolean): BeaconReportUpdatedWebhook {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'webhook_type': json['webhook_type'],
        'webhook_code': json['webhook_code'],
        'beacon_report_id': json['beacon_report_id'],
        'environment': WebhookEnvironmentValuesFromJSON(json['environment']),
    };
}

export function BeaconReportUpdatedWebhookToJSON(value?: BeaconReportUpdatedWebhook | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'webhook_type': value['webhook_type'],
        'webhook_code': value['webhook_code'],
        'beacon_report_id': value['beacon_report_id'],
        'environment': WebhookEnvironmentValuesToJSON(value['environment']),
    };
}

