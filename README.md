# Doctors Portal -A Online Health Care Service

<a href="https://doctor-app-8c617.web.app//">Live Preview </a>
<br>

<br>
It's a Doctor Portal’s Website where  users can Register Appointment for doctor and check their appointments status. On the Admin dashboard admin can view  appointments .

---

# Table of Contents

<ul>
<li><b>Installation </b></li>
<li><b>Features</b></li>
<li><b> Technologies Used</b></li>
</ul>

---

# Installation

### Clone the client and server repositories to your local machine using the following commands:

```bash
git clone https://github.com/shahiduljahid/doctor-portal
```

```bash
git clone https://github.com/shahiduljahid/doctor-portal-server
```

### Navigate to the root directory of each repository and run the following command to install the required dependencies:

```bash
npm install
```

### Create a Firebase project and configure the authentication and hosting settings as described in the Firebase documentation.

### Create a MongoDB database and obtain the connection string.

### Create a .env file in the server directory and add the following environment variables:

```bash
PORT=4000
DB_URI=<your MongoDB connection string>
```

### Create a .env.local file in the client directory and add the following environment variables:

```bash
REACT_APP_API_BASE_URL=http://localhost:4000
```

### Start the server and client by running the following commands in the respective directories:

```bash
npm start
```

---

# Features

<ol>
<li><b>Users can Register for an appointment with a doctor by selecting the date, time, and doctor name. </b></li>
<li><b>View the status of their appointments</b></li>
<li><b>Administrators can View a dashboard of all appointments.</b></li>
<li><b> Administrators can manage the application through a dashboard.</b></li>
<li><b> The application has a responsive design that supports both desktop and mobile devices.</b></li>
</ol>

# Technologies Used

<ul>
<li><b> React.js</b></li>
<li><b>React Router </b></li>
<li><b> Firebase Hosting for front end</b></li>
<li><b>Bootstrap
 </b></li>
<li><b> Express.js</b></li>
<li><b>Mongoose </b></li>
<li><b>Vercel Hosting </b></li>
</ul>
