docker build -t abdoultodocker/client:latest -t abdoultodocker/client:$GIT_SHA -f ./client/Dockerfile ./client
docker build -t abdoultodocker/server:latest -t abdoultodocker/server:$GIT_SHA -f ./client/Dockerfile ./server
docker build -t abdoultodocker/worker:latest -t abdoultodocker/worker:$GIT_SHA -f ./client/Dockerfile ./worker

docker push abdoultodocker/client:latest
docker push abdoultodocker/worker:latest
docker push abdoultodocker/server:latest

docker push abdoultodocker/client:$GIT_SHA
docker push abdoultodocker/worker:$GIT_SHA
docker push abdoultodocker/server:$GIT_SHA

kubectl apply -f k8s

kubectl set image deployment/client-deployment client=abdoultodocker/client:$GIT_SHA
kubectl set image deployment/server-deployment server=abdoultodocker/server:$GIT_SHA
kubectl set image deployment/worker-deployment worker=abdoultodocker/worker:$GIT_SHA