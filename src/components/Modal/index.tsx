import styles from './styles.module.scss'

import CloseBtn from '../../assets/close-btn.svg'
import { api } from '../../services/api'
import { toast } from 'react-toastify';

interface ModalProps {
    closeModal: (active: boolean) => void,
    documentId?: number
}

export function Modal({ closeModal , documentId }: ModalProps){

    
    const deleteDocument = () => {
        api.delete('/documents/'+documentId)
        .then(function(response) {
            console.log(response)
            toast.success('Documento excluído com sucesso');
        }).catch(function(error) {
            console.log(error)
        });
    }   

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
                    <button className={styles.remove} onClick={()=>{deleteDocument()}}>
                        Excluir
                    </button>
                </div>
            </div>
        </div>
    )
}