// =========================
// APPOINTMENT FORM
// =========================

const appointmentForm = document.getElementById("appointment-form");

appointmentForm.addEventListener("submit", function (event) {

    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const message = document.getElementById("message").value;

    // Dolly Beauty Saloon WhatsApp number
    const salonNumber = "923704155196";

    // Create WhatsApp message
    const whatsappMessage =
        `Hello Dolly Beauty Saloon!%0A%0A` +
        `I would like to request an appointment.%0A%0A` +
        `Name: ${name}%0A` +
        `Phone: ${phone}%0A` +
        `Service: ${service}%0A` +
        `Preferred Date: ${date}%0A` +
        `Preferred Time: ${time}%0A` +
        `Message: ${message || "None"}`;

    // Create WhatsApp URL
    const whatsappURL =
        `https://wa.me/${salonNumber}?text=${whatsappMessage}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");

});