import { NavLink } from "react-router-dom";
import classes from "./Header.module.scss";

export const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.headerLogo}>
        <span className={classes.headerHighlight}>Back to the</span> Future
      </div>
      <div className={classes.headerNav}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? `${classes.headerLink} ${classes.headerLinkActive}`
              : classes.headerLink
          }
        >
          Characters
        </NavLink>
        <span>/</span>
        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            isActive
              ? `${classes.headerLink} ${classes.headerLinkActive}`
              : classes.headerLink
          }
        >
          Favorites
        </NavLink>
      </div>
    </div>
  );
};
