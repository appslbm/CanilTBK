function openModal(event) {
  const modal = document.getElementById("myModal")
  const modalContent = modal.querySelector(".modal-content")
  const card = event.currentTarget
  const index = card.getAttribute("data-index")
  const cardContent = card.innerHTML

  modalContent.innerHTML = cardContent
  modal.style.display = "flex"
}

function closeModal() {
  document.getElementById("myModal").style.display = "none"
}

document.querySelectorAll(".open-modal").forEach(function (card) {
  card.addEventListener("click", openModal)
})

document
  .querySelector(".modal-content .close")
  .addEventListener("click", closeModal)

document.querySelector(".modal").addEventListener("click", function (event) {
  if (event.target.classList.contains("modal")) {
    closeModal()
  }
})
