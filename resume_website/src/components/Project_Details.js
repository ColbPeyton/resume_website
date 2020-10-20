function importAll(r) {
    return r.keys().map(r);
  }
  
  const images = importAll(require.context('../assets/images', false, /\.(png|jpe?g|svg)$/));
  const imagesFactory = importAll(require.context('../assets/images/factory', false, /\.(png|jpe?g|svg)$/));

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
        cardImage: images[9],
        imageGallery: [
            images[10],
            images[11]
                    ]
    },
    {
        title: 'Breaking Bad Quotes',
        url: 'https://github.com/ColbPeyton/BB_guessing_game',
        cardImage: images[0],
        imageGallery: [
            images[6],
            images[4],
            images[1],
            images[5],
            images[2],
                    ]
    },
    {
        title: 'Perfect Fetch',
        url: 'https://github.com/ColbPeyton/perfect_fetch',
        cardImage: images[15],
        imageGallery: [
            images[17],
            images[18],
            images[16]
                    ]
    },
    {
        title: 'Odin\'s',
        url: 'https://github.com/ColbPeyton/odin_restaurant',
        cardImage: images[14],
        imageGallery: [
            images[12],
            images[13],
                    ]
    },
    {
        title: 'Odin Weather',
        url: 'https://github.com/ColbPeyton/odin_weather',
        cardImage: images[24],
        imageGallery: [
            images[20],
            images[22],
            images[21],
            images[23],
                    ]
    }
];

export default projectDetails;