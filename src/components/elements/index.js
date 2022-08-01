import styled from "styled-components";
import { Box } from "reflexbox/styled-components";
import { Image } from "rebass";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Card = styled.div`
  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.cardBackground};
  border-color: #dedfe2;
  border-style: solid;
  border-width: 1px;
  border-radius: 20px;
`;

export const Container = (props) => (
  <Box
    sx={{
       backgroundColor: '#f7f9fd',
       padding: '1rem'
    }}
  >
    {props.children}
  </Box>
);


export const Logo = (props) => (<Image
  src={props.image}
  sx={{
    width: 32,
    height: 32,
    borderRadius: 9999,
    alignSelf: 'flex-start',
    margin: '1rem 2rem',
  }}
/>)

export const MenuIcon = ({ icon, style }) => (<FontAwesomeIcon style={{ width: '24px', ...style }}icon={icon} />)