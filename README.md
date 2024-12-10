# Astro-Sheets: Google Sheets as a Headless CMS

Astro-Sheets allows you to turn Google Sheets into a simple, lightweight headless CMS for building blogs or content-driven static sites using the Astro framework. Perfect for small projects or static sites needing easy, dynamic content management.

🌟 Demo: [astro-sheets.vercel.app](https://astro-sheets.vercel.app)           
📖 Detailed Guide: [Google Sheets as a Simple CMS](https://medium.com/@paul.pietzko/google-sheets-as-a-simple-cms-18ed6c8b838e)  
📦 GitHub Template: [astro-sheets](https://github.com/paulpietzko/astro-sheets)

## ✨ Features

- Headless CMS using Google Sheets as the backend.
- Dynamic Content: Update your Google Sheets and reflect changes instantly on your site.
- SEO-friendly: Powered by Astro's SSR for optimal performance.
- Lightweight and Easy to Use: No complex setup—just Google Sheets and a few lines of code.

## 🚀 Getting Started

1. **Clone the Template**
    ```bash
    git clone https://github.com/paulpietzko/astro-sheets
    cd astro-sheets
    npm install
    ```

2. **Set Up Google Sheets as a CMS**
    - Create a Google Sheet with columns like Title, Author, Date, and Content.
    - Follow the guide to create a WebApp Script for Google Sheets to fetch your data dynamically.
    - Deploy the script and copy the resulting URL.

3. **Connect Your Sheet to Astro**
    - Replace the Google Sheets WebApp URL in `src/pages/index.astro` with your own:
    ```javascript
    const res = await fetch("<Your WebApp URL>");
    const data = await res.json();
    ```

4. **Run the Project**
    - Start the development server:
    ```bash
    npm run dev
    ```
    - Visit the local server at `http://localhost:4321` to see your blog in action!

## 🛠️ Project Structure

Your project includes the following:

```text
/
├── public/ # Static assets
├── src/
│ ├── pages/ # Pages like index.astro
│ └── components/ # Reusable UI components
└── package.json # Project configuration
```

## 🧞 Commands

| Command               | Action                                            |
|-----------------------|---------------------------------------------------|
| `npm install`         | Installs dependencies                             |
| `npm run dev`         | Starts local dev server at `localhost:4321`       |
| `npm run build`       | Builds the production site to `./dist/`           |
| `npm run preview`     | Previews your build locally before deployment     |
| `npm run astro ...`   | Run CLI commands like `astro add`, `astro check`  |
| `npm run astro -- --help` | Get help using the Astro CLI                  |

## 🌍 Live Demo

Check out the live demo here: [astro-sheets.vercel.app](https://astro-sheets.vercel.app)

## 👀 Learn More

- Detailed Guide: [Google Sheets as a Simple CMS](https://medium.com/@paul.pietzko/google-sheets-as-a-simple-cms-18ed6c8b838e)
- Astro Documentation: [docs.astro.build](https://docs.astro.build)

## 📜 License

This project is licensed under the MIT License.
