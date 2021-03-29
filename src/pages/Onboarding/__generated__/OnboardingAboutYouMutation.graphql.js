/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateCompanyMemberInformationInput = {|
  name: string,
  department: string,
  departmentDescription: string,
  clientMutationId?: ?string,
|};
export type OnboardingAboutYouMutationVariables = {|
  input: UpdateCompanyMemberInformationInput
|};
export type OnboardingAboutYouMutationResponse = {|
  +updateCompanyMemberInformation: ?{|
    +companyMember: ?{|
      +id: string
    |}
  |}
|};
export type OnboardingAboutYouMutation = {|
  variables: OnboardingAboutYouMutationVariables,
  response: OnboardingAboutYouMutationResponse,
|};
*/


/*
mutation OnboardingAboutYouMutation(
  $input: UpdateCompanyMemberInformationInput!
) {
  updateCompanyMemberInformation(input: $input) {
    companyMember {
      id
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
    "concreteType": "UpdateCompanyMemberInformationPayload",
    "kind": "LinkedField",
    "name": "updateCompanyMemberInformation",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "CompanyMember",
        "kind": "LinkedField",
        "name": "companyMember",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
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
    "name": "OnboardingAboutYouMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "OnboardingAboutYouMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "913bb54b07e7691a3513830ae296f168",
    "id": null,
    "metadata": {},
    "name": "OnboardingAboutYouMutation",
    "operationKind": "mutation",
    "text": "mutation OnboardingAboutYouMutation(\n  $input: UpdateCompanyMemberInformationInput!\n) {\n  updateCompanyMemberInformation(input: $input) {\n    companyMember {\n      id\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '35d2d1785c595fd53c3da2a4923a824e';

module.exports = node;
