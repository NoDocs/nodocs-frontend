/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SwitchTeamInput = {|
  teamId: string,
  clientMutationId?: ?string,
|};
export type TeamNavigationMutationVariables = {|
  input: SwitchTeamInput
|};
export type TeamNavigationMutationResponse = {|
  +switchTeam: ?{|
    +team: ?{|
      +id: string
    |}
  |}
|};
export type TeamNavigationMutation = {|
  variables: TeamNavigationMutationVariables,
  response: TeamNavigationMutationResponse,
|};
*/


/*
mutation TeamNavigationMutation(
  $input: SwitchTeamInput!
) {
  switchTeam(input: $input) {
    team {
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "SwitchTeamPayload",
    "kind": "LinkedField",
    "name": "switchTeam",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Team",
        "kind": "LinkedField",
        "name": "team",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TeamNavigationMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TeamNavigationMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "379a6e32923cf29423b932ebf9abceab",
    "id": null,
    "metadata": {},
    "name": "TeamNavigationMutation",
    "operationKind": "mutation",
    "text": "mutation TeamNavigationMutation(\n  $input: SwitchTeamInput!\n) {\n  switchTeam(input: $input) {\n    team {\n      id\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd155c7cb58b5f3c5f5b1e70399728f4b';

module.exports = node;
