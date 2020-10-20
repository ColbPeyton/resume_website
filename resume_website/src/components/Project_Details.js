function importAll(r) {
    return r.keys().map(r);
  }
  
  const imagesBreakingBad = importAll(require.context('../assets/images/breakingBad', false, /\.(png|jpe?g|svg)$/));
  const imagesFactory = importAll(require.context('../assets/images/factory', false, /\.(png|jpe?g|svg)$/));
  const imagesLineTracker = importAll(require.context('../assets/images/linetracker', false, /\.(png|jpe?g|svg)$/));
  const imagesPerfectFetch = importAll(require.context('../assets/images/perfectFetch', false, /\.(png|jpe?g|svg)$/));
  const imagesOdin = importAll(require.context('../assets/images/odin', false, /\.(png|jpe?g|svg)$/));
  const imagesWeather = importAll(require.context('../assets/images/weather', false, /\.(png|jpe?g|svg)$/));

const projectDetails = [
    {
        title: 'TheFactory',
        url: 'https://github.com/ColbPeyton/practice_business',
        cardImage: imagesFactory[0],
        imageGallery: [
            imagesFactory[1],
            imagesFactory[2],
            imagesFactory[3],
            imagesFactory[4],
            imagesFactory[5],
            imagesFactory[6],
            imagesFactory[7],
            imagesFactory[8],
            imagesFactory[9],
            imagesFactory[10],
            imagesFactory[11],
            imagesFactory[12],
            imagesFactory[13],
            imagesFactory[14],
            imagesFactory[15],
            imagesFactory[16],
            imagesFactory[17],
            imagesFactory[18],
            imagesFactory[19],
            imagesFactory[20],
            imagesFactory[21],
            imagesFactory[22],
            imagesFactory[23],
            imagesFactory[24],
            imagesFactory[25],
            imagesFactory[26],
                    ]
    },
    {
        title: 'LineTracker',
        url: 'https://github.com/jonathon-evans/CSC424-Project',
        cardImage: imagesLineTracker[0],
        imageGallery: [
            imagesLineTracker[1],
            imagesLineTracker[2]
                    ]
    },
    {
        title: 'Breaking Bad Quotes',
        url: 'https://github.com/ColbPeyton/BB_guessing_game',
        cardImage: imagesBreakingBad[0],
        imageGallery: [
            imagesBreakingBad[1],
            imagesBreakingBad[2],
            imagesBreakingBad[3],
            imagesBreakingBad[4],
            imagesBreakingBad[5],
                    ]
    },
    {
        title: 'Perfect Fetch',
        url: 'https://github.com/ColbPeyton/perfect_fetch',
        cardImage: imagesPerfectFetch[0],
        imageGallery: [
            imagesPerfectFetch[1],
            imagesPerfectFetch[2],
            imagesPerfectFetch[3]
                    ]
    },
    {
        title: 'Odin\'s',
        url: 'https://github.com/ColbPeyton/odin_restaurant',
        cardImage: imagesOdin[0],
        imageGallery: [
            imagesOdin[1],
            imagesOdin[2],
                    ]
    },
    {
        title: 'Odin Weather',
        url: 'https://github.com/ColbPeyton/odin_weather',
        cardImage: imagesWeather[0],
        imageGallery: [
            imagesWeather[1],
            imagesWeather[2],
            imagesWeather[3],
            imagesWeather[4],
                    ]
    }
];

export default projectDetails;