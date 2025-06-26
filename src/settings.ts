export const profile = {
	fullName: 'Lucía Alvarez Nuñez',
	title: 'Phd.',
	institute: 'Universidad de la República',
	author_name: 'Lucía Alvarez-Nuñez', // Author name to be highlighted in the papers section
	research_areas: [
		{ title: 'Physics', description: 'Brief description of the research interest', field: 'physics' },
		{ title: 'Physics', description: 'Brief description of the research interest', field: 'physics' },
	],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: 'luciaalvareznu@gmail.com',
	linkedin: '',
	x: 'https://www.x.com/',
	github: 'asd',
	gitlab: '',
	scholar: 'https://scholar.google.com/citations?user=WpzOV1EAAAAJ',
	inspire: '',
	arxiv: '',
}

export const template = {
	website_url: 'https://localhost:4321', // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
	menu_left: false,
	transitions: true,
	lightTheme: 'light', // Select one of the Daisy UI Themes or create your own
	darkTheme: 'dark', // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
    base: '' // Repository name starting with /
}

export const seo = {
	default_title: 'Astro Academia',
	default_description: 'Astro Academia is a template for academic websites.',
	default_image: '/images/astro-academia.png',
}
