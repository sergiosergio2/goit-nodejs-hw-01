const fs = require('fs').promises;
const path = require('path');
const contactsPath = path.resolve('./db/contacts.json');


async function listContacts() {
 
    try {
        const data = await fs.readFile(contactsPath, 'utf8');
        return JSON.parse(data);
    } catch(err) {
        console.error(err);
    }
 
  }

// function getContactById(contactId) {
//     const { data } = ;

// }


async function removeContact(contactId) {
    
       const data  = await listContacts();
       const newData = data.filter(x => x.id !== contactId);
      await fs.writeFile(contactsPath, JSON.stringify(newData), 'utf8');
      
      
        return `Контакт видалено!`;
}

function addContact(name, email, phone) {
  // ...твой код
}
module.exports = {
    listContacts,
    removeContact,
}
