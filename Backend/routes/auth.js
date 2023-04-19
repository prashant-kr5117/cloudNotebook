const express = require('express');
const { default: mongoose } = require('mongoose');
const router= express.Router();

router.get('/',(req,res)=>{
    const obj=    {
        name:'prashant',
        num:4
    }
    res.json(obj);
})

module.exports= router