exports.createProduct = async(req, res) =>{
    res.status(200).send(" Created Product API")
};


exports.readProduct = async(req, res) =>{
    res.status(200).send("Read Product API")
}

exports.deleteProduct = async(req, res) =>{
    res.status(200).send("Delete Product API")
}


exports.updateProduct = async(req, res) =>{
    res.status(200).send("Update Product API")
}