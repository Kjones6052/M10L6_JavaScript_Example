async function fetchRandomImmage() {
    const apiUrl = 'https://picsum.photos/200/300';

    try {
        const response = awaitfetch(apiUrl);
        const imageUrl = response.url;
        return imageUrl;
    } catch (error) {
        console.error('Error fetching image:', error);
        return null;
    }
}

const handleImages = async () => {
    const imageContainer = document.getElementById('images');

    try {

        const imageUrl1 = await fetchRandomImmage();
        const imageUrl2 = await fetchRandomImmage();

        imageContainer.innerHTML = `
            <img src="${imageUrl1}" alt="Image 1">
            <img src="${imageUrl2}" alt="Image 2">
        `;
    } catch (error) {
        console.error('Error handling images:', error);
    }
};

const updateImages();

setInterval(updateImages, 5000);