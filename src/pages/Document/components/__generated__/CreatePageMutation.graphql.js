/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreatePageInput = {|
  sectionId: string,
  pageId: string,
  title?: ?string,
  content?: ?string,
  clientMutationId?: ?string,
|};
export type CreatePageMutationVariables = {|
  input: CreatePageInput
|};
export type CreatePageMutationResponse = {|
  +createPage: ?{|
    +page: ?{|
      +id: string
    |}
  |}
|};
export type CreatePageMutation = {|
  variables: CreatePageMutationVariables,
  response: CreatePageMutationResponse,
|};
*/


/*
mutation CreatePageMutation(
  $input: CreatePageInput!
) {
  createPage(input: $input) {
    page {
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
    "concreteType": "CreatePagePayload",
    "kind": "LinkedField",
    "name": "createPage",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Page",
        "kind": "LinkedField",
        "name": "page",
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
    "name": "CreatePageMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreatePageMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "0e57a880ad57ad48ceebd293103cb6a8",
    "id": null,
    "metadata": {},
    "name": "CreatePageMutation",
    "operationKind": "mutation",
    "text": "mutation CreatePageMutation(\n  $input: CreatePageInput!\n) {\n  createPage(input: $input) {\n    page {\n      id\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8279d72cf930af1ef66eae30fdfe7ca1';

module.exports = node;
