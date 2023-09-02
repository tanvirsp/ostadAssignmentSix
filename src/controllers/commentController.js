exports.createComment = async(req, res) =>{
    res.status(200).send(" Created Comment API")
};


exports.readComment  = async(req, res) =>{
    res.status(200).send("Read Comment API")
}

exports.deleteComment  = async(req, res) =>{
    res.status(200).send("Delete Comment API")
}


exports.updateComment  = async(req, res) =>{
    res.status(200).send("Update Comment API")
}