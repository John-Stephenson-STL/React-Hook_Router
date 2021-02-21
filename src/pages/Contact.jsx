import { Page } from '../components/Page'

export const Contact = ({name}) => {
  return (
    <Page title='Contact Page!'>
      <p>Hello {name}</p>
    </Page>
  )
}

export default Contact