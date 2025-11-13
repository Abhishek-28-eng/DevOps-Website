FROM node:20-alpine

WORKDIR /app

# Install build tools for bcrypt
RUN apk add --no-cache python3 make g++

# Copy package.json first
COPY package*.json ./

# Install all dependencies (including dev)
RUN npm install

# Copy source files
COPY . .

# Expose port
EXPOSE 4000

# Use npm run dev for development
CMD ["npm", "run", "dev"]
