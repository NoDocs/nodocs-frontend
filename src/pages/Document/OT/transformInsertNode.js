import { Path, Text } from 'slate'

import { xTransformMxN } from './slateType'
import { decomposeMove } from './transformMoveNode'
import { pathTransform } from './OT'

export const transInsertNode = (leftOp, rightOp, side) => {
  switch (rightOp.type) {
    case 'insert_node': {
      if (Path.equals(leftOp.path, rightOp.path) && side === 'left') {
        return [leftOp]
      }

      return pathTransform(leftOp, rightOp)
    }

    case 'remove_node': {
      if (Path.equals(leftOp.path, rightOp.path)) {
        return [leftOp]
      }

      return pathTransform(leftOp, rightOp)
    }

    case 'split_node': {
      if (Path.equals(leftOp.path, rightOp.path)) {
        return [leftOp]
      }

      return pathTransform(leftOp, rightOp)
    }

    case 'merge_node': {
      if (Path.equals(leftOp.path, rightOp.path)) {
        const offset = Text.isText(leftOp.node)
          ? leftOp.node.text.length
          : leftOp.node.children.length

        return [
          { ...rightOp, type: 'split_node', path: Path.previous(rightOp.path) },
          leftOp,
          rightOp,
          { ...rightOp, position: rightOp.position + offset },
        ]
      }

      return pathTransform(leftOp, rightOp)
    }

    case 'move_node': {
      if (Path.equals(rightOp.path, rightOp.newPath)) {
        return [leftOp]
      }

      if (Path.equals(leftOp.path, rightOp.path)) {
        return [{
          ...leftOp,
          path: Path.transform(Path.next(leftOp.path), rightOp),
        }]
      }

      const [rr, ri] = decomposeMove(rightOp)
      const [l] = xTransformMxN([leftOp], [rr, ri], side)

      if (l.length == 1) return l

      return [{
        ...leftOp,
        path: ri.path.concat(leftOp.path.slice(rr.path.length)),
      }]
    }

    // insert_text
    // remove_text
    // set_node
    default:
      return pathTransform(leftOp, rightOp)
  }
}
