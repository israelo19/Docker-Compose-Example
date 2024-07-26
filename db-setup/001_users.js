db.createUser(
    {
        user: "mongouser",
        pwd: "123456",

        roles:[
            {
                role: "readWrite",
                db:   "mongodatabase"
            }
        ]
       }
);
 