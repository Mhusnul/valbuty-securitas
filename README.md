# Valbury Sekuritas Landing Page Clone

Landing page ini adalah proyek pribadi yang dibuat untuk latihan dan pengembangan skill front-end. Desain dan kontennya meniru halaman utama dari website **KB Valbury Sekuritas**, dibangun menggunakan **React (Vite)**, **Tailwind CSS**, dan animasi **Framer Motion**.

## 🧰 Teknologi yang Digunakan

- ⚛️ [React](https://reactjs.org/)
- ⚡ [Vite](https://vitejs.dev/)
- 🎨 [Tailwind CSS](https://tailwindcss.com/)
- 🎞️ [Framer Motion](https://www.framer.com/motion/)
- 📦 [Lucide Icons](https://lucide.dev/) (untuk ikon SVG)

## 🚀 Fitur Utama

- Layout responsif untuk desktop dan mobile.
- Komponen reusable menggunakan props dan struktur modular.
- Efek animasi saat scroll menggunakan Framer Motion.
- Hover effect dinamis (misal: gambar hilang saat hover, shadow bertambah, dll).
- Form dan tombol interaktif.
- Gambar dan ilustrasi sesuai dengan branding Valbury.

## 🖼️ Tampilan Halaman

- **Hero Section**: ![image](https://github.com/user-attachments/assets/3fbaaa4f-cd49-4d68-a61a-bb4c3231e6f3)

- **Services**: ![image](https://github.com/user-attachments/assets/d3d991f7-e123-43fe-9a97-3a2a6e72872e)

- **Footer**: ![image](https://github.com/user-attachments/assets/dad9bf78-424f-4268-8e2f-45edc3b29bc1)


## 🏁 Instalasi

```bash
# Clone repositori ini
git clone https://github.com/username/valbury-landing-page.git
cd valbury-landing-page

# Install dependency
npm install

# Jalankan di mode development
npm run dev
```

## 📁 Struktur Folder

```bash
src/
├── assets/            # Gambar dan ikon statis
├── components/        # Komponen reusable (Navbar, Footer, Hero, Section, dll)
├── pages/             # Halaman utama atau bagian besar (Home, Services, dsb)
├── App.jsx            # Root component
├── main.jsx           # Entry point React
├── index.css          # Import Tailwind base styles
```

## 🛠️ Fitur Animasi (Framer Motion)

File `Section.jsx` dibuat sebagai komponen pembungkus yang otomatis memberi animasi muncul saat scroll.

Contoh penggunaan:

```jsx
import Section from "./components/Section";

<Section>
  <div>Konten yang akan muncul saat discroll</div>
</Section>;
```

## 🧾 License

Proyek ini dibuat hanya untuk **tujuan edukasi** dan tidak untuk penggunaan komersial. Semua hak cipta dan merek dagang dimiliki oleh **Valbury Sekuritas**.

---

© 2025 – Dibuat dengan ❤️ oleh Muhamad Husnul
