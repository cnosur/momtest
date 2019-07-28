import React from "react";
import MenuItem from "../components/MI.js"

///////////////////
// MenuContainer //
///////////////////
class MenuContainer extends React.Component {
    constructor(props) {
      super(props)
      
      this.state = {
        activeItem: '',
        activeItemPosition: 0,
        activeItemColor: '',
        menuItems: [
          { text: 'Home', add:'/' },
          { text: 'Standings', add:'/standings' },
          { text: 'Wins', add: '/wins' },
          { text: 'Team FG%', add:'/team'},
          { text: 'Distance/Time', add: '/dt' },
          { text: 'About', add: '/about'}
        ],
      }
      
      this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick(activeItem) {
      return e => {
        e.preventDefault()
      
        this.setState({
          activeItem,
          activeItemPosition: document.getElementById(activeItem).offsetTop,
          activeItemColor: window.getComputedStyle(document.getElementById(activeItem)).getPropertyValue('background-color'),
        })
      }
    }
    
    render() {
      const menuItems = this.state.menuItems.map(item => <MenuItem item={ item } handleClick={ this.handleClick }/>)
      return (
        <div className='menu-container'>
          <span className='menu-item--active' style={{ top: this.state.activeItemPosition, backgroundColor: this.state.activeItemColor }}/>
          { menuItems }
        </div>
      )
    }
  }

  export default MenuContainer; 