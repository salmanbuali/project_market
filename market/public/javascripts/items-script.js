const itemsSection = document.querySelector("section")
const items = document.querySelector("section").querySelectorAll("a")
console.log("nooo")
const lowToHigh = () => {
  it = [...items]
  it.sort((a, b) => {
    aPrice = parseInt(a.querySelector(".price-font-main").textContent)
    bPrice = parseInt(b.querySelector(".price-font-main").textContent)

    return aPrice - bPrice
  })
  it.forEach((item) => {
    itemsSection.appendChild(item)
  })
}

// highToLow
const highToLow = () => {
  it = [...items]
  it.sort((b, a) => {
    aPrice = parseInt(a.querySelector(".price-font-main").textContent)
    bPrice = parseInt(b.querySelector(".price-font-main").textContent)

    return aPrice - bPrice
  })
  it.forEach((item) => {
    itemsSection.appendChild(item)
  })
}
