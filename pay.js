document.addEventListener('DOMContentLoaded', () => {
    const selectedSeatCount = localStorage.getItem('selectedSeatCount') || 0;
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats')) || [];
    const pricePerSeat = 1500; // Example price per seat

    const totalCost = selectedSeatCount * pricePerSeat;
    if(totalCost==0){
        alert("Please Select Atleast One Seat")
    }

    // Generate a unique transaction ID (for demonstration purposes)
    const transactionId = `TXN${Math.floor(Math.random() * 1000000)}`;
    const Vcode = `${Math.floor(Math.random() * 1000000)}`;
    const purchaseDate = new Date().toLocaleDateString();

    document.getElementById('selected-seats').textContent = `Selected Seats: ${selectedSeats.join(', ')}`;
    document.getElementById('total-cost').textContent = `Total Cost: ${totalCost} LKR`;

    const paymentForm = document.getElementById('payment-form');
    paymentForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent actual form submission

        // Collecting form data
        const cardholderName = document.getElementById('cardholder-name').value;

        // Generate receipt content
        const receiptContent = `
            <html>
                <head>
                    <title>Receipt</title>
                   <link rel="icon" href="bus129_89.jpeg" type="image/jpeg">

                    <style>
                        html, body {
    height: 100%;
    margin: 0;
}

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    padding: 20px;
    max-width: 800px;
    margin: auto;
    background-color: #f4f4f9;
    color: #000000;
    position: relative; /* Ensure the pseudo-element is positioned relative to the body */
    /* Prevent scrollbars from showing if the pseudo-element is larger */
}

body::before {
    content: "";
    position: fixed; /* Use fixed positioning to cover the viewport */
    top: 0;
    left: 0;
    width: 100vw; /* Ensure it covers the full viewport width */
    height: 100vh; /* Ensure it covers the full viewport height */
    background-image: url('image.jpg');
    background-size: cover; /* Ensure the image covers the entire area */
    background-position: center;
    filter: blur(8px); /* Adjust the blur intensity */
    z-index: -1; /* Place the pseudo-element behind the content */
}

                        .receipt-container {
                            background-color: #ffffff;
                            padding: 20px;
                            max-width: 600px;
                            margin-top:40px;
                            margin: 20px auto;
                            border-radius: 8px;
                            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                        }
                        h1 {
                            color: #27ae60;
                            text-align: center;
                            margin-bottom: 20px;
                        }
                        .receipt-item {
                            margin-bottom: 15px;
                            font-size: 16px;
                            color: #34495e;
                        }
                        .highlight {
                            font-weight: bold;
                            color: #2980b9;
                        }
                        .download-btn {
                            padding: 10px 20px;
                            background-color: #3498db;
                            color: #fff;
                            text-decoration: none;
                            border-radius: 5px;
                            margin-top: 20px;
                            display: inline-block;
                        }
                        .download-btn:hover {
                            background-color: #2980b9;
                        }
                    </style>
                </head>
                <body>
                    <div class="receipt-container">
                        <h1>Payment Receipt</h1>
                        <div class="receipt-item"><strong>Transaction ID:</strong> <span class="highlight">${transactionId}</span></div>
                        <div class="receipt-item"><strong>V-code:</strong> <span class="highlight">${Vcode}</span></div>
                        <div class="receipt-item"><strong>Purchase Date:</strong> <span class="highlight">${purchaseDate}</span></div>
                        <div class="receipt-item"><strong>Seats:</strong> <span class="highlight">${selectedSeats.join(', ')}</span></div>
                        <div class="receipt-item"><strong>Total Cost:</strong> <span class="highlight">${totalCost} LKR</span></div>
                        <div class="receipt-item"><strong>Cardholder:</strong> <span class="highlight">${cardholderName}</span></div>
                        <a href="#" id="download-pdf" class="download-btn">Download PDF</a>
                        <h3>Download Quickly!</h3>

                    </div>
                </body>
            </html>
        `;
         const receiptContents = `
            <html>
                <head>
                    <title>Receipt</title>
                    <style>
                        html, body {
    height: 100%;
    margin: 0;
}

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    padding: 20px;
    max-width: 800px;
    margin: auto;
    background-color: #f4f4f9;
    color: #000000;
    position: relative; /* Ensure the pseudo-element is positioned relative to the body */
    /* Prevent scrollbars from showing if the pseudo-element is larger */
}

body::before {
    content: "";
    position: fixed; /* Use fixed positioning to cover the viewport */
    top: 0;
    left: 0;
    width: 100vw; /* Ensure it covers the full viewport width */
    height: 100vh; /* Ensure it covers the full viewport height */
    background-image: url('image.jpg');
    background-size: cover; /* Ensure the image covers the entire area */
    background-position: center;
    filter: blur(8px); /* Adjust the blur intensity */
    z-index: -1; /* Place the pseudo-element behind the content */
}

                        .receipt-container {
                            background-color: #ffffff;
                            padding: 20px;
                            max-width: 600px;
                            margin-top:40px;
                            margin: 20px auto;
                            border-radius: 8px;
                            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                        }
                        h1 {
                            color: #27ae60;
                            text-align: center;
                            margin-bottom: 20px;
                        }
                        .receipt-item {
                            margin-bottom: 15px;
                            font-size: 16px;
                            color: #34495e;
                        }
                        .highlight {
                            font-weight: bold;
                            color: #2980b9;
                        }
                        .download-btn {
                            padding: 10px 20px;
                            background-color: #3498db;
                            color: #fff;
                            text-decoration: none;
                            border-radius: 5px;
                            margin-top: 20px;
                            display: inline-block;
                        }
                        .download-btn:hover {
                            background-color: #2980b9;
                        }
                    </style>
                </head>
                <body>
                    <div class="receipt-container">
                        <h1>Payment Receipt</h1>
                        <div class="receipt-item"><strong>Transaction ID:</strong> <span class="highlight">${transactionId}</span></div>
                        <div class="receipt-item"><strong>V-code:</strong> <span class="highlight">${Vcode}</span></div>
                        <div class="receipt-item"><strong>Purchase Date:</strong> <span class="highlight">${purchaseDate}</span></div>
                        <div class="receipt-item"><strong>Seats:</strong> <span class="highlight">${selectedSeats.join(', ')}</span></div>
                        <div class="receipt-item"><strong>Total Cost:</strong> <span class="highlight">${totalCost} LKR</span></div>
                        <div class="receipt-item"><strong>Cardholder:</strong> <span class="highlight">${cardholderName}</span></div>
                        

                    </div>
                </body>
            </html>
        `;

        // Open a new window and write the receipt content
        const receiptWindow = window.open('receipt.html', '');
        receiptWindow.document.write(receiptContent);
        receiptWindow.document.close();

        // Add a script to the new window to enable PDF download
        receiptWindow.document.getElementById('download-pdf').addEventListener('click', () => {
            html2pdf()
                .from(receiptContents)
                .set({
                    margin: 1,
                    filename: 'receipt.pdf',
                    image: { type: 'jpeg', quality: 0.98 },
                    html2canvas: { scale: 2 },
                    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
                })
                .save();
        });

        // Clear localStorage
        localStorage.removeItem('selectedSeatCount');
        localStorage.removeItem('selectedSeats');

         setTimeout(() => {
            window.location.href = 'home.html';
        }, 10000);
    });
});
