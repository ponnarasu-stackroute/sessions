npm install json-server -g
 create a json file . access from json server 
  json-server db.json
 we can also use this json server to source html static pages
  create a public folder and put html files inside
  Access via >  json-server -s public db.json
 adding deleting the json using curl 
// default it get request
curl -X http://localhost:3000/contacts
//get the value from server 
curl -X GET http://localhost:3000/contacts
// post will add the new entry. put will modify the content 
curl -X POST http://localhost:3000/contacts -d '{"firsname": "Kalpana", "lastname": "D"}' -H "Content-Type: application/json"

curl -X DELETE http://localhost:3000/contacts/4
> similar to json xml is also used widely. if more validation to the data. xml can be used.
