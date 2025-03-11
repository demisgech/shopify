import { ReactNode, useState } from "react";
import ButtonContext from "./buttonContext";

interface Props {
  children: ReactNode;
}

const ButtonProvider = ({ children }: Props) => {
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  return (
    <ButtonContext.Provider
      value={{
        isButtonDisabled,
        setButtonDisabled,
      }}
    >
      {children}
    </ButtonContext.Provider>
  );
};

export default ButtonProvider;
