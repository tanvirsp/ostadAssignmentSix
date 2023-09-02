exports.createBlog = async(req, res) =>{
    res.status(200).send(" Created Blog API")
};


exports.readBlog  = async(req, res) =>{
    res.status(200).send("Read Blog API")
}

exports.deleteBlog  = async(req, res) =>{
    res.status(200).send("Delete Blog API")
}


exports.updateBlog  = async(req, res) =>{
    res.status(200).send("Update Blog API")
}