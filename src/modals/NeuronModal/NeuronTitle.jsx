import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import get from 'lodash/fp/get'
import debounce from 'lodash/debounce'
import { graphql, useLazyLoadQuery, useMutation } from 'react-relay'
import { useLocation } from 'react-router'

const StyledInput = styled.input`
  font-family: Quicksand;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
  margin-top: 20px;
  border: none;
  outline: none;
  color: rgba(0, 0, 0, 0.5);
  width: 100%;
`

const mutation = graphql`
  mutation NeuronTitleMutation ($input: UpdateNeuronInput!) {
    updateNeuron (input: $input) {
      neuron {
        name
      }
    }
  }
`

const query = graphql`
  query NeuronTitleQuery ($neuronId: String!) {
    neuron(neuronId: $neuronId) {
      id
      name
    }
  }
`

let timer = null

const NeuronTitle = () => {
  const { search } = useLocation()
  const params = new URLSearchParams(search)
  const { neuron } = useLazyLoadQuery(query, { neuronId: params.get('neuronId') }, { fetchPolicy: 'store-only' })
  const [value, updateValue] = React.useState(get('name', neuron) || '')
  const [updateNeuron] = useMutation(mutation)

  const saveTitle = name => {
    updateNeuron({
      variables: {
        input: {
          name,
          neuronId: neuron.id,
        }
      }
    })
  }

  const onNeuronNameChange = ({ target: { value } }) => {
    updateValue(value)

    if (timer) timer.cancel()
    timer = debounce(() => { saveTitle(value) }, 1000)
    timer()
  }

  return (
    <StyledInput
      placeholder="Untitled"
      autoFocus
      value={value}
      onChange={onNeuronNameChange}
    />
  )
}

NeuronTitle.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
}

export default NeuronTitle
