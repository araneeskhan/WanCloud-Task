
# User Data Management 👤

User Data Management is a React-based web application designed to manage user data. It allows you to add, view, and delete user records, making it a perfect solution for small user management tasks. With real-time form validation, error handling, and smooth navigation, this app ensures a seamless user experience.

## Features

- **User Management**: Add new users with details such as name, address, company, and telephone.
- **Form Validation**: Includes comprehensive field validations to ensure correct data entry.
- **Dynamic User List**: Displays all users in a table format with options to delete users.
- **Toast Notifications**: Provides feedback to users with success and error messages.
- **Responsive Design**: Optimized for different screen sizes, offering a smooth user interface.
- **Routing and Navigation**: Utilizes React Router to handle navigation between adding users and viewing the user list.
- **Redux State Management**: Uses Redux to manage and persist user data in the application.

## Technologies Used

- **React**: A powerful JavaScript library for building user interfaces.
- **Redux**: A state management tool to handle global state and actions for adding and deleting users.
- **React Router**: Enables dynamic routing for navigation between different pages.
- **CSS**: Custom styles for layout and form design.
- **Toastify**: For showing toast notifications on success or failure.
- **React-Redux**: To integrate Redux with React components for easy state management.

## Installation

To get started with the WanCloud User Data Management application, follow the steps below:

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/en/) installed. You can check your Node.js version by running the following command:

```bash
node -v
```

### Steps

1. Clone the repository:

    ```bash
    git clone https://github.com/araneeskhan/WanCloud-Task.git
    ```

2. Navigate to the project directory:

    ```bash
    cd WanCloud-Task
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Run the application:

    ```bash
    npm start
    ```

The app should now be running on [http://localhost:3000](http://localhost:3000).

## Folder Structure

```
WanCloud-Task/
│
├── public/
│   └── index.html               # HTML template
│
├── src/
│   ├── components/              # Contains all the UI components like Layout, UserForm, UserList
│   ├── store/                   # Redux store and slice to manage user data
│   ├── App.js                   # Main React component that sets up routes and state
│   ├── index.js                 # Entry point for React application
│   └── styles/                  # Custom CSS for styling components
│
├── package.json                 # Dependencies and scripts
└── README.md                    # Project documentation
```

## How It Works

### 1. **UserForm Component**
   - Collects user information like `First Name`, `Last Name`, `Address`, `Company`, and `Telephone`.
   - Implements client-side validation with real-time error messages.
   - Once the form is successfully submitted, the user data is dispatched to Redux for storage.

### 2. **UserList Component**
   - Displays a table of all users stored in Redux.
   - Allows deletion of users by clicking on the "Delete" button next to each record.

### 3. **Layout Component**
   - Provides a clean and responsive layout with a sidebar containing links to "Add User" and "View Users" pages.
   - Utilizes React Router's `Outlet` to render child components based on the active route.

### 4. **Redux Store**
   - A global state is managed using Redux, with actions to add and delete users.
   - The state is stored in a slice `userSlice` for easier management.

## Contributing

We welcome contributions to this project. If you would like to contribute, please follow the steps below:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature`.
3. Make your changes and commit them: `git commit -m 'Add your feature'`.
4. Push to your forked repository: `git push origin feature/your-feature`.
5. Open a pull request to the main repository.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- **React**: For providing a fast and flexible framework to build UIs.
- **Redux**: For easy global state management.
- **React Router**: For enabling dynamic routing in React.
- **Toastify**: For providing beautiful and customizable toast notifications.
  
---

This `README.md` includes all essential details for understanding, setting up, and contributing to the project. It's structured for ease of understanding, from features to installation instructions, and neatly presents the information.
