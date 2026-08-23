/* =========================
   PINDAH HALAMAN
========================= */

function goTo(page) {

    document.querySelectorAll(".page").forEach(function(p) {
        p.classList.remove("active");
    });

    const target = document.getElementById(page);

    if (target) {
        target.classList.add("active");
    }

}


/* =========================
   TOMBOL NO
========================= */

function moveNo(button) {

    button.style.position = "fixed";

    button.style.left =
        Math.random() * 70 + "%";

    button.style.top =
        Math.random() * 70 + "%";

}


/* =========================
   BUKA AMPLOP
========================= */

function openEnvelope() {

    const envelope =
        document.querySelector(".envelope");

    envelope.classList.add("open");

    setTimeout(function() {
        goTo("question");
    }, 700);

}


/* =========================
   UPLOAD FOTO
========================= */

function addPhotos(event) {

    const files = event.target.files;

    const gallery =
        document.getElementById("gallery");

    const finalPhoto =
        document.getElementById("finalPhoto");


    for (const file of files) {

        const url =
            URL.createObjectURL(file);


        const card =
            document.createElement("div");

        card.className = "photo-card";


        const img =
            document.createElement("img");

        img.src = url;
        img.alt = "Foto tambahan";


        const text =
            document.createElement("p");

        text.textContent = "Memory ❤️";


        card.appendChild(img);
        card.appendChild(text);

        gallery.appendChild(card);


        /* Foto pertama yang diupload
           menjadi foto halaman final */

        if (
            finalPhoto.src.includes("foto1.jpg")
        ) {

            finalPhoto.src = url;

        }

    }

}


/* =========================
   MEMORIES
========================= */

function openMemories() {

    const loading =
        document.getElementById("memoriesLoading");

    const memories =
        document.getElementById("memoriesPage");


    loading.classList.add("show");


    setTimeout(function() {

        loading.classList.remove("show");

        memories.classList.add("show");

        createFallingPhotos();

    }, 2200);

}


/* =========================
   TUTUP MEMORIES
========================= */

function closeMemories() {

    const memories =
        document.getElementById("memoriesPage");

    memories.classList.remove("show");

    document
        .getElementById("fallingPhotos")
        .innerHTML = "";

}


/* =========================
   FOTO BERJATUHAN
========================= */

function createFallingPhotos() {

    const container =
        document.getElementById("fallingPhotos");


    container.innerHTML = "";


    /*
       FOTO YANG DIGUNAKAN:

       foto1.jpg
       foto2.jpg
       foto3.jpg
       foto4.jpg
       foto5.jpg
       foto6.jpg
       foto7.jpg
       foto8.jpg
    */

    const photos = [
        "foto1.jpg",
        "foto2.jpg",
        "foto3.jpg",
        "foto4.jpg",
        "foto5.jpg",
        "foto6.jpg",
        "foto7.jpg",
        "foto8.jpg"
    ];


    photos.forEach(function(photo, index) {

        const img =
            document.createElement("img");


        img.src =
            "images/" + photo;


        img.className =
            "falling-photo";


        img.style.left =
            Math.random() * 90 + "%";


        img.style.animationDuration =
            (5 + Math.random() * 5) + "s";


        img.style.animationDelay =
            (Math.random() * 4) + "s";


        img.style.transform =
            "rotate(" +
            (Math.random() * 30 - 15) +
            "deg)";


        img.alt =
            "Memory " + (index + 1);


        container.appendChild(img);

    });

}
