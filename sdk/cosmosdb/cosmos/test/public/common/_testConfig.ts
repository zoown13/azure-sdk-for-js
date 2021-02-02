// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// [SuppressMessage("Microsoft.Security", "CS002:SecretInNextLine")]
const masterKey =
  "2824kkTRDtkn5fWVotPZjett8oPfXou2PH2rTZmrumICdVT5eSItsfBadkRhk5OyoDHt5KodqqImtBaatiAQUw==";
const endpoint = 'https://sqloncomputejsstagesignoff.documents-staging.windows-ppe.net:443/' || "https://localhost:8081";

// This is needed to disable SSL verification for the tests running against emulator.
if (endpoint.includes("https://localhost")) {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
}

export { masterKey, endpoint };
