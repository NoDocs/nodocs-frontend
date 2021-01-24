import { Path } from 'slate'

import { transInsertText } from './transformInsertText'
import { transRemoveText } from './transformRemoveText'
import { transInsertNode } from './transformInsertNode'
import { transRemoveNode } from './transformRemoveNode'
import { transSplitNode } from './transformSplitNode'
import { transMergeNode } from './transformMergeNode'
import { transMoveNode } from './transformMoveNode'
import { transSetNode } from './transformSetNode'

export const OT = {
  transInsertText,
  transRemoveText,
  transInsertNode,
  transRemoveNode,
  transSplitNode,
  transMergeNode,
  transMoveNode,
  transSetNode,
}

export const pathTransform = (leftOp, rightOp) => {
  let path = Path.transform(leftOp.path, rightOp)

  return path
    ? [{ ...leftOp, path }]
    : []
}
