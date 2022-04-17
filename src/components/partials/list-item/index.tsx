import clsx from "clsx";
import React, { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import { ListItemButton } from "@mui/material";
import styles from "./styles.module.scss";
import useResponsive from "../../../common/hooks/useResponsive";

interface Props {
  href: string;
  text: string;
}

const ListItem: FunctionComponent<Props> = ({ href, text }) => {
  const isDesktop = useResponsive();
  return (
    <ListItemButton
      component="li"
      className={clsx("items-center relative", styles.listItem)}
    >
      <NavLink
        to={href}
        className={linkState =>
          clsx(
            styles.link,
            isDesktop && styles.link__desktop,
            linkState.isActive && styles["link--active"],
          )
        }
      >
        {text}
      </NavLink>
    </ListItemButton>
  );
};

ListItem.defaultProps = {};

export default React.memo(ListItem);
