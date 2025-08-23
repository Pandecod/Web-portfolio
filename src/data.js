import HeroImage from '/assets/hero-img.webp';
import aboutImage from '/assets/about.webp';

const Image = {
  HeroImage,
  aboutImage,
};

export default Image;
// ✅ Import asset
import Tools1 from '/assets/tools/vscode.png';
import Tools2 from '/assets/tools/reactjs.png';
import Tools3 from '/assets/tools/tailwind.png';
import Tools4 from '/assets/tools/bootstrap.png';
import Tools5 from '/assets/tools/js.png';
import Tools6 from '/assets/tools/github.png';
import Tools7 from '/assets/tools/html.webp';
import Tools8 from '/assets/tools/css.webp';
import Tools9 from '/assets/tools/php.webp';
import Tools10 from '/assets/tools/wordpress.webp';
import Tools11 from '/assets/tools/xampp.webp';
import Tools12 from '/assets/tools/figma.png';

// ✅ Data listTools
export const listTools = [
  // 🔹 Languages
  {
    id: 1,
    gambar: Tools7,
    nama: 'HTML',
    ket: 'Language',
    dad: '100',
  },
  {
    id: 2,
    gambar: Tools8,
    nama: 'CSS',
    ket: 'Language',
    dad: '200',
  },
  {
    id: 3,
    gambar: Tools5,
    nama: 'JavaScript',
    ket: 'Language',
    dad: '300',
  },
  {
    id: 4,
    gambar: Tools9,
    nama: 'PHP',
    ket: 'Language',
    dad: '400',
  },

  // 🔹 Tools & Environment
  {
    id: 5,
    gambar: Tools1,
    nama: 'Visual Studio Code',
    ket: 'Code Editor',
    dad: '500',
  },
  {
    id: 6,
    gambar: Tools11,
    nama: 'XAMPP',
    ket: 'Local Server',
    dad: '600',
  },
  {
    id: 7,
    gambar: Tools6,
    nama: 'GitHub',
    ket: 'Repository',
    dad: '700',
  },

  // 🔹 Frameworks & Libraries
  {
    id: 8,
    gambar: Tools2,
    nama: 'React JS',
    ket: 'Framework',
    dad: '800',
  },
  {
    id: 9,
    gambar: Tools3,
    nama: 'Tailwind CSS',
    ket: 'Framework',
    dad: '900',
  },
  {
    id: 10,
    gambar: Tools4,
    nama: 'Bootstrap',
    ket: 'Framework',
    dad: '1000',
  },
  {
    id: 11,
    gambar: Tools10,
    nama: 'WordPress',
    ket: 'CMS',
    dad: '1100',
  },

  // 🔹 Design Tools
  {
    id: 12,
    gambar: Tools12,
    nama: 'Figma',
    ket: 'Design App',
    dad: '1200',
  },
];

import Proyek1 from '/assets/proyek/proyek2.png';
import Proyek2 from '/assets/proyek/proyek4.png';
import Proyek3 from '/assets/proyek/proyek5.png';
import Proyek4 from '/assets/proyek/proyek1.png';
import Proyek5 from '/assets/proyek/proyek3.png';
import Proyek6 from '/assets/proyek/proyek6.png';

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: 'Website E-Commerce',
    desk: 'Website toko online sederhana dengan fitur katalog produk, keranjang belanja, dan checkout.',
    tools: ['HTML', 'CSS', 'Javascript'],
    dad: '200',
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: 'Website Bank Sampah',
    desk: 'Sistem pengelolaan bank sampah berbasis web dengan fitur setor, tarik, dan laporan saldo.',
    tools: ['HTML', 'CSS', 'Javascript', 'PHP', 'MySQL'],
    dad: '300',
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: 'Website Perpustakaan',
    desk: 'Website e-commerce dengan fitur katalog produk, keranjang belanja, dan checkout, dikembangkan bersama tim menggunakan WordPress.',
    tools: ['WordPress'],
    dad: '400',
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: 'Website e-commerce Amertha',
    desk: 'Aplikasi perpustakaan digital dengan fitur katalog buku, peminjaman, dan pengembalian.',
    tools: ['Bootstrap', 'PHP', 'MySQL'],
    dad: '400',
  },

  {
    id: 6,
    gambar: Proyek6,
    nama: 'Website Portofolio',
    desk: 'Website portofolio pribadi untuk menampilkan profil, keterampilan, dan proyek, dibuat dengan React JS, Vite, dan Tailwind CSS.',
    tools: ['Tailwind CSS', 'Vite', 'React JS'],
    dad: '400',
  },
];
