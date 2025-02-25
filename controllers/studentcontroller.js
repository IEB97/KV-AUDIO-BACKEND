export function getStudent(req, res) {
    res.json({
        "Message": "This is a get request from student route"
    })
}

export function postStudent(req, res) {    
    res.json({
        "Message": "This is a post request from student route"
    })
}
  