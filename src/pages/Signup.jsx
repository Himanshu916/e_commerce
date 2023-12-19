import styled from "styled-components";
import SignupForm from "../features/authentication/SignupForm";
import Heading from "../ui/Heading";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
const LoginLayout = styled.main`
  display: grid;
  grid-template-columns: 35rem;
  gap: 3rem;
  min-height: 100vh;
  justify-content: center;
  align-content: center;
  background-color: var(--color-grey-50);

  @media (min-width: 800px) {
    grid-template-columns: 48rem;
  }
`;

const Direct = styled.div`
  border-top: 1px solid var(--color-grey-300);

  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
`;
function Signup() {
  const navigate = useNavigate();
  return (
    <LoginLayout>
      {/* <Logo /> */}
      <Heading style={{ textAlign: "center" }} as="h2">
        Sign Up to have a account !
      </Heading>
      <SignupForm />
      <Direct>
        <Heading as="h3">Already have an account ?</Heading>
        <Button
          onClick={() => navigate("/login")}
          style={{
            border: ".3px solid var(--color-grey-400",
            boxShadow: "var(--shadow-md)",
          }}
          size="small"
          variation="transparent"
        >
          Sign In
        </Button>
      </Direct>
    </LoginLayout>
  );
}

export default Signup;
