/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type TeamNavigationTeamsQueryVariables = {|
  companyId: string
|};
export type TeamNavigationTeamsQueryResponse = {|
  +teams: ?$ReadOnlyArray<?{|
    +id: string,
    +name: ?string,
  |}>
|};
export type TeamNavigationTeamsQuery = {|
  variables: TeamNavigationTeamsQueryVariables,
  response: TeamNavigationTeamsQueryResponse,
|};
*/


/*
query TeamNavigationTeamsQuery(
  $companyId: String!
) {
  teams(companyId: $companyId) {
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
    "name": "companyId"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "companyId",
        "variableName": "companyId"
      }
    ],
    "concreteType": "Team",
    "kind": "LinkedField",
    "name": "teams",
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
    "name": "TeamNavigationTeamsQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TeamNavigationTeamsQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "f689bd9ab14a1e07f14cafecae0d67bd",
    "id": null,
    "metadata": {},
    "name": "TeamNavigationTeamsQuery",
    "operationKind": "query",
    "text": "query TeamNavigationTeamsQuery(\n  $companyId: String!\n) {\n  teams(companyId: $companyId) {\n    id\n    name\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '90823c00852fa1ebe739574ff27b9e7f';

module.exports = node;
