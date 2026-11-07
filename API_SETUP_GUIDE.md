# NASA APOD API Setup Guide

## Overview
Your Space Explorer app is now configured to fetch Astronomy Picture of the Day (APOD) images from NASA's API using a date range selector.

## How It Works

### 1. Date Range Selection
- Users select a start date and end date using the date input fields
- Default range: Last 9 days from today
- Valid dates: June 16, 1995 to present (NASA's APOD archive dates)

### 2. API Request
When "Get Space Images" is clicked, the app:
- Builds an API URL with the selected date range
- Sends a request to: `https://api.nasa.gov/planetary/apod`
- Passes parameters: `api_key`, `start_date`, `end_date`

### 3. Response Processing
The API returns an array of objects, one per day, with:
- `title`: Image title
- `date`: Date in YYYY-MM-DD format
- `url`: Link to the image or video
- `explanation`: Description of the image
- `media_type`: Either "image" or "video"

### 4. Display
Images are displayed in a responsive grid:
- 1 column on mobile
- 3 columns on larger screens
- Each card shows the image, title, date, and explanation
- Supports both images and embedded videos

## Setup Steps

### Step 1: Get Your API Key
1. Visit [NASA's Open API Portal](https://api.nasa.gov/)
2. Fill out the registration form
3. You'll receive an API key via email
4. Keep your key safe—don't share it publicly

### Step 2: Update Your Code
Open `js/script.js` and replace:
```javascript
const API_KEY = 'DEMO_KEY'; // Replace with your actual API key
```

With your actual API key:
```javascript
const API_KEY = 'your_actual_api_key_here';
```

### Step 3: Test It Out
1. Open `index.html` in your browser
2. Select a date range (default is the last 9 days)
3. Click "Get Space Images"
4. Watch the gallery populate with space photos!

## Code Breakdown

### `fetchSpaceImages()` Function
- Validates both dates are selected
- Shows a loading message
- Constructs the API URL with date range
- Fetches data using `fetch()`
- Handles errors gracefully

### `displayGallery()` Function
- Loops through each image in the response
- Creates an image card for each one
- Supports both static images and embedded videos
- Uses lazy loading for performance

## Styling Features

- **Hover Effects**: Cards lift up when you hover over them
- **Responsive Design**: Automatically adjusts for different screen sizes
- **Loading State**: Shows a message while fetching data
- **Error Handling**: Displays user-friendly error messages

## Tips

- Keep your API key private—don't commit it to public repositories
- The API has rate limits; avoid making too many requests at once
- Some dates may not have APOD entries (rare holidays)
- Some APOD entries are videos instead of images—the app handles both

## Troubleshooting

**"Error: 403 Forbidden"**
- Check your API key is correct and not expired

**"No images found"**
- Try a different date range
- Some dates may not have APOD data

**Images not loading**
- Check your internet connection
- Try a single day instead of a large range
- Check browser console for error messages (F12 → Console)

## Resources

- [NASA APOD API Documentation](https://github.com/nasa/apod-api)
- [Fetch API Reference](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [JavaScript async/await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises)
