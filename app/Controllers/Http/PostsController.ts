// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PostsController {
    public async index ({ view }) {
        return view.render('posts/index')
    }
}
