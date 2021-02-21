import { Page } from '../components/Page'
import { AboutMe } from '../components/AboutMe'
import { AboutMyDocs } from '../components/AboutMyDocs'
import { AboutMyEquipment } from '../components/AboutMyEquipment'
import { useRoutes, A } from 'hookrouter'

const routes = {
  '/me': () => <AboutMe />,
  '/docs': () => <AboutMyDocs />,
  '/equipment': () => <AboutMyEquipment />,
}

export const About = () => {
  const match = useRoutes(routes)

  return (
    <Page title='About Page!'>
      <div style={{display: 'flex', marginBottom: '20px'}}>
        <span style={{marginRight: '20px'}}>
          <A href='/about/me'>About Me</A>
        </span>
        <span style={{marginRight: '20px'}}>
          <A href='/about/docs'>About This Document</A>
        </span>
        <span style={{marginRight: '20px'}}>
          <A href='/about/equipment'>About My Equipment</A>
        </span>
      </div>
      {match || <div>Pick a Page</div>}
    </Page>
  )
}

export default About