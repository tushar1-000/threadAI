import jwt  from "jsonwebtoken"
function generateAccessToken(id){
  return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:'1d'})
}

function generateRefreshToken(){

}

export {generateAccessToken, generateRefreshToken}