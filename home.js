document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the default way
console.log("hi");
    // Get the values from the form
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const travelDate = document.getElementById('travelDate').value;

    // Validate form input
    if (!from || !to || !travelDate) {
        alert('Please fill in all fields.');
        return;
    }

    // Store form data in local storage
    localStorage.setItem('searchData', JSON.stringify({ from, to, travelDate }));

    // Redirect to the new page
    window.location.href = 'buses.html';
});

// Array of district names
const districts = [
    "Ampara", "Anuradhapura", "Badulla", "Batticaloa", "Colombo",
    "Galle", "Gampaha", "Hambantota", "Jaffna", "Kalutara",
    "Kandy", "Kegalle", "Kilinochchi", "Kurunegala", "Mannar",
    "Matale", "Matara", "Monaragala", "Mullaitivu", "Nuwara Eliya",
    "Polonnaruwa", "Puttalam", "Ratnapura", "Trincomalee", "Vavuniya"
];

// Function to populate the district dropdown
function populateDistricts() {
    const districtSelectTo = document.getElementById('to');
    const districtSelectFrom = document.getElementById('from');
    
    // Clear existing options (if any)
    districtSelectTo.innerHTML = '<option value="">Select Destination</option>';
    districtSelectFrom.innerHTML = '<option value="">Select From</option>';

    // Loop through the array and create an option for each district
    districts.forEach(district => {
        const optionTo = document.createElement('option');
        optionTo.value = district;
        optionTo.textContent = district;
        districtSelectTo.appendChild(optionTo);
        
        const optionFrom = document.createElement('option');
        optionFrom.value = district;
        optionFrom.textContent = district;
        districtSelectFrom.appendChild(optionFrom);
    });
}

// Call the function to populate the dropdown on page load
window.onload = populateDistricts;

