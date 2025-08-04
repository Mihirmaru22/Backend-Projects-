use('crudeDb')

db.createCollection("courses")

// db.courses.insert([
//   {
//     "name": "nodeJS",
//     "price": 100,
//     "CampTime": "7 weeks"
//   },
//   {
//     "name": "reactJS",
//     "price": 120,
//     "CampTime": "6 weeks"
//   },
//   {
//     "name": "python",
//     "price": 90,
//     "CampTime": "8 weeks"
//   },
//   {
//     "name": "mongoDB",
//     "price": 80,
//     "CampTime": "5 weeks"
//   },
//   {
//     "name": "expressJS",
//     "price": 95,
//     "CampTime": "6 weeks"
//   },
//   {
//     "name": "TypeScript",
//     "price": 110,
//     "CampTime": "6 weeks"
//   },
//   {
//     "name": "Docker",
//     "price": 130,
//     "CampTime": "4 weeks"
//   },
//   {
//     "name": "NextJS",
//     "price": 140,
//     "CampTime": "5 weeks"
//   },
//   {
//     "name": "GraphQL",
//     "price": 105,
//     "CampTime": "5 weeks"
//   },
//   {
//     "name": "MySQL",
//     "price": 100,
//     "CampTime": "6 weeks"
//   }
// ])

// let a = db.courses.find({price  : 80})
// console.log(a)

// db.courses.updateOne({price : 100}, {$set:{price : 200}})
//  db.courses.updateMany({price : 80}, {$set : {price : 500}})

db.courses.deleteMany({price : 125})