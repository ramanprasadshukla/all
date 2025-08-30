let users;
  let userAccount = {};
  let rooms;

  async function fetchRooms() {
    try {
        let response = await fetch("http://localhost:3000/api/rooms");
        let data = await response.json(); // Convert response to JSON
        // console.log(data); // Log the data
        rooms = data;
        console.log(rooms);
        return data; 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
}
fetchRooms();

async function fetchUsers() {
  try {
      let response = await fetch("http://localhost:3000/api/users");
      let data = await response.json(); // Convert response to JSON
      // console.log(data); // Log the data
      users = data;
      // console.log(users);
      return; 
    } catch (error) {
      console.error("Error fetching data:", error);
    }
}
fetchUsers();
  
  
  function showRegisterForm() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'flex';
  }

  function showLoginForm() {
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'flex';
  }

  function loginUser() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      userAccount = user;
      document.getElementById('login-form').style.display = 'none';
      document.getElementById('nav-bar').style.display = 'block';
      document.getElementById('search-bar').style.display = 'flex';
      document.getElementById('room-list').style.display = 'grid';
      document.getElementById('welcome-message').innerText = ``;
      document.getElementById('room-details').style.display = 'none';
      document.getElementById('welcome-message').innerText = `Welcome, ${username}!`;
      displayRooms();
    } else {
      alert('Invalid credentials!');
    }
  }

  
  async function registerUser() {
    
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;

    const existingUser = users.find(user => user.username === username);

    if (existingUser) {
        console.log("User already exists!");
        return alert("User already exists!");
    }

    const response = await fetch("http://localhost:3000/api/users/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
    });

    const result = await response.json();
    alert(result.message || "Error!");
    fetchUsers(); // Refresh user list
};

  function displayRooms() {
    const roomList = document.getElementById('room-list');
    roomList.innerHTML = '';
    rooms.forEach(room => {
        roomList.innerHTML += `
        <div class="room-card">
          <div class="room-img" id="room-img" onclick="details('${room.roomName}')">
          <img src="${room.images[0]}" alt="${room.name}">
          </div>
          <div class="middle" id="middle" onclick="details('${room.roomName}')">
          <div class="room-name" id="room-name">
          <h3>${room.roomName}</h3>
          <h5>room type: ${room.roomType}</h5>
          <p>${room.discription}</p>
          </div>
          <div class="room-ament" id="room-ament">
          <h5>${room.place}</h5>
          <h6>amenities: ${room.amenities[0]}, ${room.amenities[1]}, ${room.amenities[2]}</h6>
          </div>
          </div>
          <div class="last" id="last">
          <div id:"rating">
          <h4>${room.rating} <i class="fa-regular fa-star color-black"></i></h4>
          </div>
          <div id="price">
          <h6>Price: ${room.price}₹</h6>
          <p> +590₹ taxes & fees <br> per night</p>
          </div>
          <div id="book">
          <button type="button" class="btn btn-light color-blue" onclick="bookRoom('${room.roomName}')">Book Now</button>
          </div>
          </div>
        </div>
      `;
    });
}

  function searchRooms() {
    let placeName = document.querySelector('input[placeholder="Place Name"]').value;
    placeName = placeName.toLowerCase();
    let checkInDate = document.querySelector('input[placeholder="Check-in Date"]').value;
    let checkOutDate = document.querySelector('input[placeholder="Check-out Date"]').value;

    if (checkInDate === '' || checkOutDate === '') {
        alert('Please select check-in and check-out dates.');
    } else {
        checkInDate = new Date(checkInDate);
        checkOutDate = new Date(checkOutDate);

        let roomList = document.getElementById('searched-room-list');
        roomList.innerHTML = '';

        rooms.forEach(room => {
            let count = 0;
            room.checkInOut.forEach(checkInOut => {
                let roomInDate = new Date(checkInOut.in);
                let roomOutDate = new Date(checkInOut.out);
                let roomPlace = room.place.toLowerCase();

                // Check if the room is available within the selected dates
                if ((roomOutDate < checkInDate || roomInDate > checkOutDate) && roomPlace === placeName) {
                    count++;
                }
                if (count === room.checkInOut.length) {
                    roomList.innerHTML += `
                    <div class="room-card">
                        <div class="room-img" id="room-img" onclick="details('${room.roomName}')">
                        <img src="${room.images[0]}" alt="${room.name}">
                        </div>
                        <div class="middle" id="middle" onclick="details('${room.roomName}')">
                        <div class="room-name" id="room-name">
                        <h3>${room.roomName}</h3>
                        <h5>room type: ${room.roomType}</h5>
                        <p>${room.discription}</p>
                        </div>
                        <div class="room-ament" id="room-ament">
                        <h5>${room.place}</h5>
                        <h6>amenities: ${room.amenities[0]}, ${room.amenities[1]}, ${room.amenities[2]}</h6>
                        </div>
                        </div>
                        <div class="last" id="last">
                        <div id:"rating">
                        <h4>${room.rating} <i class="fa-regular fa-star color-black"></i></h4>
                        </div>
                        <div id="price">
                        <h6>Price: ${room.price}₹</h6>
                        <p> +590₹ taxes & fees <br> per night</p>
                        </div>
                        <div id="book">
                        <button type="button" class="btn btn-light color-blue" onclick="bookRoom('${room.roomName}')">Book Now</button>
                        </div>
                        </div>
                    </div>
                    `;
                }
            });
        });

        document.getElementById('room-list').style.display = 'none';
        document.getElementById('searched-room-list').style.display = 'grid';
        document.getElementById('bookings').style.display = 'none';
        document.getElementById('room-details').style.display = 'none';

    }
}

  function home() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'none';
  //   document.getElementById('search-bar').style.display = 'none';
    document.getElementById('room-list').style.display = 'grid';
    document.getElementById('searched-room-list').style.display = 'none';
    document.getElementById('bookings').style.display = 'none';
    document.getElementById('room-details').style.display = 'none';
    document.getElementById('welcome-message').innerText = `Welcome, ${username}`;
  }

  
  
  
  async function bookRoom(roomName) {
    // console.log("User Account:", userAccount);
    // Find the room object by its name
    const room = rooms.find(r => r.roomName === roomName);
    if (!room) {
        alert("Room not found!");
        return;
    }

    // Check if the user is logged in
    if (!userAccount || !userAccount.username) {
        alert("Please log in to book a room.");
        return;
    }



    const userId = userAccount._id; // Assuming userAccount has an _id property
    const roomN = roomName;

    // Log the payload for debugging
    console.log("Payload being sent:", { userId, roomN });

    try {
        // Send a POST request to save the room booking
        const bookNow = await fetch("http://localhost:3000/api/users/saveroom", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userId, roomN }),
        });

        // Parse the response
        const result = await bookNow.json();

        // Log the response for debugging
        console.log("Response from server:", result);

        // Show success or error message
        if (bookNow.ok) {
            alert(result.message || "Room booked successfully!");
            fetchUsers(); // Refresh user list to update bookings
            console.log("User Account after booking:", userAccount);
        } else {
            alert(result.message || "Error booking the room!");
        }
    } catch (error) {
        console.error("Error booking the room:", error);
        alert("An error occurred while booking the room. Please try again.");
    }
}




function bookings() {
    const roomList = document.getElementById('bookings'); // Corrected the selector
    roomList.innerHTML = '';

    // Check if the user has any booked rooms
    if (!userAccount.books || userAccount.books.length === 0) {
        roomList.innerHTML = '<p>No bookings found.</p>';
        return;
    }

    console.log("User's booked rooms:", userAccount.books);

    userAccount.books.forEach(bookedRoom => {
        // Find the room object in the rooms array
        const room = rooms.find(r => r.roomName === bookedRoom);
        console.log("Room found:", room);
        if (!room) {
            console.error(`Room not found for booking: ${bookedRoom.roomName}`);
            // return;
        }else{

        // Add the room details to the bookings list

        roomList.innerHTML += `
            <div class="room-card">
                <div class="room-img" id="room-img" onclick="details('${room.roomName}')">
                    <img src="${room.images[0]}" alt="${room.name}">
                </div>
                <div class="middle" id="middle" onclick="details('${room.roomName}')">
                    <div class="room-name" id="room-name">
                        <h3>${room.roomName}</h3>
                        <h5>${room.place}</h5>
                        <h5 class="text-primary">Room has been booked on (date)</h5>
                        <p>Your check in date is from (date) to (date)</p>
                    </div>
                    <div class="room-ament" id="room-ament">
                        <h6 class="alert-danger"><code>Your booking will expire if you don't confirm your book on check-in date.</code></h6>
                    </div>
                </div>
                <div class="last" id="last">
                    <div id="rating">
                    </div>
                    <div id="price">
                    <h6>Your total cost with taxes will be:</h6>
                        <h5>${room.price + 590}₹</h5>
                        <button type="button" class="btn btn-success btn-sm" onclick="pay()">Pay Now</button>
                    </div>
                    <div id="book">
                        <button type="button" class="btn btn-outline-danger" onclick="cancelBooking('${room.roomName}')">Cancel Booking</button>
                    </div>
                </div>
            </div>
        `;
        }
    });

    // Update the display
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('room-list').style.display = 'none';
    document.getElementById('searched-room-list').style.display = 'none';
    document.getElementById('bookings').style.display = 'grid';
    document.getElementById('room-details').style.display = 'none';

}


function pay() {
    alert("Payment is not available yet!");
}


function details(roomName) {
    const room = rooms.find(r => r.roomName === roomName);
    if (room) {
        
      const roonDetails = document.getElementById('room-details');
    roonDetails.innerHTML = '';

        roonDetails.innerHTML += `
        <div id="details-card">
          <div class="details-name" id="details-name">
          <h3>${room.roomName}</h3>
          </div>
          <div class="details-all" id="details-all">
          <div class="details-img" id="details-img">
          <img src="${room.images[0]}" alt="${room.name}">
          </div>
          <div class="d-second" id="d-second">
          <div class="d-middle" id="d-middle">
          <div class="details-name" id="details-name">
          <h3>${room.roomName}</h3>
          <h5>room type: ${room.roomType}</h5>
          <p>${room.discription}</p>
          </div>
          <div class="details-ament" id="details-ament">
          <h5>${room.place}</h5>
          <h6>amenities: ${room.amenities[0]}, ${room.amenities[1]}, ${room.amenities[2]}</h6>
          </div>
          </div>
          <div class="d-last" id="d-last">
          <div id:"d-rating">
          <h4>${room.rating} <i class="fa-regular fa-star color-black"></i></h4>
          </div>
          <div id="d-price">
          <h6>Price: ${room.price}₹</h6>
          <p> +590₹ taxes & fees <br> per night</p>
          </div>
          <div id="d-book">
          <button type="button" class="btn btn-light color-blue" onclick="bookRoom('${room.roomName}')">Book Now</button>
          </div>
          </div>
          </div>
          </div>
        </div>
      `;


    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('room-list').style.display = 'none';
    document.getElementById('searched-room-list').style.display = 'none';
    document.getElementById('bookings').style.display = 'none';
    document.getElementById('room-details').style.display = 'flex';

    } else {
        alert('Room not found!');
    }
}