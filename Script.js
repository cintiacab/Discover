function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light1.png")
    img.setAttribute('alt',"Foto de uma mulher no deserto de óculos de sol de lente marrom degradê, com turbante verde, sorrindo.")
  } else {
    img.setAttribute("src", "./assets/avatar1.png")
    img.setAttribute(
      "alt",
      "Foto de mulher de cabelos pretos presos pra trás, com a franja solta dividida ao meio, sorrindo"
    )
  }
}
