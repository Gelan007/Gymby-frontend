export const configuration = {
    client_id: "gymby",
    redirect_uri: window.location.origin + '/authentication/callback',
    silent_redirect_uri: window.location.origin + "/authentication/silent-callback",
    scope: "openid profile offline_access GymbyWebAPI", // offline_access scope allow your client to retrieve the refresh_token
    authority: "https://localhost:44351",
    service_worker_relative_url: "/OidcServiceWorker.js",
    automaticSilentRenew: true,
    service_worker_only: false,

};

