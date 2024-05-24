#!/bin/sh
# lets wait for the html to be generated
while [ ! -f /usr/src/app/index.html ]; do
  sleep 1
done

# Then copy the file
cp /usr/src/app/index.html /host/index.html