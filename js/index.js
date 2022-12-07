(function () {
    window.addEventListener("load", () => {
        const url = window.location.href;
        const location = url.substr(url.lastIndexOf("/") + 1);
        if (location === "index.html") {
            PopulateSkills2();
            PopulateSkills();
        }
        ToggleNav();
    });
    function ToggleNav() {
        const toggle = document.querySelector(".menu-icon");
        toggle.addEventListener("click", () => {
            document.querySelector("nav").classList.toggle("active");
        });
    }

    function PopulateSkills2() {
        let injectionTemplate2 = ``;

        skills2.forEach((skill) => {
            let template2 = `<div class="skill2">
                    <img src="./assests/png/${skill.img}" alt="${skill.skill} logo">
                    <h2>${skill.skill}</h2>
                    <hr class="gradient-line" />
                    <p>${skill.prof}</p>
                    <hr class="gradient-line" />
                    <p>Hobby</p>
                    <span>${skill.hobby}</span>
                    
                </div>`;
            injectionTemplate2 += template2;
        });
        const insertionDiv2 = document.querySelector(".skill-flex-container2");
        insertionDiv2.insertAdjacentHTML("afterbegin", injectionTemplate2);
    }

    function PopulateSkills() {
        let injectionTemplate = ``;

        skills.forEach((skill) => {
            let template = `<div class="skill">
                    <img src="./assests/png/${skill.img}" alt="${skill.skill} logo">
                    <h2>${skill.skill}</h2>
                    <hr class="gradient-line" />
                    <p>${skill.prof}</p>
                    <p>Hobby</p>
                    <hr class="gradient-line" />
                    <span>${skill.hobby}</span>
                </div>`;
            injectionTemplate += template;
        });
        const insertionDiv = document.querySelector(".skill-flex-container");
        insertionDiv.insertAdjacentHTML("afterbegin", injectionTemplate);
    }
})();
