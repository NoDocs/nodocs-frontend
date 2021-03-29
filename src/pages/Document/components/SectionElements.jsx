import React from 'react'
import styled from 'styled-components'
import { useSlate } from 'slate-react'

import TextIcon from 'assets/text.svg'
import ListItem from 'molecules/ListItem'

const StyledListItem = styled(ListItem)`
  padding: 0px;
`

const SectionElements = () => {
  const slate = useSlate()

  return slate
    .children
    .filter(curr => curr.type === 'paragraph' ? Boolean(curr.children[0].text) : true)
    .map((curr, index) => {
      if (curr.type === 'paragraph') {
        return (
          <StyledListItem
            key={index}
            icon={<TextIcon />}
            color="black"
            label={curr.children[0].text}
          />
        )
      }
    })
}

export default SectionElements
