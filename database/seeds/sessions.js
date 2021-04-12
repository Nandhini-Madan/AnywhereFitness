
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('sessions').del()
    .then(function () {
      // Inserts seed entries
      return knex('sessions').insert([
        {
      users_id: 6,
      classes_id: 5,
      joined: new Date().toString().split(' ').slice(0, 5).join(' '),

    },
{
      users_id: 6,
      classes_id: 5,
      joined: new Date().toString().split(' ').slice(0, 5).join(' '),
    },

    {
      users_id: 7,
      classes_id: 6,
      joined: new Date().toString().split(' ').slice(0, 5).join(' '),
    },

    {
      users_id: 7,
      classes_id: 6,
      joined: new Date().toString().split(' ').slice(0, 5).join(' '),
    },

      ]);
    });
};
