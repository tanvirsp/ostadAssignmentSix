exports.createPortfolio = async(req, res) =>{
    res.status(200).send(" Created Portfolio API")
};


exports.readPortfolio = async(req, res) =>{
    res.status(200).send("Read Portfolio API")
}

exports.deletePortfolio = async(req, res) =>{
    res.status(200).send("Delete Portfolio API")
}


exports.updatePortfolio = async(req, res) =>{
    res.status(200).send("Update Portfolio API")
}