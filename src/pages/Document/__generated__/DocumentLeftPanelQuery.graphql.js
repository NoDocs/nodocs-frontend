/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DocumentLeftPanelQueryVariables = {|
  id: string
|};
export type DocumentLeftPanelQueryResponse = {|
  +document: ?{|
    +pages: ?$ReadOnlyArray<?{|
      +id: string,
      +title: ?string,
    |}>
  |}
|};
export type DocumentLeftPanelQuery = {|
  variables: DocumentLeftPanelQueryVariables,
  response: DocumentLeftPanelQueryResponse,
|};
*/


/*
query DocumentLeftPanelQuery(
  $id: String!
) {
  document(id: $id) {
    pages {
      id
      title
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "concreteType": "Page",
  "kind": "LinkedField",
  "name": "pages",
  "plural": true,
  "selections": [
    (v2/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DocumentLeftPanelQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Document",
        "kind": "LinkedField",
        "name": "document",
        "plural": false,
        "selections": [
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DocumentLeftPanelQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Document",
        "kind": "LinkedField",
        "name": "document",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "8d1865456d5405d56e1c2438137fdad7",
    "id": null,
    "metadata": {},
    "name": "DocumentLeftPanelQuery",
    "operationKind": "query",
    "text": "query DocumentLeftPanelQuery(\n  $id: String!\n) {\n  document(id: $id) {\n    pages {\n      id\n      title\n    }\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6929bc83ec1bd2b3125886caead55fb6';

module.exports = node;
