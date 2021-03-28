/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateCompanyInput = {|
  name: string,
  industry: string,
  industryDescription: string,
  clientMutationId?: ?string,
|};
export type OnboardingAboutCompanyMutationVariables = {|
  input: CreateCompanyInput
|};
export type OnboardingAboutCompanyMutationResponse = {|
  +createCompany: ?{|
    +company: ?{|
      +id: string,
      +name: ?string,
    |}
  |}
|};
export type OnboardingAboutCompanyMutation = {|
  variables: OnboardingAboutCompanyMutationVariables,
  response: OnboardingAboutCompanyMutationResponse,
|};
*/


/*
mutation OnboardingAboutCompanyMutation(
  $input: CreateCompanyInput!
) {
  createCompany(input: $input) {
    company {
      id
      name
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "CreateCompanyPayload",
    "kind": "LinkedField",
    "name": "createCompany",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Company",
        "kind": "LinkedField",
        "name": "company",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "OnboardingAboutCompanyMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "OnboardingAboutCompanyMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "d8ba27fce1919286bb008b2ffc3387af",
    "id": null,
    "metadata": {},
    "name": "OnboardingAboutCompanyMutation",
    "operationKind": "mutation",
    "text": "mutation OnboardingAboutCompanyMutation(\n  $input: CreateCompanyInput!\n) {\n  createCompany(input: $input) {\n    company {\n      id\n      name\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5b0a6bec2048d67ebdd781f5ecae5825';

module.exports = node;
