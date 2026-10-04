export type SubjectId = 'pai' | 'pjok';

export type MultipleChoiceQuestion = {
  id: string;
  type: 'choice';
  prompt: string;
  options: [string, string, string, string];
  answer: number;
};

export type ShortQuestion = {
  id: string;
  type: 'short';
  prompt: string;
  accepted: string[];
  hint?: string;
};

export type Question = MultipleChoiceQuestion | ShortQuestion;

export const quizBank: Record<SubjectId, Question[]> = {
  pai: [
    { id: 'pai-m1', type: 'choice', prompt: 'Surah Al-Ikhlas terdiri atas berapa ayat?', options: ['Tiga ayat', 'Empat ayat', 'Lima ayat', 'Enam ayat'], answer: 1 },
    { id: 'pai-m2', type: 'choice', prompt: 'Surah an-Nās terdiri atas berapa ayat?', options: ['Lima ayat', 'Enam ayat', 'Tujuh ayat', 'Delapan ayat'], answer: 1 },
    { id: 'pai-m3', type: 'choice', prompt: 'Bacaan awal Surah Al-Ikhlas adalah ....', options: ['Qul huwallāhu aḥad', 'Qul a‘ūdzu bi rabbin-nās', 'Alhamdulillāhi rabbil-‘ālamīn', 'Tabbat yadā abī lahab'], answer: 0 },
    { id: 'pai-m4', type: 'choice', prompt: 'Lanjutan bacaan “Qul huwallāhu aḥad” adalah ....', options: ['Malikin-nās', 'Allāhuṣ-ṣamad', 'Alhamdulillāhi', 'Qul a‘ūdzu'], answer: 1 },
    { id: 'pai-m5', type: 'choice', prompt: 'Pesan pokok Surah Al-Ikhlas adalah ....', options: ['Allah Maha Esa', 'Kisah tentang hewan', 'Perintah berpuasa', 'Cara berwudu'], answer: 0 },
    { id: 'pai-m6', type: 'choice', prompt: 'Arti “Allahus-samad” adalah Allah tempat kita ....', options: ['Meminta dan bergantung', 'Bermain bersama', 'Menyimpan mainan', 'Berjalan-jalan'], answer: 0 },
    { id: 'pai-m7', type: 'choice', prompt: 'Arti “Lam yalid wa lam yūlad” adalah Allah ....', options: ['Tidak beranak dan tidak diperanakkan', 'Mempunyai banyak anak', 'Dilahirkan oleh manusia', 'Membutuhkan pertolongan'], answer: 0 },
    { id: 'pai-m8', type: 'choice', prompt: 'Arti kata an-Nās adalah ....', options: ['Manusia', 'Malaikat', 'Bintang', 'Malam'], answer: 0 },
    { id: 'pai-m9', type: 'choice', prompt: 'Dalam Surah an-Nās, kita memohon perlindungan dari ....', options: ['Bisikan yang jahat', 'Hujan yang turun', 'Rasa lapar', 'Perjalanan jauh'], answer: 0 },
    { id: 'pai-m10', type: 'choice', prompt: 'Lanjutan bacaan “Qul a‘ūdzu bi rabbin-nās” adalah ....', options: ['Malikin-nās', 'Allāhuṣ-ṣamad', 'Qul huwallāhu', 'Alhamdulillāhi'], answer: 0 },
    { id: 'pai-m11', type: 'choice', prompt: 'Al-Hafidh artinya Allah Maha ....', options: ['Memelihara', 'Mendengar', 'Melihat', 'Memberi rezeki'], answer: 0 },
    { id: 'pai-m12', type: 'choice', prompt: 'Allah menjaga seluruh makhluk-Nya. Asmaul Husna yang sesuai adalah ....', options: ['Al-Hafidh', 'Al-Alim', 'Al-Khabir', 'Al-Waliy'], answer: 0 },
    { id: 'pai-m13', type: 'choice', prompt: 'Al-Waliy artinya Allah Maha ....', options: ['Melindungi', 'Menghukum', 'Menciptakan malam', 'Membuat makanan'], answer: 0 },
    { id: 'pai-m14', type: 'choice', prompt: 'Al-Alim artinya Allah Maha ....', options: ['Mengetahui', 'Memelihara', 'Melindungi', 'Mengampuni'], answer: 0 },
    { id: 'pai-m15', type: 'choice', prompt: 'Allah Al-Khabir mengetahui segala sesuatu dengan ....', options: ['Teliti', 'Lupa', 'Terburu-buru', 'Tidak jelas'], answer: 0 },
    { id: 'pai-m16', type: 'choice', prompt: 'Sabar berarti tetap .... saat menghadapi kesulitan.', options: ['Tenang dan berusaha', 'Marah kepada semua orang', 'Mengganggu teman', 'Berhenti mencoba'], answer: 0 },
    { id: 'pai-m17', type: 'choice', prompt: 'Menunggu giliran tanpa marah adalah contoh sikap ....', options: ['Sabar', 'Sombong', 'Iri', 'Malas'], answer: 0 },
    { id: 'pai-m18', type: 'choice', prompt: 'Ikhlas berarti melakukan kebaikan karena ....', options: ['Allah, bukan untuk dipuji', 'Ingin mendapat hadiah saja', 'Takut kepada teman', 'Ingin terlihat hebat'], answer: 0 },
    { id: 'pai-m19', type: 'choice', prompt: 'Kamu membantu merapikan kelas tanpa meminta pujian. Sikapmu menunjukkan ....', options: ['Ikhlas', 'Marah', 'Putus asa', 'Iri hati'], answer: 0 },
    { id: 'pai-m20', type: 'choice', prompt: 'Saat belajar terasa sulit, sikap sabar dan ikhlas ditunjukkan dengan ....', options: ['Terus berusaha dan berdoa', 'Membuang buku', 'Menyalahkan teman', 'Tidak mau mencoba lagi'], answer: 0 },
    { id: 'pai-m21', type: 'choice', prompt: 'Salat fardu wajib dikerjakan sebanyak .... dalam sehari semalam.', options: ['Lima waktu', 'Tiga waktu', 'Empat waktu', 'Enam waktu'], answer: 0 },
    { id: 'pai-m22', type: 'choice', prompt: 'Salat Subuh dikerjakan sebanyak .... rakaat.', options: ['Dua', 'Tiga', 'Empat', 'Lima'], answer: 0 },
    { id: 'pai-m23', type: 'choice', prompt: 'Salat Magrib dikerjakan sebanyak .... rakaat.', options: ['Dua', 'Tiga', 'Empat', 'Lima'], answer: 1 },
    { id: 'pai-m24', type: 'choice', prompt: 'Salat Zuhur dikerjakan sebanyak .... rakaat.', options: ['Dua', 'Tiga', 'Empat', 'Lima'], answer: 2 },
    { id: 'pai-m25', type: 'choice', prompt: 'Salat Isya dikerjakan sebanyak .... rakaat.', options: ['Dua', 'Tiga', 'Empat', 'Lima'], answer: 2 },
    { id: 'pai-s1', type: 'short', prompt: 'Surah Al-Ikhlas terdiri atas berapa ayat?', accepted: ['4', 'empat'] },
    { id: 'pai-s2', type: 'short', prompt: 'Lanjutan bacaan “Qul huwallāhu aḥad” adalah ....', accepted: ['allahus samad', 'allahus-samad', 'allahuṣ ṣamad', 'allahuṣ-ṣamad'] },
    { id: 'pai-s3', type: 'short', prompt: 'Surah an-Nās terdiri atas berapa ayat?', accepted: ['6', 'enam'] },
    { id: 'pai-s4', type: 'short', prompt: 'Al-Hafidh artinya Allah Maha ....', accepted: ['memelihara', 'menjaga'] },
    { id: 'pai-s5', type: 'short', prompt: 'Al-Waliy artinya Allah Maha ....', accepted: ['melindungi', 'pelindung'] },
    { id: 'pai-s6', type: 'short', prompt: 'Al-Alim artinya Allah Maha ....', accepted: ['mengetahui'] },
    { id: 'pai-s7', type: 'short', prompt: 'Allah Al-Khabir mengetahui keadaan makhluk dengan sangat ....', accepted: ['teliti'] },
    { id: 'pai-s8', type: 'short', prompt: 'Berbuat baik semata-mata karena Allah disebut ....', accepted: ['ikhlas'] },
    { id: 'pai-s9', type: 'short', prompt: 'Salat fardu yang terdiri atas dua rakaat adalah salat ....', accepted: ['subuh', 'shubuh'] },
    { id: 'pai-s10', type: 'short', prompt: 'Salat Magrib terdiri atas berapa rakaat?', accepted: ['3', 'tiga'] },
  ],
  pjok: [
    { id: 'pjok-m1', type: 'choice', prompt: 'Gerak berjalan dan berlari termasuk gerak ....', options: ['Lokomotor', 'Nonlokomotor', 'Berirama saja', 'Diam'], answer: 0 },
    { id: 'pjok-m2', type: 'choice', prompt: 'Gerak mengayunkan tangan di tempat termasuk gerak ....', options: ['Lokomotor', 'Nonlokomotor', 'Berpindah tempat', 'Meluncur'], answer: 1 },
    { id: 'pjok-m3', type: 'choice', prompt: 'Contoh gerak lokomotor adalah ....', options: ['Membungkuk', 'Memutar badan', 'Berjalan ke depan', 'Menggeleng'], answer: 2 },
    { id: 'pjok-m4', type: 'choice', prompt: 'Gerakan menekuk badan tanpa berpindah tempat termasuk gerak ....', options: ['Lari', 'Lompat jauh', 'Lokomotor', 'Nonlokomotor'], answer: 3 },
    { id: 'pjok-m5', type: 'choice', prompt: 'Contoh kombinasi gerak lokomotor dan nonlokomotor adalah ....', options: ['Berjalan sambil mengayunkan tangan', 'Duduk diam', 'Berdiri tanpa bergerak', 'Tidur telentang'], answer: 0 },
    { id: 'pjok-m6', type: 'choice', prompt: 'Dalam gerak manipulasi objek, kita belajar untuk ....', options: ['Membiarkan benda diam saja', 'Menggerakkan dan mengontrol benda', 'Menghindari semua benda', 'Menyembunyikan alat'], answer: 1 },
    { id: 'pjok-m7', type: 'choice', prompt: 'Saat menangkap bola, kedua tangan sebaiknya ....', options: ['Disimpan di belakang badan', 'Siap menerima bola', 'Menutup mata', 'Mendorong teman'], answer: 1 },
    { id: 'pjok-m8', type: 'choice', prompt: 'Gerakan mengirim bola dengan tangan ke arah teman disebut ....', options: ['Menekuk', 'Melompat', 'Melempar', 'Berjalan'], answer: 2 },
    { id: 'pjok-m9', type: 'choice', prompt: 'Menggerakkan bola dengan kaki disebut ....', options: ['Menendang bola', 'Menangkap bola', 'Memukul bola', 'Mengayun bola'], answer: 0 },
    { id: 'pjok-m10', type: 'choice', prompt: 'Gerakan memantulkan bola ke lantai berulang kali dengan tangan disebut ....', options: ['Melempar jauh', 'Menendang', 'Menggiring bola', 'Menangkap'], answer: 2 },
    { id: 'pjok-m11', type: 'choice', prompt: 'Agar lemparan tepat sasaran, pandangan diarahkan ke ....', options: ['Belakang', 'Sasaran', 'Lantai terus', 'Tempat lain'], answer: 1 },
    { id: 'pjok-m12', type: 'choice', prompt: 'Saat menerima bola dari teman, kita sebaiknya ....', options: ['Membelakangi bola', 'Menutup mata', 'Membiarkan bola jatuh', 'Memperhatikan arah datangnya bola'], answer: 3 },
    { id: 'pjok-m13', type: 'choice', prompt: 'Gerak berirama dilakukan dengan mengikuti ....', options: ['Bunyi yang tidak beraturan', 'Irama atau ketukan', 'Suara teman saja', 'Gerak orang yang lewat'], answer: 1 },
    { id: 'pjok-m14', type: 'choice', prompt: 'Jika irama musik menjadi lebih cepat, gerakan dapat dilakukan dengan ....', options: ['Berhenti selamanya', 'Menutup telinga', 'Mengikuti ketukan yang lebih cepat', 'Duduk membelakangi musik'], answer: 2 },
    { id: 'pjok-m15', type: 'choice', prompt: 'Contoh gerak berirama adalah ....', options: ['Bertepuk tangan mengikuti lagu', 'Tidur di lantai', 'Duduk diam', 'Melempar benda sembarangan'], answer: 0 },
    { id: 'pjok-m16', type: 'choice', prompt: 'Saat bergerak mengikuti irama, kita dapat menggerakkan ....', options: ['Hanya mata', 'Hanya jari kaki', 'Tangan dan kaki', 'Buku dan pensil'], answer: 2 },
    { id: 'pjok-m17', type: 'choice', prompt: 'Permainan kelompok sederhana biasanya dilakukan ....', options: ['Bersama beberapa teman', 'Sendirian saja', 'Tanpa bergerak', 'Tanpa aturan apa pun'], answer: 0 },
    { id: 'pjok-m18', type: 'choice', prompt: 'Saat bermain permainan kelompok, kita perlu ....', options: ['Mengubah aturan sesuka hati', 'Mendorong teman', 'Mengikuti aturan permainan', 'Mengambil giliran orang lain'], answer: 2 },
    { id: 'pjok-m19', type: 'choice', prompt: 'Saat teman mendapat giliran bermain, kita sebaiknya ....', options: ['Memotong antrean', 'Menunggu giliran', 'Merebut alatnya', 'Mengganggu teman'], answer: 1 },
    { id: 'pjok-m20', type: 'choice', prompt: 'Sikap yang baik saat bermain dalam kelompok adalah ....', options: ['Ingin menang sendiri', 'Mengejek teman', 'Tidak mau mengikuti aturan', 'Bermain dengan sportif'], answer: 3 },
    { id: 'pjok-m21', type: 'choice', prompt: 'Jika kelompokmu kalah dalam permainan, sebaiknya ....', options: ['Menerima hasil dan tetap menghargai teman', 'Marah dan menyalahkan teman', 'Merusak alat permainan', 'Menolak bermain selamanya'], answer: 0 },
    { id: 'pjok-m22', type: 'choice', prompt: 'Kerja sama berarti melakukan kegiatan ....', options: ['Sendiri-sendiri tanpa tujuan', 'Bersama untuk mencapai tujuan', 'Dengan saling mengganggu', 'Tanpa berbicara sama sekali'], answer: 1 },
    { id: 'pjok-m23', type: 'choice', prompt: 'Agar tugas kelompok selesai, anggota kelompok dapat ....', options: ['Membiarkan satu teman bekerja', 'Merebut semua tugas', 'Membagi tugas dan saling membantu', 'Bersembunyi saat bekerja'], answer: 2 },
    { id: 'pjok-m24', type: 'choice', prompt: 'Jika teman kesulitan melakukan gerakan, kita sebaiknya ....', options: ['Menertawakannya', 'Meninggalkannya', 'Melarangnya mencoba', 'Membantu dan menyemangatinya'], answer: 3 },
    { id: 'pjok-m25', type: 'choice', prompt: 'Jika ada perbedaan pendapat dalam kelompok, kita sebaiknya ....', options: ['Membicarakannya dengan baik', 'Berteriak paling keras', 'Meninggalkan kelompok', 'Memaksa teman'], answer: 0 },
    { id: 'pjok-s1', type: 'short', prompt: 'Gerak berpindah tempat seperti berjalan disebut gerak ....', accepted: ['lokomotor', 'gerak lokomotor'] },
    { id: 'pjok-s2', type: 'short', prompt: 'Gerak di tempat seperti mengayun tangan disebut gerak ....', accepted: ['nonlokomotor', 'non lokomotor', 'gerak nonlokomotor', 'gerak non lokomotor'] },
    { id: 'pjok-s3', type: 'short', prompt: 'Sebutkan satu contoh kombinasi gerak berpindah tempat dan mengayun tangan.', accepted: ['berjalan sambil mengayunkan tangan', 'berlari sambil mengayunkan tangan'] },
    { id: 'pjok-s4', type: 'short', prompt: 'Menggerakkan bola menggunakan kaki disebut ....', accepted: ['menendang', 'menendang bola'] },
    { id: 'pjok-s5', type: 'short', prompt: 'Saat menangkap bola, mata sebaiknya melihat ke arah ....', accepted: ['bola'] },
    { id: 'pjok-s6', type: 'short', prompt: 'Gerakan yang dilakukan dengan mengikuti irama disebut gerak ....', accepted: ['berirama', 'gerak berirama'] },
    { id: 'pjok-s7', type: 'short', prompt: 'Sebutkan satu contoh permainan kelompok sederhana.', accepted: ['estafet', 'lari estafet'] },
    { id: 'pjok-s8', type: 'short', prompt: 'Saat bermain bersama, kita perlu mengikuti .... permainan.', accepted: ['aturan', 'peraturan'] },
    { id: 'pjok-s9', type: 'short', prompt: 'Melakukan tugas bersama teman untuk mencapai tujuan disebut ....', accepted: ['kerja sama', 'bekerja sama', 'kerjasama'] },
    { id: 'pjok-s10', type: 'short', prompt: 'Jika teman kesulitan, kita sebaiknya ....', accepted: ['membantu', 'menolong'] },
  ],
};