import nodemailer from 'nodemailer'

import { IMailAdapter, ISendMailData } from '../IMailAdapter'

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '681bd7bb79615f',
    pass: '0dfc7041ac45e4'
  }
})

export class NodemailerMailAdapter implements IMailAdapter {
  public async sendMail ({ subject, body }: ISendMailData): Promise<void> {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Bruce Wayne <bruce@email.com>',
      subject: 'Novo feedback',
      html: body
    })
  }
}
