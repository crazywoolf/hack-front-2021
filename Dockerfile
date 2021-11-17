FROM node:latest

COPY . /src
WORKDIR /src

RUN npm install --legacy-peer-deps
RUN npm run production

EXPOSE 3000

CMD [ "node", "server.js" ]
