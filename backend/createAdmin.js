require('dotenv').config();
const { Client } = require('pg');
const bcrypt = require('bcrypt');
const readline = require('readline-sync');

// --- Database connection details ---
const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 5432,
});

(async () => {
  try {
    const username = readline.question('Enter new admin username: ');
    const password = readline.question('Enter password: ', { hideEchoBack: true });

    // Hash the password and store in DB
    const hashed = await bcrypt.hash(password, 10);

    await client.connect();
    await client.query(
      'INSERT INTO admins (username, password_hash) VALUES ($1, $2)',
      [username, hashed]
    );

    console.log(`✅ Admin user '${username}' created successfully!`);
  } catch (err) {
    console.error('❌ Database error:', err.message);
  } finally {
    await client.end();
  }
})();
