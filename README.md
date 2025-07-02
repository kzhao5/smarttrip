# SmartTrip Project

Created by: Kaixiang Zhao, Zanxiang Yin

## About The Project

This is a simple website to help you plan a trip. You can enter your destination, dates, and budget. Then, you can pick from a list of cool places to visit and see your final plan.

This project uses HTML, CSS, and JavaScript. It does not use a backend server. All data is saved in the browser's `localStorage`.

## How to Use

1.  Open the `index.html` file in your browser.
2.  Fill out the form with your trip details (destination, dates, budget) and click "Start Planning".
3.  You will go to the recommendations page. Here you can see a list of places.
4.  Click the "Add to Itinerary" button for any place you want to add.
5.  Click the "View My Itinerary" link at the bottom to see your final trip plan.

## File Structure

Here is a quick look at the important files and folders.

-   `index.html`: The home page where you start.
-   `recommendation.html`: The page that shows you places to add to your trip.
-   `itinerary.html`: The final page that shows your full itinerary.

-   `/css`: This folder has all the CSS files for styling.
    -   `home.css`, `recommendation.css`, `itinerary.css`

-   `/js`: This folder has all our JavaScript files.
    -   `home.js`: Code for the form on the home page. It saves your trip info.
    -   `recommendation.js`: Loads places from `places.json` and handles adding them to your trip.
    -   `itinerary.js`: Shows the final trip plan using the info you saved.

-   `/data`:
    -   `places.json`: A JSON file that holds all the information for the recommended places.

-   `/assets`: Contains all the images for the places.
