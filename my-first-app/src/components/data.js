import * as axios from 'axios';

const getWeather = async function(){
    try {
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=forest%20hills&appid=d82f29bf2b7095caa3baf6c1b9e3a744&units=imperial');
        console.log(response.data);
        const weather = response.data;
        return weather; 
    } catch (error) {
        if (error.message === "Network Error") {
            console.log("Could not get data!");
            console.log(error.message);

        } else {
            console.log("A buffalo has chewed through your electric cable. Your computer will self-destruct in 30 seconds. Vacate.");
            throw error;          
        }

    }

    };
export const data = {
    getWeather,
};