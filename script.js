let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
    hill1.style.top = value * 1 + 'px';
});


const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navigation a");

window.addEventListener("scroll", () => {
    let current = "home";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});



function focusImage(img) {
  img.scrollIntoView({
    behavior: "smooth",
    inline: "center",
    block: "nearest"
  });
}


const container = document.getElementById("galleryScroll");
function scrollGallery(direction) {
  const scrollAmount = 320; // image width + gap
  container.scrollBy({
    left: direction * scrollAmount,
    behavior: "smooth"
  });
}