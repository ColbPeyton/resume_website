function importAll(r) {
    return r.keys().map(r);
  }
  
  const images = importAll(require.context('../assets/images', false, /\.(png|jpe?g|svg)$/));

const projectDetails = [
    {
        title: 'LineTracker',
        cardImage: images[2],
        imageGallery: [
            images[4],
            images[3]
                    ]
    },
    {
        title: 'Odin\'s',
        cardImage: images[8],
        imageGallery: [
            images[5],
            images[6],
            images[7]
                    ]
    },
    {
        title: 'Perfect Fetch',
        cardImage: images[10],
        imageGallery: [
            images[11],
            images[12],
            images[13]
                    ]
    }
];

export default projectDetails;