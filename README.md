# API Rest

Repositório inicial para criar API em Rest.
Feita com Typescript e ORM.
A conexão padrão neste projeto é mysql, mas pode ser usada outras somente flagando o ORM e instalando o respectivo pacote do banco.

### Primeros pasos

Execute `npm install` para instalar as dependências.
Execute `npm run dev` para iniciar o serviço.

Crie novos Tabelas no banco de dados adicionando novos "models" em `.\src\Entities`, o ORM irá criar a tabela e atributos no banco de dados automaticamente.

Caso queria desativar a criação pelo ORM mude a configuração `synchronize=false` em .\src\app.ts

Configure o banco de dados em `ormconfig.json`

