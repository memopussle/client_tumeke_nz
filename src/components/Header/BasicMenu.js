import { Menu, MenuItem, Button } from "@material-ui/core";

import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import useStyles from "./styles.js";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.menu}>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon className={classes.menuIcon} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Link to="/" className={classes.link}>
          <MenuItem onClick={handleClose}>
            Home
          </MenuItem>
        </Link>
        <Link to="/search" className={classes.link}>
          <MenuItem onClick={handleClose}>
            Search
          </MenuItem>
        </Link>
        <Link to="/about" className={classes.link}>
          <MenuItem onClick={handleClose}>About</MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
