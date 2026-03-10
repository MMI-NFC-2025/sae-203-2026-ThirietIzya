/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1299117398")

  // add field
  collection.fields.addAt(6, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_1154068080",
    "hidden": false,
    "id": "relation2322621095",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "Concerts",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1299117398")

  // remove field
  collection.fields.removeById("relation2322621095")

  return app.save(collection)
})
