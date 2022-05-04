import styled from "@emotion/styled";
const Button = styled.button`
  background:red;
  padding: 10px 20px;
  border: none;
  margin-right: 50px;
  color:${props=> props.theme.colors.primary};
  :hover{
    background: green;
    cursor: pointer;
  }
`;
const SecondaryButton = styled(Button)`
  border-radius: 20px;
  color:${props=>props.theme.colors.secondary};
  :hover{
    background: blue;
  }
`;

const theme = {
  colors:{
    primary: "yellow",
    secondary: "cyan"
  }
}

function PrimaryButton({secondary=false}) {
  return <div>
          <Button >Click me</Button>
          {secondary ?  <SecondaryButton>Secondary Button</SecondaryButton>:null}
        </div>
}

export {PrimaryButton,theme}