import { Feedback } from '@prisma/client'

export interface IFeedbackCreateData {
  type: string
  comment: string
  screenshot?: string
}

export interface IFeedbacksRepository {
  create(data: IFeedbackCreateData): Promise<Feedback>
}
