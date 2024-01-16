import { InteractionType } from "@azure/msal-browser";
import {
  MsalProvider,
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import { loginRequest } from "./configs/msal-config";
// import { CustomNavigationClient } from "./utils/navigation-client";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import MainLayout from "./app/layouts/MainLayout";
import HomePage from "./app/pages/HomePage.jsx";
import SettingPage from "./app/pages/SettingPage.jsx";
// import ExampleMsalHookPage from "./app/pages/ExampleMsalHookPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "contact-us", element: <p>Contact Us Page</p> },
      { path: ":name", element: <SettingPage /> },
    ],
  },
]);

function App(props) {
  const { pca } = props;

  console.log("pca: ", pca);
  console.log("router: ", router);

  // const navigationClient = new CustomNavigationClient(router.navigate);
  // pca.setNavigationClient(navigationClient);

  return (
    <MsalProvider instance={pca}>
      <AuthenticatedTemplate
        InteractionType={InteractionType.Redirect}
        authenticationRequest={loginRequest}
      >
        {/* <h1>Authenticated with @azure/msal-react</h1> */}
        <button
          onClick={async () => {
            const msalLogoutResponse = await pca.logoutRedirect();
            // logoutRequest

            console.log("msalLogoutResponse: ", msalLogoutResponse);
          }}
        >
          SIGNOUT from MSAL
        </button>
        {/* <ExampleMsalHookPage /> */}

        <RouterProvider router={router} />
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
