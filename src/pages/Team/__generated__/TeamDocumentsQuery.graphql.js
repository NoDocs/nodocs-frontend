/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type TeamDocumentsQueryVariables = {||};
export type TeamDocumentsQueryResponse = {|
  +documents: ?$ReadOnlyArray<?{|
    +id: string,
    +name: ?string,
    +createdAt: ?string,
    +owner: ?{|
      +id: string,
      +avatar: ?string,
      +color: ?string,
      +fullName: ?string,
    |},
  |}>
|};
export type TeamDocumentsQuery = {|
  variables: TeamDocumentsQueryVariables,
  response: TeamDocumentsQueryResponse,
|};
*/


/*
query TeamDocumentsQuery {
  documents {
    id
    name
    createdAt(format: "MMM D")
    owner {
      id
      avatar
      color
      fullName
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Document",
    "kind": "LinkedField",
    "name": "documents",
    "plural": true,
    "selections": [
      (v0/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": [
          {
            "kind": "Literal",
            "name": "format",
            "value": "MMM D"
          }
        ],
        "kind": "ScalarField",
        "name": "createdAt",
        "storageKey": "createdAt(format:\"MMM D\")"
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "owner",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "avatar",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "color",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "fullName",
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
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "TeamDocumentsQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TeamDocumentsQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "9162b11c08b47dec63b0bc2b0c5d7549",
    "id": null,
    "metadata": {},
    "name": "TeamDocumentsQuery",
    "operationKind": "query",
    "text": "query TeamDocumentsQuery {\n  documents {\n    id\n    name\n    createdAt(format: \"MMM D\")\n    owner {\n      id\n      avatar\n      color\n      fullName\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '88d58a8f1c183621dc3890bed8558294';

module.exports = node;
