
    //Required Model
    const db = require("../../../Models/Companies/Contact/Get");

    //Method 
    const get = async (req, res) => {

        const contact_companies = await db.getContacts();

        res.status(200).send(contact_companies);

    }
  


    module.exports = { get }