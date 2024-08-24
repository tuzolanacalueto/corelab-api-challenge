# Use a imagem base do Node.js
FROM node:18-alpine

# Defina o diretório de trabalho dentro do container
WORKDIR /app

# Copie o arquivo package.json e o package-lock.json
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código do backend
COPY . .

# Gere o Prisma Client
RUN npx prisma generate

# Compile o projeto NestJS
RUN npm run build

# Expõe a porta que será usada pelo backend
EXPOSE 3333

# Comando para rodar as migrações Prisma e iniciar o servidor
CMD ["sh", "-c", "npx prisma migrate deploy && npm run start:dev"]
