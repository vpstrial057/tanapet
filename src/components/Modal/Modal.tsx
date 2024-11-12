import {Modal as RModal} from "flowbite-react";
import {ReactNode, useState} from "react";

interface ModalProps {
    modalContent: ReactNode;
    openModal: boolean;
    setOpenModal: (open: boolean) => void;
    isCloseable?: boolean;
}

export default function Modal({modalContent, openModal, setOpenModal, isCloseable}: ModalProps) {
    return (
        <>
            <div className={`fixed inset-0 z-40 bg-black bg-opacity-50 ${openModal ? 'block' : 'hidden'}`}></div>
            <div className={`fixed inset-0 z-50 flex justify-center items-center ${openModal ? 'block' : 'hidden'}`}>
                <div className="relative p-4 w-full max-w-md max-h-full">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        {isCloseable && (
                            <button type="button"
                                    className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    onClick={() => setOpenModal(false)}
                            >
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        )}
                        <div className="p-4 md:p-5 text-center">
                            {modalContent}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}