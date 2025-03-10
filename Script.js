function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute('alt',"Foto de homem de óculos escuro, sorrindo, usando jaqueta de couro preta, em um fundo azul")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de homem de barba e óculos, usando camisa preta, sorrindo em um fundo amarelo"
    )
  }
}
