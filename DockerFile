FROM node:14.13.0-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./frontend/package*.json ./frontend/
RUN npm install --prefix frontend
COPY . .
RUN npm run build --prefix frontend
EXPOSE 5001
CMD [ "npm","start" ]
