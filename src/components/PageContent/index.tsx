import { AddDocument } from '../AddDocument'
import { DocLead } from '../DocLead'
import { DocsRequested } from '../DocsRequested'
import styles from './styles.module.scss'

export function PageContent() {
    return (
        <div className={styles.wrapper}>
            <h1>Pedido #1</h1>
            <div className={styles.content}>
                <DocLead />
                <AddDocument />
                <DocsRequested />
            </div>
        </div>
    )
}