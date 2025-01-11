document.addEventListener('DOMContentLoaded', function() {
    // Retrieve form data from local storage
    const searchData = JSON.parse(localStorage.getItem('searchData'));

    if (searchData) {
        const { from, to, travelDate } = searchData;

        // Example data - replace this with your actual data source
        const availableBuses = [
            { id: 1, from: 'Colombo', to: 'Jaffna', date: '2024-08-15', image: 'bus129_89.jpeg', price: 1500 },
            { id: 2, from: 'Kandy', to: 'Colombo', date: '2024-08-16', image: 'bus129_89.jpeg', price: 600 },
            { id: 3, from: 'Galle', to: 'Colombo', date: '2024-08-17', image: 'bus129_89.jpeg', price: 500 },
            { id: 4, from: 'Colombo', to: 'Kandy', date: '2024-08-18', image: 'bus129_89.jpeg', price: 700 },
            { id: 5, from: 'Jaffna', to: 'Colombo', date: '2024-08-19', image: 'bus129_89.jpeg', price: 1600 },
            { id: 6, from: 'Colombo', to: 'Matara', date: '2024-08-20', image: 'bus129_89.jpeg', price: 800 },
            { id: 7, from: 'Anuradhapura', to: 'Colombo', date: '2024-08-21', image: 'bus129_89.jpeg', price: 1000 },
            { id: 8, from: 'Colombo', to: 'Batticaloa', date: '2024-08-22', image: 'bus129_89.jpeg', price: 900 },
            { id: 9, from: 'Badulla', to: 'Colombo', date: '2024-08-23', image: 'bus129_89.jpeg', price: 1100 },
            { id: 10, from: 'Colombo', to: 'Kilinochchi', date: '2024-08-24', image: 'bus129_89.jpeg', price: 1200 },
            { id: 11, from: 'Colombo', to: 'Jaffna', date: '2024-08-25', image: 'bus129_89.jpeg', price: 1300 },
            { id: 12, from: 'Kandy', to: 'Colombo', date: '2024-08-26', image: 'bus129_89.jpeg', price: 650 },
            { id: 13, from: 'Galle', to: 'Colombo', date: '2024-08-27', image: 'bus129_89.jpeg', price: 520 },
            { id: 14, from: 'Colombo', to: 'Kandy', date: '2024-08-28', image: 'bus129_89.jpeg', price: 710 },
            { id: 15, from: 'Jaffna', to: 'Colombo', date: '2024-08-29', image: 'bus129_89.jpeg', price: 1650 },
            { id: 16, from: 'Colombo', to: 'Matara', date: '2024-08-30', image: 'bus129_89.jpeg', price: 820 },
            { id: 17, from: 'Anuradhapura', to: 'Colombo', date: '2024-08-31', image: 'bus129_89.jpeg', price: 1020 },
            { id: 18, from: 'Colombo', to: 'Batticaloa', date: '2024-09-01', image: 'bus129_89.jpeg', price: 920 },
            { id: 19, from: 'Badulla', to: 'Colombo', date: '2024-09-02', image: 'bus129_89.jpeg', price: 1150 },
            { id: 20, from: 'Colombo', to: 'Kilinochchi', date: '2024-09-03', image: 'bus129_89.jpeg', price: 1250 },
            { id: 21, from: 'Colombo', to: 'Jaffna', date: '2024-09-04', image: 'bus129_89.jpeg', price: 1400 },
            { id: 22, from: 'Kandy', to: 'Colombo', date: '2024-09-05', image: 'bus129_89.jpeg', price: 670 },
            { id: 23, from: 'Galle', to: 'Colombo', date: '2024-09-06', image: 'bus129_89.jpeg', price: 540 },
            { id: 24, from: 'Colombo', to: 'Kandy', date: '2024-09-07', image: 'bus129_89.jpeg', price: 720 },
            { id: 25, from: 'Jaffna', to: 'Colombo', date: '2024-09-08', image: 'bus129_89.jpeg', price: 1700 },
            { id: 26, from: 'Colombo', to: 'Matara', date: '2024-09-09', image: 'bus129_89.jpeg', price: 830 },
            { id: 27, from: 'Anuradhapura', to: 'Colombo', date: '2024-09-10', image: 'bus129_89.jpeg', price: 1030 },
            { id: 28, from: 'Colombo', to: 'Batticaloa', date: '2024-09-11', image: 'bus129_89.jpeg', price: 930 },
            { id: 29, from: 'Badulla', to: 'Colombo', date: '2024-09-12', image: 'bus129_89.jpeg', price: 1160 },
            { id: 30, from: 'Colombo', to: 'Kilinochchi', date: '2024-09-13', image: 'bus129_89.jpeg', price: 1270 },
            { id: 31, from: 'Colombo', to: 'Jaffna', date: '2024-09-14', image: 'bus129_89.jpeg', price: 1450 },
            { id: 32, from: 'Kandy', to: 'Colombo', date: '2024-09-15', image: 'bus129_89.jpeg', price: 680 },
            { id: 33, from: 'Galle', to: 'Colombo', date: '2024-09-16', image: 'bus129_89.jpeg', price: 550 },
            { id: 34, from: 'Colombo', to: 'Kandy', date: '2024-09-17', image: 'bus129_89.jpeg', price: 730 },
            { id: 35, from: 'Jaffna', to: 'Colombo', date: '2024-09-18', image: 'bus129_89.jpeg', price: 1750 },
            { id: 36, from: 'Colombo', to: 'Matara', date: '2024-09-19', image: 'bus129_89.jpeg', price: 840 },
            { id: 37, from: 'Anuradhapura', to: 'Colombo', date: '2024-09-20', image: 'bus129_89.jpeg', price: 1040 },
            { id: 38, from: 'Colombo', to: 'Batticaloa', date: '2024-09-21', image: 'bus129_89.jpeg', price: 940 },
            { id: 39, from: 'Badulla', to: 'Colombo', date: '2024-09-22', image: 'bus129_89.jpeg', price: 1170 },
            { id: 40, from: 'Colombo', to: 'Kilinochchi', date: '2024-09-23', image: 'bus129_89.jpeg', price: 1280 },
            { id: 41, from: 'Colombo', to: 'Jaffna', date: '2024-09-24', image: 'bus129_89.jpeg', price: 1500 },
            { id: 42, from: 'Kandy', to: 'Colombo', date: '2024-09-25', image: 'bus129_89.jpeg', price: 690 },
            { id: 43, from: 'Galle', to: 'Colombo', date: '2024-09-26', image: 'bus129_89.jpeg', price: 560 },
            { id: 44, from: 'Colombo', to: 'Kandy', date: '2024-09-27', image: 'bus129_89.jpeg', price: 740 },
            { id: 45, from: 'Jaffna', to: 'Colombo', date: '2024-09-28', image: 'bus129_89.jpeg', price: 1800 },
            { id: 46, from: 'Colombo', to: 'Matara', date: '2024-09-29', image: 'bus129_89.jpeg', price: 850 },
            { id: 47, from: 'Anuradhapura', to: 'Colombo', date: '2024-09-30', image: 'bus129_89.jpeg', price: 1050 },
            { id: 48, from: 'Colombo', to: 'Batticaloa', date: '2024-10-01', image: 'bus129_89.jpeg', price: 950 },
            { id: 49, from: 'Badulla', to: 'Colombo', date: '2024-10-02', image: 'bus129_89.jpeg', price: 1180 },
            { id: 50, from: 'Colombo', to: 'Kilinochchi', date: '2024-10-03', image: 'bus129_89.jpeg', price: 1290 },
            { id: 51, from: 'Colombo', to: 'Jaffna', date: '2024-10-04', image: 'bus129_89.jpeg', price: 1550 },
            { id: 52, from: 'Kandy', to: 'Colombo', date: '2024-10-05', image: 'bus129_89.jpeg', price: 700 },
            { id: 53, from: 'Galle', to: 'Colombo', date: '2024-10-06', image: 'bus129_89.jpeg', price: 570 },
            { id: 54, from: 'Colombo', to: 'Kandy', date: '2024-10-07', image: 'bus129_89.jpeg', price: 750 },
            { id: 55, from: 'Jaffna', to: 'Colombo', date: '2024-10-08', image: 'bus129_89.jpeg', price: 1850 },
            { id: 56, from: 'Colombo', to: 'Matara', date: '2024-10-09', image: 'bus129_89.jpeg', price: 860 },
            { id: 57, from: 'Anuradhapura', to: 'Colombo', date: '2024-10-10', image: 'bus129_89.jpeg', price: 1060 },
            { id: 58, from: 'Colombo', to: 'Batticaloa', date: '2024-10-11', image: 'bus129_89.jpeg', price: 960 },
            { id: 59, from: 'Badulla', to: 'Colombo', date: '2024-10-12', image: 'bus129_89.jpeg', price: 1190 },
            { id: 60, from: 'Colombo', to: 'Kilinochchi', date: '2024-10-13', image: 'bus129_89.jpeg', price: 1300 },
            { id: 61, from: 'Colombo', to: 'Jaffna', date: '2024-10-14', image: 'bus129_89.jpeg', price: 1600 },
            { id: 62, from: 'Kandy', to: 'Colombo', date: '2024-10-15', image: 'bus129_89.jpeg', price: 710 },
            { id: 63, from: 'Galle', to: 'Colombo', date: '2024-10-16', image: 'bus129_89.jpeg', price: 580 },
            { id: 64, from: 'Colombo', to: 'Kandy', date: '2024-10-17', image: 'bus129_89.jpeg', price: 760 },
            { id: 65, from: 'Jaffna', to: 'Colombo', date: '2024-10-18', image: 'bus129_89.jpeg', price: 1900 },
            { id: 66, from: 'Colombo', to: 'Matara', date: '2024-10-19', image: 'bus129_89.jpeg', price: 870 },
            { id: 67, from: 'Anuradhapura', to: 'Colombo', date: '2024-10-20', image: 'bus129_89.jpeg', price: 1070 },
            { id: 68, from: 'Colombo', to: 'Batticaloa', date: '2024-10-21', image: 'bus129_89.jpeg', price: 970 },
            { id: 69, from: 'Badulla', to: 'Colombo', date: '2024-10-22', image: 'bus129_89.jpeg', price: 1200 },
            { id: 70, from: 'Colombo', to: 'Kilinochchi', date: '2024-10-23', image: 'bus129_89.jpeg', price: 1310 },
            { id: 71, from: 'Colombo', to: 'Jaffna', date: '2024-10-24', image: 'bus129_89.jpeg', price: 1650 },
            { id: 72, from: 'Kandy', to: 'Colombo', date: '2024-10-25', image: 'bus129_89.jpeg', price: 720 },
            { id: 73, from: 'Galle', to: 'Colombo', date: '2024-10-26', image: 'bus129_89.jpeg', price: 590 },
            { id: 74, from: 'Colombo', to: 'Kandy', date: '2024-10-27', image: 'bus129_89.jpeg', price: 770 },
            { id: 75, from: 'Jaffna', to: 'Colombo', date: '2024-10-28', image: 'bus129_89.jpeg', price: 1950 },
            { id: 76, from: 'Colombo', to: 'Matara', date: '2024-10-29', image: 'bus129_89.jpeg', price: 880 },
            { id: 77, from: 'Anuradhapura', to: 'Colombo', date: '2024-10-30', image: 'bus129_89.jpeg', price: 1080 },
            { id: 78, from: 'Colombo', to: 'Batticaloa', date: '2024-10-31', image: 'bus129_89.jpeg', price: 980 },
            { id: 79, from: 'Badulla', to: 'Colombo', date: '2024-11-01', image: 'bus129_89.jpeg', price: 1210 },
            { id: 80, from: 'Colombo', to: 'Kilinochchi', date: '2024-11-02', image: 'bus129_89.jpeg', price: 1320 },
            { id: 81, from: 'Colombo', to: 'Jaffna', date: '2024-11-03', image: 'bus129_89.jpeg', price: 1700 },
            { id: 82, from: 'Kandy', to: 'Colombo', date: '2024-11-04', image: 'bus129_89.jpeg', price: 730 },
            { id: 83, from: 'Galle', to: 'Colombo', date: '2024-11-05', image: 'bus129_89.jpeg', price: 600 },
            { id: 84, from: 'Colombo', to: 'Kandy', date: '2024-11-06', image: 'bus129_89.jpeg', price: 780 },
            { id: 85, from: 'Jaffna', to: 'Colombo', date: '2024-11-07', image: 'bus129_89.jpeg', price: 2000 },
            { id: 86, from: 'Colombo', to: 'Matara', date: '2024-11-08', image: 'bus129_89.jpeg', price: 890 },
            { id: 87, from: 'Anuradhapura', to: 'Colombo', date: '2024-11-09', image: 'bus129_89.jpeg', price: 1090 },
            { id: 88, from: 'Colombo', to: 'Batticaloa', date: '2024-11-10', image: 'bus129_89.jpeg', price: 990 },
            { id: 89, from: 'Badulla', to: 'Colombo', date: '2024-11-11', image: 'bus129_89.jpeg', price: 1220 },
            { id: 90, from: 'Colombo', to: 'Kilinochchi', date: '2024-11-12', image: 'bus129_89.jpeg', price: 1330 },
            { id: 91, from: 'Colombo', to: 'Jaffna', date: '2024-11-13', image: 'bus129_89.jpeg', price: 1750 },
            { id: 92, from: 'Kandy', to: 'Colombo', date: '2024-11-14', image: 'bus129_89.jpeg', price: 740 },
            { id: 93, from: 'Galle', to: 'Colombo', date: '2024-11-15', image: 'bus129_89.jpeg', price: 610 },
            { id: 94, from: 'Colombo', to: 'Kandy', date: '2024-11-16', image: 'bus129_89.jpeg', price: 790 },
            { id: 95, from: 'Jaffna', to: 'Colombo', date: '2024-11-17', image: 'bus129_89.jpeg', price: 2050 },
            { id: 96, from: 'Colombo', to: 'Matara', date: '2024-11-18', image: 'bus129_89.jpeg', price: 900 },
            { id: 97, from: 'Anuradhapura', to: 'Colombo', date: '2024-11-19', image: 'bus129_89.jpeg', price: 1100 },
            { id: 98, from: 'Colombo', to: 'Batticaloa', date: '2024-11-20', image: 'bus129_89.jpeg', price: 1000 },
            { id: 99, from: 'Badulla', to: 'Colombo', date: '2024-11-21', image: 'bus129_89.jpeg', price: 1230 },
            { id: 100, from: 'Colombo', to: 'Kilinochchi', date: '2024-11-22', image: 'bus129_89.jpeg', price: 1340 },
            { id: 101, from: 'Colombo', to: 'Galle', date: '2024-10-22', image: 'bus129_89.jpeg', price: 720 },
    { id: 102, from: 'Kandy', to: 'Colombo', date: '2024-10-23', image: 'bus129_89.jpeg', price: 650 },
    { id: 103, from: 'Colombo', to: 'Jaffna', date: '2024-10-24', image: 'bus129_89.jpeg', price: 1900 },
    { id: 104, from: 'Matara', to: 'Colombo', date: '2024-10-25', image: 'bus129_89.jpeg', price: 870 },
    { id: 105, from: 'Colombo', to: 'Anuradhapura', date: '2024-10-26', image: 'bus129_89.jpeg', price: 1070 },
    { id: 106, from: 'Batticaloa', to: 'Colombo', date: '2024-10-27', image: 'bus129_89.jpeg', price: 1500 },
    { id: 107, from: 'Colombo', to: 'Galle', date: '2024-10-28', image: 'bus129_89.jpeg', price: 720 },
    { id: 108, from: 'Colombo', to: 'Kandy', date: '2024-10-29', image: 'bus129_89.jpeg', price: 760 },
    { id: 109, from: 'Colombo', to: 'Jaffna', date: '2024-10-30', image: 'bus129_89.jpeg', price: 1900 },
    { id: 110, from: 'Jaffna', to: 'Colombo', date: '2024-10-31', image: 'bus129_89.jpeg', price: 1900 },
    { id: 111, from: 'Colombo', to: 'Matara', date: '2024-11-01', image: 'bus129_89.jpeg', price: 870 },
    { id: 112, from: 'Anuradhapura', to: 'Colombo', date: '2024-11-02', image: 'bus129_89.jpeg', price: 1070 },
    { id: 113, from: 'Colombo', to: 'Batticaloa', date: '2024-11-03', image: 'bus129_89.jpeg', price: 1500 },
    { id: 114, from: 'Batticaloa', to: 'Colombo', date: '2024-11-04', image: 'bus129_89.jpeg', price: 1500 },
    { id: 115, from: 'Colombo', to: 'Galle', date: '2024-11-05', image: 'bus129_89.jpeg', price: 720 },
    { id: 116, from: 'Kandy', to: 'Colombo', date: '2024-11-06', image: 'bus129_89.jpeg', price: 650 },
    { id: 117, from: 'Colombo', to: 'Jaffna', date: '2024-11-07', image: 'bus129_89.jpeg', price: 1900 },
    { id: 118, from: 'Matara', to: 'Colombo', date: '2024-11-08', image: 'bus129_89.jpeg', price: 870 },
    { id: 119, from: 'Colombo', to: 'Anuradhapura', date: '2024-11-09', image: 'bus129_89.jpeg', price: 1070 },
    { id: 120, from: 'Batticaloa', to: 'Colombo', date: '2024-11-10', image: 'bus129_89.jpeg', price: 1500 },
    { id: 121, from: 'Colombo', to: 'Galle', date: '2024-11-11', image: 'bus129_89.jpeg', price: 720 },
    { id: 122, from: 'Colombo', to: 'Kandy', date: '2024-11-12', image: 'bus129_89.jpeg', price: 760 },
    { id: 123, from: 'Colombo', to: 'Jaffna', date: '2024-11-13', image: 'bus129_89.jpeg', price: 1900 },
    { id: 124, from: 'Jaffna', to: 'Colombo', date: '2024-11-14', image: 'bus129_89.jpeg', price: 1900 },
    { id: 125, from: 'Colombo', to: 'Matara', date: '2024-11-15', image: 'bus129_89.jpeg', price: 870 },
    { id: 126, from: 'Anuradhapura', to: 'Colombo', date: '2024-11-16', image: 'bus129_89.jpeg', price: 1070 },
    { id: 127, from: 'Colombo', to: 'Batticaloa', date: '2024-11-17', image: 'bus129_89.jpeg', price: 1500 },
    { id: 128, from: 'Batticaloa', to: 'Colombo', date: '2024-11-18', image: 'bus129_89.jpeg', price: 1500 },
    { id: 129, from: 'Colombo', to: 'Galle', date: '2024-11-19', image: 'bus129_89.jpeg', price: 720 },
    { id: 130, from: 'Kandy', to: 'Colombo', date: '2024-11-20', image: 'bus129_89.jpeg', price: 650 },
    { id: 131, from: 'Colombo', to: 'Jaffna', date: '2024-11-21', image: 'bus129_89.jpeg', price: 1900 },
    { id: 132, from: 'Matara', to: 'Colombo', date: '2024-11-22', image: 'bus129_89.jpeg', price: 870 },
    { id: 133, from: 'Colombo', to: 'Anuradhapura', date: '2024-11-23', image: 'bus129_89.jpeg', price: 1070 },
    { id: 134, from: 'Batticaloa', to: 'Colombo', date: '2024-11-24', image: 'bus129_89.jpeg', price: 1500 },
    { id: 135, from: 'Colombo', to: 'Galle', date: '2024-11-25', image: 'bus129_89.jpeg', price: 720 },
    { id: 136, from: 'Colombo', to: 'Kandy', date: '2024-11-26', image: 'bus129_89.jpeg', price: 760 },
    { id: 137, from: 'Colombo', to: 'Jaffna', date: '2024-11-27', image: 'bus129_89.jpeg', price: 1900 },
    { id: 138, from: 'Jaffna', to: 'Colombo', date: '2024-11-28', image: 'bus129_89.jpeg', price: 1900 },
    { id: 139, from: 'Colombo', to: 'Jaffna', date: '2024-08-15', image: 'bus129_89.jpeg', price: 870 },
    { id: 140, from: 'Anuradhapura', to: 'Colombo', date: '2024-11-30', image: 'bus129_89.jpeg', price: 1070 },
    { id: 141, from: 'Colombo', to: 'Batticaloa', date: '2024-12-01', image: 'bus129_89.jpeg', price: 1500 },
    { id: 142, from: 'Batticaloa', to: 'Colombo', date: '2024-12-02', image: 'bus129_89.jpeg', price: 1500 },
    { id: 143, from: 'Colombo', to: 'Galle', date: '2024-12-03', image: 'bus129_89.jpeg', price: 720 },
    { id: 144, from: 'Kandy', to: 'Colombo', date: '2024-12-04', image: 'bus129_89.jpeg', price: 650 },
    { id: 145, from: 'Colombo', to: 'Jaffna', date: '2024-12-05', image: 'bus129_89.jpeg', price: 1900 },
    { id: 146, from: 'Matara', to: 'Colombo', date: '2024-12-06', image: 'bus129_89.jpeg', price: 870 },
    { id: 147, from: 'Colombo', to: 'Anuradhapura', date: '2024-12-07', image: 'bus129_89.jpeg', price: 1070 },
    { id: 148, from: 'Batticaloa', to: 'Colombo', date: '2024-12-08', image: 'bus129_89.jpeg', price: 1500 },
    { id: 149, from: 'Colombo', to: 'Galle', date: '2024-12-09', image: 'bus129_89.jpeg', price: 720 },
    { id: 150, from: 'Colombo', to: 'Kandy', date: '2024-12-10', image: 'bus129_89.jpeg', price: 760 },
    // {id: 151, from: 'Colombo', to: 'Jaffna', date: '2024-08-15', image: 'bus129_89.jpeg', price: 1300},
    {id: 152, from: 'Colombo', to: 'Jaffna', date: '2024-08-15', image: 'bus129_89.jpeg', price: 1400},
    {id: 153, from: 'Colombo', to: 'Jaffna', date: '2024-08-15', image: 'bus129_89.jpeg', price: 1800}
        ];
        

        // Filter buses based on form input
        const filteredBuses = availableBuses.filter(bus =>
            bus.from === from &&
            bus.to === to &&
            bus.date === travelDate
        );

        // Display the results
        displayResults(filteredBuses);
    }
});
// Example data with randomly assigned values for undefined fields


// Function to generate a random value from a set of options
function getRandomValue(options) {
    return options[Math.floor(Math.random() * options.length)];
}

// Modify the displayResults function
function displayResults(buses) {
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = ''; // Clear previous results

    if (buses.length === 0) {
        resultsContainer.innerHTML = '<p>No buses found for the selected criteria.</p>';
    } else {
        buses.forEach(bus => {
            // Default values
            const possibleTimes = ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00'];

            // Function to get a random time from the array
            const getRandomTime = (times) => times[Math.floor(Math.random() * times.length)];
            
            // Set time to bus.time if available, otherwise to a random time
            const time = bus.time || getRandomTime(possibleTimes);
            const type = bus.type || getRandomValue(['Normal', 'Luxury']);
            const model = bus.model || getRandomValue(['Ashok Leyland', 'Mercedes']);
            const scheduleId = bus.scheduleId || getRandomValue(['WS87-1545-JC2', 'WS88-1546-JC3']);
            const bookingClosingDate = bus.bookingClosingDate || getRandomValue(['2024-11-09', '2024-11-08']);
            const bookingClosingTime = bus.bookingClosingTime || getRandomValue(['11:00', '10:00']);
            const depotName = bus.depotName || getRandomValue(['Welisara', 'Maharagama','viyangoda','jaffna','kilinochi']);
            const availableSeats = bus.availableSeats || getRandomValue([30, 40, 50,23,34,56,27]);

            const busCard = document.createElement('div');
            busCard.className = 'route-card';

            busCard.innerHTML = `
                <img src="${bus.image}" alt="Bus Image">
                <h3>${bus.from} to ${bus.to}</h3>
                <p>Price: Rs. ${bus.price}</p>
                <button class="btn btn-primary" onclick="seats()">Book Seat</button>
                <div class="bus-details">
                    <p><strong>Departure:</strong> ${bus.from}</p>
                    <p><strong>Date:</strong> ${bus.date}</p>
                    <p><strong>Time:</strong> ${time}</p>
                    <p><strong>Arrival:</strong> ${bus.to}</p>
                    <p><strong>Bus Type:</strong> ${type}</p>
                    <p><strong>Model:</strong> ${model}</p>
                    <p><strong>Bus Schedule ID:</strong> ${scheduleId}</p>
                    <p><strong>Booking Closing Date:</strong> ${bookingClosingDate}</p>
                    <p><strong>Booking Closing Time:</strong> ${bookingClosingTime}</p>
                    <p><strong>Depot Name:</strong> ${depotName}</p>
                    <p><strong>Available Seats:</strong> ${availableSeats}</p>
                </div>
            `;

            resultsContainer.appendChild(busCard);
        });
    }

    // Show the results section
    document.getElementById('searchResults').classList.remove('hidden');
}

// Modify the showSeatModal function
// function showSeatModal(busId) {
//     const bus = availableBuses.find(bus => bus.id === busId);
//     const modalBody = document.getElementById('modalBody');

//     if (bus) {
//         // Default values
//         const time = bus.time || '12:00';
//         const type = bus.type || getRandomValue(['Normal', 'Luxury']);
//         const model = bus.model || getRandomValue(['Ashok Leyland', 'Mercedes']);
//         const scheduleId = bus.scheduleId || getRandomValue(['WS87-1545-JC2', 'WS88-1546-JC3']);
//         const bookingClosingDate = bus.bookingClosingDate || getRandomValue(['2024-11-09', '2024-11-08']);
//         const bookingClosingTime = bus.bookingClosingTime || getRandomValue(['11:00', '10:00']);
//         const depotName = bus.depotName || getRandomValue(['Welisara', 'Maharagama']);
//         const availableSeats = bus.availableSeats || getRandomValue([30, 40, 50]);

//         modalBody.innerHTML = `
//             <p><strong>Departure:</strong> ${bus.from}</p>
//             <p><strong>Date:</strong> ${bus.date}</p>
//             <p><strong>Time:</strong> ${time}</p>
//             <p><strong>Arrival:</strong> ${bus.to}</p>
//             <p><strong>Bus Type:</strong> ${type}</p>
//             <p><strong>Model:</strong> ${model}</p>
//             <p><strong>Bus Schedule ID:</strong> ${scheduleId}</p>
//             <p><strong>Booking Closing Date:</strong> ${bookingClosingDate}</p>
//             <p><strong>Booking Closing Time:</strong> ${bookingClosingTime}</p>
//             <p><strong>Depot Name:</strong> ${depotName}</p>
//             <p><strong>Available Seats:</strong> ${availableSeats}</p>
//         `;
//         document.getElementById('seatModal').style.display = 'flex';
//     }
// }

function seats() {
    event.preventDefault(); // Prevent default action if needed (e.g., if button is inside a form)
    // console.log("hi");
    window.location.href = 'seats.html';
};


