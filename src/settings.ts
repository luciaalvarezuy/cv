export const profile = {
	shortName: 'Lucía',
	fullName: 'Lucía Alvarez Nuñez',
	title: 'Phd.',
	institute: 'Complutense University of Madrid and University of the Republic of Uruguay (PhD under a co-tutelle agreement)',
	author_name: 'Lucía Alvarez-Nuñez', // Author name to be highlighted in the papers section
	research_areas: [
		{ title: 'Behavioral Data Science', description: 'I apply statistical learning and machine learning techniques to analyze behavioral data, uncover patterns, and predict human decisions across domains such as health, education, and digital environments.', field: 'Human behavior, applied data science' },
		{ title: 'Health and Well-being Analytics', description: 'I analyze behavioral and psychological data to understand health-related behaviors and well-being. I use predictive models and evaluations to support evidence-based health interventions.', field: 'Public health and well-being' },
		{ title: 'Time Perspective and Decision-Making', description: 'I investigate how people’s consideration of future consequences influences daily choices. I use psychometric tools and machine learning models to explore the cognitive and emotional aspects of decision-making.', field: 'Psychology of decision-making and future orientation' },
		{ title: 'Child Development and Evidence-Based Policy Recommendations', description: 'I specialize in analyzing behavioral and social data related to early childhood development. My work focuses on identifying key developmental indicators and generating evidence to support public policy recommendations. I have collaborated with government agencies and international organizations to inform the design and improvement of social programs that promote child well-being.', field: 'Behavioral data analysis, early childhood, social policy' },
		{ title: 'Psychometrics and Measurement', description: 'I design, adapt, and validate instruments to assess psychological and behavioral constructs across diverse populations. My expertise includes latent variable modeling, psychometric validation, and reliability analysis.', field: 'Psychological assessment and scale development' },
	],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: 'luciaalvareznu@gmail.com',
	linkedin: 'https://www.linkedin.com/in/phd-lucia-alvarez-nu/',
	x: '',
	github: 'https://github.com/luciaalvarezuy',
	gitlab: '',
	scholar: 'https://scholar.google.com/citations?user=WpzOV1EAAAAJ',
	inspire: '',
	arxiv: '',
}

export const template = {
	website_url: 'https://luciaalvarezuy.github.io/cv/', // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
	menu_left: false,
	transitions: true,
	lightTheme: 'light', // Select one of the Daisy UI Themes or create your own
	darkTheme: 'dark', // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
	base: '/cv' // Repository name starting with /
}

export const seo = {
	default_title: 'Astro Academia',
	default_description: 'Astro Academia is a template for academic websites.',
	default_image: '/images/astro-academia.png',
}
