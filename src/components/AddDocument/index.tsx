import styles from './styles.module.scss'

export function AddDocument(){
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <h4>Adicionar documentos ao pedido</h4>
            </div>
            <div className={styles.formContent}>
                <form action="">
                <div className={styles.formGroup}>
                        <label htmlFor="doc-name">Nome do Documento: *</label>
                        <input type="text" id="doc-name" className={styles.formControl}/>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="person-type">Tipo de pessoa: *</label>
                        <select name="person-type" id="person-type" className={styles.formControl}>
                            <option value="1">Pessoa Física</option>
                            <option value="2">Pessoa Jurídica</option>
                        </select>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="cpf">CPF: *</label>
                        <input type="text" id="cpf" className={styles.formControl} />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Nome Completo:</label>
                        <input type="text" id="name" className={styles.formControl}/>
                    </div>
                    <h5>Dados do cartório</h5>
                    <div className={styles.formGroup}>
                        <label htmlFor="cep">CEP: *</label>
                        <input type="text" id="cep" className={styles.formControl} />
                    </div>
                    <div className={styles.formGroup}>
                        <div className={styles.twoFields}>
                            <div className={styles.left}>
                                <label htmlFor="street">Rua: *</label>
                                <input type="text" id="street" className={styles.formControl} />
                            </div>
                            <div className={styles.right}>
                                <label htmlFor="number">Número: *</label>
                                <input type="text" id="number" className={styles.formControl} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.formGroup}>
                        <div className={styles.twoFields}>
                            <div className={styles.left}>
                                <label htmlFor="city">Cidade: *</label>
                                <input type="text" id="city" className={styles.formControl} />
                            </div>
                            <div className={styles.right}>
                                <label htmlFor="uf">UF: *</label>
                                <input type="text" id="uf" className={styles.formControl} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.formGroup}>
                        <button type="button">
                            Criar documento
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}