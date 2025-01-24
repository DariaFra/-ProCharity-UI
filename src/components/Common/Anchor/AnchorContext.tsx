import { createContext } from "react";
import { AnchorContextType } from "./AnchorProvider";

const AnchorContext = createContext<AnchorContextType | undefined>(undefined);
export { AnchorContext };

