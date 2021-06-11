import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { graphql, useMutation } from 'react-relay'

import { DocumentContext } from 'contexts'
import useDebounce from 'hooks/useDebounce'
import AutoSizeInput from 'atoms/AutoSizeInput'

const StyledPageItemContainer = styled.div`
  cursor: pointer;
  padding: 8px 12px;

  ${props => props.active && `
    background: rgba(221, 227, 232, 0.6);
    border-radius: 2px 8px 8px 2px;
  `}
`

const StyledAutoSizeInput = styled(AutoSizeInput)`
  color: #333;
`

const updatePageMutation = graphql`
  mutation PageItemMutation($input: UpdatePageInput!) {
    updatePage(input: $input) {
      page {
        id
        title
      }
    }
  }
`

const PageItem = ({ page }) => {
  const [updatePage] = useMutation(updatePageMutation)
  const { activePageId, updateActivePageId } = React.useContext(DocumentContext)
  const { value, handleChange } = useDebounce({
    initialValue: page.title,
    service: title => updatePage({
      variables: {
        input: {
          id: page.id,
          title,
        }
      },
    }),
  })

  const switchActivePage = () => {
    updateActivePageId(page.id)
  }

  return (
    <StyledPageItemContainer
      active={activePageId === page.id}
      onClick={switchActivePage}
      color="#333"
    >
      <StyledAutoSizeInput
        value={value}
        onChange={handleChange}
      />
    </StyledPageItemContainer>
  )
}

PageItem.propTypes = {
  page: PropTypes.object,
}

export default PageItem
