/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SignInInput = {|
  email: string,
  password: string,
  clientMutationId?: ?string,
|};
export type signInMutationVariables = {|
  input: SignInInput
|};
export type signInMutationResponse = {|
  +signIn: ?{|
    +clientMutationId: ?string,
    +user: ?{|
      +id: string,
      +fullName: ?string,
      +token: ?string,
      +email: ?string,
      +currentCompany: ?{|
        +id: string
      |},
    |},
  |}
|};
export type signInMutation = {|
  variables: signInMutationVariables,
  response: signInMutationResponse,
|};
*/


/*
mutation signInMutation(
  $input: SignInInput!
) {
  signIn(input: $input) {
    clientMutationId
    user {
      id
      fullName
      token
      email
      currentCompany {
        id
      }
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
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "SignInPayload",
    "kind": "LinkedField",
    "name": "signIn",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "clientMutationId",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "fullName",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "token",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "email",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Company",
            "kind": "LinkedField",
            "name": "currentCompany",
            "plural": false,
            "selections": [
              (v1/*: any*/)
            ],
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
    "name": "signInMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "signInMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "890dea6c4b634d301b23eaa83d21c84f",
    "id": null,
    "metadata": {},
    "name": "signInMutation",
    "operationKind": "mutation",
    "text": "mutation signInMutation(\n  $input: SignInInput!\n) {\n  signIn(input: $input) {\n    clientMutationId\n    user {\n      id\n      fullName\n      token\n      email\n      currentCompany {\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3221a70669176c5444e9d405181ec8b9';

module.exports = node;
