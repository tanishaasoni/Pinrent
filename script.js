// Handle Upload Form
document.getElementById('uploadForm').addEventListener('submit', function(event) {
  event.preventDefault();
  let clothes = document.getElementById('clothes').files;
  if (clothes.length > 0) {
      alert('Clothes uploaded successfully!');
  } else {
      alert('Please select some clothes to upload.');
  }
});

// Handle Rent Form
document.getElementById('rentForm').addEventListener('submit', function(event) {
  event.preventDefault();
  let clothingItem = document.getElementById('clothing-item').value;
  let price = document.getElementById('price').value;
  if (clothingItem && price) {
      alert(`Your ${clothingItem} has been listed for rent at ${price} per day.`);
  } else {
      alert('Please fill in all fields.');
  }
});
