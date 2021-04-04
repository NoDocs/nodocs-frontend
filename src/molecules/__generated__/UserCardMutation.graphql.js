/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SwitchCompanyInput = {|
  companyId: string,
  clientMutationId?: ?string,
|};
export type UserCardMutationVariables = {|
  input: SwitchCompanyInput
|};
export type UserCardMutationResponse = {|
  +switchCompany: ?{|
    +company: ?{|
      +id: string
    |}
  |}
|};
export type UserCardMutation = {|
  variables: UserCardMutationVariables,
  response: UserCardMutationResponse,
|};
*/


/*
mutation UserCardMutation(
  $input: SwitchCompanyInput!
) {
  switchCompany(input: $input) {
    company {
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
    "concreteType": "SwitchCompanyPayload",
    "kind": "LinkedField",
    "name": "switchCompany",
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
    "name": "UserCardMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UserCardMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "130131f33fc3779c4494b1bb4201bfb9",
    "id": null,
    "metadata": {},
    "name": "UserCardMutation",
    "operationKind": "mutation",
    "text": "mutation UserCardMutation(\n  $input: SwitchCompanyInput!\n) {\n  switchCompany(input: $input) {\n    company {\n      id\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0e59852bd92321889c0f5da458a27353';

module.exports = node;
