# Usa una imagen base de Node.js 16
FROM node:16

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json ./

# Install dependencies
RUN npm install

# Install 'react-scripts' globally for development
RUN npm install -g react-scripts

# Install Tailwind CSS and PostCSS
RUN npm install tailwindcss postcss autoprefixer

RUN npm install lucide-react

RUN npm install @mui/material @emotion/react @emotion/styled

RUN npm install --save-dev @types/react

RUN npm install react-router-dom
# Copy the rest of the application code
COPY . ./

# Expose the port the app runs on
EXPOSE 3001

# Define the command to run the app
CMD ["npm", "start"]
