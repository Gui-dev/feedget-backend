import { Feedback } from '@prisma/client'

import { SubmitFeedbackUseCase } from '../SubmitFeedbackUseCase'
import { IFeedbackCreateData } from '../../repositories/IFeedbacksRepository'

describe('SubjectFeedbackUseCase', () => {
  const submitFeedback = new SubmitFeedbackUseCase(
    {
      create: async ({ type, comment }: IFeedbackCreateData): Promise<Feedback> => {
        return {
          id: 'sndafnsdianf',
          type,
          comment,
          screenshot: 'foto.png'
        }
      }
    },
    { sendMail: async () => {} }
  )

  it('should be able to submit a feedback', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'Está tudo bugado',
      screenshot: 'data:image/png;base64foto.png'
    })).resolves.not.toThrow()
  })

  it('should not be able to submit a feedback without type', async () => {
    await expect(submitFeedback.execute({
      type: '',
      comment: 'Está tudo bugado',
      screenshot: 'data:image/png;base64foto.png'
    })).rejects.toThrow()
  })

  it('should not be able to submit a feedback without comment', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: '',
      screenshot: 'data:image/png;base64foto.png'
    })).rejects.toThrow()
  })
})
