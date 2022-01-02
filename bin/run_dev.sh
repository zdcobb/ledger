#/bin/bash

status=$( docker inspect -f '{{.State.Status}}' ledger 2> /dev/null )
if [[ ! -z ${status} ]]; then
    echo "The ledger container exists and is currently ${status}"
    if [[ ${status} -eq "Up" ]]; then
        docker kill ledger
    fi
    docker rm -f ledger
fi

docker build -t ledger .

docker run -it \
    -p 8080:8080 \
    -v $(pwd)/ledger-ui:/app \
    --name ledger \
    ledger bash
