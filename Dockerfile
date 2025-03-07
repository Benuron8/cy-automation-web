# Use the official Cypress image for Cypress version 14.1.0
FROM cypress/included:14.1.0

# Set working directory
WORKDIR /cy-automation

# Copy package.json and package-lock.json first to install dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Default command to run Cypress tests
CMD ["npx", "cypress", "run"]
