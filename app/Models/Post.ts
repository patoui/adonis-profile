import { DateTime } from 'luxon'
import { BaseModel, column, computed } from '@ioc:Adonis/Lucid/Orm'

export default class Post extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public slug: string

  @column()
  public title: string

  @column()
  public body: string

  @column.dateTime()
  public published_at: DateTime

  @column.dateTime({ autoCreate: true })
  public created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updated_at: DateTime

  @computed()
  public get short_body () {
    return this.body.substring(0, 100).replace(/\W /g, '');
  }

  @computed()
  public get short_published_at () {
    return this.published_at.toLocaleString(DateTime.DATETIME_MED)
  }
}
