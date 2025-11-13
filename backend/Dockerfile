# backend/Dockerfile

# Use official Node.js LTS Alpine image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install build tools needed for native modules (bcrypt, etc.)
RUN apk add --no-cache python3 make g++

# Copy package.json and package-lock.json
COPY package*.json ./

# Install only production dependencies
RUN npm install --omit=dev

# Copy all source code
COPY . .

# Expose the port backend will run on
EXPOSE 4000

# Start the backend in production mode
CMD ["node", "src/index.js"]
