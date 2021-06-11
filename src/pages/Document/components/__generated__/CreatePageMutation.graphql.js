/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreatePageInput = {|
  documentId: string,
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
      +id: string,
      +title: ?string,
      +content: ?string,
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
      title
      content
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
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "title",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "content",
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
    "cacheID": "2e26c2c5dfc0725ca3687d3d53f85f04",
    "id": null,
    "metadata": {},
    "name": "CreatePageMutation",
    "operationKind": "mutation",
    "text": "mutation CreatePageMutation(\n  $input: CreatePageInput!\n) {\n  createPage(input: $input) {\n    page {\n      id\n      title\n      content\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'da90f672aab937c7122588d5d0938807';

module.exports = node;
