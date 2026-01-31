# Base image
FROM node:20-slim

# Create app directory
WORKDIR /app

# Copy package manifests first to leverage Docker cache
COPY package.json ./
COPY bun.lockb ./

# Install dependencies (will be cached if package.json doesn't change)
RUN npm install --silent

# Copy project files
COPY . ./

# Expose Vite default port
EXPOSE 5173

# Use host so Vite is accessible from host machine
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]