const cards = document.querySelectorAll(".doctor-card");

cards.forEach(card => {
    card.addEventListener("click",()=>{
        const doctorName = card.getAttribute("data-doctor");
        localStorage.setItem("selectedDoctor", doctorName);
        window.location.href = "appointment.html";
    });
});