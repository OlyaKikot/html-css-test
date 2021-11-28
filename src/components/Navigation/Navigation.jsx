import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import * as api from "../../services/api";

const Navigation = () => {
  const categories = api.apiGetCategories();
  return (
    <nav className={s.container}>
      <ul className={s.list}>
        {categories.map((category) => (
          <li>
            <NavLink
              to={`/${category.name}`}
              className={s.navigation}
              activeClassName={s.navigationActive}
            >
              {category.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
