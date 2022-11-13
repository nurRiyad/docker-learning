FROM node:19-alpine3.15

WORKDIR /todo-frontend

COPY package.json . 

RUN npm install 

COPY . . 

EXPOSE 8000

CMD ["npm","run", "dev"]
