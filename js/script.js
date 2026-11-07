// NASA APOD API endpoint (no API key required!)
// This endpoint provides real astronomy images with HD quality
const API_BASE_URL = 'https://science.nasa.gov/wp-json/wp/v2/apod-basic';
const API_KEY = null; // Not needed for this endpoint

// Find our HTML elements on the page
const startInput = document.getElementById('startDate');
const endInput = document.getElementById('endDate');
const button = document.querySelector('button');
const gallery = document.getElementById('gallery');
const imageModal = document.getElementById('imageModal');
const modalClose = document.querySelector('.modal-close');
const modalOverlay = document.querySelector('.modal-overlay');
const loadingIndicator = document.getElementById('loadingIndicator');
const spaceFactElement = document.getElementById('spaceFact');

// Array of fun space facts
const spaceFacts = [
  '🌍 Earth is the only planet in our solar system with liquid water on its surface.',
  '⭐ The Sun is so large that 1.3 million Earths could fit inside it!',
  '🌙 The Moon is slowly moving away from Earth at about 1.6 inches per year.',
  '🪐 Jupiter has 95 known moons, more than any other planet in our solar system.',
  '💫 A day on Venus is longer than a year on Venus.',
  '🔴 Mars is called the "Red Planet" because of iron oxide (rust) on its surface.',
  '🌌 There are more stars in the universe than grains of sand on Earth.',
  '🛰️ The first satellite sent to space was Sputnik 1, launched by the Soviet Union in 1957.',
  '👨‍🚀 The International Space Station orbits Earth every 90 minutes.',
  '❄️ Neptune has the fastest winds in the solar system, reaching 2,100 km/h.',
  '🌠 Light from distant stars can take millions of years to reach Earth.',
  '⚫ Black holes have gravity so strong that not even light can escape them.',
  '🪐 Saturn\'s rings are made of ice and rock particles.',
  '☄️ A meteorite that struck Earth 66 million years ago likely caused the extinction of dinosaurs.',
  '🌟 Our Sun converts 600 million tons of hydrogen into helium every second.',
  '🚀 The escape velocity from Earth is about 40,000 km/h.',
  '🔭 The Hubble Space Telescope has captured images from galaxies over 13 billion light-years away.',
  '🌈 Sunsets on Mars are blue due to the way dust particles scatter light.',
  '💧 Europa, one of Jupiter\'s moons, may have an ocean beneath its icy surface.',
  '⭐ Betelgeuse is a red supergiant star so large that if placed at the Sun\'s center, it would extend beyond Mars.',
  '🌐 The Andromeda Galaxy is the closest major galaxy to the Milky Way, about 2.5 million light-years away.',
  '🛸 UFO stands for "Unidentified Flying Object" - it doesn\'t necessarily mean aliens!',
  '🌪️ Great Red Spot on Jupiter is a storm larger than Earth that has been raging for over 400 years.',
  '✨ The Voyager 1 spacecraft is still sending data from interstellar space.',
  '🪐 Mercury is the smallest planet in our solar system and the closest to the Sun.'
];

// Function to display a random space fact
function displayRandomFact() {
  // Pick a random fact from the array
  const randomIndex = Math.floor(Math.random() * spaceFacts.length);
  const randomFact = spaceFacts[randomIndex];

  // Display the fact in the space fact element
  spaceFactElement.innerHTML = `<div class="fact-content"><strong>Did You Know?</strong> ${randomFact}</div>`;
}

// Call the setupDateInputs function from dateRange.js
// This sets up the date pickers to:
// - Default to a range of 9 days (from 9 days ago to today)
// - Restrict dates to NASA's image archive (starting from 1995)
setupDateInputs(startInput, endInput);

// Display a random space fact when the page loads
displayRandomFact();

// Listen for the form submission to fetch images
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  fetchSpaceImages();
});

// Close modal when close button is clicked
modalClose.addEventListener('click', closeModal);

// Close modal when clicking on the overlay
modalOverlay.addEventListener('click', closeModal);

// Close modal when pressing Escape key
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && imageModal.classList.contains('open')) {
    closeModal();
  }
});

// Function to fetch space images from NASA APOD API
async function fetchSpaceImages() {
  const startDate = startInput.value;
  const endDate = endInput.value;

  // Validate that both dates are selected
  if (!startDate || !endDate) {
    alert('Please select both a start and end date.');
    return;
  }

  // Show loading message in the gallery area
  gallery.innerHTML = '<div class="gallery-loading">🔄 Loading space photos…</div>';
  button.disabled = true;

  try {
    // Build the API URL - this endpoint doesn't support date filtering
    // so we request 20 items and filter client-side to get a range around the selected dates
    const url = `${API_BASE_URL}?per_page=20`;
    
    // Log the API call
    console.log('🚀 Fetching from NASA APOD API...');
    console.log('📅 Date range:', startDate, 'to', endDate);
    console.log('🔗 API URL:', url);

    // Fetch the data from NASA's API
    const response = await fetch(url);

    // Check if the response was successful
    if (!response.ok) {
      console.error('❌ API Error - Status:', response.status, response.statusText);
      throw new Error(`API Error: ${response.status} - ${response.statusText}`);
    }

    // Convert the response to JSON format
    let images = await response.json();

    // Filter images by date range (since this API doesn't support date filtering)
    const startDateObj = new Date(startDate);
    const endDateObj = new Date(endDate);
    
    images = images.filter(image => {
      const imageDate = new Date(image.date);
      return imageDate >= startDateObj && imageDate <= endDateObj;
    });

    // Log the images to console for debugging
    console.log('✅ Successfully fetched images from NASA API:', images);
    console.log(`📊 Total items in range: ${images.length}`);
    console.log(`🖼️  Image count: ${images.filter(i => i.media_type === 'image').length}`);
    console.log(`🎬 Video count: ${images.filter(i => i.media_type === 'video').length}`);

    // Display the images in the gallery
    displayGallery(images);
  } catch (error) {
    // Handle any errors that occurred
    console.error('❌ Error fetching images:', error);
    console.error('Error details:', error.message);
    gallery.innerHTML = `<div class="error">⚠️ Error loading images: ${error.message}</div>`;
  } finally {
    // Re-enable the button
    button.disabled = false;
  }
}

// Function to display the fetched images in the gallery
function displayGallery(images) {
  // Clear the gallery placeholder
  gallery.innerHTML = '';

  // Check if we got any images back
  if (images.length === 0) {
    gallery.innerHTML = '<div class="placeholder"><p>No images found for this date range.</p></div>';
    return;
  }

  // Separate images and videos
  const imageEntries = images.filter((item) => item.media_type === 'image');
  const videoEntries = images.filter((item) => item.media_type === 'video');

  // Display images in the gallery
  if (imageEntries.length === 0) {
    gallery.innerHTML = '<div class="placeholder"><p>No images found for this date range. (Only videos available)</p></div>';
  } else {
    // Loop through each image and create a card for it
    imageEntries.forEach((image) => {
      // Create a container for each image
      const imageCard = document.createElement('div');
      imageCard.className = 'image-card';
      imageCard.style.cursor = 'pointer'; // Show that card is clickable

      // Build the HTML for the image card
      imageCard.innerHTML = `
        <div class="image-wrapper">
          <img src="${image.hdurl}" alt="${image.title}" loading="lazy" />
        </div>
        <div class="image-info">
          <h3>${image.title}</h3>
          <p class="date">${new Date(image.date).toLocaleDateString()}</p>
          <p class="description">${image.explanation}</p>
        </div>
      `;

      // Add click handler to open modal with full image details
      imageCard.addEventListener('click', () => {
        openModal(image);
      });

      // Add the card to the gallery
      gallery.appendChild(imageCard);
    });
  }

  // Display videos section if there are any
  if (videoEntries.length > 0) {
    // Create videos section
    const videosSection = document.createElement('div');
    videosSection.className = 'videos-section';

    const videoTitle = document.createElement('h2');
    videoTitle.className = 'videos-title';
    videoTitle.textContent = `🎬 Videos (${videoEntries.length})`;
    videosSection.appendChild(videoTitle);

    const videosList = document.createElement('div');
    videosList.className = 'videos-list';

    // Create a card for each video with a link
    videoEntries.forEach((video) => {
      const videoCard = document.createElement('div');
      videoCard.className = 'video-card';

      videoCard.innerHTML = `
        <div class="video-placeholder">
          <div class="video-icon">🎬</div>
        </div>
        <div class="video-info">
          <h3>${video.title}</h3>
          <p class="date">${new Date(video.date).toLocaleDateString()}</p>
          <a href="${video.url}" target="_blank" rel="noopener noreferrer" class="video-link">
            Watch on NASA →
          </a>
          <p class="video-description">${video.explanation}</p>
        </div>
      `;

      videosList.appendChild(videoCard);
    });

    videosSection.appendChild(videosList);
    gallery.appendChild(videosSection);
  }
}

// Function to open the modal and display image details
function openModal(image) {
  // Set the modal content with image data
  // Use hdurl (high resolution) for modal, fallback to url if hdurl not available
  const imageUrl = image.hdurl || image.url;
  document.getElementById('modalImage').src = imageUrl;
  document.getElementById('modalImage').alt = image.title;
  document.getElementById('modalTitle').textContent = image.title;
  document.getElementById('modalDate').textContent = new Date(image.date).toLocaleDateString();
  document.getElementById('modalExplanation').textContent = image.explanation;

  // Show the modal by adding the 'open' class
  imageModal.classList.add('open');

  // Prevent body scroll when modal is open
  document.body.style.overflow = 'hidden';
}

// Function to close the modal
function closeModal() {
  // Hide the modal by removing the 'open' class
  imageModal.classList.remove('open');

  // Re-enable body scroll
  document.body.style.overflow = 'auto';
}
