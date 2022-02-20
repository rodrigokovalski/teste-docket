import styles from './styles.module.scss'

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form' 

type DocumentData = {
    docName: string;
    personType: string;
    cpf: number;
    name: string;
    cep: number;
    street: string;
    number: number;
    city: string;
    uf: string
}

const createDocumentFormSchema = yup.object().shape({
    docName: yup.string().required('Campo obrigatório'),
    perstonType: yup.string().required('Campo obrigatório'),
    cpf: yup.number().required('Campo obrigatório').typeError('Campo obrigatório'),
    name: yup.string().required('Campo obrigatório'),
    cep: yup.number().required('Campo obrigatório').typeError('Campo obrigatório'),
    street: yup.string().required('Campo obrigatório'),
    number: yup.number().required('Campo obrigatório').typeError('Campo obrigatório'),
    city: yup.string().required('Campo obrigatório'),
    uf: yup.string().required('Campo obrigatório')
})

export function AddDocument(){
    
    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm<DocumentData>({
        resolver: yupResolver(createDocumentFormSchema)
    });

    const handleCreateDocument: SubmitHandler<DocumentData> = async(data) => {
        console.log(data);
        alert("Formulário enviado!")
    }

    return (
        <div className={styles.wrapper}>
            <h4>Adicionar documentos ao pedido</h4>
            <div className={styles.formContent}>
                <form onSubmit={handleSubmit(handleCreateDocument)}>
                    <div className={styles.formGroup}>
                        <label htmlFor="docName">Nome do Documento: <span>*</span></label>
                        <input 
                            type="text" 
                            id="docName"
                            // @ts-ignore
                            name="docName"
                            className={styles.formControl}
                            data-validate={errors.docName?.message}
                            placeholder="Digite aqui" 
                            {...register('docName')}
                        />
                        { errors.docName && <span> { errors.docName.message } </span> }
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="personType">Tipo de pessoa: <span>*</span></label>
                        <select 
                            // @ts-ignore
                            name="personType" 
                            id="personType" 
                            className={styles.formControl}
                            data-validate={errors.personType?.message}
                            {...register('personType')}
                        >
                            <option value="Pessoa Física">Pessoa Física</option>
                            <option value="Pessoa Jurídica">Pessoa Jurídica</option>
                        </select>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="cpf">CPF: <span>*</span></label>
                        <input 
                            type="tel"
                            id="cpf" 
                            // @ts-ignore
                            name="cpf"
                            className={styles.formControl} 
                            placeholder="Digite aqui" 
                            data-validate={errors.cpf?.message}
                            {...register('cpf')}
                        />
                        { errors.cpf && <span> { errors.cpf.message } </span> }
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Nome Completo: <span>*</span></label>
                        <input 
                            type="text" 
                            id="name" 
                            // @ts-ignore
                            name="name"
                            className={styles.formControl} 
                            placeholder="Digite aqui" 
                            data-validate={errors.name?.message}
                            {...register('name')}
                        />
                        { errors.name && <span> { errors.name.message } </span> }
                    </div>
                    <h5>Dados do cartório</h5>
                    <div className={styles.formGroup}>
                        <label htmlFor="cep">CEP: <span>*</span></label>
                        <input 
                            type="tel" 
                            id="cep" 
                            // @ts-ignore
                            name="cep"
                            className={styles.formControl} 
                            placeholder="Digite aqui" 
                            data-validate={errors.cep?.message}
                            {...register('cep')}
                        />
                         { errors.cep && <span> { errors.cep.message } </span> }
                    </div>
                    <div className={styles.formGroup}>
                        <div className={styles.twoFields}>
                            <div className={styles.left}>
                                <label htmlFor="street">Rua: <span>*</span></label>
                                <input 
                                    type="text" 
                                    id="street" 
                                    // @ts-ignore
                                    name="street"
                                    className={styles.formControl} 
                                    placeholder="Digite aqui" 
                                    data-validate={errors.street?.message}
                                    {...register('street')}
                                />
                                { errors.street && <span> { errors.street.message } </span> }
                            </div>
                            <div className={styles.right}>
                                <label htmlFor="number">Número: <span>*</span></label>
                                <input 
                                    type="tel" 
                                    id="number" 
                                    // @ts-ignore
                                    name="number"
                                    className={styles.formControl} 
                                    placeholder="Digite aqui" 
                                    data-validate={errors.number?.message}
                                    {...register('number')}
                                />
                                { errors.number && <span> { errors.number.message } </span> }
                            </div>
                        </div>
                    </div>
                    <div className={styles.formGroup}>
                        <div className={styles.twoFields}>
                            <div className={styles.left}>
                                <label htmlFor="city">Cidade: <span>*</span></label>
                                <input 
                                    type="text" 
                                    id="city" 
                                    // @ts-ignore
                                    name="city"
                                    className={styles.formControl} 
                                    placeholder="Digite aqui" 
                                    data-validate={errors.city?.message}
                                    {...register('city')}
                                />
                                { errors.city && <span> { errors.city.message } </span> }
                            </div>
                            <div className={styles.right}>
                                <label htmlFor="uf">UF: <span>*</span></label>
                                <input 
                                    type="text" 
                                    id="uf" 
                                    // @ts-ignore
                                    name="uf"
                                    className={styles.formControl} 
                                    placeholder="Digite aqui" 
                                    data-validate={errors.uf?.message}
                                    {...register('uf')}
                                />
                                { errors.uf && <span> { errors.uf.message } </span> }
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