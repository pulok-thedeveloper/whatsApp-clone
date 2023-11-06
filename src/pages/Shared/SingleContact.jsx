import { useContext, useRef } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

/* eslint-disable react/prop-types */
const SingleContact = ({ contact }) => {
  const { setSelectedContact, setIsChatClicked } = useContext(AuthContext);
  const divRef = useRef(null);

  const handleSelectedContact = () => {
    setSelectedContact(contact);

    // Remove the style (background color) from all other divs
    const allSingleContacts = document.querySelectorAll(".single-contact");
    allSingleContacts.forEach((div) => {
      div.style.backgroundColor = "";
    });

    divRef.current.style.backgroundColor = "#f5f6f6";
    setIsChatClicked(true)
  };
  return (
    <div
      onClick={handleSelectedContact}
      ref={divRef}
      className="single-contact flex h-[72px] items-center cursor-pointer hover:bg-[#f5f6f6] transition-all"
    >
      <div className="px-3">
        <img className="w-12 h-12 rounded-full" src={contact.image} alt="" />
      </div>
      <div className="pr-4 flex-grow border-b h-full flex flex-col justify-center">
        <div className="flex items-center justify-between">
          <h2 className="text-[#111b21]">{contact.name}</h2>
          <p className="text-xs text-[#667781]">Yesterday</p>
        </div>
        <p className="text-sm text-[#667781]">{contact.phone} added you</p>
      </div>
    </div>
  );
};

export default SingleContact;
