
import { componentActions } from "../redux/component"

const onComponentUpdated = (dispatch) => (payload) => {
  dispatch(componentActions.putComponent(payload))
}

export default {
  onComponentUpdated
}
