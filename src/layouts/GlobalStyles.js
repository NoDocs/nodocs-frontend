import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  body {
    background-color: white;
  }

  .selection-area {
    background-color: rgba(0, 0, 0, 0.2);
  }

  .selected {
    background: rgba(211,218,225,0.5);
    padding: 0 5px;
    border-left: 2px solid black;
  }
`
