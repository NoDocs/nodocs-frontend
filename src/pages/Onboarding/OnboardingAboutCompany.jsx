import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { graphql } from 'relay-runtime'

import Box from 'atoms/Box'
import Label from 'atoms/Label'
import Button from 'atoms/Button'
import { industries } from 'constants'
import { useMutation } from 'react-relay'

const StyledContainer = styled.div`
  min-height: 100vh;
  background-color: #000;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const StyledOnboardingContainer = styled.div`
  width: 600px;
  margin-right: 48px;
  display: grid;
  grid-row-gap: 16px;
`

const StyledBox = styled(Box)`
  display: grid;
  grid-row-gap: 12px;
`

const StyledButton = styled(Button)`
  margin: auto;
`

const StyledInput = styled.input`
  border: none;
  width: 100%;
  outline: none;
  border-left: 1px solid rgba(0, 0, 0, 0.2);
  padding-left: 6px;
`

const StyledIndustriesContainer = styled.div``

const StyledIndustry = styled(Label)`
  border: 1.2px solid #000000;
  padding: 5px 12px;
  color: black;
  display: inline-block;
  border-radius: 80px;
  margin-right: 8px;
  font-size: 12px;
  margin-bottom: 8px;
  font-weight: 500;
  cursor: pointer;

  ${props => props.selected && 'background-color: black;'}
  ${props => props.selected && 'color: white;'}
`


const createCompanyMutation = graphql`
  mutation OnboardingAboutCompanyMutation($input: CreateCompanyInput!) {
    createCompany(input: $input) {
      company {
        id
        name
      }
    }
  }
`

const OnboardingAboutCompany = React.forwardRef((_, ref) => {
  const history = useHistory()
  const [createCompany] = useMutation(createCompanyMutation)
  const [name, updateName] = React.useState('')
  const [industry, updateIndustry] = React.useState('')
  const [industryDescription, updateIndustryDescription] = React.useState('')

  const handleContinue = () => {
    createCompany({
      variables: {
        input: {
          name,
          industry,
          industryDescription,
        }
      },
      onCompleted: ({ createCompany: { company } }) => {
        localStorage.setItem('currentCompanyId', company.id)
        history.push('/onboarding/about-you')
      }
    })
  }

  return (
    <StyledContainer>
      <StyledOnboardingContainer ref={ref}>
        <StyledBox>
          <Label color="black">✍🏼 About your company...</Label>

          <Label color="black">Company name</Label>
          <StyledInput
            autoFocus
            value={name}
            onChange={event => updateName(event.target.value)}
          />

          <Label color="black">What&#96;s your company industry</Label>
          <StyledIndustriesContainer>
            {industries.map(curr => (
              <StyledIndustry
                key={curr}
                onClick={() => updateIndustry(curr)}
                selected={curr === industry}
              >
                {curr}
              </StyledIndustry>
            ))}
          </StyledIndustriesContainer>

          <Label color="black">And... what do you guys do?</Label>
          <StyledInput
            value={industryDescription}
            onChange={event => updateIndustryDescription(event.target.value)}
          />
        </StyledBox>

        <StyledButton onClick={handleContinue}>Next</StyledButton>
      </StyledOnboardingContainer>
    </StyledContainer>
  )
})

OnboardingAboutCompany.displayName = 'OnboardingAboutCompany'

export default OnboardingAboutCompany
