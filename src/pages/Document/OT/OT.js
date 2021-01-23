import { Path } from 'slate'

import { transInsertText } from './transInsertText'
import { transRemoveText } from './transRemoveText'
import { transInsertNode } from './transInsertNode'
import { transRemoveNode } from './transRemoveNode'
import { transSplitNode } from './transSplitNode'
import { transMergeNode } from './transMergeNode'
import { transMoveNode } from './transMoveNode'
import { transSetNode } from './transSetNode'

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
