## 📢Kubernetes Application Deployment Tutorial 🚀

### Pre-requisites:-
		1. EC2 Instance t2.medium
		2. Docker Account
  		3. Minikube Setup
    		
### Follow These Steps:-

		A. Install Docker
  		B. Minikube Setup
		1. Clone Repo from GitHub
		2. Create A Dockerfile
		3. Build your image
		4. Verify before pushing the image
		5. Push Image  to Docker Hub
		6. Write your Kubernetes deployment and service 
		7. Deploy your application on Kubernetes
  		8. Access the applicaiton from outside the network
		
---

## A. Install Docker

```
sudo apt update
sudo apt install docker.io -y
```
## B. Setup the `Minikube`
```
sudo wget https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
sudo cp minikube-linux-amd64 /usr/local/bin/minikube
sudo chmod 755 /usr/local/bin/minikube

```
### Setup the `Kubectl`
```
sudo curl -LO https://storage.googleapis.com/kubernetes-release/release/`curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt`/bin/linux/amd64/kubectl
sudo chmod +x kubectl
sudo mv kubectl /usr/local/bin/Kubectl
sudo usermod -aG docker $USER && newgrp docker
```
Start `Minikube`
```
minikube start
```
Check `Minikube` Status
```
minikube status
```
## Step - 1. Clone Repo from GitHub
```
sudo git clone https://github.com/Fir3eye/nodeapp_tests03.git
```

## Step - 2. Create a Dockerfile if not present
```
sudo vi Dockerfile
```
`Paste the Dockerfile`
```
FROM node:latest

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3000
CMD [ "node", "index.js" ]
```

## Step - 3. Build Image
### Note:- Please change the image name with our docekr username instead of `fir3eye`

Install `nodejs`
```
sudo apt install nodejs -y
```
Install `npm`
```
sudo npm install -y
```
```
docker build -t fir3eye/node_app:latest .
```
Check the images
```
docker images
```			
## Step - 4. Verify before pushing the image 
```
docker run -d -p 3000:3000 --name node_apps fir3eye/node_app:latest
```

## Step - 5. Push image to docker Hub
```
docker login
```
It will take `username` and `password` Now login `successfully`
```
docker push fir3eye/node_app:latest
```		
After pushing Dockerimage `logout` the Docker Account 
```
docker logout
```
## Step - 6. Write your Kubernetes deployment and service
Create deployment.yml
```
vi deployment.yml
```
Paste the content on deployment.yaml
```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nodeapp-deployment
  labels:
    app: nodeapp
spec:
  replicas: 1
  selector:
    matchLabels:
      app: nodeapp
  template:
    metadata:
      labels:
        app: nodeapp 
    spec:
      containers:
      - name: nodeserver
        image: fir3eye/nodeapp:latest
        ports:
        - containerPort: 3000
```
Create service.yaml for accessing `outside` the network
```
vi service.yml
```
Paste the content on service.yaml
```
apiVersion: v1
kind: Service
metadata:
  name: nodeapp-service
spec:
  selector:
    app: nodeapp 
  type: LoadBalancer
  ports:
  - protocol: TCP
    port: 5000
    targetPort: 3000
    nodePort: 31110
```
## Step -7. Deploy your application on Kubernetes
Check the running deployment and seerivce
```
Kubectl get depployments
Kubectl get svc 
```
Apply the deployment and service artifact

```
Kubectl apply -f deployment.yaml
Kubctl apply -f svc.yaml
```
Cehck the Running Deployment and service
```
Kubectl get deployents
Kubectl get svc			
```
## Step - 8. Access the applicaiton from outside the network
```
Minikube get svc
```
copy link and paste on the browser :-)
