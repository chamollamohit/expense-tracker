import jwt from "jsonwebtoken";
import { User } from "../model/user.model.js";
import { ApiResponse } from "../utils/apiResponse.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import { apiError } from "../utils/apiError.js"



const loginUser = asyncHandler(async (req, res) => {

    const { email, password } = req.body
    //Find User
    const user = await User.findOne({ email, password })
    if (!user) {
        return res.status(401).json(new ApiResponse(400,user,"Invalid Credential"));
    }
    // If credentials are correct, create a Token
    const payload = { id: user._id, name: user.name, email: user.email }
    const token = jwt.sign(payload,
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
    )
    const options = {
        httpOnly: true, // Prevents client-side JS from accessing the cookie
    }
    res.cookie("token", token,options).json(new ApiResponse(200, user, 'Logged in successfully'))

    
})

export { loginUser }