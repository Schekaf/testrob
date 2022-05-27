FROM node:lts-alpine
RUN mkdir /app
RUN npm install
COPY . .
USER node
WORKDIR /app
CMD ["npm", "start"]