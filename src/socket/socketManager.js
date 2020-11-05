
import { componentActions } from "../redux/component"

const onComponentUpdated = (dispatch) => (payload) => {
  dispatch(componentActions.updateComponent(payload))
}

export default {
  onComponentUpdated
}
