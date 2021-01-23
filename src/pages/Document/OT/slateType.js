import { Transforms, createEditor } from 'slate'
import { OT } from './OT'

const slateType = {
  name: 'slate-ot-type',
  uri: 'http://sharejs.org/types/slate-ot-type',

  create (init) {
    const e = createEditor()
    e.children = init.children
    return init
  },

  apply(snapshot, operations) {
    slateType
      .normalize(operations)
      .forEach((operation) => {
        if (operation.type === 'set_node' && operation.path.length === 0) {
          for (const key in operation.newProperties) {
            if (key === 'id' || key === 'type' || key === 'children') {
              throw new Error(`Cannot set the "${key}" property of nodes!`)
            }

            const value = operation.newProperties[key]

            if (value == null) {
              delete snapshot[key]
            } else {
              snapshot[key] = value
            }
          }
        } else {
          Transforms.transform(snapshot, operation)
        }
      })

    return snapshot
  },

  transform(leftOps, rightOps, side) {
    let [leftRes] = xTransformMxN(leftOps, rightOps, side)
    return leftRes
  },

  normalize(op) {
    return Array.isArray(op) ? op : [op]
  },
}

const xTransformMxN = (leftOps, rightOps, side) => {
  let leftRes = []

  for (let m = 0; m < leftOps.length; m++) {
    let leftOp = leftOps[m]

    let [lRes, rRes] = xTransform1xN(leftOp, rightOps, side)

    leftRes = leftRes.concat(lRes)

    rightOps = rRes
  }

  return [leftRes, rightOps]
}

const xTransform1xN = (leftOp, rightOps, side) => {
  let rRes = []

  for (let n = 0; n < rightOps.length; n++) {
    let rightOp = rightOps[n]

    let [l, r] = xTransform1x1(leftOp, rightOp, side)
    rRes = rRes.concat(r)

    if (l.length === 0) {
      rRes = rRes.concat(rightOps.slice(n + 1))
      return [[], rRes]
    }

    if (l.length > 1) {
      [l, r] = xTransformMxN(l, rightOps.slice(n + 1), side)
      rRes = rRes.concat(r)
      return [l, rRes]
    }

    leftOp = l[0]
  }

  return [[leftOp], rRes]
}

const xTransform1x1 = (leftOp, rightOp, side) => {
  const other = side === 'left' ? 'right' : 'left'

  return [
    doTransform(leftOp, rightOp, side),
    doTransform(rightOp, leftOp, other),
  ]
}

const doTransform = (leftOp, rightOp, side) => {
  switch (leftOp.type) {
    case 'insert_text':
      return OT.transInsertText(leftOp, rightOp, side)
    case 'remove_text':
      return OT.transRemoveText(leftOp, rightOp, side)
    case 'insert_node':
      return OT.transInsertNode(leftOp, rightOp, side)
    case 'remove_node':
      return OT.transRemoveNode(leftOp, rightOp, side)
    case 'split_node':
      return OT.transSplitNode(leftOp, rightOp, side)
    case 'merge_node':
      return OT.transMergeNode(leftOp, rightOp, side)
    case 'move_node':
      return OT.transMoveNode(leftOp, rightOp, side)
    case 'set_node':
      return OT.transSetNode(leftOp, rightOp, side)
    default:
      throw new Error('Unsupported OP')
  }
}

export { slateType, xTransformMxN }
