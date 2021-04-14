/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type TeamNavigationCompanyQueryVariables = {||};
export type TeamNavigationCompanyQueryResponse = {|
  +me: ?{|
    +currentCompany: ?{|
      +id: string
    |},
    +currentTeam: ?{|
      +id: string
    |},
  |}
|};
export type TeamNavigationCompanyQuery = {|
  variables: TeamNavigationCompanyQueryVariables,
  response: TeamNavigationCompanyQueryResponse,
|};
*/


/*
query TeamNavigationCompanyQuery {
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
    "name": "TeamNavigationCompanyQuery",
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
    "name": "TeamNavigationCompanyQuery",
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
    "cacheID": "321b75a3d5a1d7dfb5a5ac55eda123d3",
    "id": null,
    "metadata": {},
    "name": "TeamNavigationCompanyQuery",
    "operationKind": "query",
    "text": "query TeamNavigationCompanyQuery {\n  me {\n    currentCompany {\n      id\n    }\n    currentTeam {\n      id\n    }\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ab50d716847daa100f9fa6596b17a54f';

module.exports = node;
