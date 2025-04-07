const express = require('express')
const postUser = require('./routesuser')
const postTask = require('./routestask')

const router = require('Router')
app.get("/auth/crete/", postUser)
app.get("/auth/crete/", postTask)