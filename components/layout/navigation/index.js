import { LogoComponent } from "./logo";
import NavItem from "./nav/navitem";
import NavMenu from "./nav/navmenu";
import NavContainer from "./navcontainer";
import Button from "@components/button";
import Nav from "./nav";
import SubNav from "./subnav";
import SubNavItem from "./subnav/subnavitem";

export default function Navigation() {
  return (
    <NavContainer>
      <Nav>
        <LogoComponent />
        <NavMenu>
          <NavItem href="/about">Tietoa</NavItem>
          <NavItem href="/blog">Blogi</NavItem>
          <Button type="link" href="/portal">
            Omistajaportaali
          </Button>
        </NavMenu>
      </Nav>
    </NavContainer>
  );
}

export function PortalNavigation() {
  return (
    <NavContainer>
      <Nav>
        <LogoComponent />
        <NavMenu>
          <NavItem href="/blog">Blogi</NavItem>
          <Button type="link" href="/signout">
            Kirjaudu ulos
          </Button>
        </NavMenu>
      </Nav>
      <SubNav>
        <SubNavItem href="/portal">Portaalin etusivu</SubNavItem>
        <SubNavItem href="/portal/documents">Dokumentit</SubNavItem>
        <SubNavItem href="/portal/osakeanti">Osakeanti 1.5. - 16.8.</SubNavItem>
      </SubNav>
    </NavContainer>
  );
}
