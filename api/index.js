/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npx wrangler dev src/index.js` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npx wrangler publish src/index.js --name my-worker` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */
import leaderboard from "../db/leaderboard.json"
export default {
	async fetch(request, env, ctx) {
		return new Response(JSON.stringify(leaderboard), {
			headers : {
				'content-type': 'application/json;charset=UTF-8'
			}
		});
	},
};
