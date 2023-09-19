import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <StyledHeader>
            <Nav>
                <div className="logo">
                    <NavLink>
                        <span>get</span><span>linked</span>
                    </NavLink>
                </div>

            </Nav>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
   width: 100%;
   height: 14vh;
   border-bottom: 0.1px solid rgba(225,225,225, 0.18);
`

const Nav = styled.nav`
    width: 85%;
    margin: 0 auto;
`

export default Header;