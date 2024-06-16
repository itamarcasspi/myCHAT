# Real-Time Chat Application

A real-time chat application built using the MERN (MongoDB, Express, React, Node.js) stack, utilizing JWT for authentication and Socket.io for real-time communication.

## Table of Contents


- [Real-Time Chat Application](#real-time-chat-application)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Link](#link)
  - [Application use cases](#application-use-cases)
  - [API Endpoints](#api-endpoints)
    - [1. Authentication](#1-authentication)
    - [2. Users](#2-users)
    - [3. Messages](#3-messages)
  - [Technologies Used](#technologies-used)

## Features

- Real-time messaging using Socket.io
- User authentication using JWT
- User registration and login
- One-to-one chat conversations
- Simple and responsive design
- Efficient data management design using MongoDB

## Link
  [Click here](https://mychat-25rm.onrender.com) to access the web application hosted in Render.com.

  """ Disclaimer- As the application traffic is non-existent, requests made to the server may be slowed by 50 seconds or more """

## Application use cases

Register a new user or log in with existing credentials.

Start a conversation with another user.

Send and receive messages in real time.

## API Endpoints

### 1. Authentication

    POST /api/auth/signup 
Register a new user

    POST /api/auth/login
Login an existing user

    POST /api/auth/logout
Logout an existing user

### 2. Users

    GET /api/users
Get all registered users

### 3. Messages

    GET /api/messages/:id
Get all messages (conversation) from the specified user id

    POST /api/messages/send/:id

Send a new message to specified user id

## Technologies Used

    Frontend: React, Tailwind CSS
    Backend: Node.js, Express
    Database: MongoDB
    Authentication: JWT
    Real-Time Communication: Socket.io
