FROM node:16.18.0

# Create app directory
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

COPY . ./

CMD [ "node", "app.js" ]

