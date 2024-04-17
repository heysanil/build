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
 * Specifies the multi-factor authentication settings to use with this test account
 * @export
 * @interface MFA
 */
export interface MFA {
    [key: string]: any | any;
    /**
     * Possible values are `device`, `selections`, or `questions`.
     * 
     * If value is `device`, the MFA answer is `1234`.
     * 
     * If value is `selections`, the MFA answer is always the first option.
     * 
     * If value is `questions`, the MFA answer is  `answer_<i>_<j>` for the j-th question in the i-th round, starting from 0. For example, the answer to the first question in the second round is `answer_1_0`.
     * @type {string}
     * @memberof MFA
     */
    type: string;
    /**
     * Number of rounds of questions. Required if value of `type` is `questions`. 
     * @type {number}
     * @memberof MFA
     */
    question_rounds: number;
    /**
     * Number of questions per round. Required if value of `type` is `questions`. If value of type is `selections`, default value is 2.
     * @type {number}
     * @memberof MFA
     */
    questions_per_round: number;
    /**
     * Number of rounds of selections, used if `type` is `selections`. Defaults to 1.
     * @type {number}
     * @memberof MFA
     */
    selection_rounds: number;
    /**
     * Number of available answers per question, used if `type` is `selection`. Defaults to 2.
     * 
     * @type {number}
     * @memberof MFA
     */
    selections_per_question: number;
}

/**
 * Check if a given object implements the MFA interface.
 */
export function instanceOfMFA(value: object): boolean {
    if (!('type' in value)) return false;
    if (!('question_rounds' in value)) return false;
    if (!('questions_per_round' in value)) return false;
    if (!('selection_rounds' in value)) return false;
    if (!('selections_per_question' in value)) return false;
    return true;
}

export function MFAFromJSON(json: any): MFA {
    return MFAFromJSONTyped(json, false);
}

export function MFAFromJSONTyped(json: any, ignoreDiscriminator: boolean): MFA {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'type': json['type'],
        'question_rounds': json['question_rounds'],
        'questions_per_round': json['questions_per_round'],
        'selection_rounds': json['selection_rounds'],
        'selections_per_question': json['selections_per_question'],
    };
}

export function MFAToJSON(value?: MFA | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'type': value['type'],
        'question_rounds': value['question_rounds'],
        'questions_per_round': value['questions_per_round'],
        'selection_rounds': value['selection_rounds'],
        'selections_per_question': value['selections_per_question'],
    };
}
