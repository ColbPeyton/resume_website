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
        title: 'Perfect Fetch',
        cardImage: images[6],
        imageGallery: [
            images[7],
            images[8],
            images[9]
                    ]
    }
];

export default projectDetails;