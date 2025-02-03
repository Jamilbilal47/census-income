# Census Income Integration

## 📌 Overview

This project integrates with **Census.gov API** to fetch and display regional income data, allowing users to compare their income with the median regional income.

## 🚀 Live Demo

🔗 [Census Income App](https://census-income-production.up.railway.app/)

## 📂 Repository

🔗 [GitHub Repository](https://github.com/Jamilbilal47/census-income)

---

## 📊 Features Implemented

### 🔹 1. API Integration

- Fetches **real-time regional income data** from Census.gov.
- Handles **API failures and incomplete datasets** with proper error messages.
- Normalizes data for consistent display.

### 🔹 2. User Flow

1️⃣ **User inputs or confirms location** (auto-detection enabled).2️⃣ **System fetches & displays regional median income**.3️⃣ **User’s income is ranked** as a percentage, alongside a **bar chart comparison**.

### 🔹 3. User Interface (UI)

- Displays **user’s income ranking as a percentage** of regional income.
- Simple **bar chart visualization** for comparison.
- Fully **responsive design** for mobile and desktop.

### 🔹 4. Error Handling & Fallbacks

- Displays an **error message** if Census data is unavailable.
- Allows users to **manually input location** if auto-detection fails.
- Provides **graceful fallback handling** in case of API failures.

### 🔹 5. Performance & Scalability

- **Optimized API calls** for **fast response times**.
- Ensures **scalability** for multiple users accessing the system simultaneously.
- Maintains **99% data integration accuracy**.

---

## 🛠️ Setup & Installation

### **1. Clone the Repository**

```sh
git clone https://github.com/Jamilbilal47/census-income.git
cd census-income
```

### **2. Install Dependencies**

```sh
npm install
```

### **3. Create an `.env.local` File (if required)**

- Add API keys or any required environment variables.

### **4. Run Locally**

```sh
npm run dev
```

The app should be running at `http://localhost:3000`.

---

## 📦 Deployment

The project is deployed on **Railway** and can be accessed here:🔗 [Live Deployment](https://census-income-production.up.railway.app/)

For deployment:

- Railway automatically builds and deploys from GitHub.
- The **build command** is: `npm run build`
- The **start command** is: `npm start`

---

## ❗ Challenges & Trade-offs

- **Handling API rate limits:** Implemented error handling for cases where API responses are delayed.
- **Location auto-detection fallback:** Users can manually enter their location if auto-detection fails.
- **Performance considerations:** Ensured optimized API calls to reduce load times.

---

## ✨ Future Enhancements

- Add **multi-region comparisons**.
- Implement **historical income trends visualization**.
- Enhance **UI design with interactive elements**.

---

## 💍 Contact

For any queries, feel free to reach out:🌟 **Jamil Bilal** | 📧 [jamilbilal020@gmail.com](mailto:jamilbilal020@gmail.com)

---

This `README.md` provides a **clear project overview, setup instructions, features, challenges, and future enhancements**. Let me know if you need any modifications! 🚀
