import { useState, createContext } from 'react';

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState(''); 
  const [currentItem, setCurrentItem] = useState(null);
  const [currentTable, setCurrentTable] = useState('');

  const openModal = (type, table, item = null) => {
    console.log("ModalProvider: openModal çağırıldı.", { type, table, item });
    setModalType(type);
    setCurrentTable(table);
    setCurrentItem(item);
    setIsOpen(true);
    console.log("ModalProvider: State yeniləndi:", { isOpen: true, modalType: type, currentTable: table, currentItem: item });
  };

  const closeModal = () => {
    console.log("ModalProvider: closeModal çağırıldı.");
    setIsOpen(false);
    setModalType('');
    setCurrentItem(null);
    setCurrentTable('');
    console.log("ModalProvider: State sıfırlandı:", { isOpen: false, modalType: '', currentTable: '', currentItem: null });
  };

  return (
    <ModalContext.Provider value={{
      isOpen,
      modalType,
      currentItem,
      currentTable,
      openModal,
      closeModal
    }}>
      {children}
    </ModalContext.Provider>
  );
};
