FROM quay.io/sampandey001/secktor
RUN git clone https://github.com/anonphoenix007/Aviator-Md /root/Aviator
WORKDIR /root/Aviator/
RUN npm install npm@latest
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]
 
