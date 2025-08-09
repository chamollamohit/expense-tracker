import { User } from "../model/user.model.js";
import { ApiResponse } from "../utils/apiResponse.js"
import { asyncHandler } from "../utils/asyncHandler.js"

const newUser = asyncHandler(async (req,res) => {
    const {name, email, password} = req.body
    if(await User.findOne({email})) {
        return res.status(400).json(new ApiResponse(400, email,"email already exist!!!"))
    }
    const createUser = await User.create({
        name: name,
        email: email,
        password: password
    })
    if (!createUser) {
        throw new Error("Unable to register user")
    }
    res.status(200).json(new ApiResponse(200, createUser, "User Register Succesfully"))
})

export {newUser}