exports.createTitle = async(req, res) =>{
    res.status(200).send(" Created Title API")
};


exports.readTitle = async(req, res) =>{
    res.status(200).send("Read Title API")
}

exports.deleteTitle = async(req, res) =>{
    res.status(200).send("Delete Title API")
}


exports.updateTitle = async(req, res) =>{
    res.status(200).send("Update Title API")
}