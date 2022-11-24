const fs = require("fs/promises")
const path = require("path")

const contactsPath = path.resolve('./db/contacts.json')

async function listContacts() {
    try {
        const contacts = await fs.readFile(contactsPath, 'utf-8')
        const contactsArr = JSON.parse(contacts)
        console.table(contactsArr)
        return contactsArr
    } catch (e) {
        console.log(e)
    }
  }
  
  async function getContactById(contactId) {
    try {
        const contacts = await fs.readFile(contactsPath, 'utf-8')
        const contactsArr = JSON.parse(contacts)
        const result = contactsArr.find(({id}) => id === contactId)
        console.log(result)
        return result
    } catch (e) {
        console.log(e)
    }
  }
  
  function removeContact(contactId) {
    try {

    } catch (e) {
        console.log(e)
    }
  }
  
  function addContact(name, email, phone) {
    try {

    } catch (e) {
        console.log(e)
    }
  }

  module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
  }