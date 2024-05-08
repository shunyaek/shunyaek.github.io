import { AuthenticationProvider } from "./AuthenticationProvider";
import { WithAuthenticationContext } from "./WithAuthenticationContext";
import { useAuthentication } from "./useAuthentication";
import { signInWithEMail } from "./authenticationAPI";
import { authenticationReducer } from "./authenticationReducer";

export { WithAuthenticationContext, useAuthentication, signInWithEMail, authenticationReducer };

export default AuthenticationProvider;
