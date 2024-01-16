import { useAccount, useMsalAuthentication } from "@azure/msal-react";

import { InteractionType } from "@azure/msal-browser";

import { loginRequest } from "../../configs/msal-config";

const ExampleMsalHookPage = () => {
  const account = useAccount();
  const { acquireToken } = useMsalAuthentication(
    InteractionType.Popup,
    loginRequest
  );
  console.log("accounts: ", account);
  // console.log("acquireToken: ", acquireToken());

  return (
    <div>
      <br />
      <br />
      Hello {account.name}
      <br />
      <br />
      <button
        onClick={async () => {
          const token = await acquireToken();
          console.log("token: ", token);
        }}
      >
        ACQUIRE TOKEN
      </button>
    </div>
  );
};

export default ExampleMsalHookPage;
