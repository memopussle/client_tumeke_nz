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
        <MenuItem component={Link} to="/" onClick={handleClose}>
          Home
        </MenuItem>

        <MenuItem component={Link} to="/tours" onClick={handleClose}>
          Tours
        </MenuItem>

        <MenuItem component={Link} to="/search" onClick={handleClose}>
          Search
        </MenuItem>

        <MenuItem component={Link} to="/about" onClick={handleClose}>
          About
        </MenuItem>
      </Menu>
    </div>
  );
}
