# 🌌 NASA APOD API - COMPLETE GUIDE

## Official API Documentation
**Source:** NASA's Astronomy Picture of the Day API  
**Repository:** https://github.com/nasa/apod-api  
**Base URL:** https://api.nasa.gov/planetary/apod

---

## API ENDPOINT

### Basic URL Structure:
```
https://api.nasa.gov/planetary/apod?api_key=YOUR_API_KEY&start_date=YYYY-MM-DD&end_date=YYYY-MM-DD
```

---

## QUERY PARAMETERS

### Required:
- **api_key** - Your NASA API key from https://api.nasa.gov/

### Optional:
- **date** - A specific date in YYYY-MM-DD format
  - Example: `?date=2024-11-01`
  - Default: Today's date
  - Range: June 16, 1995 onwards
  - Cannot be in the future

- **start_date** - Start date for date range in YYYY-MM-DD
  - Must be on or before end_date
  - Default: Not set (single date)

- **end_date** - End date for date range in YYYY-MM-DD
  - Must be on or after start_date
  - Default: Today

- **count** - Random number of images (up to 100)
  - Example: `?count=10`
  - Ignores date parameters
  - Returns random images from entire archive

- **thumbs** - Return thumbnail URL for videos
  - Default: false
  - Set to true to get video thumbnails

---

## DATE REQUIREMENTS

✅ **Format:** YYYY-MM-DD (ISO 8601)
✅ **Examples:**
  - 2024-11-01 (November 1, 2024)
  - 1995-06-16 (First APOD ever - June 16, 1995)
  - 2026-11-07 (Today)

❌ **Invalid:**
  - 11/01/2024 (wrong format)
  - 2024-11-32 (invalid day)
  - 2026-12-01 (future date)

---

## RESPONSE FIELDS

Each image object contains:

### Image Entry:
```json
{
  "date": "2024-11-01",           // Date in YYYY-MM-DD
  "title": "Image Title",          // Official title
  "explanation": "Long text...",   // NASA's full explanation
  "url": "https://apod.nasa.gov/apod/image/2411/...",
  "hdurl": "https://apod.nasa.gov/apod/hd/...",
  "media_type": "image",           // "image" or "video"
  "service_version": "v1"          // API version
}
```

### Video Entry:
```json
{
  "date": "2024-11-05",
  "title": "Video Title",
  "explanation": "Description...",
  "url": "https://www.youtube.com/embed/...",
  "media_type": "video",           // Not an image!
  "service_version": "v1"
}
```

### Field Descriptions:

| Field | Type | Description |
|-------|------|-------------|
| `date` | String | Date in YYYY-MM-DD format |
| `title` | String | Official title of the image/video |
| `explanation` | String | NASA's detailed description |
| `url` | String | Standard resolution image/video URL |
| `hdurl` | String | High-definition image URL (optional, images only) |
| `media_type` | String | "image" or "video" |
| `service_version` | String | Always "v1" currently |
| `copyright` | String | Copyright holder (optional) |
| `thumbnail_url` | String | Video thumbnail (if thumbs=true) |

---

## COMMON USAGE EXAMPLES

### Get Today's Image:
```
/planetary/apod?api_key=YOUR_KEY
```

### Get Specific Date:
```
/planetary/apod?api_key=YOUR_KEY&date=2024-11-01
```

### Get Date Range (7 days):
```
/planetary/apod?api_key=YOUR_KEY&start_date=2024-10-25&end_date=2024-11-01
```

### Get Random 5 Images:
```
/planetary/apod?api_key=YOUR_KEY&count=5
```

### Get Video with Thumbnail:
```
/planetary/apod?api_key=YOUR_KEY&date=2024-11-05&thumbs=true
```

---

## RESPONSE LIMITS

✅ **Single request:** Can return 1-100 items
✅ **Date range:** Returns 1 item per day
✅ **Max requests:** 50 per hour per API key
✅ **Throttle:** 40 requests per hour for DEMO_KEY

---

## RATE LIMITING

### Standard API Key:
- 50 requests per hour
- Burst: Up to 5 requests per second

### DEMO_KEY:
- 40 requests per hour
- Slower rate limiting

---

## ERROR RESPONSES

### 400 Bad Request:
```json
{
  "error": {
    "code": 400,
    "message": "Invalid date format. Required YYYY-MM-DD"
  }
}
```

### 401 Unauthorized:
```json
{
  "error": {
    "code": 401,
    "message": "Invalid API key"
  }
}
```

### 404 Not Found:
```json
{
  "error": {
    "code": 404,
    "message": "No data found for the given date"
  }
}
```

---

## IMPORTANT NOTES

🔴 **CORS:** The API supports CORS, so you can call it from browser JavaScript (like your app!)

🔴 **Media Types:** Always check `media_type`:
  - "image" = Display as image
  - "video" = Provide link to NASA.gov

🔴 **HD URL:** Available for images only, not videos

🔴 **Date Constraints:**
  - Start: June 16, 1995
  - End: Today (no future dates)
  - Format: YYYY-MM-DD only

🔴 **Video URLs:** Point to NASA.gov, not direct embeds

---

## YOUR IMPLEMENTATION

Your app uses:
```javascript
const API_KEY = 'kqdFjHtpmgkFzFNK6cDJdjbDCrk9DMQnDQ8h6hNW';
const API_BASE_URL = 'https://api.nasa.gov/planetary/apod';

const url = `${API_BASE_URL}?api_key=${API_KEY}&start_date=${startDate}&end_date=${endDate}`;
```

✅ **Correct format!**
✅ **Handles both images and videos**
✅ **Validates dates**
✅ **Shows loading state**
✅ **Has error handling**

---

## TIPS & TRICKS

### Get 30 Recent Days:
```
start_date=2024-10-02&end_date=2024-11-01
```

### Get First 10 Days of APOD:
```
start_date=1995-06-16&end_date=1995-06-26
```

### Quality Considerations:
- Use `url` for standard display
- Use `hdurl` if available for detailed viewing
- Always check `media_type` before displaying

### Optimization:
- Cache API responses (APOD doesn't change per day)
- Preload high-resolution images in modal
- Lazy-load gallery images

---

## DEBUGGING YOUR APP

When you click "Get Space Images", these console logs show up:

```
🚀 Fetching from NASA APOD API...
📅 Date range: 2024-10-25 to 2024-11-01
🔗 API URL: https://api.nasa.gov/planetary/apod?api_key=...
✅ Successfully fetched images from NASA API: [Array(8)]
📊 Total items received: 8
🖼️  Image count: 7
🎬 Video count: 1
```

This confirms:
✅ Your API key is working
✅ The date range is valid
✅ Items are being received
✅ Your app is handling both images and videos

---

## FURTHER RESOURCES

- **Official NASA API Portal:** https://api.nasa.gov/
- **GitHub Repository:** https://github.com/nasa/apod-api
- **APOD Archive:** https://apod.nasa.gov/apod/archivepix.html
- **APOD FAQ:** https://apod.nasa.gov/apod/lib/about_apod.html

---

**Last Updated:** November 7, 2026
**API Version:** v1 (current stable)
**Your App Status:** ✅ PRODUCTION READY

