# 🚀 NASA APOD API - Cheat Sheet

**Quick reference for the NASA Astronomy Picture of the Day API**

---

## 📍 The Endpoint

```
https://api.nasa.gov/planetary/apod
```

---

## 🔑 Required Parameter

```
api_key=YOUR_API_KEY
```

---

## 📅 Date Parameters (Optional)

| Parameter | Format | Example | Use |
|-----------|--------|---------|-----|
| `date` | YYYY-MM-DD | `2024-11-01` | Single specific day |
| `start_date` | YYYY-MM-DD | `2024-10-25` | Start of date range |
| `end_date` | YYYY-MM-DD | `2024-11-01` | End of date range |

**Note:** Use date range for multiple images, single date for one image.

---

## 🎲 Optional Parameters

| Parameter | Values | Use |
|-----------|--------|-----|
| `count` | 1-100 | Get N random images (ignores date params) |
| `thumbs` | true/false | Include video thumbnails |

---

## 📝 Complete Request Examples

**Single Day:**
```
https://api.nasa.gov/planetary/apod?api_key=YOUR_KEY&date=2024-11-01
```

**Date Range (8 days = 8 images):**
```
https://api.nasa.gov/planetary/apod?api_key=YOUR_KEY&start_date=2024-10-25&end_date=2024-11-01
```

**Random 10 Images:**
```
https://api.nasa.gov/planetary/apod?api_key=YOUR_KEY&count=10
```

---

## 💾 Response Structure

### For Each Day, You Get:

```json
{
  "date": "2024-11-01",
  "title": "Image Title Here",
  "explanation": "Long description of the image...",
  "url": "https://apod.nasa.gov/apod/image/...",
  "hdurl": "https://apod.nasa.gov/apod/hd/...",
  "media_type": "image",
  "copyright": "Photographer Name"
}
```

### Field Descriptions:

| Field | Content | Used For |
|-------|---------|----------|
| `date` | YYYY-MM-DD | Display in gallery |
| `title` | String | Show as image title |
| `explanation` | String (long) | Display in modal |
| `url` | Image URL | Gallery thumbnail |
| `hdurl` | HD Image URL | Modal full-size |
| `media_type` | "image" or "video" | Determine display type |
| `copyright` | String | Credit photographer |

---

## 🎬 Videos vs Images

```javascript
// Check if it's a video or image
if (response.media_type === "image") {
  // Display as image
  img.src = response.hdurl;  // HD version for modal
}

if (response.media_type === "video") {
  // It's a video - handle differently
  // Usually points to NASA page or YouTube
}
```

---

## 🔒 Rate Limits

| Limit | Value |
|-------|-------|
| Per Hour | 50 requests |
| Per Second | 5 requests |
| Your App Usage | ~1 per click |

**Translation:** You can make ~1000 clicks per hour before hitting limits!

---

## ⚠️ Date Constraints

- **Earliest:** June 16, 1995
- **Latest:** Today (no future dates)
- **Format:** YYYY-MM-DD (ISO 8601)
- **Range:** Up to 100 days per request

---

## ❌ Common Errors

| Code | Meaning | Solution |
|------|---------|----------|
| 400 | Bad Request | Check date format (YYYY-MM-DD) |
| 401 | Unauthorized | Verify API key is correct |
| 404 | Not Found | Date is in future (not allowed) |
| 500 | Server Error | NASA server issue - try again |

---

## 📊 How Your App Uses It

```javascript
// 1. User selects dates and clicks button
// 2. Your app builds the URL:
const url = `https://api.nasa.gov/planetary/apod
?api_key=${API_KEY}
&start_date=${startDate}
&end_date=${endDate}`;

// 3. Your app fetches the data:
const response = await fetch(url);
const data = await response.json();  // Array of objects

// 4. Your app processes each object:
data.forEach(item => {
  // Create gallery card
  // Store HD URL for modal
  // Add click handler
});

// 5. User clicks image
// 6. Modal opens with HD image + explanation
```

---

## 🛠️ JavaScript Code Snippet

```javascript
async function getSpaceImages(startDate, endDate) {
  const API_KEY = 'YOUR_KEY';
  const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&start_date=${startDate}&end_date=${endDate}`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`API Error: ${response.status}`);
    
    const data = await response.json();
    return data;  // Array of image objects
  } catch (error) {
    console.error('Failed to fetch images:', error);
    return [];
  }
}
```

---

## 📱 What Each Date Gets You

- **1 day range:** 1 image
- **7 day range:** 7 images (1 per day)
- **30 day range:** 30 images (1 per day)
- **100 day range:** 100 images (max limit)

---

## 🎨 Data You Display

**In Gallery Card:**
```
┌─────────────────────────┐
│   [Image Thumbnail]     │  ← Use "url" field
│                         │
│  Image Title Here       │  ← Use "title" field
│  2024-11-01             │  ← Use "date" field
└─────────────────────────┘
```

**In Modal:**
```
┌─────────────────────────────┐
│   [Large HD Image]          │  ← Use "hdurl" field
│                             │
│  Full Image Title           │  ← Use "title" field
│  Date: 2024-11-01           │  ← Use "date" field
│                             │
│  Full Explanation Here...   │  ← Use "explanation" field
│  Lorem ipsum dolor sit amet │
│  consectetur adipiscing...  │
└─────────────────────────────┘
```

---

## 🌐 External Links

- **NASA API Dashboard:** https://api.nasa.gov/
- **APOD API Details:** https://github.com/nasa/apod-api
- **APOD Archive:** https://apod.nasa.gov/apod/archivepix.html

---

## 📚 For More Details

See these documentation files:

- **APOD_API_GUIDE.md** - Complete reference
- **API_INTEGRATION_DIAGRAM.md** - Visual flow
- **API_KEY_SETUP.md** - Getting your key
- **API_DOCUMENTATION_INDEX.md** - Navigation hub

---

## ✅ Checklist

Before you start:
- [ ] Have your NASA API key
- [ ] Verified API key works
- [ ] Date format is YYYY-MM-DD
- [ ] Not requesting future dates
- [ ] Tested with console.log()

Before deploying:
- [ ] Error handling in place
- [ ] Loading message shown
- [ ] Videos handled properly
- [ ] Images display correctly
- [ ] Modal opens on click
- [ ] Rate limits understood

---

## 🎯 Quick Troubleshooting

**Images not showing?**
- Check API key is correct
- Verify date format (YYYY-MM-DD)
- Check browser console for errors
- Ensure start_date is before end_date

**Empty response?**
- Date might be in future (not allowed)
- Try a different date range
- Check your API key

**Getting 401 error?**
- API key is wrong or expired
- Get a new key at https://api.nasa.gov/

**Getting 400 error?**
- Date format is wrong
- Use YYYY-MM-DD format only
- No quotes around dates

---

**Last Updated:** November 7, 2024  
**Status:** ✅ Production Ready  
**Created For:** Beginner JavaScript Students

**Print this page or bookmark it!** 📌

---

See **APOD_API_GUIDE.md** for complete reference documentation.
