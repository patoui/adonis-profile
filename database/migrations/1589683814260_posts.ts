import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Posts extends BaseSchema {
  protected tableName = 'posts'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title').notNullable().index()
      table.string('slug').notNullable().unique()
      table.text('body').notNullable()
      table.dateTime('published_at')
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
