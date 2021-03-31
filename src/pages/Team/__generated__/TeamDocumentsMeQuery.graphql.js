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
      +id: string
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
    (v0/*: any*/)
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
    "cacheID": "086aa7fb4494efe4ca378f0f68f7472c",
    "id": null,
    "metadata": {},
    "name": "TeamDocumentsMeQuery",
    "operationKind": "query",
    "text": "query TeamDocumentsMeQuery {\n  me {\n    currentTeam {\n      id\n    }\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e6045536a942c76674a4da3b5ae1233c';

module.exports = node;
