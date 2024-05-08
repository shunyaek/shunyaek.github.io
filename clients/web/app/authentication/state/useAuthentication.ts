import { useContext } from "react";
import { AuthenticationContext } from "./AuthenticationContext";

const useAuthentication = () => useContext(AuthenticationContext);

export { useAuthentication };