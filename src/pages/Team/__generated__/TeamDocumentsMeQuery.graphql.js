/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type TeamDocumentsMeQueryVariables = {||};
export type TeamDocumentsMeQueryResponse = {|
  +me: ?{|
    +currentTeam: ?{|
      +id: string,
      +name: ?string,
    |}
  |}
|};
export type TeamDocumentsMeQuery = {|
  variables: TeamDocumentsMeQueryVariables,
  response: TeamDocumentsMeQueryResponse,
|};
*/


/*
query TeamDocumentsMeQuery {
  me {
    currentTeam {
      id
      name
    }
    id
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
v1 = {
  "alias": null,
  "args": null,
  "concreteType": "Team",
  "kind": "LinkedField",
  "name": "currentTeam",
  "plural": false,
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "TeamDocumentsMeQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TeamDocumentsMeQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v0/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "de5f7b9d81b0c483f42687d8ccb0908c",
    "id": null,
    "metadata": {},
    "name": "TeamDocumentsMeQuery",
    "operationKind": "query",
    "text": "query TeamDocumentsMeQuery {\n  me {\n    currentTeam {\n      id\n      name\n    }\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '94a79a43191baec32953096d71e174a3';

module.exports = node;
