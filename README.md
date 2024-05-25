# To-Do List Web Application

This is a full-stack To-Do List application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js) with Tailwind CSS for styling.

## Features

-   Create, read, update, and delete tasks
-   Each task includes a title, description, status, and due date
-   Responsive design with Tailwind CSS


## Getting Started

1. Clone the repository:

```
git clone https://github.com/aashutosh148/todo-app.git
```

2. Install dependencies for the server and client:
```
cd todo-app/server
npm install 
cd ../client
npm install
```

4. Set up the environment variables:

- Create a `.env` file in the `server` directory.
- Add your MongoDB connection URI: `MONGODB_URI=your_mongodb_uri`
- Add port Number for server `PORT=port_number`

5. Start the server:

```
node server.js
```
6. Start the client in a new terminal window:
```
cd ../client
npm run dev
```


## Technologies Used

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Additional Libraries**: Axios, React Router, Mongoose

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.
