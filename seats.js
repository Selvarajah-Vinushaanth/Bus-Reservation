document.addEventListener('DOMContentLoaded', () => {
    let selectedSeatCount = 0;
    const selectedSeats = [];

    document.querySelectorAll('.seat').forEach(seat => {
        seat.addEventListener('click', () => {
            seat.classList.toggle('selected');

            const seatNumber = seat.dataset.seat;
            if (seat.classList.contains('selected')) {
                selectedSeatCount++;
                selectedSeats.push(seatNumber);
            } else {
                selectedSeatCount--;
                const index = selectedSeats.indexOf(seatNumber);
                if (index > -1) {
                    selectedSeats.splice(index, 1);
                }
            }

            document.getElementById('seat-count').textContent = `Selected Seats: ${selectedSeats.join(', ')}`;

            localStorage.setItem('selectedSeatCount', selectedSeatCount);
            localStorage.setItem('selectedSeats', JSON.stringify(selectedSeats));
        });
    });
});

function pay() {
    // Check if any seats are selected
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats')) || [];
    
    if (selectedSeats.length === 0) {
        alert('Please select at least one seat before proceeding.');
        // Clear localStorage if no seats are selected
        localStorage.removeItem('selectedSeatCount');
        localStorage.removeItem('selectedSeats');
    } else {
        // Navigate to the payment page
        window.location.href = 'pay.html';
    }
}
