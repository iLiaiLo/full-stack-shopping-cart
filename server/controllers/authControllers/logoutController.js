export const logoutController = (req,res)=>{
    try {
        return res.clearCookie("token",{
            httpOnly:true,
            sameSite:'none',
            secure:true
        }).status(200).json({message:"user logged out"}); 
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}