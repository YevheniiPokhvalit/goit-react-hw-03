export default function  Contact ({ contact, deleteContact }){
    return (
        <li >
            <p>{contact.name}: {contact.number}</p>
            <button onClick={() => deleteContact(contact.id)}>Delete</button>
        </li>
    );
};
