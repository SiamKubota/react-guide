import PropTypes from "prop-types";
import { PublicClientApplication, InteractionType } from "@azure/msal-browser";
import {
  MsalProvider,
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import { loginRequest } from "./configs/msal-config";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { components, typography, palette } from "./theme/theme";
import "../i18n";

import EmployeeSearch from "./pages/EmployeeSearched";

const theme = createTheme({
  components: components,
  typography: typography,
  palette: palette,
});

function App(props) {
  const { pca } = props;
  return (
    <MsalProvider instance={pca}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AuthenticatedTemplate
          InteractionType={InteractionType.Popup}
          authenticationRequest={loginRequest}
        >
          <EmployeeSearch />
        </AuthenticatedTemplate>
        <UnauthenticatedTemplate>
          <h1>You need to sign in with Microsoft Authentication first!</h1>
          <button
            onClick={async () => {
              const msalLoginResponse = await pca.loginPopup(loginRequest);
              console.log("msalLoginResponse: ", msalLoginResponse);
            }}
          >
            SIGNIN with MSAL
          </button>
        </UnauthenticatedTemplate>
      </ThemeProvider>
    </MsalProvider>
  );
}

App.propTypes = {
  pca: PropTypes.instanceOf(PublicClientApplication),
};

export default App;
