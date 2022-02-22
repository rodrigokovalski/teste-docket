# Teste Docket - Desenvolvedor Front-end

## Layout

UI criada a partir deste <a href="https://xd.adobe.com/view/de1c9231-1542-41b5-ad00-355ebf402162-8b4f/grid/">layout</a>

<img src="https://raw.githubusercontent.com/rodrigokovalski/teste-docket/master/layout.png">

<a href="https://teste-docket-rodrigokovalski.vercel.app/">Vers�o online da UI</a>

OBS: Para adicionar e excluir documentos � necess�rio estar em ambiente de desenvolvimento, com o Json Server rodando. 

## Requisitos alcan�ados:

-> Utilizei Json Server para gerar a listagem, cadastro e exclus�o de documentos!

-> Utilizei Sass!

-> Realizei valida��o de campos com preenchimento obrigat�rio!

-> Adicionei m�scaras de CNPJ, CPF e CEP!

-> Gerei feedbacks de cadastro e exclus�o de documento!

-> Adicionei Empty Space com a mensagem de "Nenhum documento criado" para quando n�o h� documentos!

-> Atualizei a contagem de documentos no t�tulo da listagem, conforme os items foram adicionados e exclu�dos!

### OBSERVA��ES

-> A UI n�o est� 100% fiel ao layout... mudei algumas que julguei estarem fora do padr�o.
	
	* Bot�o do formul�rio � direita
	* Espa�amento entre os blocos maiores
	* Inputs e selects em tamanhos diferentes	

-> Est� 100% responsivo!


## Configura��o do ambiente:

� necess�rio baixar <a href="https://nodejs.org/en/download/">Node.js</a> em sua m�quina.

Para esse projeto utilizei o <a href="https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable">yarn</a>:
```bash
$ npm install --global yarn
```

## Para usar a aplica��o:

### Abrir a aplica��o em ambiente de desenvolvimento

Terminal 1
```bash
$ git clone https://github.com/rodrigokovalski/teste-docket.git
$ cd teste-docket
$ yarn
$ yarn dev
```

### Manter processo ativo para o uso da aplica��o

Terminal 2
```bash
$ yarn server
```
