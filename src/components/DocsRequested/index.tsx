import { useEffect, useState } from 'react';
import { api } from '../../services/api'

import styles from './styles.module.scss'

import DocIcon from '../../assets/doc-icon.svg'
import RemoveIcon from '../../assets/remove-icon.svg'

type DocumentData = {
    id: number;
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

export function DocsRequested() {

    const [ documents, setDocuments ] = useState<DocumentData[]>([]);

    useEffect(()=> {
        api.get('/documents')
        .then((response => {
            setDocuments(response.data)
        }))
    }, [ documents ])

    const handleRemove = (id: number) => {
        api.delete('/documents/'+id)
        .then(function(response) {
            console.log(response)
        }).catch(function(error) {
            console.log(error)
        })
    }

    if (documents.length === 0) {
        return (
            <div className={styles.wrapper}>
                <div className={styles.noDocument}>
                    <img src={DocIcon} alt="Nenhum documento criado" />
                    <p>Nenhum documento criado</p>
                </div>
            </div>
        )
    } else {
        return (
            <div className={styles.docsRequested}>
                <h4>{documents.length} documento{documents.length > 1 && 's'} solicitado{documents.length > 1 && 's'}</h4>
                
                {documents.map(document => {
                    return (
                        <div key={document.id} className={styles.document}>
                            <div className={styles.header}>
                                <h5>{document.docName}</h5>
                                <button 
                                    type="button" 
                                    className={styles.removeIcon} 
                                    onClick={
                                        () => {
                                            handleRemove(document.id)
                                        }
                                    }
                                >
                                    <img src={RemoveIcon} alt="" />
                                </button>
                            </div>
                            <div className={styles.data}>
                                <div className={styles.personal}>
                                    <h6><strong>Pessoa Física</strong></h6>
                                    <p>Nome: {document.name}</p>
                                    <p>CPF: {document.cpf}</p>
                                </div>
                                <div className={styles.registry}>
                                    <h6><strong>Dados do cartório</strong></h6>
                                    <p>CEP: {document.cep}</p>
                                    <div className={styles.flex}>
                                        <p>Rua: {document.street}</p>
                                        <p>Nª. {document.number}</p>
                                    </div>
                                    <div className={styles.flex}>
                                        <p>Cidade: {document.city}</p>
                                        <p>UF: {document.uf}</p>
                                    </div>
                                </div>
                                <div className={styles.createdAt}>
                                    <p><strong>Data de criação:</strong> {document.createdAt}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        )
    }
}