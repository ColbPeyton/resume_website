function importAll(r) {
    return r.keys().map(r);
  }
  
  const imagesBreakingBad = importAll(require.context('../assets/images/breakingBad', false, /\.(png|jpe?g|svg)$/));
  const imagesFactory = importAll(require.context('../assets/images/factory', false, /\.(png|jpe?g|svg)$/));
  const imagesDrHoops = importAll(require.context('../assets/images/drHoops', false, /\.(png|jpe?g|svg)$/));
  const imagesPerfectFetch = importAll(require.context('../assets/images/perfectFetch', false, /\.(png|jpe?g|svg)$/));
  const imagesWeather = importAll(require.context('../assets/images/weather', false, /\.(png|jpe?g|svg)$/));
  const imagesPixelBee = importAll(require.context('../assets/images/pixelBee', false, /\.(png|jpe?g|svg)$/));

const projectDetails = [
    {
        title: 'Dr. Hoops Sports Spread',
        url: 'https://github.com/ColbPeyton/sports_spread',
        urlFull: 'https://drhoops.net/#/', 
        cardImage: imagesDrHoops[0],
        imageGallery: [
            imagesDrHoops[1],
            imagesDrHoops[2],
            imagesDrHoops[3],
            imagesDrHoops[4],
            imagesDrHoops[5],
            imagesDrHoops[6],
            imagesDrHoops[7],
            imagesDrHoops[8],
            imagesDrHoops[9],
            imagesDrHoops[10],
            imagesDrHoops[11],
                    ]
    },
    {
        title: 'Pixel Bee E-Commerce',
        url: 'https://github.com/ColbPeyton/practice_ecommerce',
        urlFull: 'https://unruffled-ptolemy-7b3a78.netlify.app/#/', 
        cardImage: imagesPixelBee[0],
        imageGallery: [
            imagesPixelBee[1],
            imagesPixelBee[2],
            imagesPixelBee[3],
            imagesPixelBee[4],
            imagesPixelBee[5],
            imagesPixelBee[6],
            imagesPixelBee[7],
            imagesPixelBee[8],
            imagesPixelBee[9],
            imagesPixelBee[10],
            imagesPixelBee[11],
            imagesPixelBee[12],
            imagesPixelBee[13],
            imagesPixelBee[14],
            imagesPixelBee[15],
            imagesPixelBee[16],
            imagesPixelBee[17],
            imagesPixelBee[18],
            imagesPixelBee[19],
            imagesPixelBee[20],
            imagesPixelBee[21],
            imagesPixelBee[22],
            imagesPixelBee[23],
            imagesPixelBee[24],
            imagesPixelBee[25],
            imagesPixelBee[26],
                    ]
    },
    {
        title: 'TheFactory',
        url: 'https://github.com/ColbPeyton/practice_business',
        urlFull: 'https://nifty-turing-8d4e6e.netlify.app/#/', 
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
        title: 'Breaking Bad Quotes',
        url: 'https://github.com/ColbPeyton/BB_guessing_game',
        urlFull: 'https://reverent-rosalind-877bd2.netlify.app/', 
        cardImage: imagesBreakingBad[0],
        imageGallery: [
            imagesBreakingBad[1],
            imagesBreakingBad[2],
            imagesBreakingBad[3],
            imagesBreakingBad[4],
            imagesBreakingBad[5],
            imagesBreakingBad[6],
                    ]
    },
    {
        title: 'Perfect Fetch',
        url: 'https://github.com/ColbPeyton/perfect_fetch',
        urlFull: 'https://practical-brown-540179.netlify.app/',
        cardImage: imagesPerfectFetch[0],
        imageGallery: [
            imagesPerfectFetch[1],
            imagesPerfectFetch[2],
            imagesPerfectFetch[3],
            imagesPerfectFetch[4],
            imagesPerfectFetch[5],
            imagesPerfectFetch[6],
            imagesPerfectFetch[7],
            imagesPerfectFetch[8],
                    ]
    },
    {
        title: 'Odin Weather',
        url: 'https://github.com/ColbPeyton/odin_weather',
        urlFull: '',
        cardImage: imagesWeather[0],
        imageGallery: [
            imagesWeather[1],
            imagesWeather[2],
            imagesWeather[3],
            imagesWeather[4],
                    ]
    },


];

export default projectDetails;