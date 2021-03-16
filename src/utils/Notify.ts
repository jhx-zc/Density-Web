import { Notify } from 'quasar'

export function SuccessMessage(message: string) {
  Notify.create({
    message,
    type: 'positive',
    position: 'top',
  })
}

export function ErrorMessage(message: string) {
  Notify.create({
    message,
    type: 'negative',
    position: 'top',
  })
}
