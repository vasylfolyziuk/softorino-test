const express = require('express'),
    path = require('path'),
    app = express(),
    cors = require('cors'),
    jwt = require('jsonwebtoken');


const users = [];

const host = '127.0.0.1';
const port = 3001;

const tokenKey = '1a2b-3c4d-5e6f-7g8h';

const whiteList = ['http://localhost:3000'];
const corsOptions = {
  origin: function(origin, callback) {
    console.log('origin', origin);
    if (!origin || whiteList.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}

app.use(cors(corsOptions));
app.use(express.json());
app.use((req, res, next) => {
  if (req.headers.authorization) {
      jwt.verify(
          req.headers.authorization.split(' ')[1],
          tokenKey,
          (err, payload) => {
              if (err) next();
              else if (payload) {
                  for (let user of users) {
                      if (user.id === payload.id) {
                          req.user = user;
                          next();
                      }
                  }

                  if (!req.user) next();
              }
          }
      );
  }

  next();
});

const checkAuthRequiredFields = (email, password, res) => {
  if (email.trim().length === 0) {
    return res
      .status(400)
      .json({ error: { message: 'Email is required' }});
  }

  if (password.trim().length === 0) {
    return res
      .status(400)
      .json({ error: { message: 'Password is required' }});
  }
}

app.post('/api/auth', (req, res) => {
  const {email, password} = req.body;
  
  checkAuthRequiredFields(email, password, res);

  if (req.body.email && req.body.password) {
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
      return res
            .status(400)
            .json({ error: { message: 'User already exists' }});
    } else {
      const id = 1;
      const user = {
        id,
        email,
        password,
        token: jwt.sign({ id }, tokenKey),
      }
      users.push(user);

      return res.status(200).json(user);
    }
  }
});

app.post('/api/login', (req, res) => {
  if (req.body.user) {
    const {email, password} = req.body.user; 

    checkAuthRequiredFields(email, password, res);

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
      return res.status(200).json(user);
    } else {
      return res
        .status(400)
        .json({ error: { message: 'Invalid credentials' }});
    }
  }
  
  return res
    .status(401)
    .json({ error: { message: 'Not authorized' }});
});

app.post('/api/logout', (req, res) => {
  let authToken = req.headers.authorization;

  const index = users.findIndex(user => user.token === authToken);

  if (index > -1) {
    users.splice(index, 1);
  } else {
    return res
      .status(401)
      .json({ error: { message: 'Not authorized' }});
  }
  
  return res.status(200).json({});
});

app.get('/api/test', (req, res) => {
  return res.status(200).json({test: true});
});

// // All other GET requests not handled before will return our React app
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
// });

app.listen(port, host, () =>
    console.log(`Server listens http://${host}:${port}`)
);