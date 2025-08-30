// Array of car objects
const cars = [
    {
        model: "Toyota Crown Platinum",
        price: "$54,990",
        image: "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/vehicles/2026/toyotacrown/galleries/CRW_MY26_0001_V001.png:tcom_gallery_16x9?ts=1744821219200&fmt=jpg&fit=crop&dpr=on,2",
        description: "A luxury sedan with advanced safety features and a hybrid engine.",
        bgvideo: "/content/dam/toyota/vehicles/2026/toyotacrown/mlp/welcomemat/CRW_MY26_WelcomeMatDesktop_TDRHPMarquee1920x796fs5mb_TYCK3033000H_unslated.mp4?wid=1439",
        immg: {
            id: "car1",
            colour: "black",
            src: "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2026/toyotacrown/nightshade/4025/1l6/36/",
            srcRed: "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2026/toyotacrown/limited/4020/3u9/36/",
            alt: "Toyota Crown",
            currentImage: 10
        }
    },
    {
        model: "Mirai XLE",
        price: "$51,795",
        image: "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/vehicles/2025/mirai/galleries/MIR_MY25_0003_V001.png:tcom_gallery_16x9?ts=1744822383899&fmt=jpg&fit=crop&dpr=on,2",
        description: "A hydrogen fuel cell vehicle with zero emissions and a range of 400 miles.",
        immg: {
            id: "car1",
            colour: "black",
            src: "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2026/toyotacrown/nightshade/4025/1l6/36/",
            srcRed: "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2026/toyotacrown/limited/4020/3u9/36/",
            alt: "Toyota Crown",
            currentImage: 10
        }
    },
    {
        model: "GR Supra",
        price: "$60,050",
        image: "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/vehicles/2026/grsupra2/mlp/welcomemat/SUP_MY26_0006_V001_desktop.png?fmt=jpeg&fit=crop&wid=3838",
        description: "A sports car with a turbocharged engine and rear-wheel drive for thrilling performance.",
        immg: {
            id: "car1",
            colour: "black",
            src: "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2026/toyotacrown/nightshade/4025/1l6/36/",
            srcRed: "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2026/toyotacrown/limited/4020/3u9/36/",
            alt: "Toyota Crown",
            currentImage: 10
        }
    },
    {
        model: "Camry XSE",
        price: "$34,900",
        image: "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/vehicles/2025/camry/mlp/multi-tab/CAM_MY25_0029_V001.png?fmt=jpeg&fit=crop&wid=1008",
        description: "A midsize sedan with a spacious interior, advanced safety features, and a hybrid option.",
        immg: {
            id: "car1",
            colour: "black",
            src: "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2026/toyotacrown/nightshade/4025/1l6/36/",
            srcRed: "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2026/toyotacrown/limited/4020/3u9/36/",
            alt: "Toyota Crown",
            currentImage: 10
        }
    },
    {
        model: "Grand Highlander Hybrid MAX Platinum",
        price: "$58,775",
        image: "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/vehicles/2025/grandhighlanderhybrid/mlp/features-tile/GHH_MY25_0001_V001-desktop.png?fmt=jpeg&fit=crop&wid=1008",
        description: "A midsize SUV with a hybrid engine, spacious interior, and advanced safety features.",
        immg: {
            id: "car1",
            colour: "black",
            src: "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2026/toyotacrown/nightshade/4025/1l6/36/",
            srcRed: "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2026/toyotacrown/limited/4020/3u9/36/",
            alt: "Toyota Crown",
            currentImage: 10
        }
    },
    {
        model: "GR Supra Final Edition",
        price: "$64,900", 
        image: "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/protected/grgarage/2026/phase-2/marquee/SUP_MY26_0004_V001.png?fmt=jpeg&fit=crop&wid=3838",
        description: "A limited edition sports car with a turbocharged engine and unique styling.",
        immg: {
            id: "car1",
            colour: "black",
            src: "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2026/toyotacrown/nightshade/4025/1l6/36/",
            srcRed: "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2026/toyotacrown/limited/4020/3u9/36/",
            alt: "Toyota Crown",
            currentImage: 10
        }
    },
    {
        model: "Tundra i-FORCE MAX Capstone",
        price: "$80,725",
        image: "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/vehicles/2025/tundra/mlp/story-features/TUN_MY25_0007_V001.png?fmt=jpeg&fit=crop&qlt=90&wid=1024",
        description: "A full-size pickup truck with a hybrid engine, advanced towing capabilities, and luxury features.",
        immg: {
            id: "car1",
            colour: "black",
            src: "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2026/toyotacrown/nightshade/4025/1l6/36/",
            srcRed: "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2026/toyotacrown/limited/4020/3u9/36/",
            alt: "Toyota Crown",
            currentImage: 10
        }
    },
    {
        model: "Toyota Crown Signia",
        price: "$59,990",
        image: "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/vehicles/2025/crownsignia/features/CRS_MY25_0023_V001.png?fmt=jpeg&fit=crop&wid=400",
        description: "A luxury sedan with a hybrid engine, advanced technology, and a spacious interior.",
        immg: {
            id: "car1",
            colour: "black",
            src: "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2026/toyotacrown/nightshade/4025/1l6/36/",
            srcRed: "https://tmna.aemassets.toyota.com/is/image/toyota/toyota/jellies/max/2026/toyotacrown/limited/4020/3u9/36/",
            alt: "Toyota Crown",
            currentImage: 10
        }
    }
];

// Function to render cars dynamically
function renderCars() {

    const carContainer = document.getElementById("car-container");
    carContainer.innerHTML = ""; // Clear existing content
    

    cars.forEach((car, index) => {
        const carCard = document.createElement("div");
        carCard.classList.add("car-card");

        carCard.innerHTML = `
            <img src="${car.image}" alt="${car.model}" class="car-image">
            <h2>${car.model}</h2>
            <p>${car.description}</p>
            <p>Price: ${car.price}</p>
            <button class="details-btn" onclick="init360Viewer()" data-index="${index}">View Details</button>
            <button class="book-btn" data-index="${index}">Book Now</button>
            <button class="buy-btn" data-index="${index}">Buy Now</button>
        `;

        carContainer.appendChild(carCard);

    });

    addEventListeners();
}

// Function to add event listeners to buttons
function addEventListeners() {
    const detailsButtons = document.querySelectorAll("#logo");
    const bookButtons = document.querySelectorAll(".book-btn"); 
    const buyButtons = document.querySelectorAll(".buy-btn");

    detailsButtons.forEach(button => {
        button.addEventListener("click", () => {
            
            const carViewers = document.body;

        cars.forEach((car) => {
            // Create container for each car
            const carContainer = document.createElement("div");
            carContainer.classList.add("viewer");
            carContainer.id = car.immg.id;

            // Create image element
            const carImage = document.createElement("img");
            carImage.src = `${car.immg.srcRed}${car.immg.currentImage}.png?fmt=webp-alpha&wid=930&qlt=90`;
            carImage.alt = car.immg.alt;
            carImage.draggable = false;

            carContainer.appendChild(carImage);


            carContainer.style.cssText = `
                position: relative;
                margin: 0;
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: rgba(0, 0, 0, 0.8);
                overflow: hidden;
                cursor: grab;
                z-index: 1000;
            `;
            carViewers.appendChild(carContainer);

            // Add touch and mouse event listeners
            let isDragging = false;
            let lastPositionX = 0;

            // Touch Events
            carImage.addEventListener(
                "touchstart",
                (e) => {
                    isDragging = true;
                    lastPositionX = e.touches[0].clientX;
                },
                { passive: true }
            );

            carImage.addEventListener(
                "touchmove",
                (e) => {
                    if (!isDragging) return;

                    const currentX = e.touches[0].clientX;
                    const deltaX = currentX - lastPositionX;

                    if (Math.abs(deltaX) >= 10) {
                        if (deltaX > 0) {
                            car.immg.currentImage = (car.immg.currentImage - 1 + 37) % 37; // Decrement and wrap around
                        } else {
                            car.immg.currentImage = (car.immg.currentImage + 1) % 37; // Increment and wrap around
                        }

                        // Update the image source dynamically
                        carImage.src = `${car.immg.srcRed}${car.immg.currentImage}.png?fmt=webp-alpha&wid=930&qlt=90`;
                        lastPositionX = currentX;
                    }
                },
                { passive: true }
            );

            carImage.addEventListener(
                "touchend",
                () => {
                    isDragging = false;
                },
                { passive: true }
            );

            // Mouse Events
            carImage.addEventListener("mousedown", (e) => {
                isDragging = true;
                lastPositionX = e.clientX;
                carImage.style.cursor = "grabbing";
            });

            carImage.addEventListener("mousemove", (e) => {
                if (!isDragging) return;

                const currentX = e.clientX;
                const deltaX = currentX - lastPositionX;

                if (Math.abs(deltaX) >= 10) {
                    if (deltaX > 0) {
                        car.immg.currentImage = (car.immg.currentImage - 1 + 37) % 37; // Decrement and wrap around
                    } else {
                        car.immg.currentImage = (car.immg.currentImage + 1) % 37; // Increment and wrap around
                    }

                    // Update the image source dynamically
                    carImage.src = `${car.immg.srcRed}${car.immg.currentImage}.png?fmt=webp-alpha&wid=930&qlt=90`;
                    lastPositionX = currentX;
                }
            });

            carImage.addEventListener("mouseup", () => {
                isDragging = false;
                carImage.style.cursor = "grab";
            });

            carImage.addEventListener("mouseleave", () => {
                isDragging = false;
                carImage.style.cursor = "grab";
            });
        });




        });
    });

    bookButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            const index = e.target.dataset.index;
            const carDetails = { ...cars[index], action: "Booked" };
            localStorage.setItem(`car-${index}`, JSON.stringify(carDetails));
            updateDetailsSection(carDetails);
            alert(`${cars[index].model} has been booked! Details saved in local storage.`);
        });
    });

    buyButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            const index = e.target.dataset.index;
            const carDetails = { ...cars[index], action: "Purchased" };
            localStorage.setItem(`car-${index}`, JSON.stringify(carDetails));
            updateDetailsSection(carDetails);
            alert(`${cars[index].model} has been purchased! Details saved in local storage.`);
        });
    });
}

// Function to update the details section
function updateDetailsSection(details) {
    const detailsText = document.querySelector(".details-text");
    const detailsImage = document.querySelector(".details-image");

    detailsText.innerHTML = `
        <p><strong>Model:</strong> ${details.model}</p>
        <p><strong>Price:</strong> ${details.price}</p>
        <p><strong>Action:</strong> ${details.action}</p>
    `;

    detailsImage.innerHTML = `
        <img src="${details.image}" alt="${details.model}" class="details-car-image">
    `;
}

// Function to toggle between sections
function toggleSections() {
    const carContainer = document.getElementById("car-container");
    const detailsSection = document.getElementById("details-section");
    const viversSection = document.getElementById("car-viewers");
    const showCarsBtn = document.getElementById("show-cars-btn");
    const showDetailsBtn = document.getElementById("show-details-btn");
    const home = document.getElementById("home-btn");

    showCarsBtn.addEventListener("click", () => {
        carContainer.style.display = "flex";
        detailsSection.style.display = "none";
        viversSection.style.display = "none";
    });

    showDetailsBtn.addEventListener("click", () => {
        carContainer.style.display = "none";
        detailsSection.style.display = "block";
        viversSection.style.display = "none";
    });

    home.addEventListener("click", () => {
        carContainer.style.display = "none";
        detailsSection.style.display = "none";
        viversSection.style.display = "flex";
    });
    // Initially show the car container
}

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
    renderCars();
    toggleSections();

    const userIdDisplay = document.getElementById("user-id-display");
    const logoutBtn = document.getElementById("logout-btn");
    const settingsBtn = document.getElementById("settings-btn");

    // Retrieve user ID from local storage
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.loginId) {
        userIdDisplay.textContent = `${user.loginId}`;
    } else {
        userIdDisplay.textContent = " Guest";
    }

    // Logout functionality
    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("user");
        alert("You have been logged out.");
        window.location.href = "login.html";
    });

    // Settings button functionality
    settingsBtn.addEventListener("click", () => {
        alert("Settings functionality is not implemented yet.");
    });
});


document.querySelector("#show-search-options").addEventListener("click", function() {
    const searchOptions = document.querySelector(".search-section");
    if (searchOptions.style.display === "none" || searchOptions.style.display === "") {
        searchOptions.style.display = "flex";
    } else {
        searchOptions.style.display = "none";
    }
}
);




// --------------------------------------------------------------------------------------------------------------------------------



function init360Viewer() {

    
}