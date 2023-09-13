import styled from "styled-components";
import { useMoveBack } from "../hooks/useMoveBack";
import Heading from "../ui/Heading";

// Declare a custom interface for the button props
interface CustomButtonProps {
  size?: string;
}

const StyledPageNotFound = styled.main`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;
`;

const Box = styled.div`
  /* box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 4.8rem;
  flex: 0 1 96rem;
  text-align: center;

  & h1 {
    margin-bottom: 3.2rem;
  }
`;

// Use the CustomButtonProps interface for the button
const BackButton = styled.button<CustomButtonProps>`
  /* Add your custom size styles here */
  font-size: ${(props) =>
    props.size || "1.4rem"}; // Default size if not provided
  padding: 0.6rem 1.2rem;
  /* ...other styles... */
`;

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <StyledPageNotFound>
      <Box>
        <Heading as="h1">
          The page you are looking for could not be found 😢
        </Heading>
        <BackButton onClick={moveBack} size="1.6rem">
          {" "}
          &larr; Go back
        </BackButton>
      </Box>
    </StyledPageNotFound>
  );
}

export default PageNotFound;
