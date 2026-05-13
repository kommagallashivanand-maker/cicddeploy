# Use Node image
FROM node:20

# Working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Expose Vite port
EXPOSE 5173

# Start Vite server
CMD ["npm", "run", "dev", "--", "--host"]