import { useState } from 'react';
import styles from './styles.module.scss'

export function DocLead() {

    const [ status , setStatus ] = useState("Finalizado");

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <h2>Lead: Documento para criar contato</h2>
                <div className={styles.status}>
                   <div 
                        style={
                            status === "Finalizado" ? 
                            {backgroundColor: "#00B98E"}
                            :
                            {backgroundColor: "#FFAF3E"}
                        }></div>
                        {status}
                </div>
            </div>
            <div className={styles.content}>
                <p>
                    <strong>Observação:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sollicitudin commodo faucibus. Nullam ut pharetra turpis. Vestibulum molestie turpis ac tortor dapibus porttitor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam in elit vitae ligula consectetur hendrerit id id odio. Vestibulum volutpat gravida arcu sit amet tempus. In rhoncus leo vel dolor convallis gravida id a nulla.
                </p>
                <div className={styles.creationInfo}>
                    <p>
                        <strong>Criado por:</strong> João da Silva
                    </p>
                    <p>
                        <strong>Data de criação:</strong> 11 de maio 2021
                    </p>
                </div>
            </div>

        </div>
    );
}