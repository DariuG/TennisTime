# TennisTime

A full-stack web application that allows users to view available tennis courts, see open time slots, and make instant online reservations with email confirmations and cancelation.

### User Features

- View all available tennis courts with location and details.
- Check available time slots for each court.
- Reserve a court instantly by filling in name and email (no login required).
- Receive a confirmation email with a 'Confirm reservation' button.
- After confirming the reservation, the user receives a reservation confirmed email with booking details.
- Prevents double booking through real-time updates (a slot will be locked for 2 minutes after making a reservation; without confirming the reservation within 2 minutes, the slot will be free again).

### Admin Features

- Add, edit, or delete tennis courts and sports complexes.
- TODO:
- View and manage all reservations.
- Set time slot intervals/holidays per court and sport complex.

# TO RUN THE APPLICATION:

1.  Run in terminal:

cd frontend
npm install

cd backend
npm install

2. Follow the steps inside SETUP_DATABASE.txt

3. Create a backend/.env file:


DATABASE_URL=
DB_USER=
DB_PASSWORD=
DB_HOST=localhost
DB_PORT=5432
DB_NAME=tennis_time
PORT=5000
MAILTRAP_USER=
MAILTRAP_PASS=
BASE_URL=http://localhost:3000
BACKEND_URL=http://localhost:5000

4. Run backend/createAdmin.js

input a username and a password to create your admin

5.  Run in terminal:

cd backend
npm run dev

cd frontend
npm start

6. When application is running, go to http://localhost:3000/admin/login and use your admin username and password to login and add courts.
