import styles from './styles.module.scss'

import DocIcon from '../../assets/doc-icon.svg'
import RemoveIcon from '../../assets/remove-icon.svg'

export function DocsRequested() {
    return (
        <>
            {/* <div className={styles.wrapper}>
                <div className={styles.noDocument}>
                    <img src={DocIcon} alt="Nenhum documento criado" />
                    <p>Nenhum documento criado</p>
                </div>
            </div> */}
            <div className={styles.docsRequested}>
                <h4>1 documento solicitado</h4>
                <div className={styles.document}>
                    <div className={styles.header}>
                        <h5>Certidão de nascimento</h5>
                        <button type="button" className={styles.removeIcon}>
                            <img src={RemoveIcon} alt="" />
                        </button>
                    </div>
                    <div className={styles.data}>
                        <div className={styles.personal}>
                            <h6><strong>Pessoa Física</strong></h6>
                            <p>Nome: João da Silva Santos</p>
                            <p>CPF: 124.154.156-45</p>
                        </div>
                        <div className={styles.registry}>
                            <h6><strong>Dados do cartório</strong></h6>
                            <p>CEP: 999999-999</p>
                            <p>Rua: Eugênio de Medeiros</p>
                            <p>Cidade: São Paulo</p>
                        </div>
                        <div className={styles.createdAt}>
                            <p><strong>Data de criação:</strong> 11 de maio de 2021</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}