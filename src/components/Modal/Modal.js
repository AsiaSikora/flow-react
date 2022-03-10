import React, {useRef} from "react";
import {useSpring, animated} from "react-spring";
import {MdClose} from 'react-icons/md'
import styles from './Modal.module.css'
import ButtonDefault from "../ButtonDefault/ButtonDefault";


export const Modal = ({showModal, setShowModal}) => {
    const modalRef = useRef();

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`
    });

    const closeModal = e => {
        if (modalRef.current === e.target) {
            setShowModal(false);
        }
    };
    return (
        <>
            {showModal ? (
                <div className={styles.background} onClick={closeModal} ref={modalRef}>
                        <animated.div style={animation}>
                            <div className={styles.modalWrapper}>
                                <div className={styles.modalContent}>
                                    <h1>Are you ready?</h1>
                                    <p>Tu będzie formularz ale potrzebuje jeszcze jednego dnia :p</p>
                                    <ButtonDefault title="Submit"/>
                                </div>
                                <MdClose className={styles.closeModalButton}
                                    aria-label='Close modal'
                                    onClick={() => setShowModal(prev => !prev)}
                                />
                            </div>
                        </animated.div>
                    </div>
                    ) : null}

                </>
                )
            }