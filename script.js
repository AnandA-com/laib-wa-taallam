// ======================================================
// LA'IB WA TA'ALLAM
// SCRIPT.JS LENGKAP
// ======================================================


// ======================================================
// DATA LEVEL DAN SOAL MUFRADAT
// ======================================================

const levels = {

    // ==================================================
    // LEVEL 1 — التَّعَارُفُ
    // ==================================================
    1: {
        title: "التَّعَارُفُ",

        questions: [

            {
                arabic: "اِسْمٌ",
                answers: [
                    "Nama",
                    "Umur",
                    "Alamat",
                    "Hobi"
                ],
                correct: "Nama"
            },

            {
                arabic: "طَالِبٌ",
                answers: [
                    "Guru",
                    "Siswa",
                    "Dokter",
                    "Petani"
                ],
                correct: "Siswa"
            },

            {
                arabic: "مُعَلِّمٌ",
                answers: [
                    "Siswa",
                    "Guru",
                    "Dokter",
                    "Petani"
                ],
                correct: "Guru"
            },

            {
                arabic: "صَدِيقٌ",
                answers: [
                    "Teman",
                    "Guru",
                    "Ayah",
                    "Saudara"
                ],
                correct: "Teman"
            },

            {
                arabic: "عُمْرٌ",
                answers: [
                    "Nama",
                    "Umur",
                    "Alamat",
                    "Pekerjaan"
                ],
                correct: "Umur"
            },

            {
                arabic: "هِوَايَةٌ",
                answers: [
                    "Pekerjaan",
                    "Alamat",
                    "Hobi",
                    "Nama"
                ],
                correct: "Hobi"
            },

            {
                arabic: "مِهْنَةٌ",
                answers: [
                    "Hobi",
                    "Pekerjaan",
                    "Umur",
                    "Alamat"
                ],
                correct: "Pekerjaan"
            },

            {
                arabic: "عُنْوَانٌ",
                answers: [
                    "Alamat",
                    "Nama",
                    "Umur",
                    "Hobi"
                ],
                correct: "Alamat"
            },

            {
                arabic: "أَبٌ",
                answers: [
                    "Ibu",
                    "Ayah",
                    "Kakak",
                    "Adik"
                ],
                correct: "Ayah"
            },

            {
                arabic: "أُمٌّ",
                answers: [
                    "Ayah",
                    "Ibu",
                    "Kakak",
                    "Teman"
                ],
                correct: "Ibu"
            }

        ]
    },


    // ==================================================
    // LEVEL 2 — المَرَافِقُ المَدْرَسِيَّةُ
    // ==================================================
    2: {
        title: "المَرَافِقُ المَدْرَسِيَّةُ",

        questions: [

            {
                arabic: "مَكْتَبَةٌ",
                answers: [
                    "Perpustakaan",
                    "Kantin",
                    "Kelas",
                    "Masjid"
                ],
                correct: "Perpustakaan"
            },

            {
                arabic: "فَصْلٌ",
                answers: [
                    "Laboratorium",
                    "Kelas",
                    "Lapangan",
                    "Kantin"
                ],
                correct: "Kelas"
            },

            {
                arabic: "مَقْصَفٌ",
                answers: [
                    "Kantin",
                    "Perpustakaan",
                    "Masjid",
                    "Kelas"
                ],
                correct: "Kantin"
            },

            {
                arabic: "مَلْعَبٌ",
                answers: [
                    "Lapangan",
                    "Kelas",
                    "Laboratorium",
                    "Masjid"
                ],
                correct: "Lapangan"
            },

            {
                arabic: "مُخْتَبَرٌ",
                answers: [
                    "Laboratorium",
                    "Perpustakaan",
                    "Kantin",
                    "Lapangan"
                ],
                correct: "Laboratorium"
            },

            {
                arabic: "مَسْجِدٌ",
                answers: [
                    "Masjid",
                    "Kelas",
                    "Kantin",
                    "Lapangan"
                ],
                correct: "Masjid"
            },

            {
                arabic: "مَكْتَبٌ",
                answers: [
                    "Kantor",
                    "Kantin",
                    "Perpustakaan",
                    "Lapangan"
                ],
                correct: "Kantor"
            },

            {
                arabic: "مَدْرَسَةٌ",
                answers: [
                    "Sekolah",
                    "Masjid",
                    "Kelas",
                    "Kantin"
                ],
                correct: "Sekolah"
            },

            {
                arabic: "غُرْفَةٌ",
                answers: [
                    "Ruangan",
                    "Lapangan",
                    "Kantin",
                    "Perpustakaan"
                ],
                correct: "Ruangan"
            },

            {
                arabic: "مَلْعَبٌ",
                answers: [
                    "Laboratorium",
                    "Lapangan",
                    "Kantor",
                    "Masjid"
                ],
                correct: "Lapangan"
            }

        ]
    },


    // ==================================================
    // LEVEL 3 — الأَدَوَاتُ المَدْرَسِيَّةُ
    // ==================================================
    3: {
        title: "الأَدَوَاتُ المَدْرَسِيَّةُ",

        questions: [

            {
                arabic: "كِتَابٌ",
                answers: [
                    "Buku",
                    "Pulpen",
                    "Pensil",
                    "Tas"
                ],
                correct: "Buku"
            },

            {
                arabic: "قَلَمٌ",
                answers: [
                    "Pensil",
                    "Pulpen",
                    "Buku",
                    "Penghapus"
                ],
                correct: "Pulpen"
            },

            {
                arabic: "قَلَمُ رَصَاصٍ",
                answers: [
                    "Pulpen",
                    "Pensil",
                    "Penggaris",
                    "Tas"
                ],
                correct: "Pensil"
            },

            {
                arabic: "مِمْحَاةٌ",
                answers: [
                    "Penggaris",
                    "Penghapus",
                    "Buku",
                    "Pensil"
                ],
                correct: "Penghapus"
            },

            {
                arabic: "مِسْطَرَةٌ",
                answers: [
                    "Tas",
                    "Penggaris",
                    "Buku",
                    "Pulpen"
                ],
                correct: "Penggaris"
            },

            {
                arabic: "حَقِيبَةٌ",
                answers: [
                    "Buku",
                    "Tas",
                    "Kursi",
                    "Meja"
                ],
                correct: "Tas"
            },

            {
                arabic: "كُرْسِيٌّ",
                answers: [
                    "Meja",
                    "Kursi",
                    "Tas",
                    "Buku"
                ],
                correct: "Kursi"
            },

            {
                arabic: "مَكْتَبٌ",
                answers: [
                    "Meja",
                    "Kursi",
                    "Buku",
                    "Penghapus"
                ],
                correct: "Meja"
            },

            {
                arabic: "دَفْتَرٌ",
                answers: [
                    "Buku tulis",
                    "Tas",
                    "Pulpen",
                    "Penggaris"
                ],
                correct: "Buku tulis"
            },

            {
                arabic: "سَاعَةٌ",
                answers: [
                    "Jam",
                    "Buku",
                    "Tas",
                    "Meja"
                ],
                correct: "Jam"
            }

        ]
    }

};

// ======================================================
// DATA SOAL GAME 2 — TERJEMAHKAN
// Semua soal berbentuk KALIMAT
// ======================================================

const translateQuestions = {

    // ==================================================
    // BAB 1 — التَّعَارُفُ
    // ==================================================
    1: [

        {
            arabic: "السَّلَامُ عَلَيْكُمْ، كَيْفَ حَالُكَ؟",
            answers: [
                "Assalamu'alaikum, bagaimana kabarmu?",
                "Namaku Ahmad, siapa namamu?",
                "Dari mana asalmu?",
                "Di mana kamu tinggal?"
            ],
            correct: "Assalamu'alaikum, bagaimana kabarmu?"
        },

        {
            arabic: "اِسْمِيْ أَحْمَدُ، مَا اسْمُكَ؟",
            answers: [
                "Saya seorang pelajar di Sekolah Menengah Pertama.",
                "Namaku Ahmad, siapa namamu?",
                "Saya tinggal di Jalan Salam.",
                "Apa pekerjaanmu?"
            ],
            correct: "Namaku Ahmad, siapa namamu?"
        },

        {
            arabic: "أَنَا طَالِبٌ فِي الْمَدْرَسَةِ الْمُتَوَسِّطَةِ.",
            answers: [
                "Saya seorang pelajar di Sekolah Menengah Pertama.",
                "Saya seorang guru di sekolah.",
                "Saya tinggal di sekolah.",
                "Saya siswa baru di kelas ini."
            ],
            correct: "Saya seorang pelajar di Sekolah Menengah Pertama."
        },

        {
            arabic: "أَنَا طَالِبَةٌ جَدِيْدَةٌ فِي هَذَا الْفَصْلِ.",
            answers: [
                "Saya seorang siswa di sekolah ini.",
                "Saya siswi baru di kelas ini.",
                "Saya seorang guru di kelas ini.",
                "Saya tinggal di kelas ini."
            ],
            correct: "Saya siswi baru di kelas ini."
        },

        {
            arabic: "مِنْ أَيْنَ أَنْتَ؟ أَنَا مِنْ مَالَانْج.",
            answers: [
                "Di mana kamu tinggal? Saya tinggal di Malang.",
                "Dari mana asalmu? Saya dari Malang.",
                "Siapa namamu? Nama saya Malang.",
                "Apa pekerjaanmu? Saya dari Malang."
            ],
            correct: "Dari mana asalmu? Saya dari Malang."
        },

        {
            arabic: "أَيْنَ تَسْكُنُ؟ أَسْكُنُ فِي شَارِعِ السَّلَامِ",
            answers: [
                "Di mana kamu tinggal? Saya tinggal di Jalan Salam.",
                "Dari mana asalmu? Saya dari Jalan Salam.",
                "Apa namamu? Nama saya Salam.",
                "Di mana sekolahmu? Sekolah saya di Jalan Salam."
            ],
            correct: "Di mana kamu tinggal? Saya tinggal di Jalan Salam."
        },

        {
            arabic: "أَهْلًا وَسَهْلًا، تَشَرَّفْنَا بِلِقَائِكَ.",
            answers: [
                "Selamat tinggal, sampai jumpa besok.",
                "Selamat datang, senang berkenalan denganmu.",
                "Assalamu'alaikum, bagaimana kabarmu?",
                "Dari mana asalmu?"
            ],
            correct: "Selamat datang, senang berkenalan denganmu."
        },

        {
            arabic: "هُوَ مُدَرِّسٌ وَهِيَ مُدَرِّسَةٌ",
            answers: [
                "Dia seorang siswa dan dia seorang siswi.",
                "Dia seorang guru dan dia seorang guru.",
                "Dia seorang dokter dan dia seorang guru.",
                "Dia seorang pelajar dan dia seorang guru."
            ],
            correct: "Dia seorang guru dan dia seorang guru."
        },

        {
            arabic: "هَلْ أَنْتَ طَالِبٌ؟ نَعَمْ، أَنَا طَالِبٌ.",
            answers: [
                "Apakah kamu seorang guru? Ya, saya seorang guru.",
                "Apakah kamu seorang pelajar? Ya, saya seorang pelajar.",
                "Apakah kamu seorang dokter? Ya, saya seorang dokter.",
                "Apakah kamu seorang siswa baru? Ya, saya siswa baru."
            ],
            correct: "Apakah kamu seorang pelajar? Ya, saya seorang pelajar."
        },

        {
            arabic: "مَعَ السَّلَامَةِ، إِلَى اللِّقَاءِ غَدًا.",
            answers: [
                "Selamat datang, sampai jumpa.",
                "Assalamu'alaikum, bagaimana kabarmu?",
                "Selamat tinggal, sampai jumpa besok.",
                "Selamat pagi, sampai jumpa hari ini."
            ],
            correct: "Selamat tinggal, sampai jumpa besok."
        }

    ],


    // ==================================================
    // BAB 2 — الْمَرَافِقُ الْمَدْرَسِيَةُ
    // ==================================================
    2: [

        {
            arabic: "هَذَا فَصْلِيْ، فَصْلٌ نَظِيْفٌ وَوَاسِعٌ.",
            answers: [
                "Ini kelasku, kelas yang bersih dan luas.",
                "Ini sekolahku, sekolah yang bersih dan luas.",
                "Ini kelasku, kelas yang kecil dan bersih.",
                "Ini perpustakaanku, perpustakaan yang bersih dan luas."
            ],
            correct: "Ini kelasku, kelas yang bersih dan luas."
        },

        {
            arabic: "نَحْنُ نَدْرُسُ فِي الْفَصْلِ كُلَّ يَوْمٍ.",
            answers: [
                "Kami bermain di dalam kelas setiap hari.",
                "Kami belajar di dalam kelas setiap hari.",
                "Kami membaca buku di kelas setiap hari.",
                "Kami makan di dalam kelas setiap hari."
            ],
            correct: "Kami belajar di dalam kelas setiap hari."
        },

        {
            arabic: "ذَهَبَ الْمُدِيْرُ إِلَى الْمَكْتَبِ.",
            answers: [
                "Kepala sekolah pergi ke kantor.",
                "Guru pergi ke kelas.",
                "Siswa pergi ke kantor.",
                "Kepala sekolah pergi ke perpustakaan."
            ],
            correct: "Kepala sekolah pergi ke kantor."
        },

        {
            arabic: "أَذْهَبُ إِلَى الْمَكْتَبَةِ لِقِرَاءَةِ الْكِتَابِ.",
            answers: [
                "Saya pergi ke kantin untuk membeli makanan.",
                "Saya pergi ke perpustakaan untuk membaca buku.",
                "Saya pergi ke kelas untuk belajar.",
                "Saya pergi ke lapangan untuk bermain."
            ],
            correct: "Saya pergi ke perpustakaan untuk membaca buku."
        },

        {
            arabic: "الطُّلَّابُ يَلْعَبُوْنَ فِي الْمَلْعَبِ.",
            answers: [
                "Para siswa belajar di kelas.",
                "Para siswa membaca di perpustakaan.",
                "Para siswa bermain di lapangan.",
                "Para siswa makan di kantin."
            ],
            correct: "Para siswa bermain di lapangan."
        },

        {
            arabic: "هَذَا مَسْجِدُ الْمَدْرَسَةِ، كَبِيْرٌ وَجَمِيْلٌ.",
            answers: [
                "Ini adalah masjid sekolah, besar dan indah.",
                "Ini adalah kelas sekolah, besar dan indah.",
                "Ini adalah lapangan sekolah, besar dan indah.",
                "Ini adalah perpustakaan sekolah, besar dan indah."
            ],
            correct: "Ini adalah masjid sekolah, besar dan indah."
        },

        {
            arabic: "نَشْتَرِي الطَّعَامَ فِي الْمَقْصَفِ.",
            answers: [
                "Kami membeli buku di perpustakaan.",
                "Kami membeli makanan di kantin.",
                "Kami membeli alat tulis di kelas.",
                "Kami membeli makanan di pasar."
            ],
            correct: "Kami membeli makanan di kantin."
        },

        {
            arabic: "أَيْنَ الْمُخْتَبَرُ؟ الْمُخْتَبَرُ بِجَانِبِ الْمَكْتَبَةِ.",
            answers: [
                "Di mana kelas? Kelas di samping kantin.",
                "Di mana laboratorium? Laboratorium di samping perpustakaan.",
                "Di mana perpustakaan? Perpustakaan di samping kelas.",
                "Di mana kantor? Kantor di samping laboratorium."
            ],
            correct: "Di mana laboratorium? Laboratorium di samping perpustakaan."
        },

        {
            arabic: "هَذِهِ حَدِيْقَةُ الْمَدْرَسَةِ، فِيْهَا أَزْهَارٌ كَثِيْرَةٌ.",
            answers: [
                "Ini adalah lapangan sekolah, di dalamnya ada banyak siswa.",
                "Ini adalah taman sekolah, di dalamnya ada banyak bunga.",
                "Ini adalah kelas sekolah, di dalamnya ada banyak buku.",
                "Ini adalah perpustakaan sekolah, di dalamnya ada banyak buku."
            ],
            correct: "Ini adalah taman sekolah, di dalamnya ada banyak bunga."
        },

        {
            arabic: "ذَهَبْتُ إِلَى الْحَمَّامِ لِلْوُضُوْءِ.",
            answers: [
                "Saya pergi ke masjid untuk salat.",
                "Saya pergi ke kamar mandi untuk berwudhu.",
                "Saya pergi ke kelas untuk belajar.",
                "Saya pergi ke kantin untuk makan."
            ],
            correct: "Saya pergi ke kamar mandi untuk berwudhu."
        }

    ],


    // ==================================================
    // BAB 3 — الْأَدَوَاتُ الْمَدْرَسِيَّةُ
    // ==================================================
    3: [

        {
            arabic: "فِيْ حَقِيْبَتِيْ كِتَابٌ وَقَلَمٌ.",
            answers: [
                "Di dalam tasku ada buku dan pulpen.",
                "Di dalam tasku ada pensil dan penghapus.",
                "Di dalam kelas ada buku dan pulpen.",
                "Di atas mejaku ada buku dan pulpen."
            ],
            correct: "Di dalam tasku ada buku dan pulpen."
        },

        {
            arabic: "هَذَا قَلَمُ رَصَاصٍ وَتِلْكَ مِمْحَاةٌ.",
            answers: [
                "Ini pulpen dan itu penggaris.",
                "Ini pensil dan itu penghapus.",
                "Ini buku dan itu pensil.",
                "Ini penghapus dan itu pensil."
            ],
            correct: "Ini pensil dan itu penghapus."
        },

        {
            arabic: "هَذِهِ مِسْطَرَةٌ طَوِيْلَةٌ وَجَمِيْلَةٌ.",
            answers: [
                "Ini penggaris yang panjang dan bagus.",
                "Ini pensil yang panjang dan bagus.",
                "Ini buku yang panjang dan bagus.",
                "Ini penghapus yang panjang dan bagus."
            ],
            correct: "Ini penggaris yang panjang dan bagus."
        },

        {
            arabic: "أَيْنَ كِتَابُكَ؟ كِتَابِيْ عَلَى الْمَكْتَبِ.",
            answers: [
                "Di mana bukumu? Bukuku di dalam tas.",
                "Di mana bukumu? Bukuku di atas meja.",
                "Di mana pensilmu? Pensilku di atas meja.",
                "Di mana bukumu? Bukuku di dalam kelas."
            ],
            correct: "Di mana bukumu? Bukuku di atas meja."
        },

        {
            arabic: "مَا لَوْنُ هَذِهِ الْحَقِيْبَةِ؟ لَوْنُهَا أَزْرَقُ.",
            answers: [
                "Apa warna tas ini? Warnanya biru.",
                "Apa warna tas ini? Warnanya merah.",
                "Apa nama tas ini? Namanya biru.",
                "Di mana tas ini? Tasnya berwarna biru."
            ],
            correct: "Apa warna tas ini? Warnanya biru."
        },

        {
            arabic: "قَلَمِيْ لَوْنُهُ أَسْوَدُ وَقَلَمُهَا لَوْنُهُ أَحْمَرُ.",
            answers: [
                "Pulpenku warnanya hitam dan pulpennya (pr) warnanya merah.",
                "Pulpenku warnanya merah dan pulpennya (pr) warnanya hitam.",
                "Pensilku warnanya hitam dan pensilnya (pr) warnanya merah.",
                "Pulpenku warnanya biru dan pulpennya (pr) warnanya merah."
            ],
            correct: "Pulpenku warnanya hitam dan pulpennya (pr) warnanya merah."
        },

        {
            arabic: "هَذِهِ سَاعَةُ الْحَائِطِ، كَبِيْرَةٌ.",
            answers: [
                "Ini jam dinding, besar.",
                "Ini jam tangan, besar.",
                "Ini jam dinding, kecil.",
                "Ini meja dinding, besar."
            ],
            correct: "Ini jam dinding, besar."
        },

        {
            arabic: "فِي الْفَصْلِ سَبُّوْرَةٌ وَطَبَاشِيْرُ.",
            answers: [
                "Di dalam kelas ada meja dan kursi.",
                "Di dalam kelas ada papan tulis dan kapur.",
                "Di dalam kelas ada buku dan pulpen.",
                "Di dalam kelas ada penggaris dan pensil."
            ],
            correct: "Di dalam kelas ada papan tulis dan kapur."
        },

        {
            arabic: "اِفْتَحْ كِتَابَكَ وَاقْرَأِ الدَّرْسَ!",
            answers: [
                "Bukalah bukumu dan bacalah pelajarannya!",
                "Tutuplah bukumu dan bacalah pelajarannya!",
                "Bukalah tasmu dan bacalah bukumu!",
                "Ambillah bukumu dan tulislah pelajarannya!"
            ],
            correct: "Bukalah bukumu dan bacalah pelajarannya!"
        },

        {
            arabic: "مِقْلَمَتِيْ فِيْهَا أَقْلَامٌ مُلَوَّنَةٌ.",
            answers: [
                "Di dalam tasku ada buku-buku berwarna.",
                "Di dalam kotak pensilku ada pulpen-pulpen berwarna-warni.",
                "Di dalam kelas ada pulpen-pulpen berwarna-warni.",
                "Di dalam kotak pensilku ada pensil-pensil berwarna."
            ],
            correct: "Di dalam kotak pensilku ada pulpen-pulpen berwarna-warni."
        }

    ]

};


// ======================================================
// VARIABEL GAME
// ======================================================

let currentLevel = 1;

let currentQuestion = 0;

let score = 0;

let translateQuestionIndex = 0;

let translateScore = 0;


// ======================================================
// FUNGSI MENGAMBIL ELEMEN HTML
// ======================================================

function el(id) {
    return document.getElementById(id);
}


// ======================================================
// ELEMEN HALAMAN
// ======================================================

const homePage = el("homePage");

const levelPage = el("levelPage");

const gameMenu = el("gameMenu");

const gameCocokkan = el("gameCocokkan");

const gameTerjemahkan = el("gameTerjemahkan");

const gameGambar = el("gameGambar");

const gameListening = el("gameListening");


// ======================================================
// TOMBOL UTAMA
// ======================================================

const startButton = el("startButton");

const backToHomeButton =
    el("backToHomeButton");

const backToLevelFromMenu =
    el("backToLevelFromMenu");

const backToGameMenuButton =
    el("backToGameMenuButton");

const backFromTranslate =
    el("backFromTranslate");

const backFromGambar =
    el("backFromGambar");

const backFromListening =
    el("backFromListening");


// ======================================================
// TOMBOL PILIH LEVEL
// ======================================================

const levelButtons =
    document.querySelectorAll(".level-button");


// ======================================================
// TOMBOL PILIH PERMAINAN
// ======================================================

const cocokkanButton =
    el("cocokkanButton");

const terjemahkanButton =
    el("terjemahkanButton");

const gambarButton =
    el("gambarButton");

const listeningButton =
    el("listeningButton");


// ======================================================
// ELEMEN GAME COCOKKAN
// ======================================================

const kataArab =
    el("kataArab");

const answersContainer =
    document.querySelector(
        "#gameCocokkan .answers"
    );

const feedback =
    el("feedback");

const nextButton =
    el("nextButton");

const nomorSoal =
    el("nomorSoal");

const scoreDisplay =
    el("score");

const progressBar =
    el("progressBar");

const progressText =
    el("progressText");


// ======================================================
// FUNGSI MENYEMBUNYIKAN SEMUA HALAMAN
// ======================================================

function sembunyikanSemua() {

    if (homePage)
        homePage.style.display = "none";

    if (levelPage)
        levelPage.style.display = "none";

    if (gameMenu)
        gameMenu.style.display = "none";

    if (gameCocokkan)
        gameCocokkan.style.display = "none";

    if (gameTerjemahkan)
        gameTerjemahkan.style.display = "none";

    if (gameGambar)
        gameGambar.style.display = "none";

    if (gameListening)
        gameListening.style.display = "none";
}


// ======================================================
// HALAMAN AWAL
// ======================================================

sembunyikanSemua();

if (homePage) {
    homePage.style.display = "block";
}


// ======================================================
// MULAI BERMAIN
// ======================================================

if (startButton) {

    startButton.addEventListener(
        "click",
        function () {

            sembunyikanSemua();

            if (levelPage) {
                levelPage.style.display = "block";
            }

        }
    );

}


// ======================================================
// KEMBALI KE HOME
// ======================================================

if (backToHomeButton) {

    backToHomeButton.addEventListener(
        "click",
        function () {

            sembunyikanSemua();

            if (homePage) {
                homePage.style.display = "block";
            }

        }
    );

}


// ======================================================
// PILIH LEVEL
// ======================================================

levelButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                currentLevel =
                    Number(
                        button.dataset.level
                    );

                // Reset Cocokkan
                currentQuestion = 0;
                score = 0;

                // Reset Terjemahkan
                translateQuestionIndex = 0;
                translateScore = 0;

                // Sembunyikan semua
                sembunyikanSemua();

                // Tampilkan menu permainan
                if (gameMenu) {
                    gameMenu.style.display =
                        "block";
                }

                // Tampilkan level
                const menuLevelNumber =
                    el("menuLevelNumber");

                const menuLevelName =
                    el("menuLevelName");

                if (menuLevelNumber) {

                    menuLevelNumber.textContent =
                        "LEVEL " +
                        currentLevel;

                }

                if (menuLevelName) {

                    menuLevelName.textContent =
                        levels[currentLevel].title;

                }

            }
        );

    }
);


// ======================================================
// KEMBALI KE PILIH LEVEL
// ======================================================

if (backToLevelFromMenu) {

    backToLevelFromMenu.addEventListener(
        "click",
        function () {

            sembunyikanSemua();

            if (levelPage) {
                levelPage.style.display =
                    "block";
            }

        }
    );

}


// ======================================================
// ======================================================
// GAME 1 — COCOKKAN MUFRADAT
// ======================================================
// ======================================================

if (cocokkanButton) {

    cocokkanButton.addEventListener(
        "click",
        function () {

            currentQuestion = 0;
            score = 0;

            sembunyikanSemua();

            if (gameCocokkan) {
                gameCocokkan.style.display =
                    "block";
            }

            const levelNumber =
                el("levelNumber");

            const levelName =
                el("levelName");

            if (levelNumber) {

                levelNumber.textContent =
                    "LEVEL " +
                    currentLevel;

            }

            if (levelName) {

                levelName.textContent =
                    levels[currentLevel].title;

            }

            if (scoreDisplay) {
                scoreDisplay.textContent = "0";
            }

            if (nextButton) {

                nextButton.textContent =
                    "Soal Berikutnya →";

                nextButton.style.display =
                    "none";

            }

            tampilkanSoalCocokkan();

        }
    );

}


// ======================================================
// KEMBALI DARI COCOKKAN
// ======================================================

if (backToGameMenuButton) {

    backToGameMenuButton.addEventListener(
        "click",
        function () {

            sembunyikanSemua();

            if (gameMenu) {
                gameMenu.style.display =
                    "block";
            }

        }
    );

}


// ======================================================
// MENAMPILKAN SOAL COCOKKAN
// ======================================================

function tampilkanSoalCocokkan() {

    const questions =
        levels[currentLevel].questions;

    const question =
        questions[currentQuestion];

    if (!question) return;


    // Tampilkan kata Arab
    if (kataArab) {

        kataArab.textContent =
            question.arabic;

    }


    // Nomor soal
    if (nomorSoal) {

        nomorSoal.textContent =
            currentQuestion + 1;

    }


    // Skor
    if (scoreDisplay) {

        scoreDisplay.textContent =
            score;

    }


    // Progress
    const percentage =
        (
            (currentQuestion + 1)
            /
            questions.length
        ) * 100;


    if (progressBar) {

        progressBar.style.width =
            percentage + "%";

    }


    if (progressText) {

        progressText.textContent =
            Math.round(percentage) +
            "% selesai";

    }


    // Reset feedback
    if (feedback) {

        feedback.textContent = "";

    }


    // Sembunyikan tombol berikutnya
    if (nextButton) {

        nextButton.style.display =
            "none";

    }


    // Hapus pilihan lama
    if (answersContainer) {

        answersContainer.innerHTML = "";

    }


    // Buat pilihan jawaban
    question.answers.forEach(
        function (answer) {

            const button =
                document.createElement(
                    "button"
                );

            button.className =
                "answer";

            button.textContent =
                answer;


            button.addEventListener(
                "click",
                function () {

                    periksaJawabanCocokkan(
                        answer
                    );

                }
            );


            answersContainer.appendChild(
                button
            );

        }
    );

}


// ======================================================
// CEK JAWABAN COCOKKAN
// ======================================================

function periksaJawabanCocokkan(
    answer
) {

    const question =
        levels[currentLevel]
        .questions[currentQuestion];

    if (!question) return;


    const correctAnswer =
        question.correct;


    const buttons =
        answersContainer.querySelectorAll(
            ".answer"
        );


    // Matikan semua tombol
    buttons.forEach(
        function (button) {

            button.disabled = true;

        }
    );


    // ==================================================
    // JAWABAN BENAR
    // ==================================================

    if (answer === correctAnswer) {

        score += 10;

        if (scoreDisplay) {

            scoreDisplay.textContent =
                score;

        }


        if (feedback) {

            feedback.textContent =
                "🎉 Benar! +10 poin";

        }


        buttons.forEach(
            function (button) {

                if (
                    button.textContent ===
                    answer
                ) {

                    button.classList.add(
                        "correct"
                    );

                }

            }
        );


        bicaraArab(
            "أحسنت! إجابة صحيحة"
        );

    }


    // ==================================================
    // JAWABAN SALAH
    // ==================================================

    else {

        if (feedback) {

            feedback.textContent =
                "❌ Salah! Jawaban yang benar: " +
                correctAnswer;

        }


        buttons.forEach(
            function (button) {

                if (
                    button.textContent ===
                    answer
                ) {

                    button.classList.add(
                        "wrong"
                    );

                }


                if (
                    button.textContent ===
                    correctAnswer
                ) {

                    button.classList.add(
                        "correct"
                    );

                }

            }
        );


        bicaraArab(
            "حاول مرة أخرى"
        );

    }


    if (nextButton) {

        nextButton.style.display =
            "inline-block";

    }

}


// ======================================================
// SOAL BERIKUTNYA COCOKKAN
// ======================================================

if (nextButton) {

    nextButton.addEventListener(
        "click",
        function () {

            const questions =
                levels[currentLevel].questions;


            // Jika sudah selesai
            if (
                currentQuestion >=
                questions.length - 1
            ) {

                tampilkanHasilCocokkan();

                return;

            }


            currentQuestion++;


            tampilkanSoalCocokkan();

        }
    );

}


// ======================================================
// HASIL COCOKKAN
// ======================================================

function tampilkanHasilCocokkan() {

    if (kataArab) {

        kataArab.textContent =
            "🎉 Selesai!";

    }


    if (answersContainer) {

        answersContainer.innerHTML = "";

    }


    if (feedback) {

        feedback.textContent =
            "Skor akhir kamu: " +
            score +
            " / 100 ⭐";

    }


    if (nomorSoal) {

        nomorSoal.textContent =
            "10";

    }


    if (progressBar) {

        progressBar.style.width =
            "100%";

    }


    if (progressText) {

        progressText.textContent =
            "100% selesai";

    }


    if (nextButton) {

        nextButton.textContent =
            "📚 Pilih Permainan Lagi";

        nextButton.style.display =
            "inline-block";


        // Hapus listener lama dengan
        // mengganti tombol menggunakan clone
        nextButton.onclick = function () {
    sembunyikanSemua();

    if (gameMenu) {
        gameMenu.style.display = "block";
    }
};


        newButton.addEventListener(
            "click",
            function () {

                sembunyikanSemua();

                if (gameMenu) {

                    gameMenu.style.display =
                        "block";

                }

            }
        );

    }

}


// ======================================================
// ======================================================
// GAME 2 — TERJEMAHKAN
// ======================================================
// ======================================================

if (terjemahkanButton) {

    terjemahkanButton.addEventListener(
        "click",
        function () {

            translateQuestionIndex = 0;

            translateScore = 0;


            // PENTING:
            // Sembunyikan SEMUA halaman dahulu
            sembunyikanSemua();


            // Hanya Terjemahkan yang tampil
            if (gameTerjemahkan) {

                gameTerjemahkan.style.display =
                    "block";

            }


            // Level
            const levelNumber =
                el("translateLevelNumber");

            const levelName =
                el("translateLevelName");


            if (levelNumber) {

                levelNumber.textContent =
                    "LEVEL " +
                    currentLevel;

            }


            if (levelName) {

                levelName.textContent =
                    levels[currentLevel].title;

            }


            // Skor
            const translateScoreElement =
                el("translateScore");

            if (translateScoreElement) {

                translateScoreElement.textContent =
                    "0";

            }


            tampilkanSoalTerjemahkan();

        }
    );

}


// ======================================================
// MENAMPILKAN SOAL TERJEMAHKAN
// ======================================================

function tampilkanSoalTerjemahkan() {

    const questions =
        translateQuestions[currentLevel];

    const question =
        questions[translateQuestionIndex];

    if (!question) return;


    const questionElement =
        el("translateQuestion");

    const answerContainer =
        el("translateAnswers");

    const feedbackElement =
        el("translateFeedback");

    const next =
        el("translateNextButton");

    const nomor =
        el("translateNomorSoal");

    const progress =
        el("translateProgressBar");

    const progressTextElement =
        el("translateProgressText");


    // ==================================================
    // SOAL
    // ==================================================

    if (questionElement) {

        questionElement.textContent =
            question.arabic;

    }


    // ==================================================
    // NOMOR
    // ==================================================

    if (nomor) {

        nomor.textContent =
            translateQuestionIndex + 1;

    }


    // ==================================================
    // PROGRESS
    // ==================================================

    const percentage =
        (
            (translateQuestionIndex + 1)
            /
            questions.length
        ) * 100;


    if (progress) {

        progress.style.width =
            percentage + "%";

    }


    if (progressTextElement) {

        progressTextElement.textContent =
            Math.round(percentage) +
            "% selesai";

    }


    // ==================================================
    // RESET
    // ==================================================

    if (answerContainer) {

        answerContainer.innerHTML = "";

    }


    if (feedbackElement) {

        feedbackElement.textContent = "";

    }


    if (next) {

        next.style.display = "none";

        next.textContent =
            "Soal Berikutnya →";

    }


    // ==================================================
    // PILIHAN JAWABAN
    // ==================================================

    question.answers.forEach(
        function (answer) {

            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "answer";


            button.textContent =
                answer;


            button.addEventListener(
                "click",
                function () {

                    periksaJawabanTerjemahkan(
                        answer
                    );

                }
            );


            answerContainer.appendChild(
                button
            );

        }
    );

}


// ======================================================
// CEK JAWABAN TERJEMAHKAN
// ======================================================

function periksaJawabanTerjemahkan(
    answer
) {

    const question =
        translateQuestions[currentLevel]
        [translateQuestionIndex];

    if (!question) return;


    const correctAnswer =
        question.correct;


    const answerContainer =
        el("translateAnswers");

    const feedbackElement =
        el("translateFeedback");

    const next =
        el("translateNextButton");

    const scoreElement =
        el("translateScore");


    const buttons =
        answerContainer.querySelectorAll(
            ".answer"
        );


    // Matikan tombol
    buttons.forEach(
        function (button) {

            button.disabled = true;

        }
    );


    // ==================================================
    // BENAR
    // ==================================================

    if (answer === correctAnswer) {

        translateScore += 10;


        if (scoreElement) {

            scoreElement.textContent =
                translateScore;

        }


        if (feedbackElement) {

            feedbackElement.textContent =
                "🎉 Benar! +10 poin";

        }


        buttons.forEach(
            function (button) {

                if (
                    button.textContent ===
                    answer
                ) {

                    button.classList.add(
                        "correct"
                    );

                }

            }
        );


        bicaraArab(
            "أحسنت! إجابة صحيحة"
        );

    }


    // ==================================================
    // SALAH
    // ==================================================

    else {

        if (feedbackElement) {

            feedbackElement.textContent =
                "❌ Salah! Jawaban yang benar: " +
                correctAnswer;

        }


        buttons.forEach(
            function (button) {

                if (
                    button.textContent ===
                    answer
                ) {

                    button.classList.add(
                        "wrong"
                    );

                }


                if (
                    button.textContent ===
                    correctAnswer
                ) {

                    button.classList.add(
                        "correct"
                    );

                }

            }
        );


        bicaraArab(
            "حاول مرة أخرى"
        );

    }


    if (next) {

        next.style.display =
            "inline-block";

    }

}


// ======================================================
// SOAL BERIKUTNYA TERJEMAHKAN
// ======================================================

const translateNextButton =
    el("translateNextButton");


if (translateNextButton) {

    translateNextButton.addEventListener(
        "click",
        function () {

            const questions =
                translateQuestions[currentLevel];


            // Jika soal terakhir
            if (
                translateQuestionIndex >=
                questions.length - 1
            ) {

                tampilkanHasilTerjemahkan();

                return;

            }


            translateQuestionIndex++;


            tampilkanSoalTerjemahkan();

        }
    );

}


// ======================================================
// HASIL TERJEMAHKAN
// ======================================================

function tampilkanHasilTerjemahkan() {

    const question =
        el("translateQuestion");

    const answers =
        el("translateAnswers");

    const feedbackElement =
        el("translateFeedback");

    const progress =
        el("translateProgressBar");

    const progressTextElement =
        el("translateProgressText");

    const next =
        el("translateNextButton");

    const nomor =
        el("translateNomorSoal");


    if (question) {

        question.textContent =
            "🎉 Selesai!";

    }


    if (answers) {

        answers.innerHTML = "";

    }


    if (feedbackElement) {

        feedbackElement.textContent =
            "Skor akhir kamu: " +
            translateScore +
            " / 100 ⭐";

    }


    if (progress) {

        progress.style.width =
            "100%";

    }


    if (progressTextElement) {

        progressTextElement.textContent =
            "100% selesai";

    }


    if (nomor) {

        nomor.textContent =
            "10";

    }


    if (next) {

        next.textContent =
            "🔄 Mainkan Lagi";

        next.style.display =
            "inline-block";


        // Hapus event lama
        nextButton.onclick = function () {
    sembunyikanSemua();

    if (gameMenu) {
        gameMenu.style.display = "block";
    }
};


        newButton.addEventListener(
            "click",
            function () {

                translateQuestionIndex =
                    0;

                translateScore =
                    0;


                const scoreElement =
                    el("translateScore");


                if (scoreElement) {

                    scoreElement.textContent =
                        "0";

                }


                tampilkanSoalTerjemahkan();

            }
        );

    }

}


// ======================================================
// KEMBALI DARI TERJEMAHKAN
// ======================================================

if (backFromTranslate) {

    backFromTranslate.addEventListener(
        "click",
        function () {

            sembunyikanSemua();

            if (gameMenu) {

                gameMenu.style.display =
                    "block";

            }

        }
    );

}

// ======================================================
// ======================================================
// GAME 3 — TEBAK GAMBAR
// ======================================================
// ======================================================

const gambarNomorSoal = el("gambarNomorSoal");
const gambarScore = el("gambarScore");
const gambarProgressBar = el("gambarProgressBar");
const gambarProgressText = el("gambarProgressText");
const gambarImage = el("gambarImage");
const gambarQuestion = el("gambarQuestion");
const gambarAnswers = el("gambarAnswers");
const gambarFeedback = el("gambarFeedback");
const gambarNextButton = el("gambarNextButton");

let gambarCurrentQuestion = 0;
let gambarCurrentScore = 0;

// ==================================================
// DATA TEBAK GAMBAR
// ==================================================

const gambarQuestions = {

    // ==================================================
    // LEVEL 1
    // ==================================================

    1: {
    title: "التَّعَارُفُ",

    questions: [

        {
            image: "image/صديق.jpeg",
            correct: "صَدِيقٌ",
            answers: [
                "صَدِيقٌ",
                "طَبِيبٌ",
                "مُدِيرٌ",
                "طَالِبَةٌ"
            ]
        },

        {
            image: "image/أستاذ.jpeg",
            correct: "أُسْتَاذٌ",
            answers: [
                "أُسْتَاذٌ",
                "طَبِيبٌ",
                "صَدِيقٌ",
                "أَخٌ"
            ]
        },

        {
            image: "image/طبيب.jpeg",
            correct: "طَبِيبٌ",
            answers: [
                "طَبِيبٌ",
                "مُدِيرٌ",
                "أُسْتَاذٌ",
                "طَالِبٌ"
            ]
        },

        {
            image: "image/مدير.jpeg",
            correct: "مُدِيرٌ",
            answers: [
                "مُدِيرٌ",
                "طَبِيبٌ",
                "صَدِيقٌ",
                "أَخٌ"
            ]
        },

        {
            image: "image/أخ.jpeg",
            correct: "أَخٌ",
            answers: [
                "أَخٌ",
                "أُخْتٌ",
                "طَالِبَةٌ",
                "مُدِيرٌ"
            ]
        },

        {
            image: "image/أخت.jpeg",
            correct: "أُخْتٌ",
            answers: [
                "أُخْتٌ",
                "أَخٌ",
                "طَالِبٌ",
                "طَبِيبٌ"
            ]
        },

        {
            image: "image/عائلة.jpeg",
            correct: "عَائِلَةٌ",
            answers: [
                "عَائِلَةٌ",
                "صَدِيقٌ",
                "مُدِيرٌ",
                "طَالِبٌ"
            ]
        },

        {
            image: "image/ولد.jpeg",
            correct: "وَلَدٌ",
            answers: [
                "وَلَدٌ",
                "بِنْتٌ",
                "أُخْتٌ",
                "طَالِبَةٌ"
            ]
        },

        {
            image: "image/بنت.jpeg",
            correct: "بِنْتٌ",
            answers: [
                "بِنْتٌ",
                "وَلَدٌ",
                "أَخٌ",
                "طَالِبٌ"
            ]
        },

        {
            image: "image/طالبة.jpeg",
            correct: "طَالِبَةٌ",
            answers: [
                "طَالِبَةٌ",
                "طَالِبٌ",
                "مُدِيرٌ",
                "طَبِيبٌ"
            ]
        }

    ]
},
    // ==================================================
    // LEVEL 2
    // ==================================================

    2: {

        title: "المَرَافِقُ الْمَدْرَسِيَّةُ",

        questions: [

            {
                image: "taman",
                correct: "حَدِيقَةٌ",
                answers: [
                    "حَدِيقَةٌ",
                    "حَمَّامٌ",
                    "مَقْصَفٌ",
                    "مَلْعَبٌ"
                ]
            },

            {
                image: "kamar_mandi",
                correct: "حَمَّامٌ",
                answers: [
                    "حَمَّامٌ",
                    "مَكْتَبٌ",
                    "مَسْجِدٌ",
                    "حَدِيقَةٌ"
                ]
            },

            {
                image: "pintu",
                correct: "بَابٌ",
                answers: [
                    "بَابٌ",
                    "نَافِذَةٌ",
                    "مَدْخَلٌ",
                    "مَخْرَجٌ"
                ]
            },

            {
                image: "jendela",
                correct: "نَافِذَةٌ",
                answers: [
                    "نَافِذَةٌ",
                    "بَابٌ",
                    "مَكْتَبٌ",
                    "مَقْصَفٌ"
                ]
            },

            {
                image: "halaman",
                correct: "سَاحَةٌ",
                answers: [
                    "سَاحَةٌ",
                    "حَدِيقَةٌ",
                    "حَمَّامٌ",
                    "مَكْتَبٌ"
                ]
            },

            {
                image: "masuk",
                correct: "مَدْخَلٌ",
                answers: [
                    "مَدْخَلٌ",
                    "مَخْرَجٌ",
                    "بَابٌ",
                    "مَكْتَبٌ"
                ]
            },

            {
                image: "keluar",
                correct: "مَخْرَجٌ",
                answers: [
                    "مَخْرَجٌ",
                    "مَدْخَلٌ",
                    "فَصْلٌ",
                    "مَقْصَفٌ"
                ]
            },

            {
                image: "kantor_kepala",
                correct: "مَكْتَبُ الْمُدِيرِ",
                answers: [
                    "مَكْتَبُ الْمُدِيرِ",
                    "مَكْتَبَةٌ",
                    "مَقْصَفٌ",
                    "فَصْلٌ"
                ]
            },

            {
                image: "ruang_guru",
                correct: "غُرْفَةُ الْمُعَلِّمِينَ",
                answers: [
                    "غُرْفَةُ الْمُعَلِّمِينَ",
                    "مَكْتَبُ الْمُدِيرِ",
                    "مَلْعَبٌ",
                    "حَمَّامٌ"
                ]
            },

            {
                image: "kantin",
                correct: "مَقْصَفٌ",
                answers: [
                    "مَقْصَفٌ",
                    "مَلْعَبٌ",
                    "مَكْتَبَةٌ",
                    "مَسْجِدٌ"
                ]
            }

        ]
    },


    // ==================================================
    // LEVEL 3
    // ==================================================

    3: {

        title: "الْأَدَوَاتُ الْمَدْرَسِيَّةُ",

        questions: [

            {
                image: "papan",
                correct: "سَبُّورَةٌ",
                answers: [
                    "سَبُّورَةٌ",
                    "طَبَاشِيرُ",
                    "مِقْلَمَةٌ",
                    "دَفْتَرٌ"
                ]
            },

            {
                image: "kapur",
                correct: "طَبَاشِيرُ",
                answers: [
                    "طَبَاشِيرُ",
                    "مِمْحَاةٌ",
                    "مِسْطَرَةٌ",
                    "مِقْلَمَةٌ"
                ]
            },

            {
                image: "kotak_pensil",
                correct: "مِقْلَمَةٌ",
                answers: [
                    "مِقْلَمَةٌ",
                    "حَقِيبَةٌ",
                    "دَفْتَرٌ",
                    "سَبُّورَةٌ"
                ]
            },

            {
                image: "buku_catatan",
                correct: "دَفْتَرٌ",
                answers: [
                    "دَفْتَرٌ",
                    "كِتَابٌ",
                    "مِسْطَرَةٌ",
                    "مِقْلَمَةٌ"
                ]
            },

            {
                image: "gunting",
                correct: "مَقَصٌّ",
                answers: [
                    "مَقَصٌّ",
                    "صَمْغٌ",
                    "مِمْحَاةٌ",
                    "مِبْرَاةٌ"
                ]
            },

            {
                image: "lem",
                correct: "صَمْغٌ",
                answers: [
                    "صَمْغٌ",
                    "مَقَصٌّ",
                    "طَبَاشِيرُ",
                    "دَفْتَرٌ"
                ]
            },

            {
                image: "pensil_warna",
                correct: "أَقْلَامٌ مُلَوَّنَةٌ",
                answers: [
                    "أَقْلَامٌ مُلَوَّنَةٌ",
                    "طَبَاشِيرُ",
                    "مِقْلَمَةٌ",
                    "كُرَّاسَةٌ"
                ]
            },

            {
                image: "rautan",
                correct: "مِبْرَاةٌ",
                answers: [
                    "مِبْرَاةٌ",
                    "مِمْحَاةٌ",
                    "مَقَصٌّ",
                    "مِسْطَرَةٌ"
                ]
            },

            {
                image: "buku_tulis",
                correct: "كُرَّاسَةٌ",
                answers: [
                    "كُرَّاسَةٌ",
                    "دَفْتَرٌ",
                    "كِتَابٌ",
                    "حَقِيبَةٌ"
                ]
            },

            {
                image: "tas",
                correct: "مَحْفَظَةٌ",
                answers: [
                    "مَحْفَظَةٌ",
                    "مِقْلَمَةٌ",
                    "كُرَّاسَةٌ",
                    "دَفْتَرٌ"
                ]
            }

        ]
    }

};


// ======================================================
// ILUSTRASI SVG
// Tidak membutuhkan file gambar tambahan
// ======================================================

function buatIlustrasiGambar(jenis) {

    const orang = `
        <circle cx="250" cy="105" r="45"
                fill="#f5cfa0"
                stroke="#333"
                stroke-width="4"/>
        <path d="M205 95 Q250 35 295 95"
                fill="#333"/>
        <rect x="205" y="150"
              width="90"
              height="130"
              rx="25"
              fill="#7db7d9"
              stroke="#333"
              stroke-width="4"/>
        <line x1="205" y1="180"
              x2="155" y2="240"
              stroke="#333"
              stroke-width="12"
              stroke-linecap="round"/>
        <line x1="295" y1="180"
              x2="345" y2="240"
              stroke="#333"
              stroke-width="12"
              stroke-linecap="round"/>
        <line x1="230" y1="280"
              x2="220" y2="345"
              stroke="#333"
              stroke-width="14"/>
        <line x1="270" y1="280"
              x2="280" y2="345"
              stroke="#333"
              stroke-width="14"/>
    `;

    const svg = (isi) => `
        <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 500 400"
             width="100%"
             height="100%"
             role="img">

            <rect width="500"
                  height="400"
                  rx="30"
                  fill="#f8fbff"/>

            ${isi}

        </svg>
    `;


    // ==================================================
    // LEVEL 1
    // ==================================================

    if (jenis === "teman") {

        return svg(`
            <g transform="translate(-85 20) scale(.75)">
                ${orang}
            </g>

            <g transform="translate(85 20) scale(.75)">
                ${orang.replace("#7db7d9", "#e8a7c0")}
            </g>
        `);

    }


    if (jenis === "guru") {

        return svg(`
            <rect x="320" y="70"
                  width="120"
                  height="190"
                  rx="10"
                  fill="#dcebd5"
                  stroke="#333"
                  stroke-width="5"/>

            <line x1="340" y1="120"
                  x2="420" y2="120"
                  stroke="#555"
                  stroke-width="6"/>

            <line x1="340" y1="155"
                  x2="400" y2="155"
                  stroke="#555"
                  stroke-width="6"/>

            ${orang}
        `);

    }


    if (jenis === "dokter") {

        return svg(`
            ${orang.replace("#7db7d9", "#ffffff")}

            <circle cx="305" cy="220"
                    r="35"
                    fill="none"
                    stroke="#333"
                    stroke-width="7"/>

            <path d="M305 255
                     C350 280 350 320 315 330"
                  fill="none"
                  stroke="#333"
                  stroke-width="7"/>

            <line x1="290" y1="220"
                  x2="320" y2="220"
                  stroke="#333"
                  stroke-width="5"/>
        `);

    }


    if (jenis === "direktur") {

        return svg(`
            ${orang.replace("#7db7d9", "#6d8ed9")}

            <rect x="110" y="285"
                  width="280"
                  height="45"
                  rx="8"
                  fill="#9b7048"
                  stroke="#333"
                  stroke-width="5"/>

            <rect x="175" y="330"
                  width="20"
                  height="45"
                  fill="#333"/>

            <rect x="305" y="330"
                  width="20"
                  height="45"
                  fill="#333"/>
        `);

    }


    if (jenis === "anak_laki") {

        return svg(`
            ${orang.replace("#7db7d9", "#77a9e8")}
        `);

    }


    if (jenis === "anak_perempuan") {

        return svg(`
            ${orang.replace("#7db7d9", "#ed9dbd")}

            <path d="M205 95
                     Q250 30 295 95
                     L290 135
                     Q250 155 210 135 Z"
                  fill="#5b3928"/>
        `);

    }


    if (jenis === "keluarga") {

        return svg(`
            <g transform="translate(-145 30) scale(.55)">
                ${orang}
            </g>

            <g transform="translate(15 30) scale(.55)">
                ${orang.replace("#7db7d9", "#e8a7c0")}
            </g>

            <g transform="translate(-65 160) scale(.42)">
                ${orang.replace("#7db7d9", "#78b86b")}
            </g>

            <g transform="translate(90 160) scale(.42)">
                ${orang.replace("#7db7d9", "#e7a052")}
            </g>
        `);

    }


    if (jenis === "siswi") {

        return svg(`
            ${orang.replace("#7db7d9", "#d99bc8")}

            <path d="M205 100
                     Q250 25 295 100
                     L290 145
                     Q250 165 210 145 Z"
                  fill="#4a3025"/>

            <rect x="225" y="185"
                  width="50"
                  height="70"
                  fill="#ffffff"
                  stroke="#333"
                  stroke-width="3"/>

            <line x1="235" y1="205"
                  x2="265" y2="205"
                  stroke="#555"
                  stroke-width="3"/>

            <line x1="235" y1="220"
                  x2="265" y2="220"
                  stroke="#555"
                  stroke-width="3"/>
        `);

    }


    // ==================================================
    // LEVEL 2
    // ==================================================

    if (jenis === "taman") {

        return svg(`
            <rect x="0" y="270"
                  width="500"
                  height="130"
                  fill="#d8efd1"/>

            <rect x="90" y="230"
                  width="15"
                  height="100"
                  fill="#765438"/>

            <circle cx="100" cy="180"
                    r="65"
                    fill="#71b866"
                    stroke="#333"
                    stroke-width="4"/>

            <circle cx="180" cy="310"
                    r="15"
                    fill="#e98bab"/>

            <circle cx="220" cy="285"
                    r="15"
                    fill="#e9c35b"/>

            <circle cx="260" cy="315"
                    r="15"
                    fill="#e98bab"/>

            <rect x="330" y="285"
                  width="100"
                  height="15"
                  rx="7"
                  fill="#765438"/>

            <rect x="340" y="300"
                  width="10"
                  height="50"
                  fill="#765438"/>

            <rect x="410" y="300"
                  width="10"
                  height="50"
                  fill="#765438"/>
        `);

    }


    if (jenis === "kamar_mandi") {

        return svg(`
            <rect x="100" y="65"
                  width="300"
                  height="270"
                  rx="10"
                  fill="#d8edf7"
                  stroke="#333"
                  stroke-width="5"/>

            <circle cx="250" cy="140"
                    r="45"
                    fill="#ffffff"
                    stroke="#333"
                    stroke-width="5"/>

            <path d="M190 210
                     Q250 170 310 210
                     L310 285
                     L190 285 Z"
                  fill="#ffffff"
                  stroke="#333"
                  stroke-width="5"/>

            <line x1="330" y1="100"
                  x2="330" y2="180"
                  stroke="#555"
                  stroke-width="10"/>

            <circle cx="330" cy="190"
                    r="8"
                    fill="#555"/>
        `);

    }


    if (jenis === "pintu") {

        return svg(`
            <rect x="150" y="45"
                  width="200"
                  height="320"
                  rx="8"
                  fill="#a8754d"
                  stroke="#333"
                  stroke-width="7"/>

            <circle cx="305" cy="210"
                    r="12"
                    fill="#e7c45c"
                    stroke="#333"
                    stroke-width="3"/>
        `);

    }


    if (jenis === "jendela") {

        return svg(`
            <rect x="100" y="75"
                  width="300"
                  height="240"
                  fill="#bde7f4"
                  stroke="#333"
                  stroke-width="8"/>

            <line x1="250" y1="75"
                  x2="250" y2="315"
                  stroke="#333"
                  stroke-width="7"/>

            <line x1="100" y1="195"
                  x2="400" y2="195"
                  stroke="#333"
                  stroke-width="7"/>

            <path d="M70 100 L100 75"
                  stroke="#777"
                  stroke-width="10"/>

            <path d="M430 100 L400 75"
                  stroke="#777"
                  stroke-width="10"/>
        `);

    }


    if (jenis === "halaman") {

        return svg(`
            <rect x="50" y="60"
                  width="400"
                  height="220"
                  rx="15"
                  fill="#d9eef7"
                  stroke="#333"
                  stroke-width="5"/>

            <rect x="180" y="110"
                  width="140"
                  height="100"
                  fill="#ffffff"
                  stroke="#333"
                  stroke-width="5"/>

            <polygon points="165,110 335,110 250,55"
                     fill="#8a5d3b"
                     stroke="#333"
                     stroke-width="5"/>

            <circle cx="105" cy="315"
                    r="25"
                    fill="#74b969"/>

            <circle cx="395" cy="315"
                    r="25"
                    fill="#74b969"/>
        `);

    }


    if (jenis === "masuk") {

        return svg(`
            <rect x="125" y="55"
                  width="250"
                  height="285"
                  fill="#d7e7f2"
                  stroke="#333"
                  stroke-width="6"/>

            <rect x="180" y="125"
                  width="140"
                  height="215"
                  fill="#a8754d"
                  stroke="#333"
                  stroke-width="6"/>

            <path d="M250 95 L250 45"
                  stroke="#333"
                  stroke-width="8"/>

            <polygon points="235,65 265,65 250,35"
                     fill="#333"/>
        `);

    }


    if (jenis === "keluar") {

        return svg(`
            <rect x="125" y="55"
                  width="250"
                  height="285"
                  fill="#d7e7f2"
                  stroke="#333"
                  stroke-width="6"/>

            <rect x="180" y="125"
                  width="140"
                  height="215"
                  fill="#a8754d"
                  stroke="#333"
                  stroke-width="6"/>

            <path d="M250 45 L250 95"
                  stroke="#333"
                  stroke-width="8"/>

            <polygon points="235,75 265,75 250,105"
                     fill="#333"/>
        `);

    }


    if (jenis === "kantor_kepala") {

        return svg(`
            <rect x="70" y="70"
                  width="360"
                  height="230"
                  rx="15"
                  fill="#e8eef7"
                  stroke="#333"
                  stroke-width="5"/>

            <rect x="130" y="175"
                  width="240"
                  height="45"
                  rx="8"
                  fill="#9b7048"
                  stroke="#333"
                  stroke-width="5"/>

            <rect x="215" y="110"
                  width="70"
                  height="50"
                  fill="#dbeaf3"
                  stroke="#333"
                  stroke-width="4"/>

            <circle cx="250" cy="135"
                    r="12"
                    fill="#7da8c9"/>

            <rect x="155" y="220"
                  width="15"
                  height="60"
                  fill="#765438"/>

            <rect x="335" y="220"
                  width="15"
                  height="60"
                  fill="#765438"/>
        `);

    }


    if (jenis === "ruang_guru") {

        return svg(`
            <rect x="60" y="65"
                  width="380"
                  height="250"
                  rx="15"
                  fill="#f1e8d8"
                  stroke="#333"
                  stroke-width="5"/>

            <rect x="110" y="195"
                  width="280"
                  height="35"
                  fill="#9b7048"/>

            <g transform="translate(95 90) scale(.32)">
                ${orang}
            </g>

            <g transform="translate(195 90) scale(.32)">
                ${orang.replace("#7db7d9", "#d99bc8")}
            </g>

            <g transform="translate(295 90) scale(.32)">
                ${orang.replace("#7db7d9", "#8bbf88")}
            </g>
        `);

    }


    if (jenis === "kantin") {

        return svg(`
            <rect x="65" y="70"
                  width="370"
                  height="245"
                  rx="15"
                  fill="#fff0d7"
                  stroke="#333"
                  stroke-width="5"/>

            <rect x="105" y="150"
                  width="290"
                  height="90"
                  fill="#e6a65c"
                  stroke="#333"
                  stroke-width="5"/>

            <circle cx="170" cy="195"
                    r="25"
                    fill="#e87e5c"/>

            <rect x="230" y="175"
                  width="55"
                  height="40"
                  rx="10"
                  fill="#ffffff"
                  stroke="#333"
                  stroke-width="4"/>

            <circle cx="345" cy="195"
                    r="20"
                    fill="#77a9d8"/>

            <rect x="180" y="240"
                  width="15"
                  height="55"
                  fill="#765438"/>

            <rect x="305" y="240"
                  width="15"
                  height="55"
                  fill="#765438"/>
        `);

    }


    // ==================================================
    // LEVEL 3
    // ==================================================

    if (jenis === "papan") {

        return svg(`
            <rect x="80" y="60"
                  width="340"
                  height="230"
                  rx="10"
                  fill="#385b4a"
                  stroke="#333"
                  stroke-width="8"/>

            <line x1="130" y1="120"
                  x2="330" y2="120"
                  stroke="#ffffff"
                  stroke-width="7"/>

            <line x1="130" y1="165"
                  x2="290" y2="165"
                  stroke="#ffffff"
                  stroke-width="7"/>

            <line x1="130" y1="210"
                  x2="350" y2="210"
                  stroke="#ffffff"
                  stroke-width="7"/>

            <rect x="150" y="290"
                  width="200"
                  height="20"
                  fill="#765438"/>

            <line x1="170" y1="310"
                  x2="155" y2="355"
                  stroke="#333"
                  stroke-width="8"/>

            <line x1="330" y1="310"
                  x2="345" y2="355"
                  stroke="#333"
                  stroke-width="8"/>
        `);

    }


    if (jenis === "kapur") {

        return svg(`
            <rect x="125" y="145"
                  width="250"
                  height="70"
                  rx="30"
                  fill="#ffffff"
                  stroke="#333"
                  stroke-width="5"/>

            <rect x="170" y="145"
                  width="45"
                  height="70"
                  fill="#e7b6d4"/>

            <rect x="230" y="145"
                  width="45"
                  height="70"
                  fill="#b9d7e9"/>

            <rect x="290" y="145"
                  width="45"
                  height="70"
                  fill="#e7d48a"/>
        `);

    }


    if (jenis === "kotak_pensil") {

        return svg(`
            <rect x="105" y="130"
                  width="290"
                  height="120"
                  rx="30"
                  fill="#e89a70"
                  stroke="#333"
                  stroke-width="6"/>

            <path d="M105 170
                     Q250 130 395 170"
                  fill="none"
                  stroke="#333"
                  stroke-width="5"/>

            <rect x="155" y="100"
                  width="20"
                  height="90"
                  fill="#e8d27b"
                  transform="rotate(-15 155 100)"/>

            <rect x="205" y="95"
                  width="20"
                  height="95"
                  fill="#78a8df"
                  transform="rotate(5 205 95)"/>

            <rect x="260" y="95"
                  width="20"
                  height="95"
                  fill="#8bc47e"
                  transform="rotate(-5 260 95)"/>

            <rect x="315" y="100"
                  width="20"
                  height="90"
                  fill="#d9859e"
                  transform="rotate(12 315 100)"/>
        `);

    }


    if (jenis === "buku_catatan") {

        return svg(`
            <rect x="135" y="60"
                  width="230"
                  height="285"
                  rx="10"
                  fill="#f2a85e"
                  stroke="#333"
                  stroke-width="6"/>

            <line x1="180" y1="60"
                  x2="180" y2="345"
                  stroke="#333"
                  stroke-width="5"/>

            <line x1="205" y1="125"
                  x2="330" y2="125"
                  stroke="#555"
                  stroke-width="5"/>

            <line x1="205" y1="165"
                  x2="330" y2="165"
                  stroke="#555"
                  stroke-width="5"/>

            <line x1="205" y1="205"
                  x2="315" y2="205"
                  stroke="#555"
                  stroke-width="5"/>

            <line x1="205" y1="245"
                  x2="330" y2="245"
                  stroke="#555"
                  stroke-width="5"/>
        `);

    }


    if (jenis === "gunting") {

        return svg(`
            <circle cx="180" cy="165"
                    r="40"
                    fill="#dce5ec"
                    stroke="#333"
                    stroke-width="6"/>

            <circle cx="320" cy="165"
                    r="40"
                    fill="#dce5ec"
                    stroke="#333"
                    stroke-width="6"/>

            <line x1="195" y1="185"
                  x2="350" y2="310"
                  stroke="#777"
                  stroke-width="14"/>

            <line x1="305" y1="185"
                  x2="150" y2="310"
                  stroke="#777"
                  stroke-width="14"/>

            <circle cx="250" cy="205"
                    r="15"
                    fill="#555"/>
        `);

    }


    if (jenis === "lem") {

        return svg(`
            <rect x="185" y="90"
                  width="130"
                  height="230"
                  rx="25"
                  fill="#dceaf4"
                  stroke="#333"
                  stroke-width="6"/>

            <rect x="215" y="55"
                  width="70"
                  height="50"
                  rx="10"
                  fill="#78a7cf"
                  stroke="#333"
                  stroke-width="5"/>

            <line x1="215" y1="170"
                  x2="285" y2="170"
                  stroke="#555"
                  stroke-width="5"/>

            <line x1="215" y1="205"
                  x2="285" y2="205"
                  stroke="#555"
                  stroke-width="5"/>
        `);

    }


    if (jenis === "pensil_warna") {

        return svg(`
            <g transform="rotate(-25 250 200)">
                <rect x="110" y="180"
                      width="260"
                      height="25"
                      rx="5"
                      fill="#e76f61"/>

                <polygon points="370,180 410,192 370,205"
                         fill="#e4c39b"/>
            </g>

            <g transform="rotate(0 250 200)">
                <rect x="110" y="215"
                      width="260"
                      height="25"
                      rx="5"
                      fill="#71a8df"/>

                <polygon points="370,215 410,227 370,240"
                         fill="#e4c39b"/>
            </g>

            <g transform="rotate(25 250 200)">
                <rect x="110" y="180"
                      width="260"
                      height="25"
                      rx="5"
                      fill="#75b86a"/>

                <polygon points="370,180 410,192 370,205"
                         fill="#e4c39b"/>
            </g>
        `);

    }


    if (jenis === "rautan") {

        return svg(`
            <path d="M150 250
                     L210 100
                     Q250 70 290 100
                     L350 250 Z"
                  fill="#f0b85f"
                  stroke="#333"
                  stroke-width="6"/>

            <circle cx="250" cy="170"
                    r="30"
                    fill="#555"/>

            <polygon points="250,110 270,160 230,160"
                     fill="#d7d7d7"/>

            <rect x="185" y="250"
                  width="130"
                  height="40"
                  rx="10"
                  fill="#77a7d4"
                  stroke="#333"
                  stroke-width="5"/>
        `);

    }


    if (jenis === "buku_tulis") {

        return svg(`
            <rect x="120" y="65"
                  width="260"
                  height="280"
                  rx="10"
                  fill="#fff"
                  stroke="#333"
                  stroke-width="6"/>

            <line x1="165" y1="65"
                  x2="165" y2="345"
                  stroke="#e38b8b"
                  stroke-width="4"/>

            <line x1="190" y1="120"
                  x2="340" y2="120"
                  stroke="#75a5c8"
                  stroke-width="4"/>

            <line x1="190" y1="160"
                  x2="340" y2="160"
                  stroke="#75a5c8"
                  stroke-width="4"/>

            <line x1="190" y1="200"
                  x2="340" y2="200"
                  stroke="#75a5c8"
                  stroke-width="4"/>

            <line x1="190" y1="240"
                  x2="320" y2="240"
                  stroke="#75a5c8"
                  stroke-width="4"/>

            <line x1="190" y1="280"
                  x2="340" y2="280"
                  stroke="#75a5c8"
                  stroke-width="4"/>
        `);

    }


    if (jenis === "tas") {

        return svg(`
            <path d="M145 125
                     Q145 75 250 75
                     Q355 75 355 125
                     L390 320
                     L110 320 Z"
                  fill="#6d8fd1"
                  stroke="#333"
                  stroke-width="7"/>

            <path d="M195 125
                     Q195 45 250 45
                     Q305 45 305 125"
                  fill="none"
                  stroke="#333"
                  stroke-width="12"/>

            <rect x="190" y="190"
                  width="120"
                  height="65"
                  rx="12"
                  fill="#86a8e0"
                  stroke="#333"
                  stroke-width="5"/>

            <circle cx="250" cy="220"
                    r="10"
                    fill="#e7c35e"/>
        `);

    }


    // ==================================================
    // GAMBAR DEFAULT
    // ==================================================

    return svg(`
        <circle cx="250"
                cy="180"
                r="80"
                fill="#dceaf4"
                stroke="#333"
                stroke-width="5"/>

        <text x="250"
              y="195"
              text-anchor="middle"
              font-size="28"
              font-family="Arial">
            ?
        </text>
    `);
}


// ======================================================
// TOMBOL TEBAK GAMBAR
// ======================================================

if (gambarButton) {

    gambarButton.addEventListener(
        "click",
        function () {

            gambarCurrentQuestion = 0;
            gambarCurrentScore = 0;

            sembunyikanSemua();

            if (gameGambar) {
                gameGambar.style.display = "block";
            }

            const levelNumber =
                el("gambarLevelNumber");

            const levelName =
                el("gambarLevelName");

            if (levelNumber) {
                levelNumber.textContent =
                    "LEVEL " + currentLevel;
            }

            if (levelName) {
                levelName.textContent =
                    gambarQuestions[currentLevel].title;
            }

            if (gambarScore) {
                gambarScore.textContent = "0";
            }

            if (gambarNextButton) {
                gambarNextButton.style.display = "none";
                gambarNextButton.textContent = "Soal Berikutnya ➜";
            }

            tampilkanSoalGambar();

        }
    );

}


// ======================================================
// MENAMPILKAN SOAL GAMBAR
// ======================================================

function tampilkanSoalGambar() {

    const questions =
        gambarQuestions[currentLevel].questions;

    const question =
        questions[gambarCurrentQuestion];

    if (!question) return;


    // NOMOR SOAL
    if (gambarNomorSoal) {

        gambarNomorSoal.textContent =
            gambarCurrentQuestion + 1;

    }


    // SKOR
    if (gambarScore) {

        gambarScore.textContent =
            gambarCurrentScore;

    }


    // PROGRESS
    const percentage =
        ((gambarCurrentQuestion + 1) /
            questions.length) * 100;

    if (gambarProgressBar) {

        gambarProgressBar.style.width =
            percentage + "%";

    }

    if (gambarProgressText) {

        gambarProgressText.textContent =
            Math.round(percentage) +
            "% selesai";

    }


    // ==================================================
// GAMBAR
// ==================================================

if (gambarImage) {

    gambarImage.innerHTML = `
    <img
        src="${encodeURI(question.image)}"
        alt="Gambar soal"
        style="
            width: 100%;
            height: 100%;
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
            display: block;
            margin: 0 auto;
            border-radius: 15px;
        "
    >
`;

}


    // ==================================================
    // PERTANYAAN
    // ==================================================

    if (gambarQuestion) {

        gambarQuestion.textContent =
            "Gambar apakah ini?";

    }


    // FEEDBACK
    if (gambarFeedback) {

        gambarFeedback.textContent = "";

    }


    // TOMBOL NEXT
    if (gambarNextButton) {

        gambarNextButton.style.display =
            "none";

    }


    // ==================================================
    // PILIHAN JAWABAN ACAK
    // ==================================================

    if (gambarAnswers) {

        gambarAnswers.innerHTML = "";

        const shuffledAnswers =
            [...question.answers];

        // Fisher-Yates Shuffle
        for (
            let i = shuffledAnswers.length - 1;
            i > 0;
            i--
        ) {

            const j =
                Math.floor(
                    Math.random() * (i + 1)
                );

            [
                shuffledAnswers[i],
                shuffledAnswers[j]
            ] = [
                shuffledAnswers[j],
                shuffledAnswers[i]
            ];

        }


        shuffledAnswers.forEach(
            function (answer) {

                const button =
                    document.createElement("button");

                button.className =
                    "answer";

                button.textContent =
                    answer;

                button.addEventListener(
                    "click",
                    function () {

                        periksaJawabanGambar(
                            answer
                        );

                    }
                );

                gambarAnswers.appendChild(
                    button
                );

            }
        );

    }

}


// ======================================================
// CEK JAWABAN GAMBAR
// ======================================================

function periksaJawabanGambar(answer) {

    const question =
        gambarQuestions[currentLevel]
        .questions[gambarCurrentQuestion];

    if (!question) return;


    const buttons =
        gambarAnswers.querySelectorAll(".answer");


    // MATIKAN SEMUA TOMBOL
    buttons.forEach(
        function (button) {

            button.disabled = true;

        }
    );


    // ==================================================
    // JAWABAN BENAR
    // ==================================================

    if (answer === question.correct) {

        gambarCurrentScore += 10;

        if (gambarScore) {

            gambarScore.textContent =
                gambarCurrentScore;

        }

        if (gambarFeedback) {

            gambarFeedback.textContent =
                "🎉 Benar! +10 poin";

        }


        buttons.forEach(
            function (button) {

                if (
                    button.textContent ===
                    question.correct
                ) {

                    button.classList.add(
                        "correct"
                    );

                }

            }
        );


        bicaraArab(
            "أحسنت! إجابة صحيحة"
        );

    }


    // ==================================================
    // JAWABAN SALAH
    // ==================================================

    else {

        if (gambarFeedback) {

            gambarFeedback.textContent =
                "❌ Salah! Jawaban yang benar: " +
                question.correct;

        }


        buttons.forEach(
            function (button) {

                if (
                    button.textContent ===
                    answer
                ) {

                    button.classList.add(
                        "wrong"
                    );

                }


                if (
                    button.textContent ===
                    question.correct
                ) {

                    button.classList.add(
                        "correct"
                    );

                }

            }
        );


        bicaraArab(
            "حاول مرة أخرى"
        );

    }


    // TAMPILKAN NEXT
    if (gambarNextButton) {

        gambarNextButton.style.display =
            "inline-block";

    }

}


// ======================================================
// SOAL BERIKUTNYA
// ======================================================

if (gambarNextButton) {

    gambarNextButton.addEventListener(
        "click",
        function () {

            const questions =
                gambarQuestions[currentLevel].questions;

            // Jika sudah sampai soal terakhir
            if (
                gambarCurrentQuestion >=
                questions.length - 1
            ) {

                tampilkanHasilGambar();

                return;
            }

            // Lanjut ke soal berikutnya
            gambarCurrentQuestion++;

            tampilkanSoalGambar();

        }
    );

}


// ======================================================
// HASIL AKHIR
// ======================================================

function tampilkanHasilGambar() {

    const total =
        gambarQuestions[currentLevel]
        .questions.length;


    if (gambarNomorSoal) {

        gambarNomorSoal.textContent =
            total;

    }


    if (gambarProgressBar) {

        gambarProgressBar.style.width =
            "100%";

    }


    if (gambarProgressText) {

        gambarProgressText.textContent =
            "100% selesai";

    }


    // GAMBAR HASIL AKHIR
    if (gambarImage) {

        gambarImage.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 500 400"
                 width="100%"
                 height="100%">

                <rect width="500"
                      height="400"
                      rx="30"
                      fill="#f8fbff"/>

                <circle cx="250"
                        cy="170"
                        r="90"
                        fill="#ffe08a"
                        stroke="#333"
                        stroke-width="5"/>

                <circle cx="215"
                        cy="150"
                        r="10"
                        fill="#333"/>

                <circle cx="285"
                        cy="150"
                        r="10"
                        fill="#333"/>

                <path d="M205 195
                         Q250 235 295 195"
                      fill="none"
                      stroke="#333"
                      stroke-width="8"
                      stroke-linecap="round"/>

                <text x="250"
                      y="310"
                      text-anchor="middle"
                      font-size="30"
                      font-family="Arial"
                      font-weight="bold">
                    أحسنت!
                </text>

            </svg>
        `;

    }


    if (gambarQuestion) {

        gambarQuestion.textContent =
            "Permainan selesai!";

    }


    if (gambarAnswers) {

        gambarAnswers.innerHTML = "";

    }


    if (gambarFeedback) {

        gambarFeedback.textContent =
            "Skor akhir kamu: " +
            gambarCurrentScore +
            " / 100 ⭐";

    }


    if (gambarNextButton) {

    gambarNextButton.textContent =
        "📚 Pilih Permainan Lagi";

    gambarNextButton.style.display =
        "inline-block";

}

}
// ======================================================
// KEMBALI DARI TEBAK GAMBAR
// ======================================================

if (backFromGambar) {

    backFromGambar.addEventListener(
        "click",
        function () {

            sembunyikanSemua();

            if (gameMenu) {

                gameMenu.style.display =
                    "block";

            }

        }
    );

}


// ======================================================
// GAME 4 — ISTIMA'
// ======================================================

// ==================================================
// DATA SOAL ISTIMA' LEVEL 1
// ==================================================

const listeningQuestions = {

    1: [

        {
            arabic: "صَدِيقٌ",

            answers: [
                "Teman",
                "Dokter",
                "Guru",
                "Direktur"
            ],

            correct: "Teman"
        },


        {
            arabic: "أُسْتَاذٌ",

            answers: [
                "Guru",
                "Teman",
                "Dokter",
                "Murid"
            ],

            correct: "Guru"
        },


        {
            arabic: "طَبِيبٌ",

            answers: [
                "Dokter",
                "Direktur",
                "Guru",
                "Teman"
            ],

            correct: "Dokter"
        },


        {
            arabic: "مُدِيرٌ",

            answers: [
                "Direktur",
                "Dokter",
                "Guru",
                "Teman"
            ],

            correct: "Direktur"
        },


        {
            arabic: "أَخٌ",

            answers: [
                "Saudara laki-laki",
                "Saudara perempuan",
                "Teman",
                "Murid perempuan"
            ],

            correct: "Saudara laki-laki"
        },


        {
            arabic: "أُخْتٌ",

            answers: [
                "Saudara perempuan",
                "Saudara laki-laki",
                "Guru",
                "Dokter"
            ],

            correct: "Saudara perempuan"
        },


        {
            arabic: "عَائِلَةٌ",

            answers: [
                "Keluarga",
                "Teman",
                "Direktur",
                "Murid"
            ],

            correct: "Keluarga"
        },


        {
            arabic: "وَلَدٌ",

            answers: [
                "Anak laki-laki",
                "Anak perempuan",
                "Saudara laki-laki",
                "Murid perempuan"
            ],

            correct: "Anak laki-laki"
        },


        {
            arabic: "بِنْتٌ",

            answers: [
                "Anak perempuan",
                "Anak laki-laki",
                "Saudara perempuan",
                "Murid laki-laki"
            ],

            correct: "Anak perempuan"
        },


        {
            arabic: "طَالِبَةٌ",

            answers: [
                "Murid perempuan",
                "Murid laki-laki",
                "Guru",
                "Dokter"
            ],

            correct: "Murid perempuan"
        }

    ]

};


// ==================================================
// VARIABEL ISTIMA'
// ==================================================

let listeningCurrentQuestion = 0;
let listeningCurrentScore = 0;


// ==================================================
// ELEMEN ISTIMA'
// ==================================================

const listeningNomorSoal =
    el("listeningNomorSoal");

const listeningScore =
    el("listeningScore");

const listeningProgressBar =
    el("listeningProgressBar");

const listeningProgressText =
    el("listeningProgressText");

const listeningPlayButton =
    el("listeningPlayButton");

const listeningQuestion =
    el("listeningQuestion");

const listeningAnswers =
    el("listeningAnswers");

const listeningFeedback =
    el("listeningFeedback");

const listeningNextButton =
    el("listeningNextButton");


// ==================================================
// MEMBUKA ISTIMA'
// ==================================================

if (listeningButton) {

    listeningButton.addEventListener(
        "click",
        function () {

            sembunyikanSemua();

            if (gameListening) {

                gameListening.style.display =
                    "block";

            }


            const levelNumber =
                el("listeningLevelNumber");

            const levelName =
                el("listeningLevelName");


            if (levelNumber) {

                levelNumber.textContent =
                    "LEVEL " +
                    currentLevel;

            }


            if (levelName) {

                levelName.textContent =
                    levels[currentLevel].title;

            }


            // RESET GAME

            listeningCurrentQuestion = 0;
            listeningCurrentScore = 0;


            if (listeningScore) {

                listeningScore.textContent =
                    "0";

            }


            tampilkanSoalListening();

        }
    );

}


// ==================================================
// MENAMPILKAN SOAL ISTIMA'
// ==================================================

function tampilkanSoalListening() {

    const questions =
        listeningQuestions[currentLevel];


    if (!questions) {

        if (listeningQuestion) {

            listeningQuestion.textContent =
                "Soal untuk level ini belum tersedia.";

        }

        return;

    }


    const question =
        questions[listeningCurrentQuestion];


    if (!question) return;


    // NOMOR SOAL

    if (listeningNomorSoal) {

        listeningNomorSoal.textContent =
            listeningCurrentQuestion + 1;

    }


    // PROGRESS

    const progress =
        (
            (listeningCurrentQuestion + 1) /
            questions.length
        ) * 100;


    if (listeningProgressBar) {

        listeningProgressBar.style.width =
            progress + "%";

    }


    if (listeningProgressText) {

        listeningProgressText.textContent =
            Math.round(progress) +
            "% selesai";

    }


    // PERTANYAAN

    if (listeningQuestion) {

        listeningQuestion.textContent =
            "Apa arti kata yang kamu dengar?";

    }


    // FEEDBACK

    if (listeningFeedback) {

        listeningFeedback.textContent =
            "";

        listeningFeedback.className =
            "";

    }


    // TOMBOL AUDIO

    if (listeningPlayButton) {

        listeningPlayButton.style.display =
            "inline-block";

        listeningPlayButton.disabled =
            false;

        listeningPlayButton.textContent =
            "🔊 Dengarkan";

    }


    // TOMBOL NEXT

    if (listeningNextButton) {

        listeningNextButton.style.display =
            "none";

    }


    // PILIHAN JAWABAN

    if (listeningAnswers) {

        listeningAnswers.innerHTML =
            "";

    }


    const shuffledAnswers =
        [...question.answers];


    // ACAK JAWABAN

    for (
        let i = shuffledAnswers.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );

        [
            shuffledAnswers[i],
            shuffledAnswers[j]
        ] = [
            shuffledAnswers[j],
            shuffledAnswers[i]
        ];

    }


    shuffledAnswers.forEach(
        function (answer) {

            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "answer";

            button.textContent =
                answer;


            button.addEventListener(
                "click",
                function () {

                    periksaJawabanListening(
                        answer,
                        question
                    );

                }
            );


            listeningAnswers.appendChild(
                button
            );

        }
    );

}


// ==================================================
// MEMERIKSA JAWABAN ISTIMA'
// ==================================================

function periksaJawabanListening(
    answer,
    question
) {

    const buttons =
        listeningAnswers.querySelectorAll(
            ".answer"
        );


    buttons.forEach(
        function (button) {

            button.disabled =
                true;


            if (
                button.textContent ===
                question.correct
            ) {

                button.classList.add(
                    "correct"
                );

            }

        }
    );


    if (
        answer ===
        question.correct
    ) {

        listeningCurrentScore += 10;


        if (listeningScore) {

            listeningScore.textContent =
                listeningCurrentScore;

        }


        if (listeningFeedback) {

            listeningFeedback.textContent =
                "✅ Benar!";

            listeningFeedback.className =
                "correct";

        }

    }

    else {

        buttons.forEach(
            function (button) {

                if (
                    button.textContent ===
                    answer
                ) {

                    button.classList.add(
                        "wrong"
                    );

                }

            }
        );


        if (listeningFeedback) {

            listeningFeedback.textContent =
                "❌ Salah. Jawaban yang benar: " +
                question.correct;

            listeningFeedback.className =
                "wrong";

        }

    }


    if (listeningPlayButton) {

        listeningPlayButton.disabled =
            false;

    }


    if (listeningNextButton) {

        listeningNextButton.style.display =
            "inline-block";

    }

}


// ==================================================
// TOMBOL AUDIO
// ==================================================

if (listeningPlayButton) {

    listeningPlayButton.addEventListener(
        "click",
        function () {

            const questions =
                listeningQuestions[currentLevel];


            if (!questions) return;


            const question =
                questions[
                    listeningCurrentQuestion
                ];


            if (!question) return;


            bicaraArab(
                question.arabic
            );

        }
    );

}


// ==================================================
// SOAL BERIKUTNYA
// ==================================================

if (listeningNextButton) {

    listeningNextButton.addEventListener(
        "click",
        function () {

            const questions =
                listeningQuestions[currentLevel];


            if (
                listeningCurrentQuestion >=
                questions.length - 1
            ) {

                tampilkanHasilListening();

                return;

            }


            listeningCurrentQuestion++;

            tampilkanSoalListening();

        }
    );

}


// ==================================================
// HASIL ISTIMA'
// ==================================================

function tampilkanHasilListening() {

    const total =
        listeningQuestions[currentLevel].length;


    if (listeningNomorSoal) {

        listeningNomorSoal.textContent =
            total;

    }


    if (listeningProgressBar) {

        listeningProgressBar.style.width =
            "100%";

    }


    if (listeningProgressText) {

        listeningProgressText.textContent =
            "100% selesai";

    }


    if (listeningQuestion) {

        listeningQuestion.textContent =
            "🎉 Permainan selesai!";

    }


    if (listeningAnswers) {

        listeningAnswers.innerHTML =
            "";

    }


    if (listeningFeedback) {

        listeningFeedback.textContent =
            "Skor akhir kamu: " +
            listeningCurrentScore +
            " / 100 ⭐";

    }


    if (listeningPlayButton) {

        listeningPlayButton.style.display =
            "none";

    }


    if (listeningNextButton) {

        listeningNextButton.textContent =
            "🔄 Mainkan Lagi";

        listeningNextButton.style.display =
            "inline-block";


        listeningNextButton.onclick =
            function () {

                listeningCurrentQuestion =
                    0;

                listeningCurrentScore =
                    0;


                if (listeningScore) {

                    listeningScore.textContent =
                        "0";

                }


                listeningNextButton.textContent =
                    "Soal Berikutnya →";


                listeningNextButton.onclick =
                    null;


                tampilkanSoalListening();

            };

    }

}


// ==================================================
// KEMBALI DARI ISTIMA'
// ==================================================

if (backFromListening) {

    backFromListening.addEventListener(
        "click",
        function () {

            window.speechSynthesis.cancel();

            sembunyikanSemua();

            if (gameMenu) {

                gameMenu.style.display =
                    "block";

            }

        }
    );

}


// ======================================================
// SUARA BAHASA ARAB
// ======================================================

function bicaraArab(text) {

    if (
        "speechSynthesis" in window
    ) {

        window.speechSynthesis.cancel();


        const speech =
            new SpeechSynthesisUtterance(
                text
            );


        speech.lang =
            "ar-SA";


        speech.rate =
            0.9;


        speech.pitch =
            1;


        window.speechSynthesis.speak(
            speech
        );

    }

}



// ======================================================
// SELESAI
// ======================================================