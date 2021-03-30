import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { graphql, useMutation } from 'react-relay'

import Box from 'atoms/Box'
import Label from 'atoms/Label'
import Button from 'atoms/Button'
import { departments } from 'constants'

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

const StyledDepartment = styled(Label)`
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

const updateCompanyMemberInformationMutation = graphql`
  mutation OnboardingAboutYouMutation($input: UpdateCompanyMemberInformationInput!) {
    updateCompanyMemberInformation(input: $input) {
      companyMember {
        id
      }
    }
  }
`

const OnboardingAboutYou = React.forwardRef((_, ref) => {
  const history = useHistory()
  const [name, updateName] = React.useState('')
  const [department, updateDepartment] = React.useState()
  const [departmentDescription, updateDepartmentDescription] = React.useState('')
  const [updateCompanyMember] = useMutation(updateCompanyMemberInformationMutation)

  const handleContinue = () => {
    updateCompanyMember({
      variables: {
        input: {
          name,
          department,
          departmentDescription
        }
      },
      onCompleted: () => {
        history.push('/onboarding/send-invites')
      }
    })
  }

  return (
    <StyledOnboardingContainer ref={ref}>
      <StyledBox>
        <Label color="black">✍🏼 About me...</Label>

        <Label color="black">What&#96;s your name?</Label>
        <StyledInput
          autoFocus
          value={name}
          onChange={event => updateName(event.target.value)}
        />

        <Label color="black">What team do you work?</Label>
        <StyledIndustriesContainer>
          {departments.map(curr => (
            <StyledDepartment
              key={curr}
              selected={department === curr}
              onClick={() => updateDepartment(curr)}
            >
              {curr}
            </StyledDepartment>
          ))}
        </StyledIndustriesContainer>

        <Label color="black">What&#96;s your role?</Label>
        <StyledInput
          value={departmentDescription}
          onChange={event => updateDepartmentDescription(event.target.value)}
        />
      </StyledBox>

      <StyledButton onClick={handleContinue}>Next</StyledButton>
    </StyledOnboardingContainer>
  )
})

OnboardingAboutYou.displayName = 'OnboardingAboutYou'

export default OnboardingAboutYou
