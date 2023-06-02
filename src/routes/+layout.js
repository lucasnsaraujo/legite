export function load({ route }) {
	const BLOCKED_HEADER_PAGES = ['app', 'login', 'register'];
	const isApp = String(route.id)
		.split('/')
		.some((term) => BLOCKED_HEADER_PAGES.includes(term));

	return {
		shouldRenderHeader: !isApp
	};
}
