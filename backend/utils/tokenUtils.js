import jwt  from "jsonwebtoken"
function generateAccessToken(userId){
  return jwt.sign({id:userId},process.env.JWT_SECRET,{expiresIn:'1d'})
}

function generateRefreshToken(){

}

export {generateAccessToken, generateRefreshToken}