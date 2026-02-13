import { type FC, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import CoreConcept from './components/CoreConcept'
import TabButton from './components/TabButton'
import { CORE_CONCEPTS, EXAMPLES } from './data'

type TabKey = keyof typeof EXAMPLES;

const App: FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>('empty')

  function handleSelectTab(tabName: TabKey) {
    setSelectedTab(tabName)
  }
  
  /* return of the App component */
  return (
    <div>
      <Header />
      <Main />
      <section id="core-concepts">
        <h2>Concepts importants</h2>
        <ul>
          {CORE_CONCEPTS.map((concept) => (
            <CoreConcept
              key={concept.title}
              title={concept.title}
              description={concept.description}
              image={concept.image}
            />
          ))}
        </ul>
      </section>
      <section id="examples">
        <h2>Exemples</h2>
        <menu>
          <TabButton onClick={() => handleSelectTab('Components')}>
            Components
          </TabButton>
          <TabButton onClick={() => handleSelectTab('JSX')}>JSX</TabButton>
          <TabButton onClick={() => handleSelectTab('Props')}>Props</TabButton>
          <TabButton onClick={() => handleSelectTab('State')}>State</TabButton>
        </menu>
        {selectedTab}
        <div id="tab-content">
          {selectedTab !== 'empty' && (() => {
            const tabContent = EXAMPLES[selectedTab as TabKey]
            return (
              <>
                <h3>{tabContent.title}</h3>
                <p>{tabContent.description}</p>
                <pre>
                  <code>{tabContent.code}</code>
                </pre>
              </>
            )
          })()}
        </div>
      </section>
    </div>
  )
}

export default App
