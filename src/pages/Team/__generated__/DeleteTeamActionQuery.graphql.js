/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteTeamActionQueryVariables = {||};
export type DeleteTeamActionQueryResponse = {|
  +me: ?{|
    +currentCompany: ?{|
      +id: string
    |},
    +currentTeam: ?{|
      +id: string
    |},
  |}
|};
export type DeleteTeamActionQuery = {|
  variables: DeleteTeamActionQueryVariables,
  response: DeleteTeamActionQueryResponse,
|};
*/


/*
query DeleteTeamActionQuery {
  me {
    currentCompany {
      id
    }
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
v1 = [
  (v0/*: any*/)
],
v2 = {
  "alias": null,
  "args": null,
  "concreteType": "Company",
  "kind": "LinkedField",
  "name": "currentCompany",
  "plural": false,
  "selections": (v1/*: any*/),
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "concreteType": "Team",
  "kind": "LinkedField",
  "name": "currentTeam",
  "plural": false,
  "selections": (v1/*: any*/),
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "DeleteTeamActionQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v2/*: any*/),
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
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "DeleteTeamActionQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v0/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "0cb8889771d3f317b141b88d88eab289",
    "id": null,
    "metadata": {},
    "name": "DeleteTeamActionQuery",
    "operationKind": "query",
    "text": "query DeleteTeamActionQuery {\n  me {\n    currentCompany {\n      id\n    }\n    currentTeam {\n      id\n    }\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '60f96f505033c7941492624db3f54f22';

module.exports = node;
