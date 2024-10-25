// Array of additional items for the gallery
const additionalItems = [
    "Item 4", "Item 5", "Item 6", "Item 7", "Item 8", "Item 9", "Item 10", 
    "Item 11", "Item 12", "Item 13", "Item 14", "Item 15"
];

// Function to add more items to the gallery
function loadMoreItems() {
    const galleryGrid = document.getElementById('gallery-grid');
    
    // Add each item to the gallery grid
    additionalItems.forEach(itemText => {
        const newItem = document.createElement('div');
        newItem.className = 'gallery-item';
        newItem.textContent = itemText;
        galleryGrid.appendChild(newItem);
    });
    
    // Optionally disable the button after loading more items
    const loadMoreButton = document.getElementById('load-more');
    loadMoreButton.disabled = true;
    loadMoreButton.textContent = "No More Items";
}
