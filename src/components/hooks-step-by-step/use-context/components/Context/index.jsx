import React, { Component, createContext }  from 'react';
import ContextMiddle from './ContextMiddle';

export const ThemeContext = createContext('light');

export default class Context extends Component {
  state = {
    theme: 'light',
  }

  render() {
    const { theme } = this.state;
    return (
      <div>
        <h2>Context</h2>
        <button className="button muted-button" onClick={this.handleClick}>Toggle Theme</button>
        <ThemeContext.Provider value={theme}>
          <ContextMiddle />
        </ThemeContext.Provider>
      </div>
    );
  }

  handleClick = () => {
    this.setState(({ theme: prevTheme }) => {
      const theme = prevTheme === 'light' ? 'dark' : 'light';
      return { theme };
    });
  }
}