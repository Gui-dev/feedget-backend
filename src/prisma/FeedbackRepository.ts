import { Feedback } from '@prisma/client'

import { IFeedbackCreateData, IFeedbacksRepository } from '../repositories/IFeedbacksRepository'
import { prismaClient } from '../prisma'

export class FeedbackRepository implements IFeedbacksRepository {
  public async create ({ type, comment, screenshot }: IFeedbackCreateData): Promise<Feedback> {
    const feedback = await prismaClient.feedback.create({
      data: {
        type,
        comment,
        screenshot
      }
    })

    return feedback
  }
}
