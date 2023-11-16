// Get the drop zone element
const dropZone = document.getElementById("dropZone");
const removeButton = document.getElementById("removeButton");
const uploadedImage = document.getElementById("uploadedImage");

// Prevent the default behavior of the drop event
dropZone.addEventListener("dragover", (e) => {
  e.preventDefault();
  dropZone.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
});

// Restore the drop zone's background color
dropZone.addEventListener("dragleave", () => {
  dropZone.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
});

// Handle the drop event
dropZone.addEventListener("drop", (e) => {
  e.preventDefault();
  dropZone.style.backgroundColor = "rgba(255, 255, 255, 0.7)";

  // Get the dropped file
  const file = e.dataTransfer.files[0];

  // Create an image element to display the dropped image
  const img = document.createElement("img");
  img.src = URL.createObjectURL(file);
  img.id = "uploadedImage";

  // Clear the drop zone and display the image
  dropZone.innerHTML = "";
  dropZone.appendChild(img);
  removeButton.style.display = "block";
});

// Handle the remove button click event
removeButton.addEventListener("click", () => {
  uploadedImage.style.display = "none";
  removeButton.style.display = "none";
  dropZone.innerHTML = "<span>Drag & Drop an Image Here</span>";
});
