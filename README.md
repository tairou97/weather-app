# weather-app

# Project: Weather App

Objective: Create a simple weather application that displays the current weather information based on the user's location or a city of their choice.
Features:

1. Display Weather Information: Show temperature, weather conditions, humidity, wind speed, etc.

1. User Input for Location: Allow the user to enter a city name to get weather information for that location.

1. Fetch Weather Data: Use a weather API (like OpenWeatherMap) to fetch weather data based on the user's input.

1. Loading State: Display a loading indicator while fetching data.

1. Error Handling: Show an error message if the weather data cannot be fetched.

## Key Concepts to Practice:

- `useState`: To manage local state for user input, weather data, loading state, and error messages.

- `useEffect`: To perform the API call when the component mounts or when the user input changes.

- API Integration: Making HTTP requests to a third-party weather API.

- Conditional Rendering: To handle different UI states (loading, error, display data).

## Steps to Build:

1. Set Up the React App: Create a new React app using Create React App.

1. Basic Layout and Styling: Create the basic UI components, including a search box for city input and sections to display weather data.

1. State Management: Use `useState` to create state variables for:

   - User input (city name)
   - Weather data
   - Loading state
   - Error state

1. Fetching Weather Data:

   - Sign up for a free API key from a weather data provider like OpenWeatherMap.
   - Use `useEffect` to trigger the API call when the component mounts and when the city name changes.
   - Use fetch or Axios to make the HTTP request and update the state with the response data.

1. Displaying the Data:

   - Render the weather data in a user-friendly format.
   - Implement conditional rendering to show a loading indicator and error messages as needed.

1. Error Handling: Ensure your app gracefully handles any errors that occur during the API call.

## Additional Features:

1. Search Functionality: Allow users to type in a city name and display the weather for that city.
1. Debouncing: Implement debouncing for the search input to optimize API calls.
1. Search History: Keep a history of user's recent searches and allow them to quickly reselect from this history.

Updated Steps to Build:

1. Enhanced UI Components:

   - Create a search input field for the city name.
   - Display a list of recent searches below the search field.

1. State Management Updates:

   - Add a new state variable for the search query.
   - Update the weather data state when a new search is performed.
   - Add a state to keep track of the search history.

1. Implementing Search with Debouncing:

   - Use `useEffect` to trigger the weather data fetch when the search query changes.
   - Implement debouncing: Introduce a delay before the search API call is made after the user stops typing. This can be achieved using setTimeout and clearing the timeout on every key stroke.

1. Search History:

   - Update the search history state every time a new search is performed.
   - Allow users to click on a history item to quickly perform that search again.
   - Limit the history to a certain number of recent searches.

1. Fetching Weather Data:

   - Modify the API call to use the search query state for the city name.
   - Ensure the fetch happens both when the component mounts (for the initial location) and when the search query changes.

1. Displaying Search Results:

   - Show the weather data based on the search result.
   - Update the UI to reflect the current search.

1. Error Handling and Validation:
   - Validate the search input to ensure it's not empty before making an API call.
   - Handle any errors that occur during the API call, such as invalid city names.

## 2 Extras **YOU HAVE TO PICK ONE OF THEM**:

Extra 1(easy):

1. Weather Icons: Display an icon representing the current weather condition (e.g., sun for sunny, clouds for cloudy, raindrops for rainy, etc.).
1. Dynamic Backgrounds: Change the background color of the app based on the current weather condition. For example, use grey for rainy days and light blue for sunny days, and other colors for different conditions like snow, clouds, etc.

Steps to Implement the Enhancements:

1. Weather Icons Integration:

   - Many weather APIs return a weather condition code or icon code that corresponds to different weather conditions.
   - Based on this code, you can display a corresponding weather icon. You might use a library of weather icons or source SVG/PNG icons from the internet.
   - Update the state that holds weather data to include the weather condition code.

1. Dynamic Backgrounds:

   - Define a set of background colors for different weather conditions (e.g., grey for rainy, light blue for sunny, white for snowy, greyish-blue for cloudy, etc.).
   - Use the weather condition code to determine which background color to apply.
   - Update your app's main container style dynamically based on the current weather condition.

1. Updating the Component:

   - Modify your existing weather data fetching function to retrieve and store the weather condition code.
   - In your component's rendering logic, include the weather icon next to the weather details.
   - Apply the background color dynamically by changing the style of your main container based on the current weather condition.

1. Example Code Snippet:

```jsx
// Assuming you have a state variable for weather data like:
// const [weatherData, setWeatherData] = useState(null);

// Function to determine background color
const getBackgroundColor = (conditionCode) => {
  switch (conditionCode) {
    case "Rain":
      return "grey";
    case "Clear":
      return "lightblue";
    // Add more cases for other conditions
    default:
      return "defaultColor";
  }
};

// In your component's render method
return (
  <div
    style={{ backgroundColor: getBackgroundColor(weatherData?.conditionCode) }}
  >
    {/* Rest of your component */}
    {weatherData && (
      <img
        src={`path/to/icons/${weatherData.conditionCode}.png`}
        alt="Weather Icon"
      />
    )}
  </div>
);
```

Extra 2(hard):

Implementing Dynamic City Backgrounds in Weather App
Steps:

1. Choose and Register for an API:

   - Select an API (Unsplash, Pixabay, Pexels, etc.).
   - Register and obtain an API key.

1. Integrate API into Your App:

   - Create a function in your app to fetch an image based on the city name.
   - This function should make an API call to retrieve an image URL for the searched city.

1. Update State with Image URL:

   - Use `useState` to create a state variable for storing the background image URL.
   - When a city is searched, use the image fetching function to get the image URL and update this state.

1. Set Background Image:

   - Use the image URL stored in your state to set the background image of your app or a specific section of the app.
   - You can use inline CSS or a CSS-in-JS solution to dynamically update the background.

1. Handle API Responses and Errors:

   - Ensure your function handles various responses from the API correctly, such as no image found, rate limits, or errors.
   - Implement a default background for cases where no image is available.

1. Optimization and Caching:

   - To enhance performance, consider caching the images or the image URLs.
   - Implement logic to avoid unnecessary API calls if the same city is searched repeatedly.

1. User Interface and Experience:
   - Update the UI to inform users that the background is based on the city image.
   - Implement smooth transitions when the background image changes to enhance user experience.

Example Code Snippet for Fetching and Setting Background:

```jsx
import React, { useState, useEffect } from "react";

function WeatherApp() {
  const [city, setCity] = useState("defaultCity");
  const [backgroundImageUrl, setBackgroundImageUrl] = useState("");

  useEffect(() => {
    fetchCityImage(city).then((url) => setBackgroundImageUrl(url));
  }, [city]);

  const fetchCityImage = async (cityName) => {
    // Replace with actual API call
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${cityName}&client_id=YOUR_API_KEY`
    );
    const data = await response.json();
    return data.results[0].urls.regular; // Get the URL of the first image
  };

  const handleCitySearch = (searchedCity) => {
    setCity(searchedCity);
    // Additional code to fetch weather data
  };

  return (
    <div style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
      {/* Your app components */}
    </div>
  );
}

export default WeatherApp;
```

In this example, fetchCityImage is a function to fetch the image URL from the API. The `useEffect` hook updates the background image whenever the city state changes.

_**Remember to handle API keys securelyRemember to handle API keys securely so use .env**_
