import { InteractionType } from "@azure/msal-browser";
import {
  MsalProvider,
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";

import { loginRequest } from "./configs/msal-config";

import SomePage from "./pages/SomePage";

function App(props) {
  const { pca } = props;

  console.log("pca: ", pca);

  return (
    <MsalProvider instance={pca}>
      <AuthenticatedTemplate
        InteractionType={InteractionType.Redirect}
        authenticationRequest={loginRequest}
      >
        <h1>Authenticated with @azure/msal-react</h1>
        <button
          onClick={async () => {
            const msalLogoutResponse = await pca.logoutRedirect();
            // logoutRequest

            console.log("msalLogoutResponse: ", msalLogoutResponse);
          }}
        >
          SIGNOUT from MSAL
        </button>
        <SomePage />
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <h1>You need to sign in with Microsoft Authentication first!!!</h1>
        <button
          onClick={async () => {
            const msalLoginResponse = await pca.loginRedirect(loginRequest);
            console.log("msalLoginResponse: ", msalLoginResponse);
          }}
        >
          SIGNIN with MSAL
        </button>
      </UnauthenticatedTemplate>
    </MsalProvider>
  );
}

export default App;
