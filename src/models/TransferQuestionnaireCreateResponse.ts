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
 * Defines the response schema for `/transfer/questionnaire/create`
 * @export
 * @interface TransferQuestionnaireCreateResponse
 */
export interface TransferQuestionnaireCreateResponse {
    [key: string]: any | any;
    /**
     * Plaid-hosted onboarding URL that you will redirect the end customer to.
     * @type {string}
     * @memberof TransferQuestionnaireCreateResponse
     */
    onboarding_url: string;
    /**
     * A unique identifier for the request, which can be used for troubleshooting. This identifier, like all Plaid identifiers, is case sensitive.
     * @type {string}
     * @memberof TransferQuestionnaireCreateResponse
     */
    request_id: string;
}

/**
 * Check if a given object implements the TransferQuestionnaireCreateResponse interface.
 */
export function instanceOfTransferQuestionnaireCreateResponse(value: object): boolean {
    if (!('onboarding_url' in value)) return false;
    if (!('request_id' in value)) return false;
    return true;
}

export function TransferQuestionnaireCreateResponseFromJSON(json: any): TransferQuestionnaireCreateResponse {
    return TransferQuestionnaireCreateResponseFromJSONTyped(json, false);
}

export function TransferQuestionnaireCreateResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransferQuestionnaireCreateResponse {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'onboarding_url': json['onboarding_url'],
        'request_id': json['request_id'],
    };
}

export function TransferQuestionnaireCreateResponseToJSON(value?: TransferQuestionnaireCreateResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'onboarding_url': value['onboarding_url'],
        'request_id': value['request_id'],
    };
}

