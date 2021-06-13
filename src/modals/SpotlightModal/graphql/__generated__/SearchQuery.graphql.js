/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SearchQueryVariables = {|
  search: string
|};
export type SearchQueryResponse = {|
  +search: ?$ReadOnlyArray<?{|
    +id: string,
    +type: ?string,
    +name: ?string,
  |}>
|};
export type SearchQuery = {|
  variables: SearchQueryVariables,
  response: SearchQueryResponse,
|};
*/


/*
query SearchQuery(
  $search: String!
) {
  search(search: $search) {
    id
    type
    name
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "search"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "search",
        "variableName": "search"
      }
    ],
    "concreteType": "Search",
    "kind": "LinkedField",
    "name": "search",
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
        "name": "type",
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
    "name": "SearchQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SearchQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "301b57bac20a073feb6b70573e8d468b",
    "id": null,
    "metadata": {},
    "name": "SearchQuery",
    "operationKind": "query",
    "text": "query SearchQuery(\n  $search: String!\n) {\n  search(search: $search) {\n    id\n    type\n    name\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'df59733146273d6e568d31895d66d8d1';

module.exports = node;
