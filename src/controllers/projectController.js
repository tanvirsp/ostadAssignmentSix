exports.createProject = async(req, res) =>{
    res.status(200).send(" Created Project API")
};


exports.readProject = async(req, res) =>{
    res.status(200).send("Read Project API")
}

exports.deleteProject = async(req, res) =>{
    res.status(200).send("Delete Project API")
}


exports.updateProject = async(req, res) =>{
    res.status(200).send("Update Project API")
}