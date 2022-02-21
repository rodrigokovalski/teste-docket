import styles from './styles.module.scss'

import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

import { useCallback, useState } from 'react'

import { api } from '../../services/api'

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form' 

type DocumentData = {
    docName: string;
    personType: string;
    cpf: string;
    name: string;
    cnpj: string;
    razao: string;
    cep: string;
    street: string;
    number: number;
    city: string;
    uf: string,
    createdAt: Date
}

const createDocumentFormSchema = yup.object().shape({
    docName: yup.string().max(255).required('Campo obrigatório'),
    personType: yup.string().default('Pessoa Física'),

    cpf: yup.string()
        .when('personType', { is: 'Pessoa Física', then: yup.string().required('Campo obrigatório') }),
    name: yup.string()
        .when('personType', { is: 'Pessoa Física', then: yup.string().required('Campo obrigatório') }),

    cnpj: yup.string()
        .when('personType', { is: 'Pessoa Jurídica', then: yup.string().required('Campo obrigatório') }),
    razao: yup.string()
        .when('personType', { is: 'Pessoa Jurídica', then: yup.string().required('Campo obrigatório') }),
    
    cep: yup.string().required('Campo obrigatório'),
    street: yup.string().required('Campo obrigatório'),
    number: yup.number().required('Campo obrigatório').typeError('Campo obrigatório'),
    city: yup.string().required('Campo obrigatório'),
    uf: yup.string().required('Campo obrigatório')
    }
);


export function AddDocument(){

    const [ isPersonType , setIsPersonType ] = useState('Pessoa Física');

    const handleCPF = useCallback((e: React.FormEvent<HTMLInputElement>) => {
        e.currentTarget.maxLength = 14;
        let v = e.currentTarget.value;
        v=v.replace(/\D/g,"")                    
        v=v.replace(/(\d{3})(\d)/,"$1.$2")      
        v=v.replace(/(\d{3})(\d)/,"$1.$2")   
        v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2")

        e.currentTarget.value = v;
    }, [])

    const handleCNPJ = useCallback((e: React.FormEvent<HTMLInputElement>) => {
        e.currentTarget.maxLength = 18;
        let v = e.currentTarget.value;
        v=v.replace(/\D/g,"")                          
        v=v.replace(/^(\d{2})(\d)/,"$1.$2")             
        v=v.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3") 
        v=v.replace(/\.(\d{3})(\d)/,".$1/$2")           
        v=v.replace(/(\d{4})(\d)/,"$1-$2") 

        e.currentTarget.value = v;
    }, [])

    const handleCEP = useCallback((e: React.FormEvent<HTMLInputElement>) => {
        e.currentTarget.maxLength = 9;
        let v = e.currentTarget.value;

        v=v.replace(/\D/g,"")           
        v=v.replace(/^(\d{5})(\d)/,"$1-$2")  

        e.currentTarget.value = v;
    }, [])

    const { 
        register, 
        handleSubmit, 
        formState: { errors },
        reset 
    } = useForm<DocumentData>({
        resolver: yupResolver(createDocumentFormSchema)
    });

    const handleCreateDocument: SubmitHandler<DocumentData> = async( values ) => {
        let mes = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
        var today = new Date(),
            date = today.getDate() + ' de ' + (mes[today.getMonth()]) + ' de ' + today.getFullYear() ;
            
        api.post('/documents', {
            id: Math.floor(Math.random()),
            docName: values.docName,
            personType: values.personType,
            cpf: values.cpf,
            name: values.name,
            cnpj: values.cnpj,
            razao: values.razao,
            cep: values.cep,
            street: values.street,
            number: values.number,
            city: values.city,
            uf: values.uf,
            createdAt: date
        })
        .then(function (response) {
            console.log(response)
            toast.success('Documento criado com sucesso');
        })
        .catch(function (error) {
        console.log(error);
        });

        reset();
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
                            onChange={ e => {
                                setIsPersonType(e.target.value)
                            }}
                        >
                            <option value="Pessoa Física">Pessoa Física</option>
                            <option value="Pessoa Jurídica">Pessoa Jurídica</option>
                        </select>
                    </div>

                    { isPersonType === "Pessoa Física" ? (
                    <>
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
                                onChange={handleCPF}
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
                    </>
                    ) : (
                    <>
                        <div className={styles.formGroup}>
                            <label htmlFor="cnpj">CNPJ: <span>*</span></label>
                            <input 
                                type="tel"
                                id="cnpj" 
                                // @ts-ignore
                                name="cnpj"
                                className={styles.formControl} 
                                placeholder="Digite aqui" 
                                data-validate={errors.cnpj?.message}
                                {...register('cnpj')}
                                onChange={handleCNPJ}
                            />
                            { errors.cnpj && <span> { errors.cnpj.message } </span> }
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="razao">Razão Social: <span>*</span></label>
                            <input 
                                type="text" 
                                id="razao" 
                                // @ts-ignore
                                name="razao"
                                className={styles.formControl} 
                                placeholder="Digite aqui" 
                                data-validate={errors.razao?.message}
                                {...register('razao')}
                            />
                            { errors.razao && <span> { errors.razao.message } </span> }
                        </div>

                    </>
                    )}

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
                            onChange={handleCEP}
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