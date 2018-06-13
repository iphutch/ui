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
RUN mkdir -p node_modules/node-sass/vendor/linux-x64-57
RUN curl -L https://github.com/sass/node-sass/releases/download/v4.9.0/linux-x64-57_binding.node -o node_modules/node-sass/vendor/linux-x64-57/binding.node
EXPOSE 5000
