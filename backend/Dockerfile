# Use Node.js Alpine
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install production dependencies
RUN npm install --production

# Copy all backend files
COPY . .

# Expose port
EXPOSE 4000

# Start server with correct entry
CMD ["node", "src/index.js"]
