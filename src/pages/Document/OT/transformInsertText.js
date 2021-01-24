import { Path } from 'slate'
import { pathTransform } from './OT'

export const transInsertText = (leftOp, rightOp, side) => {
  switch (rightOp.type) {
    case 'insert_text': {
      if (!Path.equals(leftOp.path, rightOp.path)) {
        return [leftOp]
      }

      if (leftOp.offset < rightOp.offset) {
        return [leftOp]
      }

      if (leftOp.offset === rightOp.offset && side === 'left') {
        return [leftOp]
      }

      return [{
        ...leftOp,
        offset: leftOp.offset + rightOp.text.length,
      }]
    }

    case 'remove_text': {
      if (!Path.equals(leftOp.path, rightOp.path)) {
        return [leftOp]
      }

      if (leftOp.offset <= rightOp.offset) {
        return [leftOp]
      }

      if (rightOp.offset + rightOp.text.length <= leftOp.offset) {
        return [{
          ...leftOp,
          offset: leftOp.offset - rightOp.text.length,
        }]
      }

      return []
    }

    case 'split_node': {
      if (Path.equals(leftOp.path, rightOp.path)) {
        if (leftOp.offset <= rightOp.position) {
          return [leftOp]
        }

        return [{
          ...leftOp,
          path: Path.next(leftOp.path),
          offset: leftOp.offset - rightOp.position,
        }]
      }

      return pathTransform(leftOp, rightOp)
    }

    case 'merge_node': {
      if (Path.equals(leftOp.path, rightOp.path)) {
        return [{
          ...leftOp,
          path: Path.previous(rightOp.path),
          offset: leftOp.offset + rightOp.position,
        }]
      }

      return pathTransform(leftOp, rightOp)
    }

    // insert_node
    // remove_node
    // move_node
    // set_node
    default:
      return pathTransform(leftOp, rightOp)
  }
}
