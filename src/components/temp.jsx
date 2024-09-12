import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';


const Temp = () => {
    const [toggled, setToggled] = React.useState(false);
  
  return (
    <div style={{ display: 'flex', height: '100%', minHeight: '400px' }}>
      <Sidebar onBackdropClick={() => setToggled(false)} toggled={toggled} breakPoint="always">
        <Menu>
          <MenuItem> Documentation</MenuItem>
          <MenuItem> Calendar</MenuItem>
          <MenuItem> E-commerce</MenuItem>
          <MenuItem> Examples</MenuItem>
        </Menu>
      </Sidebar>
      <main style={{ display: 'flex', padding: 10 }}>
        <div>
          <button className="sb-button" onClick={() => setToggled(!toggled)}>
            Toggle
          </button>
        </div>
      </main>
    </div>
  )
}

export default Temp
