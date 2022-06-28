import { Router } from 'express'

import { FeedbackController } from '../controllers/FeedbackController'

const routes = Router()

const feedbackController = new FeedbackController()

routes.post('/feedbacks', feedbackController.create)

export {
  routes
}
