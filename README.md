# JSONPlaceholder Users Table

A simple web application that fetches user data from the **JSONPlaceholder API** and displays it in a responsive Bootstrap table.

## 📌 Features

- Fetches user data using the Fetch API
- Displays users in a Bootstrap table
- Responsive layout
- Simple navigation bar
- Hero section
- Edit and Delete buttons (UI only)

## 🛠️ Technologies Used

- HTML5
- CSS3
- Bootstrap 5.3
- JavaScript (ES6)
- JSONPlaceholder REST API

## 📂 Project Structure

```
project-folder/
│
├── index.html
├── index.js
└── README.md
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone : https://morsalin7274-bit.github.io/jsonplaceholder-table-/
```

### 2. Open the project

Navigate to the project folder.

```bash
cd jsonplaceholder-users-table
```

### 3. Run the project

Simply open `index.html` in your browser.

Or use the **Live Server** extension in Visual Studio Code.

---

## 🌐 API Used

This project uses the free REST API provided by JSONPlaceholder.

Endpoint:

```
https://jsonplaceholder.typicode.com/users
```

## 📸 Preview

The application contains:

- Responsive Navbar
- Hero Section
- Dynamic Users Table
- Edit Button
- Delete Button

## 📖 How It Works

1. JavaScript sends a request using the Fetch API.
2. Data is received from JSONPlaceholder.
3. The response is converted into JSON.
4. `map()` loops through every user.
5. HTML table rows are generated dynamically.
6. The table is inserted into the page using `innerHTML`.

## 💻 Code Highlights

Fetch API:

```javascript
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        // Render table
    });
```

Generate rows dynamically:

```javascript
data.map(user => `
<tr>
    <td>${user.id}</td>
    <td>${user.name}</td>
    <td>${user.email}</td>
    <td>${user.website}</td>
</tr>
`).join("")
```

## 🎯 Future Improvements

- Add Edit functionality
- Add Delete functionality
- Search users
- Pagination
- Sorting
- User details modal
- Dark mode
- Loading spinner
- Error handling

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository.
2. Create a new branch.
3. Commit your changes.
4. Push the branch.
5. Open a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Morsalin**

GitHub: https://github.com/your-username

---

⭐ If you like this project, don't forget to give it a star!
