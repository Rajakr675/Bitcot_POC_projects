import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();



async function main() {

  // create user
 /* const user = await prisma.user.create({
       data: {
        firstName: 'shiv',
      lastName: 'thakur',
      email: 'shiv123@prisma.io',
      age: 17,
      Nationality: 'indian',
      Account: {
        create: {
          title: 'my bank account in CBI ',
          bank_name: 'central bank of india',
          Account_open: true,
          Active_acc: true
           
          }
          },
       },  
     });
      console.log(user); 
*/

// create many
/*const createManyUsers = await prisma.user.createMany({
  data:[
    {
      firstName: 'sakshi',
      lastName: 'thakur',
      email: 'saksithakur@dev.com',
      age: 18,
      Nationality: 'indian',
      // Account: {
      //   create: {
      //     title: 'my bank account in CBI ',
      //     bank_name: 'central bank of india',
      //     Account_open: true,
      //     Active_acc: true
      //     }
      //     },
    },
    {
      firstName: 'diksha',
      lastName: 'patel',
      email: 'dikthakur@gamil.com',
      age: 20,
      Nationality: 'indian',
    },
    {
      firstName: 'jaya',
      lastName: 'sendhav',
      email: 'jayu@gamil.com',
      age: 18,
      Nationality: 'indian',
    }
  ]
  
});
*/

  // const upsertUser = await prisma.user.upsert({
  //   where: { id: 1},
  //   update: {
  //     age: {
  //       increment: 1
  //     }
  //   },
  // });

  const selectedFields = await prisma.user.findMany({
    // select:{
    //   firstName:true,
    //   lastName:true,
    //   age:true
    // }

  });

  // console.log(selectedFields);




  // Aggregate function
  const maxAge = await prisma.user.aggregate({
    _max: { age: true }
  });

  const minAge = await prisma.user.aggregate({
    _min: { age: true }
  });
  const avgAge = await prisma.user.aggregate({
    _avg: { age: true }
  });

  const countAge = await prisma.user.aggregate({
    _count: { firstName: true }
  });
  const sumAge = await prisma.user.aggregate({
    _sum: { age: true }
  });

  console.log(maxAge);
  console.log(minAge);
  console.log(avgAge);
  console.log(countAge);
  console.log(sumAge); 


  // find all users
  const finduser = await prisma.user.findMany({
    // where:{
    //   email: 'vishupatel@prisma.com'
    // },
    // include: {
    //   Account: true
    // }
    // include:
    //  {Account: {
    //   where: {
    //     title: {
    //       contains: 'my bank account',
    //     }
    //   },
    //  }}
  });
  // console.dir(finduser);

  const finduserbycity = await prisma.user.findMany({
    // where: {
    //   city: {
    //     in: ['ujjain', 'dewas', 'bhopal']
    //   }
    // },
    orderBy:
    {
      firstName: 'asc'
    },
    include: {
      Account: true,
    },
  });
  // console.dir(finduserbycity , {depth: Infinity});

  const finduserbyNOT = await prisma.user.findMany({
    where: {
    
        email: {
          endsWith: 'dev.com'
        }
      
    },
  });
  // console.dir(finduserbyNOT );





  // update user

  // const updateUser = await prisma.user.update({
  //   where: {
  //     email: 'sheetalthakur@bitcot.com'
  //   },
  //   data: {
  //     city: 'indore'
  //   }
  // });
  // console.log(updateUser);

/* const upsertUser = await prisma.user.upsert({
    where: {
     email: 'shiv123@prisma.com',
    },
    update: {
      firstName: 'sachin',
       lastName: 'sendhav',
      email: 'sacchu@dev.com',
      age: 23,
      Nationality: 'indian',
        Account: {
          create: {
            title: ' i have an account',
            Account_open: true,
           
            bank_name: 'bank of  baroda '
          }
        }

    },

    create: {
           firstName: 'sachin',
       lastName: 'sendhav',
      email: 'sacchu@dev.com',
      age: 23,
      Nationality: 'indian',
        Account: {
          create: {
            title: ' i have an  account',
            Account_open: true,
            Active_acc: true,
            bank_name: ' bank of baroda'
          }
        }

    },
    include: {
      Account: true
    },
  });  
  console.dir(upsertUser, { depth: Infinity });
  */


  // nested update
  
   /* const userupdate = await prisma.user.update({
      where: { email: 'sheetalthakur@bitcot.com' },
      data: {
       firstName: 'sheetal',
      lastName: 'sendhav',
      email: 'sheetalthakur@bitcot.com',
      age: 21,
      Nationality: 'indian',
        Account: {
          create: {
            title: ' my bank account',
            Account_open: true,
            Active_acc: true,
            bank_name: 'Union bank '
          }
        }
      },
  
      include: { Account: true }
    })
    console.log(userupdate, { depth: Infinity });*/
    

  // connect and create
  const connectOrCreateuser = await prisma.user.update({
    where: {     email: 'vishu20@prisma.com', },
    data: {
      city:"dewas",
      Account: 
      {
        connectOrCreate: {
          create: {
            title: 'an account in baroda bank',
            Account_open: true,
           Active_acc:true,
            bank_name: 'bank of baroda'
          },
          where:{
            id: 19
          }
        },
      },
    },
    include: { Account: true },
  });
  // console.log(connectOrCreateuser); 
  


  const findByRelation = await prisma.user.findMany({

    where: {
      age: {
        lte: 25
      }
    }
  });
  // console.log("hello users");

  // console.dir(findByRelation , {depth: Infinity});

  // console.log("hello users");


  // SKIP AND TAKE
  const skipANDtake = await prisma.user.findMany({
    where: {
      age: {
        gte: 18
      }
    },
    skip: 2,
    take: 3
  });
  //  console.log(skipANDtake);


  const sort = await prisma.userInfo.findMany({
    where: {
      title: {
        contains: 'my bank'
      }
    },
    orderBy: {
      bank_name: 'asc',
    }
  });
  //  console.log('sort method');
  //  console.log(sort);


  const groupbymethod = await prisma.user.groupBy({
    by: ["age"],
    _count: { id: true },
    having: {
      age: {
        _count: {
          gte: 2
        }
      }
    }
  });
  // console.log(groupbymethod);

const userWithSname = await prisma.user.findMany({
  where:{
    firstName:{
      not:{startsWith:"s"}
    }
  }
});
console.log(userWithSname);







  // delete user
  //    const deleteUser =await prisma.user.delete({
  //      where: {
  //         email: 'vishupatel@prisma.com'
  //      },
  //      include:{
  //        Account:true
  //      }
  //     });
  //     console.dir(deleteUser); 
}

main()
    // .then(async () => {
    //     await prisma.$disconnect()
    // })
    // .catch(async (e) => {
    //     console.error(e)
    //     await prisma.$disconnect()
    //     process.exit(1)
    // })






