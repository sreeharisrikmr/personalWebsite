const db = require('./db')
//logic for contact
const contactme = (name,email,message)=>{
    return db.Contact.findOne({email}).then((response)=>{
        console.log(response);
        if(response){
            return {
                statusCode:401,
                message:"message already sent from this email"
                
            }
        }
        else{
            const newContact= new db.Contact({
                name,
                email,
                message
            })
            newContact.save()
            //response
            return{
                statusCode:200,
                message:'Message send successfully'
            }
        }
    })

}
module.exports={
    contactme
}