FROM node:8
USER node
RUN mkdir /home/node/app
RUN mkdir /home/node/app/ui
WORKDIR /home/node/app
COPY package*.json ./
ENV PATH=/home/node/.npm-global/bin:$PATH
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
RUN npm install npm@latest -g
RUN npm install
ENV NODE_PATH=/home/node/app/node_modules
EXPOSE 5000
