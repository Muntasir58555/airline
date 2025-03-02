document.addEventListener("DOMContentLoaded", function () {
    // Get URL parameters (user input from index.html)
    const urlParams = new URLSearchParams(window.location.search);
    const fromCity = urlParams.get("from");
    const toCity = urlParams.get("to");
    const travelDate = urlParams.get("date");

    // Display search info (on flights.html)
    if (document.getElementById("search-info")) {
        document.getElementById("search-info").textContent = `${fromCity} to ${toCity} on ${travelDate}`;
    }

    // Dummy flight data (since GitHub Pages can't fetch from a database)
    const flights = [
        { airline: "Delta Airlines", price: "$250", time: "10:00 AM", logo: "images/delta.png" },
        { airline: "American Airlines", price: "$280", time: "1:00 PM", logo: "images/american.png" },
        { airline: "United Airlines", price: "$300", time: "6:00 PM", logo: "images/united.png" }
    ];

    // Add flight results dynamically (on flights.html)
    const flightList = document.getElementById("flight-list");
    if (flightList) {
        flights.forEach(flight => {
            let flightCard = document.createElement("div");
            flightCard.classList.add("flight-card", "col-md-12");

            flightCard.innerHTML = `
                <img src="${flight.logo}" alt="${flight.airline}">
                <div>
                    <h4>${flight.airline}</h4>
                    <p>Departure: ${flight.time}</p>
                    <p>Price: ${flight.price}</p>
                </div>
                <a href="booking.html?airline=${encodeURIComponent(flight.airline)}&price=${encodeURIComponent(flight.price)}" class="book-btn">Book Now</a>
            `;

            flightList.appendChild(flightCard);
        });
    }
});
