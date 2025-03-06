export const METADATA = {
    MAIN: {
        type: 'website',
        url: 'https://katrinacloyd.com',
        title: 'Katrina Cloyd | Frontend Software Engineer',
        shareImg: '/km_preview.png',

    },
    HOME: {
        title: 'Katrina Cloyd | Frontend Software Engineer',
        description: `As a Frontend Software Engineer with seven years as a graphic designer,
            I specialize in React, Typescript, and bridging the gap between development and design.`,
    },
    ABOUT: {
        title: 'Katrina Cloyd | About',
        description: `A little more of my backstory if you are into that sort of thing.
            Bottom line, I like creative technical work.`,
    },
    PORTFOLIO: {
        title: 'Katrina Cloyd | My Portfolio',
        description: 'Here\'s the work. My favs. My best. And some just for fun (which are also my favs and best).',
    },
}

export const MainOGMetaData = {
    type: METADATA.MAIN.type,
    url: METADATA.MAIN.url,
    title: METADATA.HOME.title,
    description: METADATA.HOME.description,
    siteName: METADATA.MAIN.title,
    images: [{url: METADATA.MAIN.shareImg}],
  };

export const AboutOGMetaData = {
    type: METADATA.MAIN.type,
    url: METADATA.MAIN.url,
    title: METADATA.ABOUT.title,
    description: METADATA.ABOUT.description,
    siteName: METADATA.MAIN.title,
    images: [{url: METADATA.MAIN.shareImg}],
  };

export const PortfolioOGMetaData = {
    type: METADATA.MAIN.type,
    url: METADATA.MAIN.url,
    title: METADATA.PORTFOLIO.title,
    description: METADATA.PORTFOLIO.description,
    siteName: METADATA.MAIN.title,
    images: [{url: METADATA.MAIN.shareImg}],
  };
