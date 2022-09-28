const ProductModel = require('../models/productModel');

exports.getAllProducts = function()
{
    return new Promise((resolve,reject) =>
    {
        ProductModel.find({}, function(err,data)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve(data);
            }
        })
    })   
}

exports.getProduct = function(id)
{
    return new Promise((resolve,reject) =>
    {
        ProductModel.findById(id, function(err,data)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve(data);
            }
        })
    })   
}

exports.addProduct = function(obj)
{
    return new Promise((resolve,reject) =>
    {
        let prod = new ProductModel({
            name : obj.name,
            age : obj.age,
            pic : obj.pic,
            serialNo : obj.serialNo
        });
    
        prod.save(function(err)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve('Created');
            }
        })
    });
}

exports.updateProduct = function(id, obj)
{
    return new Promise((resolve,reject) =>
    {
        
        ProductModel.findByIdAndUpdate(id,
            {
                name : obj.name,
                age : obj.age,
                pic : obj.pic,
                serialNo : obj.serialNo
            }, function(err)
            {
                if(err)
                {
                    reject(err);
                }
                else
                {
                    resolve('Updated !');
                }
            })
    });
}


exports.deleteProduct = function(id)
{
    return new Promise((resolve,reject) =>
    {
        ProductModel.findByIdAndDelete(id, function(err)
            {
                if(err)
                {
                    reject(err);
                }
                else
                {
                    resolve('Deleted !');
                }
            })
    });
}


