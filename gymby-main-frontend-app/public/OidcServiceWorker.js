"use strict";
/*let trustedDomains = {
    default: ['https://gymby-api.azurewebsites.net','http://localhost:3000','https://gymby-auth.azurewebsites.net','https://localhost:44351','https://demo.duendesoftware.com', 'https://kdhttps.auth0.com'],
    config_classic: ['https://gymby-api.azurewebsites.net','http://localhost:3000','https://gymby-auth.azurewebsites.net','https://localhost:44351', 'https://demo.duendesoftware.com'],
    config_without_silent_login: ['https://gymby-api.azurewebsites.net','http://localhost:3000','https://gymby-auth.azurewebsites.net','https://localhost:44351', 'https://demo.duendesoftware.com'],
    config_without_refresh_token: ['https://gymby-api.azurewebsites.net','http://localhost:3000','https://gymby-auth.azurewebsites.net','https://localhost:44351', 'https://demo.duendesoftware.com'],
    config_without_refresh_token_silent_login: ['https://gymby-api.azurewebsites.net','http://localhost:3000','https://gymby-auth.azurewebsites.net','https://localhost:44351', 'https://demo.duendesoftware.com'],
    config_with_hash: ['https://gymby-api.azurewebsites.net','http://localhost:3000','https://gymby-auth.azurewebsites.net','https://localhost:44351', 'https://demo.duendesoftware.com'],
};
trustedDomains.config_show_access_token = { domains : ['https://gymby-api.azurewebsites.net',"http://localhost:3000", 'https://gymby-auth.azurewebsites.net'], showAccessToken: true };*/

const N = "OidcTrustedDomains.js", A = "*", _ = {
    REFRESH_TOKEN: "REFRESH_TOKEN_SECURED_BY_OIDC_SERVICE_WORKER",
    ACCESS_TOKEN: "ACCESS_TOKEN_SECURED_BY_OIDC_SERVICE_WORKER",
    NONCE_TOKEN: "NONCE_SECURED_BY_OIDC_SERVICE_WORKER",
    CODE_VERIFIER: "CODE_VERIFIER_SECURED_BY_OIDC_SERVICE_WORKER"
}, w = {
    access_token_or_id_token_invalid: "access_token_or_id_token_invalid",
    access_token_invalid: "access_token_invalid",
    id_token_invalid: "id_token_invalid"
}, I = "/.well-known/openid-configuration";

function x(o, e) {
    if (!e) return;
    if (!o.find(n => {
        var i;
        let t;
        return typeof n == "string" ? t = new RegExp(`^${n}`) : t = n, (i = t.test) == null ? void 0 : i.call(t, e)
    })) throw new Error("Domain " + e + " is not trusted, please add domain in " + N)
}

const K = (o, e, s) => {
    var n;
    if (e.endsWith(I)) return null;
    for (const [t, i] of Object.entries(o)) {
        const d = i.oidcServerConfiguration;
        if (!d || d.tokenEndpoint && e === d.tokenEndpoint || d.revocationEndpoint && e === d.revocationEndpoint) continue;
        const l = s == null ? [] : s[t], f = Array.isArray(l) ? l : l.domains,
            a = d.userInfoEndpoint ? [d.userInfoEndpoint, ...f] : [...f];
        let c = !1;
        if (a.find(h => h === A)) c = !0; else for (let h = 0; h < a.length; h++) {
            let r = a[h];
            if (typeof r == "string" && (r = new RegExp(`^${r}`)), (n = r.test) != null && n.call(r, e)) {
                c = !0;
                break
            }
        }
        if (c) return i.tokens ? i : null
    }
    return null
};

function M(o, e) {
    return o.split(e).length - 1
}

function U(o) {
    return JSON.parse(P(o.split(".")[1].replace("-", "+").replace("_", "/")))
}

function P(o) {
    return decodeURIComponent(Array.prototype.map.call(atob(o), e => "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)).join(""))
}

function W(o, e) {
    const s = new Date().getTime() / 1e3;
    return Math.round(e - o - s)
}

function F(o) {
    return o ? W(0, o.expiresAt) > 0 : !1
}

const O = o => {
    try {
        return o && M(o, ".") === 2 ? U(o) : null
    } catch (e) {
        console.warn(e)
    }
    return null
}, b = (o, e, s) => {
    if (o.idTokenPayload) {
        const n = o.idTokenPayload;
        if (s.issuer !== n.iss) return {isValid: !1, reason: "Issuer does not match"};
        const t = new Date().getTime() / 1e3;
        if (n.exp && n.exp < t) return {isValid: !1, reason: "Token expired"};
        const i = 60 * 60 * 24 * 7;
        if (n.iat && n.iat + i < t) return {isValid: !1, reason: "Token is used from too long time"};
        if (n.nonce && n.nonce !== e) return {isValid: !1, reason: "Nonce does not match"}
    }
    return {isValid: !0, reason: ""}
};

function q(o, e, s) {
    if (!o.issued_at) {
        const u = new Date().getTime() / 1e3;
        o.issued_at = u
    }
    const n = O(o.access_token), t = {...o, accessTokenPayload: n};
    e.hideAccessToken && (t.access_token = _.ACCESS_TOKEN + "_" + s), o.accessTokenPayload = n;
    let i = null;
    if (o.id_token) {
        if (i = O(o.id_token), o.idTokenPayload = {...i}, i.nonce && e.nonce != null) {
            const u = _.NONCE_TOKEN + "_" + e.configurationName;
            i.nonce = u
        }
        t.idTokenPayload = i
    }
    o.refresh_token && (t.refresh_token = _.REFRESH_TOKEN + "_" + s);
    const d = i && i.exp ? i.exp : Number.MAX_VALUE, l = n && n.exp ? n.exp : o.issued_at + o.expires_in;
    let f;
    const a = e.oidcConfiguration.token_renew_mode;
    a === w.access_token_invalid ? f = l : a === w.id_token_invalid ? f = d : f = d < l ? d : l, t.expiresAt = f, o.expiresAt = f;
    const c = e.nonce ? e.nonce.nonce : null, {isValid: h, reason: r} = b(o, c, e.oidcServerConfiguration);
    if (!h) throw Error(`Tokens are not OpenID valid, reason: ${r}`);
    if (e.tokens != null && "refresh_token" in e.tokens && !("refresh_token" in o)) {
        const u = e.tokens.refresh_token;
        e.tokens = {...o, refresh_token: u}
    } else e.tokens = o;
    return e.status = "LOGGED_IN", t
}

function y(o) {
    const e = o.configurationName;
    return s => s.status !== 200 ? s : s.json().then(n => {
        const t = q(n, o, e), i = JSON.stringify(t);
        return new Response(i, s)
    })
}

function T(o) {
    const e = {};
    for (const s of o.keys()) o.has(s) && (e[s] = o.get(s));
    return e
}

const D = o => new Promise(e => setTimeout(e, o)), p = self;
p.importScripts(N);
const V = Math.round(new Date().getTime() / 1e3).toString(), L = "OidcKeepAliveServiceWorker.json", H = o => {
    console.log("[OidcServiceWorker] service worker installed " + V), o.waitUntil(p.skipWaiting())
}, j = o => {
    console.log("[OidcServiceWorker] service worker activated " + V), o.waitUntil(p.clients.claim())
};
let m = null;
const E = {
    default: {
        configurationName: "default",
        tokens: null,
        status: null,
        state: null,
        codeVerifier: null,
        nonce: null,
        oidcServerConfiguration: null,
        hideAccessToken: !0
    }
}, J = (o, e) => {
    const s = [];
    for (const [, n] of Object.entries(o)) (n.oidcServerConfiguration != null && e.startsWith(n.oidcServerConfiguration.tokenEndpoint) || n.oidcServerConfiguration != null && n.oidcServerConfiguration.revocationEndpoint && e.startsWith(n.oidcServerConfiguration.revocationEndpoint)) && s.push(n);
    return s
}, Y = async o => {
    const e = o.request, s = e.headers.has("oidc-vanilla"), n = {status: 200, statusText: "oidc-service-worker"},
        t = new Response("{}", n);
    if (!s) {
        const i = new URL(e.url), d = Number(i.searchParams.get("minSleepSeconds")) || 240;
        for (let l = 0; l < d; l++) await D(1e3 + Math.floor(Math.random() * 1e3)), await (await caches.open("oidc_dummy_cache")).put(o.request, t.clone())
    }
    return t
}, z = async o => {
    const e = o.request, s = e.url;
    if (e.url.includes(L)) {
        o.respondWith(Y(o));
        return
    }
    const n = K(E, e.url, trustedDomains);
    if (n && n.tokens && n.tokens.access_token) {
        for (; n.tokens && !F(n.tokens);) await D(200);
        const l = e.mode == "navigate" ? new Request(e, {
            headers: {
                ...T(e.headers),
                authorization: "Bearer " + n.tokens.access_token
            }
        }) : new Request(e, {
            headers: {...T(e.headers), authorization: "Bearer " + n.tokens.access_token},
            mode: n.oidcConfiguration.service_worker_convert_all_requests_to_cors ? "cors" : e.mode
        });
        o.waitUntil(o.respondWith(fetch(l)));
        return
    }
    if (o.request.method !== "POST") return;
    let t = null;
    const i = J(E, e.url), d = i.length;
    if (d > 0) {
        const l = new Promise((f, a) => {
            const c = e.clone();
            c.text().then(r => {
                if (r.includes(_.REFRESH_TOKEN) || r.includes(_.ACCESS_TOKEN)) {
                    let u = r;
                    for (let g = 0; g < d; g++) {
                        const k = i[g];
                        if (k && k.tokens != null) {
                            const R = _.REFRESH_TOKEN + "_" + k.configurationName;
                            if (r.includes(R)) {
                                u = u.replace(R, encodeURIComponent(k.tokens.refresh_token)), t = k;
                                break
                            }
                            const v = _.ACCESS_TOKEN + "_" + k.configurationName;
                            if (r.includes(v)) {
                                u = u.replace(v, encodeURIComponent(k.tokens.access_token)), t = k;
                                break
                            }
                        }
                    }
                    const S = fetch(e, {
                        body: u,
                        method: c.method,
                        headers: {...T(e.headers)},
                        mode: c.mode,
                        cache: c.cache,
                        redirect: c.redirect,
                        referrer: c.referrer,
                        credentials: c.credentials,
                        integrity: c.integrity
                    });
                    return t && t.oidcServerConfiguration != null && t.oidcServerConfiguration.revocationEndpoint && s.startsWith(t.oidcServerConfiguration.revocationEndpoint) ? S.then(async g => {
                        const k = await g.text();
                        return new Response(k, g)
                    }) : S.then(y(t))
                } else if (r.includes("code_verifier=") && m) {
                    t = E[m], m = null;
                    let u = r;
                    if (t && t.codeVerifier != null) {
                        const S = _.CODE_VERIFIER + "_" + t.configurationName;
                        r.includes(S) && (u = u.replace(S, t.codeVerifier))
                    }
                    return fetch(e, {
                        body: u,
                        method: c.method,
                        headers: {...T(e.headers)},
                        mode: c.mode,
                        cache: c.cache,
                        redirect: c.redirect,
                        referrer: c.referrer,
                        credentials: c.credentials,
                        integrity: c.integrity
                    }).then(y(t))
                }
            }).then(r => {
                r !== void 0 ? f(r) : (console.log("success undefined"), a(new Error("Response is undefined inside a success")))
            }).catch(r => {
                r !== void 0 ? a(r) : (console.log("error undefined"), a(new Error("Response is undefined inside a error")))
            })
        });
        o.waitUntil(o.respondWith(l))
    }
}, C = {}, $ = o => {
    const e = o.ports[0], s = o.data, n = s.configurationName;
    let t = E[n];
    if (trustedDomains == null && (trustedDomains = {}), !t) {
        if (C[n] === void 0) {
            let i = trustedDomains[n];
            C[n] = Array.isArray(i) ? !1 : i.showAccessToken
        }
        E[n] = {
            tokens: null,
            state: null,
            codeVerifier: null,
            oidcServerConfiguration: null,
            oidcConfiguration: void 0,
            nonce: null,
            status: null,
            configurationName: n,
            hideAccessToken: !C[n]
        }, console.log(E[n]), t = E[n], trustedDomains[n] || (trustedDomains[n] = [])
    }
    switch (s.type) {
        case"clear":
            t.tokens = null, t.state = null, t.codeVerifier = null, t.status = s.data.status, e.postMessage({configurationName: n});
            return;
        case"init": {
            const i = s.data.oidcServerConfiguration;
            let d = trustedDomains[n];
            const l = Array.isArray(d) ? d : d.domains;
            l.find(a => a === A) || [i.tokenEndpoint, i.revocationEndpoint, i.userInfoEndpoint, i.issuer].forEach(a => {
                x(l, a)
            }), t.oidcServerConfiguration = i, t.oidcConfiguration = s.data.oidcConfiguration;
            const f = s.data.where;
            if (f === "loginCallbackAsync" || f === "tryKeepExistingSessionAsync" ? m = n : m = null, !t.tokens) e.postMessage({
                tokens: null,
                status: t.status,
                configurationName: n
            }); else {
                const a = {...t.tokens};
                t.hideAccessToken && (a.access_token = _.ACCESS_TOKEN + "_" + n), a.refresh_token && (a.refresh_token = _.REFRESH_TOKEN + "_" + n), a.idTokenPayload && a.idTokenPayload.nonce && t.nonce != null && (a.idTokenPayload.nonce = _.NONCE_TOKEN + "_" + n), e.postMessage({
                    tokens: a,
                    status: t.status,
                    configurationName: n
                })
            }
            return
        }
        case"setState":
            t.state = s.data.state, e.postMessage({configurationName: n});
            return;
        case"getState": {
            const i = t.state;
            e.postMessage({configurationName: n, state: i});
            return
        }
        case"setCodeVerifier":
            t.codeVerifier = s.data.codeVerifier, e.postMessage({configurationName: n});
            return;
        case"getCodeVerifier": {
            e.postMessage({configurationName: n, codeVerifier: _.CODE_VERIFIER + "_" + n});
            return
        }
        case"setSessionState":
            t.sessionState = s.data.sessionState, e.postMessage({configurationName: n});
            return;
        case"getSessionState": {
            const i = t.sessionState;
            e.postMessage({configurationName: n, sessionState: i});
            return
        }
        case"setNonce":
            t.nonce = s.data.nonce, e.postMessage({configurationName: n});
            return;
        default:
            t.items = {...s.data}, e.postMessage({configurationName: n})
    }
};
p.addEventListener("install", H);
p.addEventListener("activate", j);
p.addEventListener("fetch", z);
p.addEventListener("message", $);
//# sourceMappingURL=OidcServiceWorker.js.map
