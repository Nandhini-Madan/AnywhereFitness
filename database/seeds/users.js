const hashedPassword="$2a$08$PEt5TLgB6RU6e5eVeDZK4.Tgv27vSWJiIOoSyy5wVAErWUNKO/inC"// real password= abc1234!
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {role: 2,
      first_name: "Eldana",
      last_name: "Daniel",
      email: "Eldana@fit.com",
      username: "eldana1",
      password: hashedPassword},

        { role: 1,
      first_name: "Kasi",
      last_name: "hope",
      email: "kasi@fit.com",
      username: "kasi",
      password: hashedPassword},


        {role: 2,
      first_name: "Delina",
      last_name: "Daniel",
      email: "delina@fit.com",
      username: "Delina",
      password: hashedPassword
      },

 {role: 1,
      first_name: "Daniel",
      last_name: "Isaac",
      email: "daniel@fit.com",
      username: "Daniel",
      password: hashedPassword
      },

      ]);
    });
};
