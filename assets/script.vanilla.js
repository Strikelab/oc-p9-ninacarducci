import mauGallery from "./maugallery-vanilla.min.js";
document.addEventListener("DOMContentLoaded", function () {
  mauGallery({
    columns: { xs: 1, sm: 2, md: 3, lg: 3, xl: 3 },
    lightBox: !0,
    lightboxId: "myAwesomeLightbox",
    showTags: !0,
    tagsPosition: "top",
  });
});
