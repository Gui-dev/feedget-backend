import { SubmitFeedbackUseCase } from '../SubmitFeedbackUseCase'

const createFeedbackSpy = jest.fn()
const sendMailSpy = jest.fn()

const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
)

describe('SubjectFeedbackUseCase', () => {
  it('should be able to submit a feedback', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'Está tudo bugado',
      screenshot: 'data:image/png;base64foto.png'
    })).resolves.not.toThrow()

    expect(createFeedbackSpy).toHaveBeenCalled()
    expect(sendMailSpy).toHaveBeenCalled()
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

  it('should not be able to submit a feedback with an invalid screenshot', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'Está tudo bugado',
      screenshot: 'wrong.png'
    })).rejects.toThrow()
  })
})
