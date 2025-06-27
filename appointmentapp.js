window.addEventListener("DOMContentLoaded", () => {
    const doctor = localStorage.getItem("selectedDoctor");
    if (doctor) {
      document.querySelector("#doctor").value = doctor;
    }
  });