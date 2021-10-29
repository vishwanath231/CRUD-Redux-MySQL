import express from 'express';
const router = express.Router();
import { userRegister, userList, userDelete, selectUser, userUpdate } from '../controller/userController.js';


router
.route('/new')
.post(userRegister)

router
.route('/all')
.get(userList)


router
.route('/select/:id')
.get(selectUser)

router
.route('/update')
.put(userUpdate)

router
.route('/delete/:uid')
.delete(userDelete)




export default router;
