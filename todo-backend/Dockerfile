FROM node:19-alpine3.15

WORKDIR /todo-backend

COPY package.json . 

RUN npm install 

COPY . . 

EXPOSE 4000

CMD ["npm","start"]
