const SIZE = {
	mobile: '320px',
	tablet: '768px',
	laptop: '1024px',
	desktop: '1440px',
};

export const DEVICES = {
	minMobile: `(min-width: ${SIZE.mobile})`,
	maxMobile: `(max-width: ${SIZE.tablet})`,
	minTablet: `(min-width: ${SIZE.tablet})`,
	maxTablet: `(max-width: ${SIZE.laptop})`,
	laptop: `(min-width: ${SIZE.laptop})`,
	desktop: `(min-width: ${SIZE.desktop})`,
};
