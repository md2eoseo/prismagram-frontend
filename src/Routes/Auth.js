import React, { useState } from "react";
import styled from "styled-components";
import Input from "../Components/Input";
import Button from "../Components/Button";

const Wrapper = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  border: 0;
  border-radius: 0px;
  width: 100%;
  max-width: 350px;
`;

const StateChanger = styled(Box)`
  ${(props) => props.theme.whiteBox}
  text-align: center;
  padding: 20px 0px;
`;

const Link = styled.span`
  color: ${(props) => props.theme.blueColor};
  cursor: pointer;
`;

const Form = styled(Box)`
  ${(props) => props.theme.whiteBox}
  padding: 40px;
  padding-bottom: 30px;
  margin-bottom: 15px;
  form {
    width: 100%;
    input {
      width: 100%;
      &:not(:last-child) {
        margin-bottom: 7px;
      }
    }
    button {
      margin-top: 10px;
    }
  }
`;

export default () => {
  const [action, setAction] = useState("logIn");

  return (
    <Wrapper>
      <Box>
        <Form>
          {action === "logIn" ? (
            <form>
              <Input placeholder={"Username"} />
              <Input placeholder={"Password"} />
              <Button text={"Log In"} />
            </form>
          ) : (
            <form>
              <Input placeholder={"First name"} />
              <Input placeholder={"Last name"} />
              <Input placeholder={"Email"} />
              <Input placeholder={"Username"} />
              <Input placeholder={"Password"} />
              <Button text={"Sign Up"} />
            </form>
          )}
        </Form>
        <StateChanger>
          {action === "logIn" ? (
            <>
              Don't have an account?{" "}
              <Link onClick={() => setAction("signUp")}>Sign up</Link>
            </>
          ) : (
            <>
              Have an account?{" "}
              <Link onClick={() => setAction("logIn")}>Log in</Link>
            </>
          )}
        </StateChanger>
      </Box>
    </Wrapper>
  );
};
