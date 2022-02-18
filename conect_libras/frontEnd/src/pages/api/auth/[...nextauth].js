import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';


export default NextAuth({
    // Configure one or more authentication providers
    providers: [

        Providers.Email({

            server: {
                host: process.env.EMAIL_SERVER_HOST,
                port: process.env.EMAIL_SERVER_PORT,
                secure: true,
                auth: {
                  user: process.env.EMAIL_SERVER_USER,
                  pass: process.env.EMAIL_SERVER_PASSWORD
                }
              },
              tls: {
                rejectUnauthorized: false,

              },
              from: process.env.EMAIL_FROM
          }),
      
    ],
  
    database: "mysql://root:@localhost:3306/db_c_libras_syss"
    //process.env.DATABASE_URL,


  })
  