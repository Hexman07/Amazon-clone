FROM node:alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run frontend-dep
RUN npm run frontend-build
CMD ["npm", "start"]