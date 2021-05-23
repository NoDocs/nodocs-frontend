/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type GraphModalMeQueryVariables = {||};
export type GraphModalMeQueryResponse = {|
  +me: ?{|
    +currentTeam: ?{|
      +id: string,
      +name: ?string,
    |}
  |}
|};
export type GraphModalMeQuery = {|
  variables: GraphModalMeQueryVariables,
  response: GraphModalMeQueryResponse,
|};
*/


/*
query GraphModalMeQuery {
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
    "name": "GraphModalMeQuery",
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
    "name": "GraphModalMeQuery",
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
    "cacheID": "eeef1779294d3d0cf98b230993870f8f",
    "id": null,
    "metadata": {},
    "name": "GraphModalMeQuery",
    "operationKind": "query",
    "text": "query GraphModalMeQuery {\n  me {\n    currentTeam {\n      id\n      name\n    }\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '243698ff1f06b7f920e3ff2ba4d94aa1';

module.exports = node;
