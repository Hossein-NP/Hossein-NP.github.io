const icon = document.querySelector(".bi-eye-slash");
const iconwrapper = document.querySelector(".link-to-project");

iconwrapper.addEventListener("mouseenter" , function() {
    icon.classList.add("bi-eye-fill");
    icon.classList.remove("bi-eye-slash");
})
iconwrapper.addEventListener("mouseleave" , function() {
    icon.classList.remove("bi-eye-fill");
    icon.classList.add("bi-eye-slash");
})