// // server.js
// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const Employee = require('./models/Employee');
// const cors = require('cors');

// const app = express();
// const PORT = process.env.PORT || 3001;

// // mongoose.connect('mongodb+srv://shubhampatil080699:Shubham5538@cluster0.v4yseo5.mongodb.net/?retryWrites=true&w=majority', {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// //   ssl: true,
// //   authSource: 'admin',
// //   retryWrites: true,
// //   w: 'majority',
// // });

// mongoose.connect('mongodb+srv://shubhampatil080699:Shubham5538@cluster0.v4yseo5.mongodb.net/?retryWrites=true&w=majority', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });


// // Middleware
// app.use(bodyParser.json());

// // Routes
// app.get('/api/employees', async (req, res) => {
//   try {
//     const employees = await Employee.find();
//     res.json(employees);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// app.post('/api/employees', async (req, res) => {
//   try {
//     const newEmployee = new Employee(req.body);
//     const savedEmployee = await newEmployee.save();
//     res.json(savedEmployee);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// app.put('/api/employees/:id', async (req, res) => {
//   try {
//     const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     res.json(updatedEmployee);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// app.delete('/api/employees/:id', async (req, res) => {
//   try {
//     const deletedEmployee = await Employee.findByIdAndRemove(req.params.id);
//     res.json(deletedEmployee);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ error: 'Something went wrong!' });
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });




const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Enable CORS
app.use(cors());

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB connection
mongoose.connect('mongodb+srv://shubhampatil080699:Shubham5538@cluster0.v4yseo5.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('MongoDB connection established successfully');
});

// API routes
const employeeRouter = require('./routes/employeeRoutes');
app.use('/api/employees', employeeRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
