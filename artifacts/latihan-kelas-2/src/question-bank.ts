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
    { id: 'pai-m1', type: 'choice', prompt: 'Surah an-Nās terdiri atas berapa ayat?', options: ['Lima ayat', 'Enam ayat', 'Tujuh ayat', 'Delapan ayat'], answer: 1 },
    { id: 'pai-m2', type: 'choice', prompt: 'Arti kata an-Nās adalah ....', options: ['Malaikat', 'Manusia', 'Bintang', 'Malam'], answer: 1 },
    { id: 'pai-m3', type: 'choice', prompt: 'Arti kata “Qul” pada awal Surah an-Nās adalah ....', options: ['Katakanlah', 'Dengarkanlah', 'Berjalanlah', 'Diamlah'], answer: 0 },
    { id: 'pai-m4', type: 'choice', prompt: 'Bacaan awal Surah an-Nās adalah ....', options: ['Qul a‘ūdzu bi rabbin-nās', 'Alhamdulillāhi rabbil-‘ālamīn', 'Qul huwallāhu aḥad', 'Tabbat yadā abī lahab'], answer: 0 },
    { id: 'pai-m5', type: 'choice', prompt: 'Lanjutan bacaan “Qul a‘ūdzu bi rabbin-nās” adalah ....', options: ['Malikin-nās', 'Alhamdulillāhi', 'Qul huwallāhu', 'Tabbat yadā'], answer: 0 },
    { id: 'pai-m6', type: 'choice', prompt: 'Jika merasa takut atau mendapat bisikan buruk, kita memohon perlindungan kepada ....', options: ['Allah', 'Mainan', 'Teman saja', 'Pohon'], answer: 0 },
    { id: 'pai-m7', type: 'choice', prompt: 'Surah an-Nās berada di bagian akhir Al-Qur’an yang disebut ....', options: ['Juz Amma', 'Juz pertama', 'Juz tengah', 'Juz kedua'], answer: 0 },
    { id: 'pai-m8', type: 'choice', prompt: 'Makharijul huruf adalah ....', options: ['Tempat keluarnya huruf saat diucapkan', 'Nama tanda berhenti', 'Nama panjang-pendek bacaan', 'Cara memegang buku'], answer: 0 },
    { id: 'pai-m9', type: 'choice', prompt: 'Huruf hijaiyah ب (ba) diucapkan dengan bantuan ....', options: ['Kedua bibir', 'Ujung lidah saja', 'Hidung', 'Gigi geraham'], answer: 0 },
    { id: 'pai-m10', type: 'choice', prompt: 'Arah membaca tulisan Arab adalah dari ....', options: ['Kanan ke kiri', 'Kiri ke kanan', 'Atas ke bawah saja', 'Bawah ke atas'], answer: 0 },
    { id: 'pai-m11', type: 'choice', prompt: 'Huruf hijaiyah pertama dalam urutan yang biasa dipelajari adalah ....', options: ['Alif', 'Ba', 'Ta', 'Jim'], answer: 0 },
    { id: 'pai-m12', type: 'choice', prompt: 'Arti Asmaul Husna Al-Hafiz adalah Allah Maha ....', options: ['Memelihara', 'Mendengar', 'Melihat', 'Memberi rezeki'], answer: 0 },
    { id: 'pai-m13', type: 'choice', prompt: 'Allah menjaga seluruh makhluk-Nya. Nama Allah yang sesuai adalah ....', options: ['Al-Hafiz', 'Al-Alim', 'Al-Khabir', 'As-Salam'], answer: 0 },
    { id: 'pai-m14', type: 'choice', prompt: 'Allah Al-Wali artinya Allah Maha ....', options: ['Melindungi', 'Menghukum', 'Menciptakan malam', 'Membuat makanan'], answer: 0 },
    { id: 'pai-m15', type: 'choice', prompt: 'Allah Al-Alim artinya Allah Maha ....', options: ['Mengetahui', 'Memelihara', 'Melindungi', 'Mengampuni'], answer: 0 },
    { id: 'pai-m16', type: 'choice', prompt: 'Allah Al-Khabir mengetahui segala sesuatu dengan ....', options: ['Teliti', 'Lupa', 'Terburu-buru', 'Tidak jelas'], answer: 0 },
    { id: 'pai-m17', type: 'choice', prompt: 'Kita yakin Allah mengetahui perbuatan yang terlihat maupun tersembunyi. Ini mengingatkan kita kepada Asmaul Husna ....', options: ['Al-Alim', 'Al-Wali', 'Al-Hafiz', 'Ar-Rahman'], answer: 0 },
    { id: 'pai-m18', type: 'choice', prompt: 'Contoh menyayangi sesama teman adalah ....', options: ['Menolong teman yang kesulitan', 'Mengejek teman', 'Merebut alat tulis', 'Meninggalkan teman yang jatuh'], answer: 0 },
    { id: 'pai-m19', type: 'choice', prompt: 'Saat bermain bersama, kita menunjukkan kasih sayang dengan ....', options: ['Bergiliran dan tidak berebut', 'Memaksa selalu menang', 'Menyembunyikan barang teman', 'Memilih teman untuk diejek'], answer: 0 },
    { id: 'pai-m20', type: 'choice', prompt: 'Empati berarti berusaha ....', options: ['Memahami perasaan orang lain', 'Membuat teman merasa sedih', 'Selalu ingin menang sendiri', 'Tidak peduli kepada siapa pun'], answer: 0 },
    { id: 'pai-m21', type: 'choice', prompt: 'Temanmu terlihat sedih. Sikap berempati adalah ....', options: ['Mendengarkan dan menghiburnya', 'Menertawakannya', 'Menyuruhnya pergi', 'Berpura-pura tidak melihat'], answer: 0 },
    { id: 'pai-m22', type: 'choice', prompt: 'Saat meminta bantuan, kita sebaiknya berkata ....', options: ['“Tolong” dengan sopan', '“Cepat!” dengan marah', 'Kata-kata kasar', 'Tidak perlu berkata apa-apa'], answer: 0 },
    { id: 'pai-m23', type: 'choice', prompt: 'Jika berbeda pendapat dengan teman, kita sebaiknya berbicara dengan ....', options: ['Lembut dan sopan', 'Teriakan keras', 'Kata-kata kasar', 'Ejekan'], answer: 0 },
    { id: 'pai-m24', type: 'choice', prompt: 'Anak yang jujur akan berkata sesuai dengan ....', options: ['Kenyataan', 'Keinginan agar dipuji', 'Cerita yang dibuat-buat', 'Ucapan teman saja'], answer: 0 },
    { id: 'pai-m25', type: 'choice', prompt: 'Kamu menemukan pensil milik teman. Sikap jujur adalah ....', options: ['Mengembalikannya kepada pemilik', 'Menyimpannya diam-diam', 'Membuangnya', 'Mengaku pensil itu milikmu'], answer: 0 },
    { id: 'pai-s1', type: 'short', prompt: 'Surah an-Nās terdiri atas berapa ayat?', accepted: ['6', 'enam'] },
    { id: 'pai-s2', type: 'short', prompt: 'Apa arti kata an-Nās?', accepted: ['manusia', 'umat manusia'] },
    { id: 'pai-s3', type: 'short', prompt: 'Makharijul huruf adalah tempat keluarnya .... saat dilafalkan.', accepted: ['huruf'] },
    { id: 'pai-s4', type: 'short', prompt: 'Al-Hafiz artinya Allah Maha ....', accepted: ['memelihara', 'menjaga'] },
    { id: 'pai-s5', type: 'short', prompt: 'Al-Wali artinya Allah Maha ....', accepted: ['melindungi', 'pelindung'] },
    { id: 'pai-s6', type: 'short', prompt: 'Al-Alim artinya Allah Maha ....', accepted: ['mengetahui'] },
    { id: 'pai-s7', type: 'short', prompt: 'Allah Al-Khabir mengetahui segala sesuatu dengan sangat ....', accepted: ['teliti'] },
    { id: 'pai-s8', type: 'short', prompt: 'Sikap berusaha memahami perasaan teman disebut ....', accepted: ['empati'] },
    { id: 'pai-s9', type: 'short', prompt: 'Orang jujur berkata sesuai dengan ....', accepted: ['kenyataan', 'yang sebenarnya', 'fakta'] },
    { id: 'pai-s10', type: 'short', prompt: 'Kata sopan yang dapat kita ucapkan saat meminta bantuan adalah ....', accepted: ['tolong'] },
  ],
  pjok: [
    { id: 'pjok-m1', type: 'choice', prompt: 'Gerakan berjalan dan berlari termasuk gerak ....', options: ['Lokomotor', 'Diam', 'Melempar', 'Menekuk'], answer: 0 },
    { id: 'pjok-m2', type: 'choice', prompt: 'Gerakan mengayunkan tangan di tempat termasuk gerak ....', options: ['Lokomotor', 'Nonlokomotor', 'Berlari', 'Melompat jauh'], answer: 1 },
    { id: 'pjok-m3', type: 'choice', prompt: 'Contoh gerak berpindah tempat adalah ....', options: ['Membungkuk', 'Memutar badan', 'Berjalan', 'Menggeleng'], answer: 2 },
    { id: 'pjok-m4', type: 'choice', prompt: 'Sebelum berolahraga, kita melakukan ....', options: ['Pemanasan', 'Tidur', 'Makan banyak', 'Duduk diam'], answer: 0 },
    { id: 'pjok-m5', type: 'choice', prompt: 'Setelah olahraga, tubuh perlu ....', options: ['Pendinginan', 'Langsung tidur di lapangan', 'Berlari lebih cepat', 'Menahan napas'], answer: 0 },
    { id: 'pjok-m6', type: 'choice', prompt: 'Saat berlari, pandangan sebaiknya ke ....', options: ['Belakang terus', 'Depan', 'Bawah terus', 'Samping saja'], answer: 1 },
    { id: 'pjok-m7', type: 'choice', prompt: 'Agar tubuh tetap sehat, kita perlu berolahraga secara ....', options: ['Teratur', 'Sekali saja', 'Sambil tidur', 'Tidak pernah'], answer: 0 },
    { id: 'pjok-m8', type: 'choice', prompt: 'Setelah berkeringat, pakaian sebaiknya ....', options: ['Tetap dipakai berhari-hari', 'Diganti dengan yang bersih', 'Dipinjamkan ke teman', 'Disimpan dalam tas'], answer: 1 },
    { id: 'pjok-m9', type: 'choice', prompt: 'Agar tangan bersih sebelum makan, kita harus ....', options: ['Mencuci tangan dengan sabun', 'Mengelap ke baju', 'Meniup tangan', 'Menyentuh meja'], answer: 0 },
    { id: 'pjok-m10', type: 'choice', prompt: 'Minuman yang baik untuk mengganti cairan tubuh setelah olahraga adalah ....', options: ['Air putih', 'Minuman bersoda saja', 'Sirup sangat manis', 'Kopi'], answer: 0 },
    { id: 'pjok-m11', type: 'choice', prompt: 'Agar gigi bersih dan sehat, kita menyikat gigi ....', options: ['Secara teratur', 'Hanya saat sakit', 'Sekali seminggu', 'Tidak perlu'], answer: 0 },
    { id: 'pjok-m12', type: 'choice', prompt: 'Saat bermain di lapangan, kita perlu memakai ....', options: ['Alas kaki yang sesuai', 'Sandal licin', 'Sepatu kebesaran', 'Kaki telanjang di tempat berbahaya'], answer: 0 },
    { id: 'pjok-m13', type: 'choice', prompt: 'Agar tidak bertabrakan saat bermain, kita harus ....', options: ['Memperhatikan teman dan sekitar', 'Menutup mata', 'Mendorong teman', 'Berlari tanpa arah'], answer: 0 },
    { id: 'pjok-m14', type: 'choice', prompt: 'Dalam permainan sepak bola, bola dimainkan terutama dengan ....', options: ['Kaki', 'Siku', 'Kepala saja', 'Lutut saja'], answer: 0 },
    { id: 'pjok-m15', type: 'choice', prompt: 'Dalam permainan bola basket, bola dapat dipantulkan dengan ....', options: ['Tangan', 'Kaki', 'Punggung', 'Siku saja'], answer: 0 },
    { id: 'pjok-m16', type: 'choice', prompt: 'Permainan kasti menggunakan alat pemukul dan bola ....', options: ['Kecil', 'Besar seperti bola basket', 'Berisi air', 'Dari besi'], answer: 0 },
    { id: 'pjok-m17', type: 'choice', prompt: 'Ketika melempar bola kepada teman, arahkan bola dengan ....', options: ['Hati-hati ke arah teman', 'Keras ke wajah teman', 'Membelakangi teman', 'Mata tertutup'], answer: 0 },
    { id: 'pjok-m18', type: 'choice', prompt: 'Gerakan meloncat dilakukan dengan ....', options: ['Mendorong tubuh ke atas dengan kaki', 'Duduk di lantai', 'Mengayunkan kepala', 'Berbaring telentang'], answer: 0 },
    { id: 'pjok-m19', type: 'choice', prompt: 'Menekuk lutut di tempat termasuk gerak ....', options: ['Nonlokomotor', 'Berlari', 'Berjalan', 'Berpindah tempat'], answer: 0 },
    { id: 'pjok-m20', type: 'choice', prompt: 'Saat berenang, kita harus ....', options: ['Didampingi orang dewasa', 'Berenang sendirian', 'Berlari di tepi kolam', 'Mendorong teman ke air'], answer: 0 },
    { id: 'pjok-m21', type: 'choice', prompt: 'Jika merasa lelah saat berolahraga, kita sebaiknya ....', options: ['Beristirahat sejenak', 'Memaksakan diri', 'Tidak minum seharian', 'Berlari lebih cepat'], answer: 0 },
    { id: 'pjok-m22', type: 'choice', prompt: 'Makanan sehat yang membantu tubuh tumbuh adalah ....', options: ['Sayur dan buah', 'Permen saja', 'Keripik saja', 'Minuman manis saja'], answer: 0 },
    { id: 'pjok-m23', type: 'choice', prompt: 'Sikap yang baik saat kalah dalam permainan adalah ....', options: ['Menerima dengan sportif', 'Marah kepada teman', 'Merusak alat bermain', 'Menyalahkan semua orang'], answer: 0 },
    { id: 'pjok-m24', type: 'choice', prompt: 'Gerakan memutar lengan di tempat termasuk gerak ....', options: ['Nonlokomotor', 'Lokomotor', 'Berlari', 'Meluncur'], answer: 0 },
    { id: 'pjok-m25', type: 'choice', prompt: 'Agar lapangan nyaman digunakan, setelah bermain kita ....', options: ['Merapikan alat dan membuang sampah', 'Meninggalkan sampah', 'Menyembunyikan bola', 'Mengotori lapangan'], answer: 0 },
    { id: 'pjok-s1', type: 'short', prompt: 'Apa yang kita lakukan sebelum olahraga untuk menyiapkan tubuh?', accepted: ['pemanasan', 'melakukan pemanasan'] },
    { id: 'pjok-s2', type: 'short', prompt: 'Apa nama gerak berpindah tempat seperti berjalan dan berlari?', accepted: ['lokomotor', 'gerak lokomotor'] },
    { id: 'pjok-s3', type: 'short', prompt: 'Apa nama gerak di tempat seperti mengayun dan menekuk?', accepted: ['nonlokomotor', 'non lokomotor', 'gerak nonlokomotor', 'gerak non lokomotor'] },
    { id: 'pjok-s4', type: 'short', prompt: 'Dengan apa kita sebaiknya mencuci tangan agar bersih?', accepted: ['sabun', 'air dan sabun', 'sabun dan air'] },
    { id: 'pjok-s5', type: 'short', prompt: 'Apa minuman yang baik setelah berolahraga?', accepted: ['air putih'] },
    { id: 'pjok-s6', type: 'short', prompt: 'Apa yang kita lakukan setelah olahraga agar tubuh kembali tenang?', accepted: ['pendinginan', 'melakukan pendinginan'] },
    { id: 'pjok-s7', type: 'short', prompt: 'Dalam sepak bola, bagian tubuh apa yang digunakan untuk menendang bola?', accepted: ['kaki'] },
    { id: 'pjok-s8', type: 'short', prompt: 'Apa alat untuk menyikat gigi?', accepted: ['sikat gigi'] },
    { id: 'pjok-s9', type: 'short', prompt: 'Apa yang harus dipakai di kaki saat bermain di lapangan?', accepted: ['sepatu', 'alas kaki', 'sepatu olahraga'] },
    { id: 'pjok-s10', type: 'short', prompt: 'Siapa yang harus mendampingi anak saat berenang?', accepted: ['orang dewasa', 'orang tua', 'guru', 'orang dewasa atau guru'] },
  ],
};