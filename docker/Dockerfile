FROM node:18

WORKDIR /app

COPY app/package*.json ./

RUN npm install

COPY app .

EXPOSE 8000

CMD ["node", "app.js"]
