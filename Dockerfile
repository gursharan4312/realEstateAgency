FROM node:14.13.0-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm install --prefix client
RUN npm run build --prefix client
EXPOSE 5001
CMD [ "npm","start" ]
