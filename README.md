# Mission Possible

Sales and outreach team performance workspace.

Member dashboard, daily reports, weighted scoring, period leaderboards, learning libraries, completion tracking, separate administrator password sessions and team activity detail. Data is stored in D1.

See API.md and public/api-contract.json for the API contract. Rebuild generated hooks with `node scripts/generate-api-client.mjs`. Generate schema migrations with `npm run db:generate`; apply local migrations using Wrangler against the local DB binding. Production migrations are applied through Sites publishing.

This release uses platform-managed member sign-in. Clerk requires a separate integration. The first signed-in member initializes the administrator role. Set the administrator password at /admin-login. Site access begins owner-private and team access is controlled in the site sharing settings.

Run `npm run dev` to preview and `npm run build` to build. No sample records or secrets are included in production.
