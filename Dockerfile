# Use the official Node.js image as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./
# Install project dependencies
RUN npm i -g npm

# Install project dependencies
RUN npm install

# Copy the entire project directory to the container
COPY . .

# Start your Node.js application with an environment variable for the port
CMD ["sh", "-c", "node app.js --port $PORT"]
