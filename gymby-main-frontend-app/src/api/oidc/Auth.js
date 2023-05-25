import { Log, User, UserManager } from 'oidc-client';

export class AuthService {
    constructor() {

        const settings = {
            client_id: "gymby",
            redirect_uri: 'http://localhost:3000/userAccount',
            silent_redirect_uri: 'http://localhost:3000/userAccount',
            post_logout_redirect_uri: "http://localhost:3000",
            scope: "openid profile GymbyWebAPI", // offline_access scope allow your client to retrieve the refresh_token
            authority: "https://localhost:44351",
            service_worker_relative_url: "/OidcServiceWorker.js",
            service_worker_only: false,
        };

        this.userManager = new UserManager(settings);

        Log.logger = console;
        Log.level = Log.INFO;
    }

    getUser() {
        return this.userManager.getUser();
    }

    login() {
        return this.userManager.signinRedirect();
    }

    renewToken() {
        return this.userManager.signinSilent();
    }

    logout() {
        return this.userManager.signoutRedirect();
    }
}