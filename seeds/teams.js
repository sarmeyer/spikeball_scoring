exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('teams').del(),

    knex('teams').insert({"teamName": "TRex"}),
    knex('teams').insert({"teamName": "SetsMachine"}),
    knex('teams').insert({"teamName": "MrCat"}),
    knex('teams').insert({"teamName": "winnerwinner"}),
    knex('teams').insert({"teamName": "camelCase"}),
    knex('teams').insert({"teamName": "bestplayer"}),
    knex('teams').insert({"teamName": "WhoCares"}),
    knex('teams').insert({"teamName": "UserName3"}),
    knex('teams').insert({"teamName": "inittowinit"}),
    knex('teams').insert({"teamName": "LastUser"})
  )
};
