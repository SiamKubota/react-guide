import React from "react";
import ReactDOM from "react-dom/client";

import { PublicClientApplication, EventType } from "@azure/msal-browser";
import { msalConfig } from "./configs/msal-config.js";

import App from "./App.jsx";

export const msalInstance = new PublicClientApplication(msalConfig);

msalInstance.initialize().then(function () {
  // Default to using the first account if no account is active on page load
  if (
    !msalInstance.getActiveAccount() &&
    msalInstance.getAllAccounts().length > 0
  ) {
    // Account selection logic is app dependent. Adjust as needed for different use cases.
    msalInstance.setActiveAccount(msalInstance.getAllAccounts()[0]);
  }

  // Optional - This will update account state if a user signs in from another tab or window
  msalInstance.enableAccountStorageEvents();

  msalInstance.addEventCallback((event) => {
    if (event.eventType === EventType.LOGIN_SUCCESS && event.payload.account) {
      const account = event.payload.account;
      msalInstance.setActiveAccount(account);
    }
  });

  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <App pca={msalInstance} />
    </React.StrictMode>
  );
});
