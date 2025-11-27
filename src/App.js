import { ThemeProvider } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import theme from './theme'
import Navbar from './Navbar';
import Banner from './Banner';
import TheTeam2k24 from './TheTeam_2k24';
import About from './About';
import Contact from './Contact_2k24';
import CallForPapers from './CallForPapers_2k24';
import Archives from './Archives';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Router>
            <Navbar/>
            <main className="pagemain">
              <Switch>
                <Route exact path="/">
                  <Banner/>
                  {/* <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        padding: '32px 24px',
                        background: 'white',
                        color: 'black',
                        marginTop: '40px',
                        borderRadius: '12px',
                        width: '55%',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                        cursor: 'pointer',
                        transition: 'transform 0.2s ease'
                    }}
                    onClick={() => window.open('Chalchitra Darpan(24-25) Does Cinema Lie.pdf')}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        >
                    <img 
                        src="/edition24-25.png"    
                        alt="Fourth Edition Cover" 
                        style={{
                        width: '15%',     // Shrunk from 45% to 35%
                        minWidth: '220px',// Keeps it reasonable on small screens
                        borderRadius: '8px',
                        marginBottom: '20px',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.20)'
                        }}
                    />
                    <em>Does Cinema Lie?</em> Fourth Edition is live now
                  </div> */}
                  <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        padding: '64px 24px',
                        backgroundColor: 'black',
                        color: 'white',
                        marginTop: '40px',
                        width: '100%',
                        cursor: 'pointer',
                        transition: 'transform 0.2s ease',
                    }}
                    onClick={() =>
                        window.open('Chalchitra Darpan(24-25) Does Cinema Lie.pdf')
                    }
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    >
                    <img
                        src="/edition24-25.png"
                        alt="Fourth Edition Cover"
                        style={{
                        width: '5%',
                        minWidth: '220px',
                        borderRadius: '8px',
                        marginBottom: '20px',
                        boxShadow: '0 0 25px rgba(255,255,255,0.15)',
                        }}
                    />
                    <em style={{ fontSize: '2.6rem', fontWeight: 500 }}>
                        Does Cinema Lie?
                    </em>{' '}
                    Fourth Edition is live now
                  </div>
                  <About/>
                  <TheTeam2k24/>
                </Route>
                <Route exact path="/chalchitradarpan22_23">
                  <CallForPapers/>
                </Route>
                <Route exact path="/archives">
                  <Archives/>
                </Route>
              </Switch>
              <Contact/>
            </main>
          </Router>
        </CssBaseline>
      </ThemeProvider>
    </div>
  );
}

export default App;
