FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install && npm cache clean --force

#Copier tout ce qui est dans nodeServer dans /usr/src/app
COPY . .

EXPOSE 8080
CMD [ "node", "server.js" ]

