const baseURL = 'https://api.apixu.com/v1/forecast.json?key=7fb342ecbc284872a8c170901190904'

export const getWeather = async () => {
    try {
        let forecast = await fetch(`${baseURL}&q=92127&days=5`)
        let result = await forecast.json()
        if (result.error !== null) {
            return result.forecast.forecastday
        } else {
            return `Error: ${result.code} - ${result.message}`
        }
    } catch (error) {
        console.error(error)
    }
}