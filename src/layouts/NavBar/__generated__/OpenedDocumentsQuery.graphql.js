/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type OpenedDocumentsQueryVariables = {|
  id: string
|};
export type OpenedDocumentsQueryResponse = {|
  +document: ?{|
    +id: string,
    +name: ?string,
  |}
|};
export type OpenedDocumentsQuery = {|
  variables: OpenedDocumentsQueryVariables,
  response: OpenedDocumentsQueryResponse,
|};
*/


/*
query OpenedDocumentsQuery(
  $id: String!
) {
  document(id: $id) {
    id
    name
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
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "Document",
    "kind": "LinkedField",
    "name": "document",
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "OpenedDocumentsQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "OpenedDocumentsQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "92ed1f5d724cfeea078bb2ccb427f659",
    "id": null,
    "metadata": {},
    "name": "OpenedDocumentsQuery",
    "operationKind": "query",
    "text": "query OpenedDocumentsQuery(\n  $id: String!\n) {\n  document(id: $id) {\n    id\n    name\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2f0eef1e0d65af6ebb13857a0db5c3f7';

module.exports = node;
