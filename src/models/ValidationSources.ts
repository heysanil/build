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
import type { ValidationSource } from './ValidationSource';
import {
    ValidationSourceFromJSON,
    ValidationSourceFromJSONTyped,
    ValidationSourceToJSON,
} from './ValidationSource';

/**
 * Documentation not found in the MISMO model viewer and not provided by Freddie Mac.
 * @export
 * @interface ValidationSources
 */
export interface ValidationSources {
    [key: string]: any | any;
    /**
     * Documentation not found in the MISMO model viewer and not provided by Freddie Mac.
     * @type {Array<ValidationSource>}
     * @memberof ValidationSources
     */
    VALIDATION_SOURCE: Array<ValidationSource>;
}

/**
 * Check if a given object implements the ValidationSources interface.
 */
export function instanceOfValidationSources(value: object): boolean {
    if (!('VALIDATION_SOURCE' in value)) return false;
    return true;
}

export function ValidationSourcesFromJSON(json: any): ValidationSources {
    return ValidationSourcesFromJSONTyped(json, false);
}

export function ValidationSourcesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ValidationSources {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'VALIDATION_SOURCE': ((json['VALIDATION_SOURCE'] as Array<any>).map(ValidationSourceFromJSON)),
    };
}

export function ValidationSourcesToJSON(value?: ValidationSources | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'VALIDATION_SOURCE': ((value['VALIDATION_SOURCE'] as Array<any>).map(ValidationSourceToJSON)),
    };
}

