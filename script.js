const sections = document.querySelectorAll(".section")

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show")
      }
    })
  },
  {
    threshold: 0.2,
  }
)

sections.forEach((section) => observer.observe(section))
const button = document.querySelector(".btn")

button.addEventListener("mousemove", (e) => {
  const rect = button.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top

  button.style.background = `
    radial-gradient(
      circle at ${x}px ${y}px,
      #9d4edd,
      #7b2cbf
    )
  `
})

button.addEventListener("mouseleave", () => {
  button.style.background = "linear-gradient(135deg, #7b2cbf, #9d4edd)"
})
