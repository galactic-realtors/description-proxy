FROM node:9.6.1-onbuild
RUN npm install
EXPOSE 1337
CMD ["npm", "start"]