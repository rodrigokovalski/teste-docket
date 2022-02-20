import styles from './styles.module.scss'

export function AddDocument(){
    return (
        <div className={styles.wrapper}>
            <h4>Adicionar documentos ao pedido</h4>
            <div className={styles.formContent}>
                <form action="">
                <div className={styles.formGroup}>
                        <label htmlFor="doc-name">Nome do Documento: <span>*</span></label>
                        <input type="text" id="doc-name" className={styles.formControl} placeholder="Digite aqui" required/>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="person-type">Tipo de pessoa: <span>*</span></label>
                        <select name="person-type" id="person-type" className={styles.formControl}>
                            <option value="1">Pessoa Física</option>
                            <option value="2">Pessoa Jurídica</option>
                        </select>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="cpf">CPF: <span>*</span></label>
                        <input type="tel" id="cpf" className={styles.formControl} placeholder="Digite aqui" required />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Nome Completo: <span>*</span></label>
                        <input type="text" id="name" className={styles.formControl} placeholder="Digite aqui" required/>
                    </div>
                    <h5>Dados do cartório</h5>
                    <div className={styles.formGroup}>
                        <label htmlFor="cep">CEP: <span>*</span></label>
                        <input type="tel" id="cep" className={styles.formControl} placeholder="Digite aqui" required />
                    </div>
                    <div className={styles.formGroup}>
                        <div className={styles.twoFields}>
                            <div className={styles.left}>
                                <label htmlFor="street">Rua: <span>*</span></label>
                                <input type="text" id="street" className={styles.formControl} placeholder="Digite aqui" required />
                            </div>
                            <div className={styles.right}>
                                <label htmlFor="number">Número: <span>*</span></label>
                                <input type="tel" id="number" className={styles.formControl} placeholder="Digite aqui" required />
                            </div>
                        </div>
                    </div>
                    <div className={styles.formGroup}>
                        <div className={styles.twoFields}>
                            <div className={styles.left}>
                                <label htmlFor="city">Cidade: <span>*</span></label>
                                <input type="text" id="city" className={styles.formControl} placeholder="Digite aqui" required />
                            </div>
                            <div className={styles.right}>
                                <label htmlFor="uf">UF: <span>*</span></label>
                                <input type="text" id="uf" className={styles.formControl} placeholder="Digite aqui" required />
                            </div>
                        </div>
                    </div>
                    <div className={styles.formGroup}>
                        <button type="submit">
                            Criar documento
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}