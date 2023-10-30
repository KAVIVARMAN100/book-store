import mongoose from 'mongoose';

const connectdb = () => {
  // Connect to the MongoDB database using the DB_URL from your environment variables
  mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,     // Use the new URL parser
    useUnifiedTopology: true,  // Use the new Server Discover and Monitoring engine
  });

  // Listen for the 'connected' event to confirm successful connection
  mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
  });

  // Listen for the 'error' event to handle any connection errors
  mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
  });

  // Listen for the 'disconnected' event to handle disconnections
  mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected');
  });

  // Gracefully close the database connection on application termination
  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log('MongoDB connection terminated');
      process.exit(0);
    });
  });
};

export default connectdb;
