# ledger

1.0.0
Howdy, welcome to ledger! Started as a small app to noodle around with and learn React and other tools/libraries. What is it? A little tool to keep track of monthly bills, payments, and other transactions you may need to track, combine, split, save, etc.

## Stack
JavaScript
React
<span style="color:blue">Vue (retired)</span>
Graphql
Node.js
Docker

If you want to build/run it yourself, feel free. The only real requirement is docker. All you gotta do is clone the repo and run the docker-compose like so
```bash
docker-compose up -d
```
This will build the images and start up the api server and the vue ui @ http://localhost:3000. Right now everything is in development mode so it just runs off the vue dev server but eventually I'll add a regular nginx server.

## TODO
- add graphql
- add prisma and sqlite db
- Authentication and Authorization w/ JWT
- Add components for:
-- page
-- groups/lists of transactions
-- individual transactions, save
-- history/saved pages

### later on...
- add server for ui to replace dev server
- add nginx

### loose ideas: 
-- history tab of all lists created, 
-- save/load template of frequently used lists
-- shared-lists - many-to-many for any lists shared with other users ()
