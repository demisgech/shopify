import { createContext } from "react";

interface ButtoContextType {
  isButtonDisabled: boolean;
  setButtonDisabled: (isButtonDisabled: boolean) => void;
}

const ButtonContext = createContext<ButtoContextType>({} as ButtoContextType);

export default ButtonContext;
