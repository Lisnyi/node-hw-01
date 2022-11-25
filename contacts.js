const fs = require("fs/promises")
const path = require("path")

const contactsPath = path.resolve('./db/contacts.json')

async function getContactsArray (path) {
  try {
    const contacts = await fs.readFile(path, 'utf-8')
    const contactsArray = JSON.parse(contacts)
    return contactsArray
  } catch (e) {
      console.log(e)
  }
}

async function listContacts() {
    try {
        const contacts = await getContactsArray(contactsPath)
        console.table(contacts)
        return contacts
    } catch (e) {
        console.log(e)
    }
  }
  
  async function getContactById(contactId) {
    try {
        const contacts = await getContactsArray(contactsPath)
        const result = contacts.find(({id}) => id === contactId)
        console.log(result)
        return result
    } catch (e) {
        console.log(e)
    }
  }
  
  async function removeContact(contactId) {
    try {
      const contacts = await getContactsArray(contactsPath)
      const result = contacts.filter(({id}) => id !== contactId)
      await fs.writeFile(contactsPath, JSON.stringify(result), 'utf-8')
      console.table(result)
      return result
    } catch (e) {
        console.log(e)
    }
  }
  
  async function addContact(name, email, phone) {
    try {
      const contacts = await getContactsArray(contactsPath)
      const lastId = Number(contacts[contacts.length-1].id)
      const newContact = {id: (lastId+1).toString(),
                          name,
                          email,
                          phone}
      contacts.push(newContact)
      await fs.writeFile(contactsPath, JSON.stringify(contacts), 'utf-8')
      console.table(contacts)
      return contacts
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