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

}            document.createElement("img");

        img.src = url;

        img.alt = "Memory";


        const caption =
            document.createElement("p");

        caption.textContent =
            "My Memory ❤️";


        card.appendChild(img);
        card.appendChild(caption);

        gallery.appendChild(card);


        /*
            Foto yang pertama diupload
            digunakan juga untuk halaman Final
        */

        const finalPhoto =
            document.getElementById("finalPhoto");

        if (
            finalPhoto &&
            finalPhoto.dataset.custom !== "true"
        ) {

            finalPhoto.src = url;

            finalPhoto.dataset.custom = "true";

        }

    }


    /*
        Reset input supaya foto yang
        sama bisa dipilih kembali
    */

    event.target.value = "";

}


/* =========================================
   MEMORIES
========================================= */

let memoriesInterval = null;


/*
    Membuka halaman Memories
*/

function openMemories() {

    const loading =
        document.getElementById(
            "memoriesLoading"
        );

    const memories =
        document.getElementById(
            "memoriesPage"
        );

    if (!loading || !memories) return;


    /*
        Tampilkan loading
    */

    loading.classList.add("show");


    /*
        Setelah 2,5 detik,
        tampilkan Memories
    */

    setTimeout(() => {

        loading.classList.remove("show");

        memories.classList.add("active");

        startFallingPhotos();

    }, 2500);

}


/*
    Tutup Memories
*/

function closeMemories() {

    const memories =
        document.getElementById(
            "memoriesPage"
        );

    if (!memories) return;


    memories.classList.remove("active");


    /*
        Hentikan interval
    */

    if (memoriesInterval) {

        clearInterval(
            memoriesInterval
        );

        memoriesInterval = null;

    }


    /*
        Bersihkan semua foto
    */

    const container =
        document.getElementById(
            "fallingPhotos"
        );

    if (container) {

        container.innerHTML = "";

    }

}


/* =========================================
   MENGAMBIL FOTO MEMORY
========================================= */

function getMemoryPhotos() {

    const photos = [];


    /*
        Ambil foto dari Gallery
    */

    document
        .querySelectorAll(
            "#gallery img"
        )
        .forEach(img => {

            if (img.src) {

                photos.push(img.src);

            }

        });


    /*
        Jika belum ada foto di Gallery,
        gunakan foto dari folder images
    */

    if (photos.length === 0) {

        photos.push(
            "images/foto1.jpg",
            "images/foto2.jpg",
            "images/foto3.jpg"
        );

    }


    return photos;

}


/* =========================================
   MEMBUAT SATU FOTO JATUH
========================================= */

function createMemoryPhoto() {

    const container =
        document.getElementById(
            "fallingPhotos"
        );

    if (!container) return;


    const photos =
        getMemoryPhotos();


    if (photos.length === 0) {
        return;
    }


    /*
        Buat elemen gambar
    */

    const img =
        document.createElement("img");

    img.className =
        "memory-photo";


    /*
        Foto random
    */

    img.src =
        photos[
            Math.floor(
                Math.random() *
                photos.length
            )
        ];


    img.alt =
        "Memory ❤️";


    /*
        Posisi horizontal random
    */

    img.style.left =
        Math.random() * 100 + "vw";


    /*
        Ukuran random
    */

    const size =
        75 + Math.random() * 85;

    img.style.width =
        size + "px";

    img.style.height =
        size * 1.25 + "px";


    /*
        Rotasi awal random
    */

    const rotate =
        -35 + Math.random() * 70;

    img.style.setProperty(
        "--rotate",
        rotate + "deg"
    );


    /*
        Kecepatan jatuh random
    */

    const duration =
        5 + Math.random() * 6;

    img.style.animationDuration =
        duration + "s";


    /*
        Masukkan ke halaman
    */

    container.appendChild(img);


    /*
        Hapus setelah animasi selesai
    */

    setTimeout(() => {

        img.remove();

    }, (duration + 1) * 1000);

}



function startFallingPhotos() {

    

    if (memoriesInterval) {

        clearInterval(
            memoriesInterval
        );

    }


    

    const container =
        document.getElementById(
            "fallingPhotos"
        );

    if (!container) return;

    container.innerHTML = "";




    for (
        let i = 0;
        i < 10;
        i++
    ) {

        setTimeout(() => {

            createMemoryPhoto();

        }, i * 180);

    }


    

    memoriesInterval =
        setInterval(() => {

            createMemoryPhoto();

        }, 500);

}



function createBackgroundHeart() {

    const heart =
        document.createElement("div");

    heart.className =
        "bg-heart";


    const hearts = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💓"
    ];


    heart.textContent =
        hearts[
            Math.floor(
                Math.random() *
                hearts.length
            )
        ];


    heart.style.left =
        Math.random() * 100 + "%";


    heart.style.fontSize =
        (15 + Math.random() * 20) + "px";


    const duration =
        5 + Math.random() * 5;


    heart.style.animationDuration =
        duration + "s";


    document.body.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, duration * 1000);

}




setInterval(() => {

    createBackgroundHeart();

}, 1000);



document.addEventListener(
    "DOMContentLoaded",
    () => {

        

        const home =
            document.getElementById("home");

        if (home) {

            document
                .querySelectorAll(".page")
                .forEach(page => {

                    page.classList.remove(
                        "active"
                    );

                });

            home.classList.add("active");

        }

    }
);
