import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
// Custom hooks
import AppContext from "../context/AppContext";
// Components
import { Image } from "../components/Image";
import { Nav } from "../components/Nav";
import { Picture } from "../components/Picture";
import { Container } from "../components/Container";
import { List } from "../components/List";
import { ItemList } from "../components/ItemList";
import { Small } from "../components/Small";
import { Anchor } from "../components/Anchor";
// Icons
import { FaAlignRight, FaTimes } from "react-icons/fa";

const Menu = () => {
  const { state, widthSize } = useContext(AppContext);

  return (
    <>
      <Nav>
        {widthSize <= 768 && (
          <MenuBurger
            logo={state.info.logo}
            categories={state.info.categories}
          />
        )}
        {widthSize >= 769 && (
          <MenuNavigation
            logo={state.info.logo}
            categories={state.info.categories}
            socialMedia={state.info.socialMedia}
          />
        )}
      </Nav>
    </>
  );
};

const MenuBurger = (props) => {
  const [menuList, setMenuList] = useState(false);

  const handleModal = () => {
    setMenuList(!menuList);
  };

  return (
    <>
      <Picture className="navigation">
        <Image src={props.logo} />
      </Picture>
      <Container className="menu__icon">
        {!menuList ? (
          <FaAlignRight onClick={handleModal} />
        ) : (
          <FaTimes onClick={handleModal} />
        )}
        {menuList && (
          <MenuList onClick={handleModal} categories={props.categories} />
        )}
      </Container>
    </>
  );
};

const MenuList = (props) => {
  return (
    <Container className="menu-list">
      <List className="menu-navigation-list">
        {props.categories.map((category) => (
          <ItemList key={category.id} className="menu-navigation-item">
            <NavLink
              style={({ isActive }) => ({
                color: isActive
                  ? "var(--blue-light-color)"
                  : "var(--white-color)",
              })}
              onClick={props.onClick}
              to={category.path}
            >
              {category.name}
            </NavLink>
          </ItemList>
        ))}
      </List>
      <Small className="menu-phrase">Stay up until the Sun rises</Small>
    </Container>
  );
};

const MenuNavigation = (props) => {
  return (
    <>
      <Container className="menu-navigation">
        <Picture className="navigation">
          <Image src={props.logo} />
        </Picture>
        <List className=" menu-navigation-large">
          {props.categories.map((category) => (
            <ItemList key={category.id} className="menu-navigation-large--item">
              <NavLink
                style={({ isActive }) => ({
                  color: isActive
                    ? "var(--blue-light-color)"
                    : "var(--white-color)",
                })}
                to={category.path}
              >
                {category.name}
              </NavLink>
            </ItemList>
          ))}
        </List>
        <List className=" menu-navigation-large">
          {props.socialMedia.map((item) => (
            <ItemList key={item.id} className="menu-navigation-large--icons">
              <Anchor
                className="social-media"
                target="blank"
                href={item.reference}
              >
                {item.iconName}
              </Anchor>
            </ItemList>
          ))}
        </List>
      </Container>
    </>
  );
};

export default Menu;
