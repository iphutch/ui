FROM node:9
USER node
RUN mkdir /home/node/app
WORKDIR /home/node/app
COPY package*.json ./
RUN npm install
EXPOSE 5000
