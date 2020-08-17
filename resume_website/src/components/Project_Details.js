function importAll(r) {
    return r.keys().map(r);
  }
  
  const images = importAll(require.context('../assets/images', false, /\.(png|jpe?g|svg)$/));

const projectDetails = [
    {
        title: 'LineTracker',
        url: 'https://github.com/jonathon-evans/CSC424-Project',
        cardImage: images[4],
        imageGallery: [
            images[6],
            images[5]
                    ]
    },
    {
        title: 'Odin\'s',
        url: 'https://github.com/ColbPeyton/odin_restaurant',
        cardImage: images[10],
        imageGallery: [
            images[7],
            images[8],
            images[9]
                    ]
    },
    {
        title: 'Perfect Fetch',
        url: 'https://github.com/ColbPeyton/perfect_fetch',
        cardImage: images[12],
        imageGallery: [
            images[13],
            images[14],
            images[15]
                    ]
    },
    {
        title: 'Future Project',
        url: '',
        cardImage: images[19],
        imageGallery: []
    }
];

export default projectDetails;