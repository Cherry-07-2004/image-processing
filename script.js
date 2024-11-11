// Handles image upload
document.getElementById('imageInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
  
    reader.onload = function(e) {
      const imageElement = document.getElementById('uploadedImage');
      imageElement.src = e.target.result;  // Set image source to the uploaded file
      document.getElementById('grayscaleButton').disabled = false;  // Enable grayscale button
      document.getElementById('resetButton').disabled = false;  // Enable reset button
    }
  
    if (file) {
      reader.readAsDataURL(file);  // Read the image as a data URL
    }
  });
  
  // Apply grayscale filter to the image
  document.getElementById('grayscaleButton').addEventListener('click', function() {
    const imageElement = document.getElementById('uploadedImage');
    imageElement.style.filter = 'grayscale(100%)';  // Apply grayscale effect
  });
  
  // Reset the image to its original state (remove filters)
  document.getElementById('resetButton').addEventListener('click', function() {
    const imageElement = document.getElementById('uploadedImage');
    imageElement.style.filter = 'none';  // Remove any applied filters
  
    // Optionally reset the image entirely (remove it)
    imageElement.src = '';  // Remove the source of the image
    document.getElementById('imageInput').value = '';  // Clear the file input
    
    // Disable the buttons until a new image is uploaded
    document.getElementById('grayscaleButton').disabled = true;
    document.getElementById('resetButton').disabled = true;
  });
  