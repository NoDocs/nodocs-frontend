import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledSvg = styled.svg`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
`

const StyledText = styled.text`
  font-family: quicksand;
`

const ParticlesBoard = ({ particle }) => (
  <StyledSvg width={window.innerWidth} height={window.innerHeight}>
    {particle && (
      <React.Fragment>
        <StyledText
          stroke="white"
          strokeWidth="1px"
          x={particle.left - 15}
          y={particle.top - 15}
        >
          {particle.label}
        </StyledText>
        <circle cx={particle.left} cy={particle.top} r={5} fill="rgba(255, 255, 255, 0.5)" />

        {particle.children.map(child => (
          <React.Fragment key={child.id}>
            <path
              d={`M${particle.left} ${particle.top} L ${child.left} ${child.top}`}
              stroke="rgba(255, 255, 255, 0.5)"
            />

            <StyledText
              stroke="white"
              strokeWidth="1px"
              x={child.left - 15}
              y={child.top - 15}
            >
              {child.label}
            </StyledText>
            <circle cx={child.left} cy={child.top} r={5} fill="rgba(255, 255, 255, 0.5)" />

            {child.children.map(last => (
              <React.Fragment key={child.id}>
                <path
                  d={`M${child.left} ${child.top} L ${last.left} ${last.top}`}
                  stroke="rgba(255, 255, 255, 0.5)"
                />
              </React.Fragment>
            ))}
          </React.Fragment>
        ))}
      </React.Fragment>
    )}
  </StyledSvg>
)

ParticlesBoard.propTypes = {
  particle: PropTypes.object,
}

export default ParticlesBoard
