import type { Book, Nasyid, Project, Achievement } from "@/types";

export const books: Book[] = [
  {
    id: "1",
    title: "Jejak Cahaya",
    description:
      "Kumpulan syair tentang perjalanan spiritual seorang muslimah muda dalam menemukan makna hidupnya.",
    cover: "📗",
    genre: "Poetry",
    year: 2023,
  },
  {
    id: "2",
    title: "Bintang di Langit Hati",
    description:
      "Novel remaja islami yang mengisahkan persahabatan tulus dan cinta yang dijaga dengan iman.",
    cover: "📘",
    genre: "Novel",
    year: 2022,
  },
  {
    id: "3",
    title: "Mutiara Hikmah",
    description:
      "Kumpulan cerita pendek penuh inspirasi yang mengajarkan nilai-nilai kehidupan islami.",
    cover: "📕",
    genre: "Short Stories",
    year: 2024,
  },
];

export const nasyids: Nasyid[] = [
  {
    id: "1",
    title: "Selawat Nabi",
    artist: "Mia & Friends",
    album: "Nur di Hati",
    cover: "🎵",
    duration: "4:23",
    audioUrl: "https://mp3tourl.com/audio/1781657242681-8388365e-13c8-4e1b-909f-8bc9867b8eda.mp3",
  },
  {
    id: "2",
    title: "Ya Rasulullah",
    artist: "Mia",
    album: "Rindu Madinah",
    cover: "🎶",
    duration: "3:55",
    audioUrl: "https://mp3tourl.com/audio/1781657822676-fe9e447d-f2f4-4686-ad96-b8daab6da50f.mp3"
  },
  {
    id: "3",
    title: "Doa Ibu",
    artist: "Mia Feat. Ummi",
    album: "Keluarga Bahagia",
    cover: "🎼",
    duration: "5:10",
    audioUrl: "https://mp3tourl.com/audio/1781657943273-5e22657d-da9c-498a-b228-6b6802b038c3.mp3"
  },
  {
    id: "4",
    title: "Cahaya Ramadan",
    artist: "Mia",
    album: "Nur di Hati",
    cover: "🌙",
    duration: "4:41",
    audioUrl: "https://mp3tourl.com/audio/1781658161695-b0f57b60-3256-453a-9d43-723f628f36a0.mp3"
  },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Taman Baca Digital",
    description:
      "Platform perpustakaan digital islami untuk anak-anak dengan fitur interaktif dan animasi menarik.",
    image: "📚",
    url: "#",
    tags: ["Next.js", "React", "Tailwind"],
  },
  {
    id: "2",
    title: "Murotal Al-Qur'an",
    description:
      "Murotal Al-Qur'an yang dilantunkan dengan tartil, mengikuti kaidah tajwid dan makhraj yang benar. Murotal membantu pendengar membaca, menghafal, dan memahami Al-Qur'an dengan lebih baik, sekaligus menjadi sarana untuk mendekatkan diri kepada Allah dan menumbuhkan ketenangan hati.",
    image: "🎵",
    url: "#",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    id: "3",
    title: "Quiz Quran",
    description:
      "Aplikasi kuis interaktif untuk belajar Al-Quran dengan gamifikasi dan sistem reward yang menarik.",
    image: "📖",
    url: "#",
    tags: ["Vue.js", "Firebase", "PWA"],
  },
  {
    id: "4",
    title: "Wedding Invitation",
    description:
      "Template undangan pernikahan digital premium dengan animasi dan fitur RSVP interaktif.",
    image: "💌",
    url: "#",
    tags: ["HTML", "CSS", "Vanilla JS"],
  },
];

export const achievements: Achievement[] = [
  {
    id: "1",
    title: "Safinatun Najah",
    organization: "Sertifikat Safinatun Najah",
    year: 2024,
    description:
      "Sertifikat Safinatun Najah merupakan bukti resmi atas partisipasi, kelulusan, atau pencapaian seseorang dalam mempelajari ilmu fiqih, khususnya materi yang bersumber dari kitab Safinatun Najah",
    icon: "🏆",
    color: "clay-purple",
  },
  {
    id: "2",
    title: "Tuhfatul Athfal",
    organization: "Sertifikat Tuhfatul Athfal",
    year: 2023,
    description:
      "Sertifikat Tuhfatul Athfal merupakan bukti resmi atas partisipasi, kelulusan, atau pencapaian seseorang dalam mempelajari ilmu tajwid, khususnya materi yang bersumber dari kitab Tuhfatul Athfal",
    icon: "🥇",
    color: "clay-pink",
  },
  {
    id: "3",
    title: "Hifzul Mutun",
    organization: "Sertifikat Hifzul Mutun",
    year: 2023,
    description:
      "Sertifikat Hifzul Mutun merupakan bukti resmi atas partisipasi, kelulusan, atau pencapaian seseorang dalam mempelajari ilmu tajwid, khususnya materi yang bersumber dari kitab Hifzul Mutun",
    icon: "🌟",
    color: "clay-peach",
  },
];

export const chartData = [
  { month: "Jan", books: 2, Arabic: 5, web: 1, awards: 0 },
  { month: "Feb", books: 3, Arabic: 7, web: 2, awards: 1 },
  { month: "Mar", books: 1, Arabic: 4, web: 3, awards: 0 },
  { month: "Apr", books: 4, Arabic: 8, web: 2, awards: 1 },
  { month: "May", books: 2, Arabic: 6, web: 4, awards: 2 },
  { month: "Jun", books: 5, Arabic: 9, web: 3, awards: 1 },
  { month: "Jul", books: 3, Arabic: 11, web: 5, awards: 0 },
  { month: "Aug", books: 6, Arabic: 8, web: 4, awards: 2 },
];

export const skillsData = [
  { name: "Bahasa Arab", value: 95, color: "#C4A8E8" },
  { name: "Guru/Pengajar", value: 90, color: "#F5C6D9" },
  { name: "Web Dev", value: 65, color: "#FDDCCA" },
  { name: "Pembuat e-book", value: 75, color: "#C8EAD8" },
];

