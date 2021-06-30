import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useFormik } from 'formik'
import { object, string } from 'yup'
import { graphql, useMutation } from 'react-relay'

import FullScreenModal from 'molecules/FullScreenModal'
import Typography from 'molecules/Typography'
import Input from 'atoms/Input'
import withRenderPortal from 'hocs/withRenderPortal'
import Button from 'atoms/Button'

const activateIntegrationGraphql = graphql`
  mutation StripeIntegrationModalMutation ($input: ActivateIntegrationInput!) {
    activateIntegration (input: $input) {
      integration {
        id
        type
        key
      }
    }
  }
`

const StripeIntegrationModal = ({ closePortal }) => {
  const [activateIntegration] = useMutation(activateIntegrationGraphql)
  const formik = useFormik({
    initialValues: { key: 'sk_test_suI6XPmGoGkuG9y16M5OlTLX' },
    validationSchema: object().shape({
      key: string().required(),
    }),
    onSubmit: (values) => {
      return activateIntegration({
        variables: {
          input: {
            type: 'stripe',
            ...values,
          }
        },
      })
    }
  })

  return (
    <StyledFullScreenModal close={closePortal}>
      <StyledCenteredTypography variant="h4">
        Allow NoDocs to access your stripe Account?
      </StyledCenteredTypography>

      <Typography variant="body1">API Key</Typography>
      <Typography variant="body1">
        found by going to
        <Typography variant="link">https://dashboard.stripe.com/test/apikeys</Typography>.
        Be sure it is a &quot;secret&quot; and &quot;live&quot; variant. Note restricted keys are allowed but will not
        be able to properly label/identify them.
      </Typography>

      <StyledInput
        placeholder="API key"
        name="key"
        value={formik.values.key}
        onChange={formik.handleChange}
        autoFocus
      />

      <StyledActionsContainer>
        <Button onClick={closePortal}>Cancel</Button>
        <Button onClick={formik.handleSubmit}>Integrate</Button>
      </StyledActionsContainer>
    </StyledFullScreenModal>
  )
}

const StyledFullScreenModal = styled(FullScreenModal)`
  width: 600px;
  background-color: white;
  padding: 32px;
  border-radius: 8px;
`

const StyledCenteredTypography = styled(Typography)`
  text-align: center;
  margin-bottom: 24px;
`

const StyledInput = styled(Input)`
  margin-top: 8px;
`

const StyledActionsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 8px;
  justify-content: end;
  margin-top: 24px;
`

StripeIntegrationModal.propTypes = {
  closePortal: PropTypes.func,
}

export default withRenderPortal(() => 'stripe-integration-portal')(StripeIntegrationModal)
