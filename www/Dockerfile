FROM node:current-alpine3.15
# Set the working directory to /api
WORKDIR /www

# copy package.json into the container at /api
COPY package*.json /www/

# install dependencies
RUN npm install --force

# Copy the current directory contents into the container at /api
COPY . /www/

# Make port 80 available to the world outside this container
EXPOSE 3000

# Run the app when the container launches
CMD ["npm", "start"]
