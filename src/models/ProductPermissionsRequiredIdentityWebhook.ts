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
 * Fired when an `ACCESS_NOT_GRANTED` error is hit for Identity. The error can be resolved by putting the user through update mode with `identity` in the `products` array, as well as through the limited beta for update mode Identity product validations.
 * @export
 * @interface ProductPermissionsRequiredIdentityWebhook
 */
export interface ProductPermissionsRequiredIdentityWebhook {
    [key: string]: any | any;
    /**
     * `IDENTITY`
     * @type {string}
     * @memberof ProductPermissionsRequiredIdentityWebhook
     */
    webhook_type: string;
    /**
     * `PRODUCT_PERMISSIONS_REQUIRED`
     * @type {string}
     * @memberof ProductPermissionsRequiredIdentityWebhook
     */
    webhook_code: string;
    /**
     * The `item_id` of the Item associated with this webhook, warning, or error
     * @type {string}
     * @memberof ProductPermissionsRequiredIdentityWebhook
     */
    item_id: string;
    /**
     * 
     * @type {WebhookEnvironmentValues}
     * @memberof ProductPermissionsRequiredIdentityWebhook
     */
    environment: WebhookEnvironmentValues;
}

/**
 * Check if a given object implements the ProductPermissionsRequiredIdentityWebhook interface.
 */
export function instanceOfProductPermissionsRequiredIdentityWebhook(value: object): boolean {
    if (!('webhook_type' in value)) return false;
    if (!('webhook_code' in value)) return false;
    if (!('item_id' in value)) return false;
    if (!('environment' in value)) return false;
    return true;
}

export function ProductPermissionsRequiredIdentityWebhookFromJSON(json: any): ProductPermissionsRequiredIdentityWebhook {
    return ProductPermissionsRequiredIdentityWebhookFromJSONTyped(json, false);
}

export function ProductPermissionsRequiredIdentityWebhookFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductPermissionsRequiredIdentityWebhook {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'webhook_type': json['webhook_type'],
        'webhook_code': json['webhook_code'],
        'item_id': json['item_id'],
        'environment': WebhookEnvironmentValuesFromJSON(json['environment']),
    };
}

export function ProductPermissionsRequiredIdentityWebhookToJSON(value?: ProductPermissionsRequiredIdentityWebhook | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'webhook_type': value['webhook_type'],
        'webhook_code': value['webhook_code'],
        'item_id': value['item_id'],
        'environment': WebhookEnvironmentValuesToJSON(value['environment']),
    };
}

