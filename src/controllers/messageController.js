exports.createMessage = async(req, res) =>{
    res.status(200).send(" Created Message API")
};


exports.readMessage  = async(req, res) =>{
    res.status(200).send("Read Message API")
}

exports.deleteMessage  = async(req, res) =>{
    res.status(200).send("Delete Message API")
}


exports.updateMessage  = async(req, res) =>{
    res.status(200).send("Update Message API")
}