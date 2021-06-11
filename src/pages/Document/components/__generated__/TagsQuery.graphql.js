/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type TagsQueryVariables = {|
  documentId: string
|};
export type TagsQueryResponse = {|
  +documentTags: ?$ReadOnlyArray<?{|
    +id: string,
    +name: ?string,
  |}>
|};
export type TagsQuery = {|
  variables: TagsQueryVariables,
  response: TagsQueryResponse,
|};
*/


/*
query TagsQuery(
  $documentId: String!
) {
  documentTags(documentId: $documentId) {
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
    "name": "documentId"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "documentId",
        "variableName": "documentId"
      }
    ],
    "concreteType": "Tag",
    "kind": "LinkedField",
    "name": "documentTags",
    "plural": true,
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
    "name": "TagsQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TagsQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "0224dde65bb259ffa2697ae0be9091f6",
    "id": null,
    "metadata": {},
    "name": "TagsQuery",
    "operationKind": "query",
    "text": "query TagsQuery(\n  $documentId: String!\n) {\n  documentTags(documentId: $documentId) {\n    id\n    name\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1e0a1480a4ca21b47c00ca6d601dbb1e';

module.exports = node;
