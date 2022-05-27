FROM node:lts-alpine
RUN mkdir /helloworld
WORKDIR /helloworld
COPY --chown=node:node package.json .
RUN npm install
COPY . .
COPY --chown=node:node . .
USER node
CMD ["npm", "start"]