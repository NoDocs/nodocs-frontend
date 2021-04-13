import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import LinkIcon from 'assets/link.svg'
import InlineToolbarElement from './InlineToolbarElement'

const StyledInlineToolbarContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-columns-gap: 4px;
`

export const Toolbar = React.forwardRef((_, ref) => {
  return (
    <StyledInlineToolbarContainer ref={ref}>
      <InlineToolbarElement
        format="bold"
        icon={active => <LinkIcon size={16} fill={active ? 'green' : 'white'} />}
      />

      <InlineToolbarElement
        format="italic"
        icon={active => <LinkIcon size={16} fill={active ? 'green' : 'white'} />}
      />

      <InlineToolbarElement
        format="underline"
        icon={active => <LinkIcon size={16} fill={active ? 'green' : 'white'} />}
      />
    </StyledInlineToolbarContainer>
  )
})

Toolbar.displayName = 'Toolbar'
Toolbar.propTypes = {
  children: PropTypes.any,
}

export default Toolbar
