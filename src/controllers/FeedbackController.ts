import { Request, Response } from 'express'

import { FeedbackRepository } from '../prisma/FeedbackRepository'
import { NodemailerMailAdapter } from '../adapters/nodemailer/NodemailerMailAdapter'
import { SubmitFeedbackUseCase } from '../use-cases/SubmitFeedbackUseCase'

export class FeedbackController {
  public async create (request: Request, response: Response): Promise<Response> {
    const { type, comment, screenshot } = request.body
    const feedbackRepository = new FeedbackRepository()
    const nodemailerMailAdapter = new NodemailerMailAdapter()
    const submitFeedbackUseCase = new SubmitFeedbackUseCase(feedbackRepository, nodemailerMailAdapter)
    const feedback = await submitFeedbackUseCase.execute({
      type,
      comment,
      screenshot
    })
    return response.status(201).json({ data: feedback })
  }
}
