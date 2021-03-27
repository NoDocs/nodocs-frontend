import React from 'react'

import FilterIcon from 'assets/filter.svg'
import MenuItem from 'atoms/MenuItem'

const TeamFilterAction = () => {
  return <MenuItem Icon={<FilterIcon />} text="Filter" />
}

export default TeamFilterAction
