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
 * Fired when identity verification has been retried, which can be triggered via the dashboard or the API.
 * @export
 * @interface IdentityVerificationRetriedWebhook
 */
export interface IdentityVerificationRetriedWebhook {
    [key: string]: any | any;
    /**
     * `IDENTITY_VERIFICATION`
     * @type {string}
     * @memberof IdentityVerificationRetriedWebhook
     */
    webhook_type: string;
    /**
     * `RETRIED`
     * @type {string}
     * @memberof IdentityVerificationRetriedWebhook
     */
    webhook_code: string;
    /**
     * The ID of the associated Identity Verification attempt.
     * @type {string}
     * @memberof IdentityVerificationRetriedWebhook
     */
    identity_verification_id: string;
    /**
     * 
     * @type {WebhookEnvironmentValues}
     * @memberof IdentityVerificationRetriedWebhook
     */
    environment: WebhookEnvironmentValues;
}

/**
 * Check if a given object implements the IdentityVerificationRetriedWebhook interface.
 */
export function instanceOfIdentityVerificationRetriedWebhook(value: object): boolean {
    if (!('webhook_type' in value)) return false;
    if (!('webhook_code' in value)) return false;
    if (!('identity_verification_id' in value)) return false;
    if (!('environment' in value)) return false;
    return true;
}

export function IdentityVerificationRetriedWebhookFromJSON(json: any): IdentityVerificationRetriedWebhook {
    return IdentityVerificationRetriedWebhookFromJSONTyped(json, false);
}

export function IdentityVerificationRetriedWebhookFromJSONTyped(json: any, ignoreDiscriminator: boolean): IdentityVerificationRetriedWebhook {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'webhook_type': json['webhook_type'],
        'webhook_code': json['webhook_code'],
        'identity_verification_id': json['identity_verification_id'],
        'environment': WebhookEnvironmentValuesFromJSON(json['environment']),
    };
}

export function IdentityVerificationRetriedWebhookToJSON(value?: IdentityVerificationRetriedWebhook | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'webhook_type': value['webhook_type'],
        'webhook_code': value['webhook_code'],
        'identity_verification_id': value['identity_verification_id'],
        'environment': WebhookEnvironmentValuesToJSON(value['environment']),
    };
}

