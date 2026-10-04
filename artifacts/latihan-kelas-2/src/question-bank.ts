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
    { id: 'pai-m1', type: 'choice', prompt: 'Berapa jumlah rukun Islam?', options: ['Empat', 'Lima', 'Enam', 'Tujuh'], answer: 1 },
    { id: 'pai-m2', type: 'choice', prompt: 'Rukun Islam yang pertama adalah ....', options: ['Salat', 'Puasa', 'Syahadat', 'Zakat'], answer: 2 },
    { id: 'pai-m3', type: 'choice', prompt: 'Berapa jumlah rukun iman?', options: ['Lima', 'Enam', 'Tujuh', 'Delapan'], answer: 1 },
    { id: 'pai-m4', type: 'choice', prompt: 'Kita beriman kepada Allah. Allah adalah ....', options: ['Tuhan kita', 'Teman kita', 'Guru kita', 'Tetangga kita'], answer: 0 },
    { id: 'pai-m5', type: 'choice', prompt: 'Kitab suci umat Islam adalah ....', options: ['Al-Qur’an', 'Injil', 'Taurat', 'Zabur'], answer: 0 },
    { id: 'pai-m6', type: 'choice', prompt: 'Nabi terakhir yang diutus Allah adalah Nabi ....', options: ['Ibrahim', 'Musa', 'Isa', 'Muhammad'], answer: 3 },
    { id: 'pai-m7', type: 'choice', prompt: 'Salat wajib dalam sehari semalam berjumlah ....', options: ['Tiga waktu', 'Empat waktu', 'Lima waktu', 'Enam waktu'], answer: 2 },
    { id: 'pai-m8', type: 'choice', prompt: 'Sebelum salat, umat Islam berwudu untuk ....', options: ['Membersihkan diri', 'Mengisi waktu', 'Bermain air', 'Mendinginkan badan'], answer: 0 },
    { id: 'pai-m9', type: 'choice', prompt: 'Saat berwudu, kita membasuh wajah sebanyak ....', options: ['Satu kali', 'Dua kali', 'Tiga kali', 'Empat kali'], answer: 2 },
    { id: 'pai-m10', type: 'choice', prompt: 'Salat Subuh dikerjakan pada waktu ....', options: ['Pagi sebelum matahari terbit', 'Tengah hari', 'Sore hari', 'Malam hari'], answer: 0 },
    { id: 'pai-m11', type: 'choice', prompt: 'Saat mendengar azan, sebaiknya kita ....', options: ['Berteriak keras', 'Segera bersiap untuk salat', 'Terus bermain', 'Menutup telinga'], answer: 1 },
    { id: 'pai-m12', type: 'choice', prompt: 'Puasa wajib bagi umat Islam dilakukan pada bulan ....', options: ['Muharam', 'Safar', 'Ramadan', 'Syawal'], answer: 2 },
    { id: 'pai-m13', type: 'choice', prompt: 'Orang yang mampu mengeluarkan zakat membantu ....', options: ['Orang yang membutuhkan', 'Orang yang sudah kaya saja', 'Dirinya sendiri saja', 'Orang yang sedang bermain'], answer: 0 },
    { id: 'pai-m14', type: 'choice', prompt: 'Hari raya setelah umat Islam berpuasa Ramadan adalah ....', options: ['Iduladha', 'Idulfitri', 'Tahun Baru', 'Hari Jumat'], answer: 1 },
    { id: 'pai-m15', type: 'choice', prompt: 'Hari raya Iduladha mengingatkan kita pada kisah Nabi ....', options: ['Yunus', 'Ibrahim', 'Yusuf', 'Nuh'], answer: 1 },
    { id: 'pai-m16', type: 'choice', prompt: 'Surah pertama dalam Al-Qur’an adalah ....', options: ['Al-Ikhlas', 'An-Nas', 'Al-Fatihah', 'Al-Falaq'], answer: 2 },
    { id: 'pai-m17', type: 'choice', prompt: 'Surah Al-Ikhlas menjelaskan tentang ....', options: ['Keesaan Allah', 'Kisah hewan', 'Cara berwudu', 'Nama-nama bulan'], answer: 0 },
    { id: 'pai-m18', type: 'choice', prompt: 'Jika mendapat bantuan, kita mengucapkan ....', options: ['Maaf', 'Tolong', 'Terima kasih', 'Sampai jumpa'], answer: 2 },
    { id: 'pai-m19', type: 'choice', prompt: 'Jika melakukan kesalahan, kita sebaiknya ....', options: ['Menyalahkan teman', 'Meminta maaf', 'Berpura-pura lupa', 'Marah'], answer: 1 },
    { id: 'pai-m20', type: 'choice', prompt: 'Kepada orang tua, kita harus bersikap ....', options: ['Sopan dan hormat', 'Acuh tak acuh', 'Kasar', 'Suka membantah'], answer: 0 },
    { id: 'pai-m21', type: 'choice', prompt: 'Anak yang jujur akan berkata ....', options: ['Sesuai kenyataan', 'Sesuai keinginan teman', 'Apa saja agar dipuji', 'Tidak pernah menjawab'], answer: 0 },
    { id: 'pai-m22', type: 'choice', prompt: 'Saat masuk masjid, kita menjaga ....', options: ['Ketenangan dan kebersihan', 'Suara agar keras', 'Mainan tetap berbunyi', 'Makanan berserakan'], answer: 0 },
    { id: 'pai-m23', type: 'choice', prompt: 'Kita memulai kegiatan baik dengan mengucapkan ....', options: ['Bismillah', 'Selamat tidur', 'Sampai jumpa', 'Permisi'], answer: 0 },
    { id: 'pai-m24', type: 'choice', prompt: 'Malaikat yang menyampaikan wahyu kepada nabi adalah ....', options: ['Mikail', 'Israfil', 'Jibril', 'Izrail'], answer: 2 },
    { id: 'pai-m25', type: 'choice', prompt: 'Hari Jumat bagi umat Islam adalah hari untuk ....', options: ['Salat Jumat bagi laki-laki muslim', 'Berhenti belajar', 'Tidak berbuat baik', 'Bermain sepanjang hari'], answer: 0 },
    { id: 'pai-s1', type: 'short', prompt: 'Apa nama kitab suci umat Islam?', accepted: ['al quran', 'alquran', 'quran', 'al-quran', 'al qur an'] },
    { id: 'pai-s2', type: 'short', prompt: 'Siapa nabi dan rasul terakhir?', accepted: ['nabi muhammad', 'muhammad', 'nabi muhammad saw', 'muhammad saw'] },
    { id: 'pai-s3', type: 'short', prompt: 'Apa nama ibadah yang dilakukan lima waktu setiap hari?', accepted: ['salat', 'sholat', 'shalat'] },
    { id: 'pai-s4', type: 'short', prompt: 'Apa yang kita lakukan sebelum salat agar suci?', accepted: ['wudu', 'wudhu', 'berwudu', 'berwudhu'] },
    { id: 'pai-s5', type: 'short', prompt: 'Apa nama bulan saat umat Islam berpuasa?', accepted: ['ramadan', 'ramadhan'] },
    { id: 'pai-s6', type: 'short', prompt: 'Apa ucapan saat memulai kegiatan baik?', accepted: ['bismillah', 'bismillahirrahmanirrahim'] },
    { id: 'pai-s7', type: 'short', prompt: 'Apa ucapan saat menerima pertolongan?', accepted: ['terima kasih', 'terimakasih'] },
    { id: 'pai-s8', type: 'short', prompt: 'Berapa jumlah rukun iman?', accepted: ['6', 'enam'] },
    { id: 'pai-s9', type: 'short', prompt: 'Apa nama hari raya setelah bulan Ramadan?', accepted: ['idulfitri', 'idul fitri', 'lebaran'] },
    { id: 'pai-s10', type: 'short', prompt: 'Apa nama surah yang dibaca pada setiap rakaat salat?', accepted: ['al fatihah', 'alfatihah', 'surah al fatihah', 'surat al fatihah'] },
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