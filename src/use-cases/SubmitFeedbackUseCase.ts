import { Feedback } from '@prisma/client'

import { IFeedbacksRepository } from '../repositories/IFeedbacksRepository'
import { IMailAdapter } from '../adapters/IMailAdapter'

interface ISubmitFeedbackUseCaseRequest {
  type: string
  comment: string
  screenshot?: string
}

export class SubmitFeedbackUseCase {
  constructor (
    private feedbackRepository: IFeedbacksRepository,
    private mailAdapter: IMailAdapter
  ) {}

  public async execute ({ type, comment, screenshot }: ISubmitFeedbackUseCaseRequest): Promise<Feedback> {
    if (!type) {
      throw new Error('Type is required')
    }

    if (!comment) {
      throw new Error('Comment is required')
    }

    if (screenshot && !screenshot.startsWith('data:image/png;base64')) {
      throw new Error('Invalid screenshot format')
    }

    const feedback = await this.feedbackRepository.create({
      type,
      comment,
      screenshot
    })

    await this.mailAdapter.sendMail({
      subject: 'Novo feedback',
      body: [
        '<div style="font-size: 16px; font-family: sans-serif; color: #111">',
        `<p>Tipo de feedback: ${type}</p>`,
        `<p>Comentário: ${comment}</p>`,
        '</div>'
      ].join('\n')
    })

    return feedback
  }
}
