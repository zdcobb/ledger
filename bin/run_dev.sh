#/bin/bash

status=$( docker inspect -f '{{.State.Status}}' ledger 2> /dev/null )
if [[ ! -z ${status} ]]; then
    echo "The ledger container exists and is currently ${status}"
    if [[ ${status} -eq "Up" ]]; then
        docker kill ledger
    fi
    docker rm -f ledger
fi

### build ui and server images
docker build -t ledger-ui ./ui
docker build -t ledger-server ./server

## run server, then UI with active shell
docker run -d \
    -p 3000:3000 \
    -v $(pwd)/server:/app \
    --name ledger-server \
    ledger-server

docker run -it \
    -p 8080:8080 \
    -v $(pwd)/ui:/app \
    --name ledger-ui \
    ledger-ui bash
