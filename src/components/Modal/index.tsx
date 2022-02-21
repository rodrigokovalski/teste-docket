import styles from './styles.module.scss'

import CloseBtn from '../../assets/close-btn.svg'

interface ModalProps {
    closeModal: (active: boolean) => void,
}

export function Modal({ closeModal }: ModalProps){


    return (
        <div className={styles.modalBackground}>
            <div className={styles.container}>
               <div className={styles.top}>
                    <div className={styles.header}>
                        <h4>Confirmar Exclusão</h4>
                        <button type="button" onClick={()=>{closeModal(false)}}>
                            <img src={CloseBtn} alt="" />
                        </button>
                    </div>
                    <p>Tem certeza que deseja excluir</p>
               </div>
                <div className={styles.footer}>
                    <button className={styles.cancel} onClick={()=>{closeModal(false)}}>
                        Cancelar
                    </button>
                    <button className={styles.remove}>
                        Excluir
                    </button>
                </div>
            </div>
        </div>
    )
}