import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import '../styles/DropdownMenu.css'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

export default function DropdownMenu({ username }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        className='menu-button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuRoundedIcon
          id='burger-icon'
        />
      </Button>
      <Menu
        id="basic-menu"
        className='menu-list'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem className='menu-item' id='log-in-msg'>{username} is logged in</MenuItem>
        <MenuItem className='menu-item' onClick={handleClose}>5 Min Shower</MenuItem>
        <MenuItem className='menu-item' onClick={handleClose}>Recycling</MenuItem>
        <MenuItem className='menu-item' onClick={handleClose}>Composting</MenuItem>
      </Menu>
    </div>
  );
}
