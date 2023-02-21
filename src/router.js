import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/home/_Home.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		meta: {
			title: '[Simon Weck]',
		},
	},
	{
		path: '/about',
		name: 'About',
		component: () => import('./components/about/_About.vue'),
		meta: {
			title: '[Simon Weck] - About',
		},
	},
	{
		path: '/work',
		name: 'Work',
		component: () => import('./components/work/_Work.vue'),
		meta: {
			title: '[Simon Weck] - Projects',
		},
	},
	{
		path: '/work/:id',
		name: 'Single Project',
		component: () => import('./components/singleproject/_SingleProject.vue')
	},
	{
		path: '/contact',
		name: 'Contact',
		component: () => import('./components/contact/_Contact.vue'),
		meta: {
			title: '[Simon Weck] - Contact',
		},
	},
	{
		path: '/imprint',
		name: 'Imprint',
		component: () => import('./components/imprint/_Imprint.vue'),
		meta: {
			title: '[Simon Weck] - Imprint',
		},
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;

/**
 * Below code will display the component/active page title
 * Powered by: Nangialai Stoman
 */

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
	// This goes through the matched routes from last to first, finding the closest route with a title.
	// e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
	// `/nested`'s will be chosen.
	const nearestWithTitle = to.matched
		.slice()
		.reverse()
		.find((r) => r.meta && r.meta.title);

	// Find the nearest route element with meta tags.
	const nearestWithMeta = to.matched
		.slice()
		.reverse()
		.find((r) => r.meta && r.meta.metaTags);

	const previousNearestWithMeta = from.matched
		.slice()
		.reverse()
		.find((r) => r.meta && r.meta.metaTags);

	// If a route with a title was found, set the document (page) title to that value.
	if (nearestWithTitle) {
		document.title = nearestWithTitle.meta.title;
	} else if (previousNearestWithMeta) {
		document.title = previousNearestWithMeta.meta.title;
	}

	// Remove any stale meta tags from the document using the key attribute we set below.
	Array.from(
		document.querySelectorAll('[data-vue-router-controlled]')
	).map((el) => el.parentNode.removeChild(el));

	// Skip rendering meta tags if there are none.
	if (!nearestWithMeta) return next();

	// Turn the meta tag definitions into actual elements in the head.
	nearestWithMeta.meta.metaTags
		.map((tagDef) => {
			const tag = document.createElement('meta');

			Object.keys(tagDef).forEach((key) => {
				tag.setAttribute(key, tagDef[key]);
			});

			// We use this to track which meta tags we create so we don't interfere with other ones.
			tag.setAttribute('data-vue-router-controlled', '');

			return tag;
		})
		// Add the meta tags to the document head.
		.forEach((tag) => document.head.appendChild(tag));

	next();
});
