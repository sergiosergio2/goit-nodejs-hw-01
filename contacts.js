const fs = require('fs').promises;
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const contactsPath = path.resolve('./db/contacts.json');


async function listContacts() {
 
    try {
        const data = await fs.readFile(contactsPath, 'utf8');
        return JSON.parse(data);
    } catch(err) {
        console.error(err);
    }
 
  }

async function getContactById(contactId) {
    const data  = await listContacts();
    const newData = data.filter(x => x.id === contactId);
    return newData;

}


async function removeContact(contactId) {
    
       const data  = await listContacts();
       const newData = data.filter(x => x.id !== contactId);
      await fs.writeFile(contactsPath, JSON.stringify(newData), 'utf8');
      
      
        return `Контакт видалено!`;
}

async function addContact(name, email, phone) {
    const newContact = {
        id: uuidv4(),
        name,
        email,
        phone,
    };
    try {
        const data = await listContacts();
        const newData = [...data, newContact];
        await fs.writeFile(contactsPath, JSON.stringify(newData), 'utf-8');
   
   
    return `контакт ${newContact} додано до списку!`;
    } catch(err) {
        console.error(err);
    }
};
module.exports = {
    listContacts,
    removeContact,
    getContactById,
    addContact,
}
