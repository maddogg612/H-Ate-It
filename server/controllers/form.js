//this is where all the handlers go

//const express = require('express');
const formController = {};
//const path = require('path');
const FormBody = require('../models/formBody.js');

formController.getForm = async (req, res) => {
  try {
    const database = await FormBody.find();
    //console.log(database);
    res.status(200).json(database);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

formController.createPost = async (req, res) => {
  const { restaurantName, dishName, rating, notes } = req.body;
  //const post = req.body;
  //console.log(post);
  //console.log(restaurantName, dishName, rating, notes);
  const newPost = new FormBody({ restaurantName, dishName, rating, notes });
  //const newPost = new FormBody(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json(error.message);
  }
};

module.exports = formController;
