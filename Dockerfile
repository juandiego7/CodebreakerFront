FROM node:8.9.4

RUN mkdir -p /front
WORKDIR /front
COPY package.json /front
RUN npm install --silent
RUN npm install react-scripts@1.1.4 -g --silent
COPY . /front
EXPOSE 3000
CMD ["npm", "start"]