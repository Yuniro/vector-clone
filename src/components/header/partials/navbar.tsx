import React, { FunctionComponent } from "react";
import { Button, Link, ListItemButton, Menu, MenuItem } from "@mui/material";
import { KeyboardArrowDownOutlined } from "@mui/icons-material";
import ListItem from "../../partials/list-item";
import styles from "../styles.module.scss";
import clsx from "clsx";

interface Props {}

const NavBar: FunctionComponent<Props> = props => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className="flex flex-1">
      <ul className="flex">
        <ListItem href="/stake" text="Stake" />
        <ListItem href="/claim" text="Claim" />
        <ListItem href="/lock" text="Lock" />
        <ListItemButton
          component="li"
          className={clsx("items-center relative", styles.navMore)}
        >
          <Button
            id="fade-button"
            aria-controls={open ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            className={styles.navMore__button}
          >
            More
            <KeyboardArrowDownOutlined />
          </Button>
        </ListItemButton>
      </ul>

      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem className={styles.navMore__link}>
          <Link href="https://docs.vectorfinance.io/" target="_blank">
            Docs
          </Link>
        </MenuItem>
        <MenuItem className={styles.navMore__link}>
          <Link href="https://discord.gg/vectorfinance" target="_blank">
            Discord
          </Link>
        </MenuItem>
        <MenuItem className={styles.navMore__link}>
          <Link href="https://vectorfinance.medium.com/" target="_blank">
            Medium
          </Link>
        </MenuItem>
        <MenuItem className={styles.navMore__link}>
          <Link href="https://twitter.com/vector_fi" target="_blank">
            Twitter
          </Link>
        </MenuItem>
        <MenuItem className={styles.navMore__link}>
          <Link href="https://vectorfinance.io/#/migration" target="_blank">
            Migration
          </Link>
        </MenuItem>
      </Menu>
    </nav>
  );
};

export default React.memo(NavBar);
