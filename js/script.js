const searchInput = document.getElementById("searchInput");
const breedFilter = document.getElementById("breedFilter");
const ageFilter = document.getElementById("ageFilter");
const sizeFilter = document.getElementById("sizeFilter");
const searchButton = document.getElementById("searchButton");

const dogCards = document.querySelectorAll(".dog-card");
const noResults = document.getElementById("noResults");


/* SEARCH DOGS */

function filterDogs() {

    const searchValue =
        searchInput.value.toLowerCase().trim();

    const selectedBreed =
        breedFilter.value;

    const selectedAge =
        ageFilter.value;

    const selectedSize =
        sizeFilter.value;

    let visibleDogs = 0;


    dogCards.forEach(function(card) {

        const name =
            card.dataset.name.toLowerCase();

        const breed =
            card.dataset.breed.toLowerCase();

        const age =
            card.dataset.age.toLowerCase();

        const size =
            card.dataset.size.toLowerCase();


        const nameMatch =
            name.includes(searchValue);

        const breedMatch =
            selectedBreed === "all" ||
            breed === selectedBreed;

        const ageMatch =
            selectedAge === "all" ||
            age === selectedAge;

        const sizeMatch =
            selectedSize === "all" ||
            size === selectedSize;


        if (
            nameMatch &&
            breedMatch &&
            ageMatch &&
            sizeMatch
        ) {

            card.classList.remove("hide");
            visibleDogs++;

        } else {

            card.classList.add("hide");

        }

    });


    if (visibleDogs === 0) {

        noResults.classList.add("show");

    } else {

        noResults.classList.remove("show");

    }


    document
        .getElementById("dogs")
        .scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

}


searchButton.addEventListener(
    "click",
    filterDogs
);


searchInput.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {
            filterDogs();
        }

    }
);


/* MODAL */

const modal =
    document.getElementById("dogModal");

const modalImage =
    document.getElementById("modalImage");

const modalName =
    document.getElementById("modalName");

const modalDescription =
    document.getElementById("modalDescription");

const closeButton =
    document.getElementById("closeButton");

const closeX =
    document.getElementById("closeX");

const contactButton =
    document.getElementById("contactButton");


/* OPEN DOG PROFILE */

document
    .querySelectorAll(".meet-button")
    .forEach(function(button) {

        button.addEventListener(
            "click",
            function() {

                const card =
                    this.closest(".dog-card");

                const name =
                    card.dataset.name;

                const description =
                    card.dataset.description;

                const image =
                    card.dataset.image;


                modalName.textContent =
                    name.charAt(0).toUpperCase() +
                    name.slice(1);

                modalDescription.textContent =
                    description +
                    " Contact our adoption team to learn more and arrange a meeting.";

                modalImage.src =
                    image;

                modalImage.alt =
                    name + " dog profile";


                modal.classList.add("show");

                document.body.style.overflow =
                    "hidden";

            }
        );

    });


/* CLOSE MODAL */

function closeModal() {

    modal.classList.remove("show");

    document.body.style.overflow = "";

}


closeButton.addEventListener(
    "click",
    closeModal
);

closeX.addEventListener(
    "click",
    closeModal
);


/* CLICK OUTSIDE MODAL */

modal.addEventListener(
    "click",
    function(event) {

        if (event.target === modal) {
            closeModal();
        }

    }
);


/* ESC BUTTON */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {
            closeModal();
        }

    }
);


/* CONTACT BUTTON */

contactButton.addEventListener(
    "click",
    function() {

        alert(
            "Thank you for your interest in " +
            modalName.textContent +
            "! Our Pawsite Future adoption team will help you with the next steps."
        );

    }
);