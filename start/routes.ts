/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes/index.ts` as follows
|
| import './cart'
| import './customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import HealthCheck from '@ioc:Adonis/Core/HealthCheck'

Route.get('health', async ({ response }) => {
  const report = await HealthCheck.getReport()
  return report.healthy ? response.ok(report) : response.badRequest(report)
})

Route.on('/').render('welcome')

Route.get('/blog', 'PostsController.index').as('posts.index')
Route.get('/posts/:slug', 'PostsController.show').as('posts.show')

Route.on('register').render('register')
Route.post('register', 'AuthController.register')

Route.on('login').render('login')
Route.post('/login', 'AuthController.login')
Route.get('/logout', 'AuthController.logout')

Route.get('/dashboard', async ({ auth }) => {
  const user = await auth.authenticate()
  return `Hello user! Your email address is ${user.email}`
})
