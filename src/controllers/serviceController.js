exports.createService = async(req, res) =>{
    res.status(200).send(" Created Service API")
};


exports.readService = async(req, res) =>{
    res.status(200).send("Read Service API")
}

exports.deleteService = async(req, res) =>{
    res.status(200).send("Delete Service API")
}


exports.updateService = async(req, res) =>{
    res.status(200).send("Update Service API")
}