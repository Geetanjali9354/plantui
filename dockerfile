# --------- Step 1: Build React App ---------
FROM node:18 

# Set working directory inside the container
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the source code
COPY . .

# Expose port 80
EXPOSE 3000

CMD ["npm", "start"]