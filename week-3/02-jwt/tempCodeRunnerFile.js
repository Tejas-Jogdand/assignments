const schemaForPassword = zod.string().gte(6);  //greater than or equals to 
    schemaForPassword.Parse('password');