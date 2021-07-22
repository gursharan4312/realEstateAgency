FROM node:14.13.0-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY client/package*.json ./client
RUN npm install --prefix client
COPY . .
RUN npm run build --prefix client
EXPOSE 5001
CMD [ "npm","start" ]
