import styled from "styled-components";
import { Box } from "reflexbox/styled-components";

export const Card = styled.div`
  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.cardBackground};
  border-color: #dedfe2;
  border-style: solid;
  border-width: 1px;
`;

export const Container = (props) => (
  <Box
    sx={{
      maxWidth: "1024px",
      mx: "auto",
      px: 3,
    }}
  >
    {props.children}
  </Box>
);