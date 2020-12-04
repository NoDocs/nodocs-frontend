import React from 'react'

import * as companyService from 'services/company'
import history from 'utils/history'


const CreateCompany = () => {
  const [name, setName] = React.useState('')

  const createCompany = (e) => {
    e.preventDefault()

    companyService
      .createCompany({ name })
      .then(() => {
        history.push('/')
      })
      .catch(error => console.log(error))
  }

  return (
    <form onSubmit={createCompany}>
      <input placeholder="Company name" onChange={e => setName(e.target.value)} />
      <button type="submit">Create</button>
    </form>
  )
}

export default CreateCompany
