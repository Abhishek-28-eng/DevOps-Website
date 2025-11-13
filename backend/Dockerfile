# Use Node.js 20 Alpine
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies (production only)
RUN npm install --production

# Copy all backend files
COPY . .

# Expose backend port
EXPOSE 4000

# Start server
CMD ["node", "server.js"]
