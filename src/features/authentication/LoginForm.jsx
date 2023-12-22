import styled from "styled-components";
import FormRowVertical from "../../ui/FormRowVertical";
import Input from "../../ui/Input";
import { useState } from "react";
import Button from "../../ui/Button";
import { useLogin } from "./useLogin";
// import Heading from "../../ui/Heading";
const Form = styled.form`
  padding: 2.4rem 4rem;

  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
`;

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoading, login } = useLogin();
  function submitHandler(e) {
    e.preventDefault();
    if (!email || !password) return;

    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }
  function loginAsGuest(e) {
    e.preventDefault();
    login(
      { email: "himanshu@gmail.com", password: "987654321" },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }
  return (
    <Form onSubmit={submitHandler}>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>

      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button size="large" variation="primary" disabled={isLoading}>
          {/* {!isLoading ? "Log in" : <SpinnerMini />} */}
          Log In
        </Button>
        <Button
          onClick={loginAsGuest}
          type="button"
          size="large"
          variation="primary"
          disabled={isLoading}
        >
          {/* {!isLoading ? "Log in" : <SpinnerMini />} */}
          Log In as Guest
        </Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
