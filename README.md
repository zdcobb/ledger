# ledger

1.0.0
Hey there, this is ledger! It's just small app to noodle around with and learn some Vue. The main purpose is to help me (and whomever wants to use it) better keep track of some bills and more easily automate some calculations, such as keeping track of what to pay when, adding it up, splitting with people, etc.

If you want to build/run it yourself, feel free. The only real requirement is docker. All you gotta do is clone the repo and run the docker-compose like so
```bash
docker-compose up -d
```
This will build the images and start up the api server and the vue ui @ http://localhost:3000. Right now everything is in development mode so it just runs off the vue dev server but eventually I'll add a regular nginx server.

## TODO

- create page for new batches/lists
- have lists auto-calc for adding and/or splitting bills
- add sqlite db to save info like
-- users
-- lists - permanent lists for bills that get paid regularly, belong to one user only
-- items in lists (aka individual bill to pay)
- obviously these will need routes
- secure logins & tokens
- add server for ui to replace dev server
- add nginx
- loose ideas: 
-- history tab of all lists created, 
-- save/load template of frequently used lists
-- shared-lists - many-to-many for any lists shared with other users ()