import React, {useRef} from "react";
import {useSpring, animated} from "react-spring";
import {MdClose} from 'react-icons/md'
import styles from '../ModalForm/Modal.module.css'
import ButtonDefault from "../../ButtonDefault/ButtonDefault";
import ModalForm from "../ModalForm/DeviceModalForm";


export const DeviceModal = (props) => {

    const modalRef = useRef();

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: props.showModal ? 1 : 0,
        transform: props.showModal ? `translateY(0%)` : `translateY(-100%)`
    });

    const closeModal = e => {
        if (modalRef.current === e.target) {
            props.setShowModal(false);
        }
    };

    const closeAfterSubmit = () => props.setShowModal(false);
    return (
        <>
            {props.showModal ? (
                <div className={styles.background} onClick={closeModal} ref={modalRef}>
                    <animated.div style={animation}>
                        <div className={styles.modalWrapper}>
                            <div className={styles.modalContent}>
                                <ModalForm closeModal={closeAfterSubmit} devicesNumbers={props.devicesNumbers} loadDevices={props.loadDevices}/>
                            </div>
                            <MdClose className={styles.closeModalButton}
                                     aria-label='Close modal'
                                     onClick={() => props.setShowModal(prev => !prev)}
                            />
                        </div>
                    </animated.div>
                </div>
            ) : null}

        </>
    )
}