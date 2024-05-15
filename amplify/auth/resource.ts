import { defineAuth, secret } from '@aws-amplify/backend';

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
    externalProviders: {
      oidc: [
        {
          name: 'MicrosoftEntraID',
          clientId: secret('MICROSOFT_ENTRA_ID_CLIENT_ID'),
          clientSecret: secret('MICROSOFT_ENTRA_ID_CLIENT_SECRET'),
          issuerUrl: 'https://login.microsoftonline.com/15b03f79-c42c-4ded-981e-598b1d404bef',
        },
      ],
      logoutUrls: ['http://localhost:3000/', 'https://mywebsite.com'],
      callbackUrls: [
        'http://localhost:3000/profile',
        'https://main.d11d8r13usn70m.amplifyapp.com/',
      ],
    },
  },
});
