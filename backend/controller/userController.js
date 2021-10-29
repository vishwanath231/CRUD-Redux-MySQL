
import db from "../config/db.js";


/**
 * @description    GET ALL USERS DATA
 * @method         GET
 * @access         public
 */
const userList = (req, res) => {
    
    db.query("SELECT * FROM info", (err, data) => {
        if (err) {
            
            res.status(500).json({
                success: false,
                msg: "error"
            })
        }else {
            res.status(200).json({
                success: true,
                count: data.length,
                data: data
            })
        }
    })
}



const userDelete = (req, res) => {

    const id = req.params.uid;

    db.query("DELETE FROM info WHERE uuid=?", id, 
        (err, data) => {
            if (err) {
                console.log(err);
            }else {
                res.send(data)
            }
        }
    )
}


const selectUser = (req, res) => {

    const id = req.params.id;

    db.query("SELECT * FROM info WHERE id=?", id, 
        (err, data) => {
            if (err) {
                console.log(err);
            }else {
                res.status(200).json({
                    success: true,
                    data: data
                })
            }
        }
    )
}



const userRegister = (req, res) => {

    const name = req.body.name
    const email = req.body.email
    const uid = Date.now()


    db.query("INSERT INTO info (uuid, name, email) VALUES (?,?,?)", [uid, name, email],
        (err, result) => {
            if (err) {
                res.status(500).json({
                    success: false,
                    msg: "error",
                })
            }else {
                res.status(200).json({
                    success: true,
                    msg: "Register successfull!",
                    data: {
                        uuid:uid,
                        name: name,
                        email: email
                    }
                })
            }
        } 
    )
}


const userUpdate = (req, res) => {

    const id = req.body.id
    const name = req.body.name
    const email = req.body.email
    const uid = Date.now()


    db.query("UPDATE info SET uuid=?, name=?, email=? WHERE id=?", [uid, name, email, id],
        (err, result) => {
            if (err) {
                res.status(500).json({
                    success: false,
                    msg: "error",
                })
            }else {
                res.status(200).json({
                    success: true,
                    msg: "Updated successfull!",
                    data: {
                        uuid:uid,
                        name: name,
                        email: email
                    }

                })
            }
        } 
    )
}


export {
    userRegister,
    userList,
    selectUser,
    userUpdate,
    userDelete
};


