/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type TeamContentMeQueryVariables = {||};
export type TeamContentMeQueryResponse = {|
  +me: ?{|
    +currentTeam: ?{|
      +id: string
    |}
  |}
|};
export type TeamContentMeQuery = {|
  variables: TeamContentMeQueryVariables,
  response: TeamContentMeQueryResponse,
|};
*/


/*
query TeamContentMeQuery {
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
    "name": "TeamContentMeQuery",
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
    "name": "TeamContentMeQuery",
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
    "cacheID": "05790807cb59e96d66b4ec45b631c7db",
    "id": null,
    "metadata": {},
    "name": "TeamContentMeQuery",
    "operationKind": "query",
    "text": "query TeamContentMeQuery {\n  me {\n    currentTeam {\n      id\n    }\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8d71db77539b017512ff51f94f5623b7';

module.exports = node;
