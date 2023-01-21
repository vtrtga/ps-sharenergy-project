import 'dotenv/config';
import app from './app';
import connectToDatabase from './Models/Connection';

const PORT = process.env.PORT || 3001;

connectToDatabase()
  .then(() => {
    app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
  })
  .catch((err: Error) => {
    console.log('Connection with database generated an error: \r\n');
    console.error(err);
    console.log('\r\nServer initialization cancelled');
    process.exit(0);
  });