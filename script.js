console.log("TailTrack is running!");

// ======================================================
// USER REGISTRATION - JAVA BACKEND + MYSQL
// ======================================================

async function registerAccount(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const address = document.getElementById("address").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword =
        document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    const data = new URLSearchParams();

    data.append("name", name);
    data.append("phone", phone);
    data.append("email", email);
    data.append("address", address);
    data.append("password", password);

    try {

        const response = await fetch(
            "http://localhost:8080/api/register",
            {
                method: "POST",
                headers: {
                    "Content-Type":
                        "application/x-www-form-urlencoded"
                },
                body: data.toString()
            }
        );

        const result = await response.text();

        if (response.ok) {

            alert("Account created successfully! 🐾");

            window.location.replace("login.html");

        } else {

            alert("Registration failed: " + result);
        }

    } catch (error) {

        console.error(error);

        alert(
            "Unable to connect to TailTrack backend."
        );
    }
}

        // Check passwords
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        // Prepare data for Java backend
        const data = new URLSearchParams();

        data.append("name", name);
        data.append("phone", phone);
        data.append("email", email);
        data.append("address", address);
        data.append("password", password);

        try {

            const response = await fetch(
                "http://localhost:8080/api/register",
                {
                    method: "POST",
                    headers: {
                        "Content-Type":
                            "application/x-www-form-urlencoded"
                    },
                    body: data.toString()
                }
            );

            const result = await response.text();

            console.log("Backend response:", result);

           if (response.ok) {

    alert("Account created successfully! 🐾");

    setTimeout(function () {
        window.location.replace("./login.html");
    }, 300);

} else {

                alert("Registration failed: " + result);
            }

        } catch (error) {

            console.error("Registration error:", error);

            alert(
                "Unable to connect to TailTrack backend.\n\n" +
                "Please make sure the Java backend is running."
            );
        }

// ======================================================
// LOGIN
// ======================================================

async function loginAccount(event) {

    event.preventDefault();

    const form = event.target;

    const emailInput =
        form.querySelector('input[type="email"]');

    const passwordInput =
        form.querySelector('input[type="password"]');

    if (!emailInput || !passwordInput) {
        alert("Email or password field not found.");
        return;
    }

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    const data = new URLSearchParams();

    data.append("email", email);
    data.append("password", password);

    try {

        const response = await fetch(
            "http://localhost:8080/api/login",
            {
                method: "POST",
                headers: {
                    "Content-Type":
                        "application/x-www-form-urlencoded"
                },
                body: data.toString()
            }
        );

        const result = await response.text();

        console.log("Login response:", result);

        if (response.ok) {

            alert("Login successful! 🐾");

            window.location.href = "dashboard.html";

        } else {

            alert(result);
        }

    } catch (error) {

        console.error("Login error:", error);

        alert(
            "Unable to connect to TailTrack backend."
        );
    }
}

        const email = emailInput.value.trim();
        const password = passwordInput.value;

        const data = new URLSearchParams();

        data.append("email", email);
        data.append("password", password);

        try {

            const response = await fetch(
                "http://localhost:8080/api/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type":
                            "application/x-www-form-urlencoded"
                    },
                    body: data.toString()
                }
            );

            const result = await response.text();

            if (response.ok) {

                alert("Login successful! 🐾");

                window.location.href = "dashboard.html";

            } else {

                alert(result);
            }

        } catch (error) {

            console.error(error);

            alert(
                "Unable to connect to TailTrack backend."
            );
        }

        const email = emailInput.value.trim();
        const password = passwordInput.value;

        const data = new URLSearchParams();

        data.append("email", email);
        data.append("password", password);

        try {

            const response = await fetch(
                "http://localhost:8080/api/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type":
                            "application/x-www-form-urlencoded"
                    },
                    body: data.toString()
                }
            );

            const result = await response.text();

            if (response.ok) {

                alert("Login successful! 🐾");

                window.location.href = "dashboard.html";

            } else {

                alert(result);
            }

        } catch (error) {

            console.error(error);

            alert(
                "Unable to connect to TailTrack backend."
            );
        }

// ======================================================
// MY PETS
// ======================================================

const petForm = document.getElementById("petForm");

if (petForm) {

    displayPets();

    petForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const pet = {

            name: document.getElementById("petName").value,
            species: document.getElementById("petSpecies").value,
            breed: document.getElementById("petBreed").value,
            age: document.getElementById("petAge").value,
            gender: document.getElementById("petGender").value,
            weight: document.getElementById("petWeight").value,

            dietType:
                document.getElementById("dietType").value,

            foodPreference:
                document.getElementById("foodPreference").value,

            mealsPerDay:
                document.getElementById("mealsPerDay").value,

            allergies:
                document.getElementById("allergies").value,

            feedingInstructions:
                document.getElementById("feedingInstructions").value,

            medicalConditions:
                document.getElementById("medicalConditions").value,

            currentMedicines:
                document.getElementById("currentMedicines").value,

            healthNotes:
                document.getElementById("healthNotes").value,

            notes:
                document.getElementById("petNotes").value
        };

        let pets =
            JSON.parse(localStorage.getItem("tailtrackPets")) || [];

        pets.push(pet);

        localStorage.setItem(
            "tailtrackPets",
            JSON.stringify(pets)
        );

        alert("Pet added successfully! 🐾");

        petForm.reset();

        displayPets();

    });
}


function displayPets() {

    const petList = document.getElementById("petList");

    if (!petList) {
        return;
    }

    const pets =
        JSON.parse(localStorage.getItem("tailtrackPets")) || [];

    if (pets.length === 0) {

        petList.innerHTML =
            '<p class="no-pets">No pets added yet.</p>';

        return;
    }

    petList.innerHTML = "";

    pets.forEach(function (pet, index) {

        petList.innerHTML += `

            <div class="pet-card">

                <h3>🐾 ${pet.name}</h3>

                <h4>Basic Details</h4>

                <p>
                    <strong>Species:</strong>
                    ${pet.species || "Not added"}
                </p>

                <p>
                    <strong>Breed:</strong>
                    ${pet.breed || "Not added"}
                </p>

                <p>
                    <strong>Age:</strong>
                    ${pet.age || "Not added"} years
                </p>

                <p>
                    <strong>Gender:</strong>
                    ${pet.gender || "Not added"}
                </p>

                <h4>⚖️ Physical Health</h4>

                <p>
                    <strong>Weight:</strong>
                    ${pet.weight || "Not added"} kg
                </p>

                <h4>🥗 Nutrition & Diet</h4>

                <p>
                    <strong>Diet Type:</strong>
                    ${pet.dietType || "Not added"}
                </p>

                <p>
                    <strong>Food Preference:</strong>
                    ${pet.foodPreference || "Not added"}
                </p>

                <p>
                    <strong>Meals Per Day:</strong>
                    ${pet.mealsPerDay || "Not added"}
                </p>

                <p>
                    <strong>Allergies:</strong>
                    ${pet.allergies || "None"}
                </p>

                <p>
                    <strong>Feeding Instructions:</strong>
                    ${pet.feedingInstructions || "Not added"}
                </p>

                <h4>🩺 Health Information</h4>

                <p>
                    <strong>Medical Conditions:</strong>
                    ${pet.medicalConditions || "None"}
                </p>

                <p>
                    <strong>Current Medicines:</strong>
                    ${pet.currentMedicines || "None"}
                </p>

                <p>
                    <strong>Health Notes:</strong>
                    ${pet.healthNotes || "None"}
                </p>

                <h4>📝 Additional Notes</h4>

                <p>
                    ${pet.notes || "No additional notes"}
                </p>

                <button onclick="deletePet(${index})">
                    Delete Pet
                </button>

            </div>
        `;
    });
}


function deletePet(index) {

    let pets =
        JSON.parse(localStorage.getItem("tailtrackPets")) || [];

    pets.splice(index, 1);

    localStorage.setItem(
        "tailtrackPets",
        JSON.stringify(pets)
    );

    displayPets();
}


// ======================================================
// VACCINATION MANAGEMENT
// ======================================================

const vaccinationForm =
    document.getElementById("vaccinationForm");

if (vaccinationForm) {

    displayVaccinations();

    vaccinationForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const vaccination = {

                pet:
                    document.getElementById(
                        "vaccinationPet"
                    ).value,

                vaccine:
                    document.getElementById(
                        "vaccineName"
                    ).value,

                date:
                    document.getElementById(
                        "vaccinationDate"
                    ).value,

                nextDue:
                    document.getElementById(
                        "nextDueDate"
                    ).value
            };

            let vaccinations =
                JSON.parse(
                    localStorage.getItem(
                        "tailtrackVaccinations"
                    )
                ) || [];

            vaccinations.push(vaccination);

            localStorage.setItem(
                "tailtrackVaccinations",
                JSON.stringify(vaccinations)
            );

            alert(
                "Vaccination record added successfully! 💉"
            );

            vaccinationForm.reset();

            displayVaccinations();
        }
    );
}


function displayVaccinations() {

    const vaccinationList =
        document.getElementById("vaccinationList");

    if (!vaccinationList) {
        return;
    }

    const vaccinations =
        JSON.parse(
            localStorage.getItem("tailtrackVaccinations")
        ) || [];

    if (vaccinations.length === 0) {

        vaccinationList.innerHTML =
            '<p class="no-vaccinations">No vaccination records added yet.</p>';

        return;
    }

    vaccinationList.innerHTML = "";

    vaccinations.forEach(function (vaccination, index) {

        vaccinationList.innerHTML += `

            <div class="vaccination-card">

                <h3>💉 ${vaccination.vaccine}</h3>

                <p>
                    <strong>Pet:</strong>
                    ${vaccination.pet}
                </p>

                <p>
                    <strong>Vaccination Date:</strong>
                    ${vaccination.date}
                </p>

                <p>
                    <strong>Next Due:</strong>
                    ${vaccination.nextDue}
                </p>

                <button onclick="deleteVaccination(${index})">
                    Delete
                </button>

            </div>
        `;
    });
}


function deleteVaccination(index) {

    let vaccinations =
        JSON.parse(
            localStorage.getItem("tailtrackVaccinations")
        ) || [];

    vaccinations.splice(index, 1);

    localStorage.setItem(
        "tailtrackVaccinations",
        JSON.stringify(vaccinations)
    );

    displayVaccinations();
}


// ======================================================
// VET APPOINTMENTS
// ======================================================

function openAppointment(clinic) {

    const appointmentBox =
        document.getElementById("appointmentBox");

    const clinicName =
        document.getElementById("clinicName");

    if (appointmentBox && clinicName) {

        clinicName.value = clinic;

        appointmentBox.style.display = "block";

        appointmentBox.scrollIntoView({
            behavior: "smooth"
        });
    }
}


const appointmentForm =
    document.getElementById("appointmentForm");

if (appointmentForm) {

    displayAppointments();

    appointmentForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const appointment = {

                clinic:
                    document.getElementById(
                        "clinicName"
                    ).value,

                pet:
                    document.getElementById(
                        "appointmentPet"
                    ).value,

                date:
                    document.getElementById(
                        "appointmentDate"
                    ).value,

                time:
                    document.getElementById(
                        "appointmentTime"
                    ).value,

                reason:
                    document.getElementById(
                        "visitReason"
                    ).value
            };

            let appointments =
                JSON.parse(
                    localStorage.getItem(
                        "tailtrackAppointments"
                    )
                ) || [];

            appointments.push(appointment);

            localStorage.setItem(
                "tailtrackAppointments",
                JSON.stringify(appointments)
            );

            alert(
                "Appointment booked successfully! 📅🐾"
            );

            appointmentForm.reset();

            const appointmentBox =
                document.getElementById(
                    "appointmentBox"
                );

            if (appointmentBox) {
                appointmentBox.style.display = "none";
            }

            displayAppointments();
        }
    );
}


function displayAppointments() {

    const appointmentList =
        document.getElementById("appointmentList");

    if (!appointmentList) {
        return;
    }

    const appointments =
        JSON.parse(
            localStorage.getItem(
                "tailtrackAppointments"
            )
        ) || [];

    if (appointments.length === 0) {

        appointmentList.innerHTML =
            '<p class="no-appointments">No appointments booked yet.</p>';

        return;
    }

    appointmentList.innerHTML = "";

    appointments.forEach(function (appointment, index) {

        appointmentList.innerHTML += `

            <div class="appointment-card">

                <h3>🩺 ${appointment.clinic}</h3>

                <p>
                    <strong>Pet:</strong>
                    ${appointment.pet}
                </p>

                <p>
                    <strong>Date:</strong>
                    ${appointment.date}
                </p>

                <p>
                    <strong>Time:</strong>
                    ${appointment.time}
                </p>

                <p>
                    <strong>Reason:</strong>
                    ${appointment.reason}
                </p>

                <button onclick="deleteAppointment(${index})">
                    Cancel
                </button>

            </div>
        `;
    });
}


function deleteAppointment(index) {

    let appointments =
        JSON.parse(
            localStorage.getItem(
                "tailtrackAppointments"
            )
        ) || [];

    appointments.splice(index, 1);

    localStorage.setItem(
        "tailtrackAppointments",
        JSON.stringify(appointments)
    );

    displayAppointments();
}


// ======================================================
// PET ADOPTION
// ======================================================

function openAdoption(petName) {

    const formBox =
        document.getElementById(
            "adoptionFormBox"
        );

    const selectedPet =
        document.getElementById(
            "selectedPet"
        );

    if (formBox && selectedPet) {

        selectedPet.value = petName;

        formBox.style.display = "block";

        formBox.scrollIntoView({
            behavior: "smooth"
        });
    }
}


const adoptionForm =
    document.getElementById("adoptionForm");

if (adoptionForm) {

    displayAdoptionRequests();

    adoptionForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const request = {

                pet:
                    document.getElementById(
                        "selectedPet"
                    ).value,

                name:
                    document.getElementById(
                        "adopterName"
                    ).value,

                phone:
                    document.getElementById(
                        "adopterPhone"
                    ).value,

                reason:
                    document.getElementById(
                        "adoptionReason"
                    ).value
            };

            let requests =
                JSON.parse(
                    localStorage.getItem(
                        "tailtrackAdoptionRequests"
                    )
                ) || [];

            requests.push(request);

            localStorage.setItem(
                "tailtrackAdoptionRequests",
                JSON.stringify(requests)
            );

            alert(
                "Adoption request submitted successfully! 🐾"
            );

            adoptionForm.reset();

            const formBox =
                document.getElementById(
                    "adoptionFormBox"
                );

            if (formBox) {
                formBox.style.display = "none";
            }

            displayAdoptionRequests();
        }
    );
}


function displayAdoptionRequests() {

    const requestList =
        document.getElementById(
            "adoptionRequestList"
        );

    if (!requestList) {
        return;
    }

    const requests =
        JSON.parse(
            localStorage.getItem(
                "tailtrackAdoptionRequests"
            )
        ) || [];

    if (requests.length === 0) {

        requestList.innerHTML =
            '<p class="no-requests">No adoption requests submitted yet.</p>';

        return;
    }

    requestList.innerHTML = "";

    requests.forEach(function (request, index) {

        requestList.innerHTML += `

            <div class="adoption-request-card">

                <h3>🐾 ${request.pet}</h3>

                <p>
                    <strong>Name:</strong>
                    ${request.name}
                </p>

                <p>
                    <strong>Phone:</strong>
                    ${request.phone}
                </p>

                <p>
                    <strong>Reason:</strong>
                    ${request.reason}
                </p>

                <button onclick="deleteAdoptionRequest(${index})">
                    Delete Request
                </button>

            </div>
        `;
    });
}


function deleteAdoptionRequest(index) {

    let requests =
        JSON.parse(
            localStorage.getItem(
                "tailtrackAdoptionRequests"
            )
        ) || [];

    requests.splice(index, 1);

    localStorage.setItem(
        "tailtrackAdoptionRequests",
        JSON.stringify(requests)
    );

    displayAdoptionRequests();
}


// ======================================================
// ADOPTION SEARCH
// ======================================================

const adoptionSearch =
    document.getElementById("adoptionSearch");

if (adoptionSearch) {

    adoptionSearch.addEventListener(
        "input",
        function () {

            const searchValue =
                adoptionSearch.value.toLowerCase();

            const cards =
                document.querySelectorAll(
                    ".adoption-card"
                );

            cards.forEach(function (card) {

                const searchableText =
                    (
                        card.getAttribute(
                            "data-search"
                        ) || ""
                    ).toLowerCase();

                if (
                    searchableText.includes(
                        searchValue
                    )
                ) {

                    card.style.display = "block";

                } else {

                    card.style.display = "none";
                }
            });
        }
    );
}


// ======================================================
// LOST & FOUND
// ======================================================

const lostPetForm =
    document.getElementById("lostPetForm");

if (lostPetForm) {

    displayLostPets();

    lostPetForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const report = {

                type:
                    document.getElementById(
                        "reportType"
                    ).value,

                name:
                    document.getElementById(
                        "lostPetName"
                    ).value,

                species:
                    document.getElementById(
                        "lostPetSpecies"
                    ).value,

                breed:
                    document.getElementById(
                        "lostPetBreed"
                    ).value,

                location:
                    document.getElementById(
                        "lostPetLocation"
                    ).value,

                date:
                    document.getElementById(
                        "lostPetDate"
                    ).value,

                contact:
                    document.getElementById(
                        "lostPetContact"
                    ).value,

                details:
                    document.getElementById(
                        "lostPetDetails"
                    ).value
            };

            let reports =
                JSON.parse(
                    localStorage.getItem(
                        "tailtrackLostPets"
                    )
                ) || [];

            reports.push(report);

            localStorage.setItem(
                "tailtrackLostPets",
                JSON.stringify(reports)
            );

            alert(
                "Pet report submitted successfully! 🔎🐾"
            );

            lostPetForm.reset();

            displayLostPets();
        }
    );
}


function displayLostPets() {

    const lostPetList =
        document.getElementById(
            "lostPetList"
        );

    if (!lostPetList) {
        return;
    }

    const reports =
        JSON.parse(
            localStorage.getItem(
                "tailtrackLostPets"
            )
        ) || [];

    if (reports.length === 0) {

        lostPetList.innerHTML =
            '<p class="no-lost-pets">No pet reports yet.</p>';

        return;
    }

    lostPetList.innerHTML = "";

    reports.forEach(function (report, index) {

        lostPetList.innerHTML += `

            <div class="lost-pet-card">

                <h3>🐾 ${report.name}</h3>

                <span class="report-badge">
                    ${report.type} Pet
                </span>

                <p>
                    <strong>Species:</strong>
                    ${report.species}
                </p>

                <p>
                    <strong>Breed:</strong>
                    ${report.breed}
                </p>

                <p>
                    <strong>Location:</strong>
                    ${report.location}
                </p>

                <p>
                    <strong>Date:</strong>
                    ${report.date}
                </p>

                <p>
                    <strong>Contact:</strong>
                    ${report.contact}
                </p>

                <p>
                    <strong>Details:</strong>
                    ${report.details || "No additional details"}
                </p>

                <button onclick="deleteLostPet(${index})">
                    Delete Report
                </button>

            </div>
        `;
    });
}


function deleteLostPet(index) {

    let reports =
        JSON.parse(
            localStorage.getItem(
                "tailtrackLostPets"
            )
        ) || [];

    reports.splice(index, 1);

    localStorage.setItem(
        "tailtrackLostPets",
        JSON.stringify(reports)
    );

    displayLostPets();
}


// ======================================================
// LOST PET SEARCH
// ======================================================

const lostSearch =
    document.getElementById("lostSearch");

if (lostSearch) {

    lostSearch.addEventListener(
        "input",
        function () {

            const searchValue =
                lostSearch.value.toLowerCase();

            const cards =
                document.querySelectorAll(
                    ".lost-pet-card"
                );

            cards.forEach(function (card) {

                const cardText =
                    card.innerText.toLowerCase();

                if (
                    cardText.includes(
                        searchValue
                    )
                ) {

                    card.style.display = "block";

                } else {

                    card.style.display = "none";
                }
            });
        }
    );
}