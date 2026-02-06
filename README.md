# 🖥️ Windows 95 Portfolio - Omar Chiboub

A retro-themed developer portfolio inspired by the iconic Windows 95 interface. Built with React and Tailwind CSS, this project showcases your work, resume, and contact options inside draggable windows and vintage UI elements — perfect for developers who love nostalgia and creativity.

---

## 📂 Table of Contents

* [Features](#-features)
* [Getting Started](#-getting-started)
* [Folder Structure](#-folder-structure)
* [Available Components](#-available-components)
* [Customization](#-customization)
* [Contributing](#-contributing)
* [License](#-license)

---

## 🚀 Features

* 🪟 Draggable, resizable windows styled like Windows 95
* 🖼️ Clickable desktop icons with `.ico` support
* 🎨 Customizable colors and background
* 📁 Showcase projects with external links
* 📄 PDF resume viewer
* 💬 Functional contact form via [EmailJS](https://www.emailjs.com)

---

## 🛠️ Built With

* **React (TypeScript)**
* **Tailwind CSS**
* **Lucide React Icons**
* **EmailJS** for contact form
* **Google Drive** for hosting CV
* **.ico assets** served from `/public`

---

## 🏗️ Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/R4M-0/WIN95-PORTFOLIO.git
cd WIN95-PORTFOLIO
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) to view your portfolio.

---

## 📂 Folder Structure

```
src/
 ├─ components/
 │   ├─ ui/                  # Reusable UI elements
 │   ├─ AboutWindow.tsx
 │   ├─ ContactWindow.tsx
 │   ├─ DesktopContextMenu.tsx
 │   ├─ DesktopIcon.tsx
 │   ├─ ImageWindowContent.tsx
 │   ├─ ProjectsWindow.tsx
 │   ├─ PropertiesDialog.tsx
 │   ├─ RecycleBinWindow.tsx
 │   ├─ StartMenu.tsx
 │   ├─ TerminalWindow.tsx
 │   └─ Win95Window.tsx
 ├─ hooks/                   # Custom React hooks
 ├─ lib/                     # Helper functions
 ├─ pages/                   # Route pages
 ├─ App.tsx                  # Main App component
 ├─ main.tsx                 # Entry point
 └─ vite-env.d.ts
public/                       # Static assets like .ico files
```

---

## ⚙️ Available Components

* `Win95Window` – Base window component
* `DesktopIcon` – Clickable icon for desktop items
* `ContactWindow` – Functional contact form window
* `ProjectsWindow` – Display your projects
* `AboutWindow` – About/intro section
* `RecycleBinWindow` – Recycle bin simulation
* `TerminalWindow` – Retro terminal window

> Most components are draggable and resizable by default. Check `components/ui/` for helper components like buttons and dialogs.

---

## 🎨 Customization

* **Background**: Replace `/public/background.png` with your own image.
* **Colors**: Edit Tailwind configuration or individual window classes.
* **Icons**: Add/remove `.ico` files in `/public/icons`.
* **Resume PDF**: Update `ContactWindow.tsx` or `ProjectsWindow.tsx` with a new Google Drive link.

---

## 🤝 Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature-name`)
3. Make your changes
4. Commit your work (`git commit -m "Add feature"`)
5. Push to your branch (`git push origin feature-name`)
6. Open a Pull Request

> All contributions are welcome, from bug fixes to adding new retro-style windows or projects!

---

## 📄 License

MIT License – feel free to use and modify for personal or educational projects.

---

Made with 💾 and nostalgia by [Omar Chiboub](https://www.linkedin.com/in/omar-chiboub/)
