# Docket - Dev. Front-end

## Layout

UI criada a partir deste <a href="https://xd.adobe.com/view/de1c9231-1542-41b5-ad00-355ebf402162-8b4f/grid/">layout</a>

<img src="https://raw.githubusercontent.com/rodrigokovalski/teste-docket/master/layout.png">

<a href="https://teste-docket-rodrigokovalski.vercel.app/">Vers�o online da UI</a>

OBS: Para adicionar e excluir documentos � necess�rio estar em ambiente de desenvolvimento, com o Json Server rodando. 

## Requisitos alcan�ados:

<img src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-checked-interface-dreamstale-lineal-dreamstale-2.png"/> Utilizei Json Server para gerar a listagem, cadastro e exclus�o de documentos!
<img src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-checked-interface-dreamstale-lineal-dreamstale-2.png"/> Utilizei Sass!
<img src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-checked-interface-dreamstale-lineal-dreamstale-2.png"/> Realizei valida��o de campos com preenchimento obrigat�rio!
<img src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-checked-interface-dreamstale-lineal-dreamstale-2.png"/> Adicionei m�scaras de CNPJ, CPF e CEP!
<img src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-checked-interface-dreamstale-lineal-dreamstale-2.png"/> Gerei feedbacks de cadastro e exclus�o de documento!
<img src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-checked-interface-dreamstale-lineal-dreamstale-2.png"/> Adicionei Empty Space com a mensagem de "Nenhum documento criado" para quando n�o h� documentos!
<img src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-checked-interface-dreamstale-lineal-dreamstale-2.png"/> Atualizei a contagem de documentos no t�tulo da listagem, conforme os items foram adicionados e exclu�dos!

## Configura��o do ambiente:

� necess�rio baixar <a href="https://nodejs.org/en/download/">Node.js</a> em sua m�quina.

Para esse projeto utilizei o yarn:
```bash
$ npm install --global yarn
```

## Para usar a aplica��o:

### Abre a aplic�o em ambiente de desenvolvimento

```bash
$ git clone https://github.com/rodrigokovalski/teste-docket.git
$ cd teste-docket
$ yarn
$ yarn dev
```

### Manter processo ativo para o uso da aplica��o

```bash
$ yarn server
```
