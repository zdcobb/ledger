#/bin/bash

docker build -t ledger .

docker run -rm -it \
    -p 8080:8080 \
    -v $(pwd)/ledger-ui:/app \
    --name ledger \
    ledger bash
