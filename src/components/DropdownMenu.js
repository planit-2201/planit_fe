import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import '../styles/DropdownMenu.css'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Link } from 'react-router-dom';

export default function DropdownMenu({ username, currentPage, setCurrentPage }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const showerPageHandler = () => {
    setCurrentPage('shower')
  }

  const bottlePageHandler = () => {
    setCurrentPage('bottles')
  }

  const strawPageHandler = () => {
    setCurrentPage('straws')
  }

  const bagPageHandler = () => {
    setCurrentPage('bags')
  }

  const homePageHandler = () => {
    setCurrentPage('home')
  }

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
        {currentPage !== 'home' && <Link to={`/`} onClick={homePageHandler}><MenuItem className='menu-item' onClick={handleClose}>Home</MenuItem></Link>}
        {currentPage !== 'shower' && <Link to={`/shower`} onClick={showerPageHandler}><MenuItem className='menu-item' onClick={handleClose}>Water Usage</MenuItem></Link>}
        {currentPage !== 'bottles' && <Link to={`/bottles`} onClick={bottlePageHandler}><MenuItem className='menu-item' onClick={handleClose}>Bottle Usage</MenuItem></Link>}
        {currentPage !== 'straws' && <Link to={`/straws`} onClick={strawPageHandler}><MenuItem className='menu-item' onClick={handleClose}>Straw Usage</MenuItem></Link>}
        {currentPage !== 'bags' && <Link to={`/bags`} onClick={bagPageHandler}><MenuItem className='menu-item' onClick={handleClose}>Bag Usage</MenuItem></Link>}
      </Menu>
    </div>
  );
}
