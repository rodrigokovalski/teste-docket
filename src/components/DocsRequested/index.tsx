import styles from './styles.module.scss'

import DocIcon from '../../assets/doc-icon.svg'

export function DocsRequested() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.noDocument}>
                <img src={DocIcon} alt="Nenhum documento criado" />
                <p>Nenhum documento criado</p>
            </div>
        </div>
    )
}