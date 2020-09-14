function importAll(r) {
    return r.keys().map(r);
  }
  
  const images = importAll(require.context('../assets/images', false, /\.(png|jpe?g|svg)$/));

const projectDetails = [
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
    }
];

export default projectDetails;