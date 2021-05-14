const express = require('express');
const app = express();

const ExpressError = require('./expressError');
const {convertAndValidateNumsArr, findMode, findMedian, findMean } = require('./helper')

// Response handler to return response in json
app.use(express.json());

// Mean route
app.get("/mean", function(req, res, next){
try{ 
    if(!req.query.nums){
        throw new ExpressError("Nums are required!", 400);

    }
    const nums = convertAndValidateNumsArr(req.query.nums.split(","));
    if(nums instanceof Error){
        throw new ExpressError(nums.message, 404);
    }

    let response = {
        operation:"mean",
        value: findMean(nums)
    }
   return res.json({response: response})
}
catch(err){
    return next(err);
}

});

// Median route
app.get("/median", function(req, res, next){
    try{ 
        if(!req.query.nums){
            throw new ExpressError("Nums are required!", 400);
    
        }
        const nums = convertAndValidateNumsArr(req.query.nums.split(","));
        if(nums instanceof Error){
            throw new ExpressError(nums.message, 404);
        }
    
        let response = {
            operation:"median",
            value: findMedian(nums)

        }
       return res.json({response: response})
    }
    catch(err){
        return next(err);
    }

});

// Mode route
app.get("/mode", function(req, res, next){
    try{ 
        if(!req.query.nums){
            throw new ExpressError("Nums are required!", 400);
    
        }
        const nums = convertAndValidateNumsArr(req.query.nums.split(","));
        if(nums instanceof Error){
            throw new ExpressError(nums.message, 404);
        }
    
        let response = {
            operation:"mode",
            value: findMode(nums)

        }
       return res.json({response: response})
    }
    catch(err){
        return next(err);
    }

});

// 404 Handler
app.use(function(req,res,next){
    const notFoundError = new ExpressError("Not Found", 404);
    return next(notFoundError);
});

// Generic Error Handler
app.use(function(err, req,res, next){
    // set the default status to 500 Internal Server Error

    let status = err.status || 500;
    let message = err.message;

    return res.status(status).json({
        error: {message, status}
    });
});

app.listen(3000, function(){
    console.log('Server is listening on prot 3000');
});