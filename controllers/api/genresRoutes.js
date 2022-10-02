const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Genres } = require('../../models');
// todo: Check with team to see if this is necessary right now. Are we posting new genres?