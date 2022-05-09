export default function handleError(){
    const cityInput = document.querySelector(".searchTerm");
    cityInput.placeholder= "Invalid city!";
    cityInput.classList.add("not-found");
    console.warn("The city entered is invalid. Try again.");
  }