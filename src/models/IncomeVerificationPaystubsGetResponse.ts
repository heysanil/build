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
import type { DocumentMetadata } from './DocumentMetadata';
import {
    DocumentMetadataFromJSON,
    DocumentMetadataFromJSONTyped,
    DocumentMetadataToJSON,
} from './DocumentMetadata';
import type { Paystub } from './Paystub';
import {
    PaystubFromJSON,
    PaystubFromJSONTyped,
    PaystubToJSON,
} from './Paystub';
import type { PlaidError } from './PlaidError';
import {
    PlaidErrorFromJSON,
    PlaidErrorFromJSONTyped,
    PlaidErrorToJSON,
} from './PlaidError';

/**
 * IncomeVerificationPaystubsGetResponse defines the response schema for `/income/verification/paystubs/get`.
 * @export
 * @interface IncomeVerificationPaystubsGetResponse
 */
export interface IncomeVerificationPaystubsGetResponse {
    [key: string]: any | any;
    /**
     * Metadata for an income document.
     * @type {Array<DocumentMetadata>}
     * @memberof IncomeVerificationPaystubsGetResponse
     */
    document_metadata?: Array<DocumentMetadata>;
    /**
     * 
     * @type {Array<Paystub>}
     * @memberof IncomeVerificationPaystubsGetResponse
     */
    paystubs: Array<Paystub>;
    /**
     * 
     * @type {PlaidError}
     * @memberof IncomeVerificationPaystubsGetResponse
     */
    error?: PlaidError;
    /**
     * A unique identifier for the request, which can be used for troubleshooting. This identifier, like all Plaid identifiers, is case sensitive.
     * @type {string}
     * @memberof IncomeVerificationPaystubsGetResponse
     */
    request_id: string;
}

/**
 * Check if a given object implements the IncomeVerificationPaystubsGetResponse interface.
 */
export function instanceOfIncomeVerificationPaystubsGetResponse(value: object): boolean {
    if (!('paystubs' in value)) return false;
    if (!('request_id' in value)) return false;
    return true;
}

export function IncomeVerificationPaystubsGetResponseFromJSON(json: any): IncomeVerificationPaystubsGetResponse {
    return IncomeVerificationPaystubsGetResponseFromJSONTyped(json, false);
}

export function IncomeVerificationPaystubsGetResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): IncomeVerificationPaystubsGetResponse {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'document_metadata': json['document_metadata'] == null ? undefined : ((json['document_metadata'] as Array<any>).map(DocumentMetadataFromJSON)),
        'paystubs': ((json['paystubs'] as Array<any>).map(PaystubFromJSON)),
        'error': json['error'] == null ? undefined : PlaidErrorFromJSON(json['error']),
        'request_id': json['request_id'],
    };
}

export function IncomeVerificationPaystubsGetResponseToJSON(value?: IncomeVerificationPaystubsGetResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'document_metadata': value['document_metadata'] == null ? undefined : ((value['document_metadata'] as Array<any>).map(DocumentMetadataToJSON)),
        'paystubs': ((value['paystubs'] as Array<any>).map(PaystubToJSON)),
        'error': PlaidErrorToJSON(value['error']),
        'request_id': value['request_id'],
    };
}

