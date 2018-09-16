if [ "$1" == "nocontainer" ]; then
  echo "Starting new container.."
else
  echo "Restarting container.."
  docker stop lgc-api && docker rm lgc-api
fi
docker build -t lgc-api . && docker run --name lgc-api -p 1337:1337 --network br0 --env-file .env -d lgc-api
