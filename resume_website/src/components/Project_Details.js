function importAll(r) {
    return r.keys().map(r);
  }
  
  const images = importAll(require.context('../assets/images', false, /\.(png|jpe?g|svg)$/));

const projectDetails = [
    {
        title: 'LineTracker',
        cardImage: images[3],
        imageGallery: [
            images[5],
            images[4]
                    ]
    },
    {
        title: 'Odin\'s',
        cardImage: images[9],
        imageGallery: [
            images[6],
            images[7],
            images[8]
                    ]
    },
    {
        title: 'Perfect Fetch',
        cardImage: images[11],
        imageGallery: [
            images[12],
            images[13],
            images[14]
                    ]
    }
];

export default projectDetails;