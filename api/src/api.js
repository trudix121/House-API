const express = require('express')
const router = express.Router()
const db = require('../db')

// SEARCH BY POSTAL CODE

router.get('/', async (req,res)=>{
    const rest = await db.findAll()
    if(rest){
        res.status(200).json({
            'message':'ok',
            'data':rest
        })
    }

})
router.get('/postal_code/:id', async (req,res)=>{
    const rest = await db.findbypostalcode(`${req.params.id}`)
    if(rest){

        res.status(200).json({
            'message':'ok',
            'data':rest
        })

    }
    else{
        res.status(404).json({
            'message':'not found'
        })
    }
})

// SEARCH BY PRICE
router.get('/price_lower/:price', async (req, res) => {
    const result = await db.findByPrice(Number(req.params.price), 'lower');
    if (result) {
      res.status(200).json({ 'message': 'ok', 'data': result });
    } else {
      res.status(404).json({ 'message': 'Not Found' });
    }
  });

router.get('/price_higher/:price', async (req,res)=>{
    const result = await db.findByPrice(Number(req.params.price), 'higher');
    if(result){
        res.status(200).json({
            'message':'ok',
            'data':result
        })
    }
    else{
        res.status(404).json({
            'message':'Not Found'
        })
    }
})
router.get("/price_range/:higher/:lower", async (req,res)=>{
    const result = await db.findByPrice(req.params.higher, 'range', req.params.lower)
    if(result){
        res.status(200).json({
            'message':'ok',
            'data':result
        })
    }
    else{
        res.status(404).json({
            'message':'Not Found'
        })
    }
})
// SEARCH BY STATE

router.get('/state/:state', async (req,res)=>{
    const rest = await db.findByState(req.params.state)
    if(rest){
        res.status(200).json({
            'message':'ok',
            'data':rest
        })
    }
    else{
        res.status(404).json({
            'message':'Not Found'   
        })
    }
})

// SEARCH BY CITY

router.get('/city/:city', async (req,res)=>{
    const rest = await db.findByCity(req.params.city)
    if(rest){
        res.status(200).json({
            'message':'ok',
            'data':rest
        })
    }
    else{
        res.status(404).json({
            'message':'Not Found'
        })
    }
})

// SEARCH BY ACRE LOT (for now only exactly)

router.get('/acre/:size', async (req,res)=>{
    const rest = await db.findByAcre(req.params.size)
    if(rest){
        res.status(200).json({
            'message':'ok',
            'data':rest
        })
    }
    else{
        res.status(404).json({
            'message':'Not Found'
        })
    }
})


module.exports = router