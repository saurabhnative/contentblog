import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import styled from "styled-components"

class DarkModeToggle extends React.Component {
  render() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <ToggleLabel>
            <input
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />{' '}
            Dark mode
          </ToggleLabel>
        )}
      </ThemeToggler>
    )
  }
}

const ToggleLabel = styled.label`
  margin-left: auto;
  white-space: nowrap
`

export default DarkModeToggle;