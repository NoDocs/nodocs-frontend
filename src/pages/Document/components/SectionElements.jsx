import React from 'react'
import styled from 'styled-components'
import { useSlate } from 'slate-react'

import textIcon from 'assets/text.svg'
import ListItem from 'molecules/ListItem'

const StyledListItem = styled(ListItem)`
  padding: 0px;
`

const SectionElements = () => {
  const slate = useSlate()

  return slate
    .children
    .reduce((acc, curr) => [...acc, ...curr.children], [])
    .filter(curr => curr.type === 'paragraph' ? Boolean(curr.children[0].text) : true)
    .map(curr => {
      if (curr.type === 'paragraph') {
        return (
          <StyledListItem
            key={curr.id}
            icon={textIcon}
            color="black"
            label={curr.children[0].text}
          />
        )
      }
    })
}

export default SectionElements
