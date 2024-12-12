async function fetchData(callback) {
    const apiUrl = 'https://techy-api.vercel.app/api/json';

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        callback(null, data);
    } catch (error) {
        callback(error, null);
    }
}

const HandleData = (error, data) => {
    const dataInfoElement = document.getElementById('dataInfo');

    if (error) {
        dataInfoElement.innerHTML = `<p>Error fetching data: ${error.message}</p>`;
    } else {

        dataInfoElement.innerHTML = `
            <p>Techy Joke: ${data.message}</p>
        `;
    }
};

const updateDate = () => {
    fetchData(HandleData);
};

updateDate();

setInterval(updateDate, 5000);