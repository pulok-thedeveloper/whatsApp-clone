import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import SingleContact from "./SingleContact";

const ChatList = () => {
    const {contacts} = useContext(AuthContext);
    return (
        <div>
            {
                contacts && contacts.map((contact) => <SingleContact key={contact.id} contact={contact}></SingleContact>)
            }
        </div>
    );
};

export default ChatList;