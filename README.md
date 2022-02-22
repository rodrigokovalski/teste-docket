# Teste Docket - Desenvolvedor Front-end

## Layout

UI criada a partir deste <a href="https://xd.adobe.com/view/de1c9231-1542-41b5-ad00-355ebf402162-8b4f/grid/">layout</a>

<img src="https://raw.githubusercontent.com/rodrigokovalski/teste-docket/master/layout.png">

<a href="https://teste-docket-rodrigokovalski.vercel.app/">Versão online da UI</a>

OBS: Para adicionar e excluir documentos é necessário estar em ambiente de desenvolvimento, com o Json Server rodando. 

## Requisitos alcançados:

-> Utilizei Json Server para gerar a listagem, cadastro e exclusão de documentos!

-> Utilizei Sass!

-> Realizei validação de campos com preenchimento obrigatório!

-> Adicionei máscaras de CNPJ, CPF e CEP!

-> Gerei feedbacks de cadastro e exclusão de documento!

-> Adicionei Empty Space com a mensagem de "Nenhum documento criado" para quando não há documentos!

-> Atualizei a contagem de documentos no título da listagem, conforme os items foram adicionados e excluídos!

### OBSERVAÇÕES

-> A UI não está 100% fiel ao layout... mudei algumas que julguei estarem fora do padrão.
	
	* Botão do formulário à direita
	* Espaçamento entre os blocos maiores
	* Inputs e selects em tamanhos diferentes	

-> Está 100% responsivo!


## Configuração do ambiente:

É necessário baixar <a href="https://nodejs.org/en/download/">Node.js</a> em sua máquina.

Para esse projeto utilizei o <a href="https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable">yarn</a>:
```bash
$ npm install --global yarn
```

## Para usar a aplicação:

### Abrir a aplicação em ambiente de desenvolvimento

Terminal 1
```bash
$ git clone https://github.com/rodrigokovalski/teste-docket.git
$ cd teste-docket
$ yarn
$ yarn dev
```

### Manter processo ativo para o uso da aplicação

Terminal 2
```bash
$ yarn server
```
