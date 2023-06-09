// Add bellow trusted domains, access tokens will automatically injected to be send to
// trusted domain can also be a path like https://www.myapi.com/users,
// then all subroute like https://www.myapi.com/useers/1 will be authorized to send access_token to.

// Domains used by OIDC server must be also declared here
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let trustedDomains = {
    default: ['https://gymby-api.azurewebsites.net','http://localhost:3000','https://gymby-auth.azurewebsites.net','https://localhost:44351','https://demo.duendesoftware.com', 'https://kdhttps.auth0.com'],
    config_classic: ['https://gymby-api.azurewebsites.net','http://localhost:3000','https://gymby-auth.azurewebsites.net','https://localhost:44351', 'https://demo.duendesoftware.com'],
    config_without_silent_login: ['https://gymby-api.azurewebsites.net','http://localhost:3000','https://gymby-auth.azurewebsites.net','https://localhost:44351', 'https://demo.duendesoftware.com'],
    config_without_refresh_token: ['https://gymby-api.azurewebsites.net','http://localhost:3000','https://gymby-auth.azurewebsites.net','https://localhost:44351', 'https://demo.duendesoftware.com'],
    config_without_refresh_token_silent_login: ['https://gymby-api.azurewebsites.net','http://localhost:3000','https://gymby-auth.azurewebsites.net','https://localhost:44351', 'https://demo.duendesoftware.com'],
    config_with_hash: ['https://gymby-api.azurewebsites.net','http://localhost:3000','https://gymby-auth.azurewebsites.net','https://localhost:44351', 'https://demo.duendesoftware.com'],
};
trustedDomains.config_show_access_token = { domains : ['https://gymby-api.azurewebsites.net',"http://localhost:3000", 'https://gymby-auth.azurewebsites.net'], showAccessToken: true };
/*    config_google: ['https://oauth2.googleapis.com', 'https://openidconnect.googleapis.com'],*/