# ThinkChain44 Landing Page

A mobile-responsive landing page for ThinkChain44 services, featuring a dynamic service listing and a local admin dashboard for managing content.

## 🚀 Live Demo
[https://ppsaheed.github.io/tc_landing/](https://ppsaheed.github.io/tc_landing/)

## ✨ Features
- **Mobile-First Design**: Optimized for mobile devices with a clean, app-like interface.
- **Dynamic Services**: Services are loaded from a JSON file, making updates easy.
- **Admin Dashboard**: A local dashboard to add, edit, or delete services without touching code.
- **Direct Payments**: Integrated UPI and WhatsApp links for seamless ordering.
- **Static Deployment**: Fully compatible with GitHub Pages (no backend server required).

## 🛠️ How to Update Content

Since this project is hosted on GitHub Pages (a static host), the Admin Dashboard works a bit differently than a traditional web app.

1.  **Open Admin Dashboard**:
    - Go to [https://ppsaheed.github.io/tc_landing/admin.html](https://ppsaheed.github.io/tc_landing/admin.html)
    - **Login**: Username: `tc`, Password: `Syd@44`

2.  **Make Changes**:
    - Add new services, edit prices, or update descriptions using the interface.

3.  **Save Changes**:
    - Click **Save**.
    - The system will **download a file named `services.json`** to your computer.

4.  **Deploy**:
    - Replace the `services.json` file in your local project folder with the new downloaded file.
    - Push the changes to GitHub:
      ```bash
      git add services.json
      git commit -m "Update services"
      git push origin main
      git push origin main:gh-pages
      ```

## 💻 Run Locally

1.  Clone the repository:
    ```bash
    git clone https://github.com/ppsaheed/tc_landing.git
    cd tc_landing
    ```

2.  Open `index.html` in your browser.
    - *Note: Some browsers may block fetching JSON files from the local file system due to CORS. It is recommended to use a local server.*

3.  Using a local server (optional but recommended):
    ```bash
    # If you have Python installed
    python3 -m http.server

    # OR if you have Node.js installed
    npx serve .
    ```

## 📂 Project Structure
- `index.html`: Main landing page.
- `service.html`: Detailed view for individual services.
- `admin.html`: Dashboard for managing services.
- `services.json`: Data file containing all service information.
- `style.css`: Global styles and variables.
- `assets/`: Directory for images (e.g., `custom-calendar-2026.jpg`).

## 🎨 Technologies
- HTML5
- CSS3 (Custom properties, Flexbox, Grid)
- Vanilla JavaScript (ES6+)
- GitHub Pages
