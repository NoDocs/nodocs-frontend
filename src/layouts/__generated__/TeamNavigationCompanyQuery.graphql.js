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
    |}
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
  "concreteType": "Company",
  "kind": "LinkedField",
  "name": "currentCompany",
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
          (v1/*: any*/),
          (v0/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "f89657004045ad1add7cf774981892a6",
    "id": null,
    "metadata": {},
    "name": "TeamNavigationCompanyQuery",
    "operationKind": "query",
    "text": "query TeamNavigationCompanyQuery {\n  me {\n    currentCompany {\n      id\n    }\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '02edfe47e4caf2761f9537533006df6e';

module.exports = node;
