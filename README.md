# feathersjsmulticreate
### How to enable bulk/multiple create in a feathersjs service using postgres and sequelize 

#### To run type following commands
```
npm install

npm start
```
go to  http://localhost:/3030 and click on the button "Insert Data"

### step by step guide incase you decide to do the entire thing manually (no need to do if you wish to run and test)
1. #### create service with the command 

```
feathers generate service
```
2. #### Edit the model to enter field values disable timestamp and not to use ID as the table's primary key name is not id
```
    equip_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
```
3. #### In the service allow multi create 
```
 const options = {
    Model,
    paginate,
    multi: [ 'create' ] // list of method names
  };
```
4. #### Do changes in public/index.html to call the service

```
<script src="//unpkg.com/@feathersjs/client@^4.3.0/dist/feathers.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.4/socket.io.js"></script>
    <script type="text/javascript">
      // Set up socket.io
      const socket = io('http://localhost:3030');
      // Initialize a Feathers app
      const app = feathers();
      
      // Register socket.io to talk to our server
      app.configure(feathers.socketio(socket));
  
      // Form submission handler that sends a new message
      async function insert () {
        console.log("I M HERE");
        
        var obj = [
            {'type':'My type',
            'color':'green',
            'location':'north'},
            {'type':'My type1',
            'color':'red',
            'location':'east'},
            {'type':'My type3',
            'color':'blue',
            'location':'west'},
          ]
        
  
        // Create a new message with the input field value
        let res = await app.service('playground').create(obj);
        console.log('res',res);
  
      }
```

Reference:
[Feathersjs , sequalize  enable multi, multi create in a service](https://stackoverflow.com/questions/55238079/feathers-js-create-multi-entries-dumb-question)


[How to skip timestamp attributes in a sequelize model](https://stackoverflow.com/questions/39587767/disable-updatedat-update-date-field-in-sequelize-js)

[Feathersjs , sequalize not to use id _ID in a model ](https://github.com/feathersjs-ecosystem/feathers-sequelize/blob/5ee16785b5f80dc66830e2fbda8ae2719da76513/test/index.test.js)




