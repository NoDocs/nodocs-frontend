/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdatePageInput = {|
  id: string,
  title?: ?string,
  clientMutationId?: ?string,
|};
export type PageItemMutationVariables = {|
  input: UpdatePageInput
|};
export type PageItemMutationResponse = {|
  +updatePage: ?{|
    +page: ?{|
      +id: string,
      +title: ?string,
    |}
  |}
|};
export type PageItemMutation = {|
  variables: PageItemMutationVariables,
  response: PageItemMutationResponse,
|};
*/


/*
mutation PageItemMutation(
  $input: UpdatePageInput!
) {
  updatePage(input: $input) {
    page {
      id
      title
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
    "concreteType": "UpdatePagePayload",
    "kind": "LinkedField",
    "name": "updatePage",
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
    "name": "PageItemMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PageItemMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "d50eef139b96d8d6d3ceb6cfa6523a17",
    "id": null,
    "metadata": {},
    "name": "PageItemMutation",
    "operationKind": "mutation",
    "text": "mutation PageItemMutation(\n  $input: UpdatePageInput!\n) {\n  updatePage(input: $input) {\n    page {\n      id\n      title\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '48a11015f1a79b17ab8245eb2dbfe753';

module.exports = node;
