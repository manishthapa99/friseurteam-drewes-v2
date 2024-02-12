import React,{Component} from "react";
import './MyTabs.css';


class MyTabs extends Component {           
    render(){
        return(
            <div className="Root">
            <Tabs selected={ 0 }>
              <TabList>
                <Tab>
                  <Button>Damen</Button>
                </Tab>
                <Tab>
                  <Button>Herren</Button>
                </Tab>
                <Tab>
                  <Button>Color Bar</Button>
                </Tab>
                <Tab>
                  <Button>Specialist</Button>
                </Tab>
                <Tab>
                  <Button>Kinder</Button>
                </Tab>
                <Tab>
                  <Button>Kosmetik</Button>
                </Tab>
                <Tab>
                  <Button>Finish</Button>
                </Tab>
              </TabList>
        
              <TabPanel>
                <table className="table">
                              <thead>
                              <tr>
                                  <th>Damen</th>
                                  <th>Kurz</th>
                                  <th>Mittel</th>
                                  <th>Lang</th>
                              </tr>
                              </thead>
                              <tbody>
                              <tr>
                                  <td>Waschen, Schneiden, Föhnen</td>
                                  <td data-label="Kurz"  >39,50€</td>
                                  <td data-label="Mittel">47,50€</td>
                                  <td data-label="Lang"  >55,00€</td>
                              </tr>
                              <tr>
                                  <td>Waschen, Schneiden</td>
                                  <td data-label="Kurz"  >33,50€</td>
                                  <td data-label="Mittel">36,50€</td>
                                  <td data-label="Lang"  >40,00€</td>
                              </tr>
                              <tr>
                                  <td>Waschen, Föhnen oder Legen</td>
                                  <td data-label="Kurz"  >22,00€</td>
                                  <td data-label="Mittel">28,00€</td>
                                  <td data-label="Lang"  >35,00€</td>
                              </tr>
                              <tr>
                                  <td>Damenschnitt</td>
                                  <td data-label="Kurz"  >29,00€</td>
                                  <td data-label="Mittel">29,00€</td>
                                  <td data-label="Lang"  >29,00€</td>
                              </tr>
                              <tr>
                                  <td>Hochstecken</td>
                                  <td data-label="Kurz"  >ab 40,00€</td>
                                  <td data-label="Mittel">ab 50,00€</td>
                                  <td data-label="Lang"  >ab 60,00€</td>
                              </tr>
                              <tr>
                                  <td>Styling einfach</td>
                                  <td data-label="Kurz"  >10,00€</td>
                                  <td data-label="Mittel">15,00€</td>
                                  <td data-label="Lang"  >20,00€</td>
                              </tr>
                              <tr>
                                  <td>Heißscheren-Schnitt</td>
                                  <td data-label="Kurz"  >32,00€</td>
                                  <td data-label="Mittel">32,00€</td>
                                  <td data-label="Lang"  >32,00€</td>
                              </tr>
                              </tbody>
                          </table>
              </TabPanel>
        
              <TabPanel>
              <table className="table">
                            <thead>
                            <tr>
                                <th>Herren</th>
                                <th>Kurz</th>
                                <th>Mittel</th>
                               
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Waschen, Schneiden, Föhnen</td>
                                <td data-label="Kurz"  >24,50€</td>
                                <td data-label="Mittel">28,50€</td>
                                
                            </tr>
                            <tr>
                                <td>Herrenschnitt</td>
                                <td data-label="Kurz"  >ab 19,50€</td>
                                <td data-label="Mittel">ab 21,50€</td>
                               
                            </tr>
                            <tr>
                                <td>Konturenschnitt</td>
                                <td data-label="Kurz"  >12,50€</td>
                                <td data-label="Mittel">12,50€</td>
                          
                            </tr>
                            <tr>
                                <td>Bart schneiden</td>
                                <td data-label="Kurz"  >8,50€</td>
                                <td data-label="Mittel">8,50€</td>
                               
                            </tr>
                            <tr>
                                <td>Bart schneiden mit Messer und Pflege</td>
                                <td data-label="Kurz"  >15,00€</td>
                                <td data-label="Mittel">15,00€</td>
                               
                            </tr>
                            <tr>
                                <td>Maschinenschnitt</td>
                                <td data-label="Kurz"  >13,50€</td>
                                <td data-label="Mittel">13,50€</td>
                            </tr>
                            </tbody>
                        </table>
              </TabPanel>
        
              <TabPanel>
              <table className="table">
                            <thead>
                            <tr>
                                <th>Color Bar Menü</th>
                                <th>Fein</th>
                                <th>Normal</th>
                                <th>Dick</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Ansatzfarbe</td>
                                <td data-label="Fein"  >ab 35,00€</td>
                                <td data-label="Normal">ab 38,00€</td>
                                <td data-label="Dick"  >ab 40,00€</td>
                            </tr>
                            <tr>
                                <td>Farbe</td>
                                <td data-label="Fein"  >ab 39,00€</td>
                                <td data-label="Normal">ab 48,00€</td>
                                <td data-label="Dick"  >ab 55,00€</td>
                            </tr>
                            <tr>
                                <td>Intensivtönung</td>
                                <td  data-label="Fein"  >ab 35,00€</td>
                                <td  data-label="Normal">ab 43,00€</td>
                                <td  data-label="Dick"  >ab 55,00€</td>
                            </tr>
                            <tr>
                                <td>Highlights</td>
                                <td  data-label="Fein"  >ab 30,00€</td>
                                <td  data-label="Normal">ab 35,00€</td>
                                <td  data-label="Dick"  >ab 40,00€</td>
                            </tr>
                            <tr>
                                <td>Fliensträhnen Oberkopf</td>
                                <td  data-label="Fein"  >ab 35,00€</td>
                                <td  data-label="Normal">ab 45,00€</td>
                                <td  data-label="Dick"  >ab 55,00€</td>
                            </tr>
                            <tr>
                                <td>Fliensträhnen gesamter Kopf</td>
                                <td  data-label="Fein"  >ab 50,00€</td>
                                <td  data-label="Normal">ab 65,00€</td>
                                <td  data-label="Dick"  >ab 80,00€</td>
                            </tr>
                            <tr>
                                <td>Veredelung</td>
                                <td  data-label="Fein"  >ab 10,00€</td>
                                <td  data-label="Normal">ab 15,00€</td>
                                <td  data-label="Dick"  >ab 20,00€</td>
                            </tr>
                            </tbody>
                        </table>
              </TabPanel>
              <TabPanel>
              <table className="table">
                            <thead>
                            <tr>
                                <th>Specialist Treatments</th>
                                <th>Kurz</th>
                                <th>Mittle</th>
                                <th>Lang</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Umformung Paul Mitchell</td>
                                <td data-label="Kurz"  >10,00€</td>
                                <td data-label="Mittel">15,00€</td>
                                <td data-label="Lang"  >ab 20,00€</td>
                            </tr>
                            <tr>
                                <td>Umformung Volumen Oberkopf</td>
                                <td data-label="Kurz"  >70,00€</td>
                                <td data-label="Mittel">80,00€</td>
                                <td data-label="Lang"  >ab 95,00€</td>
                            </tr>
                            <tr>
                                <td>Umformung Volumen</td>
                                <td data-label="Kurz"  >75,00€</td>
                                <td data-label="Mittel">85,00€</td>
                                <td data-label="Lang"  >ab 95,00€</td>
                            </tr>
                            <tr>
                                <td>Umformung Classic Oberkopf</td>
                                <td data-label="Kurz"  >80,00€</td>
                                <td data-label="Mittel">90,00€</td>
                                <td data-label="Lang"  >ab 100,00€</td>
                            </tr>
                            <tr>
                                <td>Umformung Classic</td>
                                <td data-label="Kurz"  >85,00€</td>
                                <td data-label="Mittel">95,00€</td>
                                <td data-label="Lang"  >ab 100,00€</td>
                            </tr>
                            <tr>
                                <td>Relaxer Glättung</td>
                                <td data-label="Kurz"  >60,00€</td>
                                <td data-label="Mittel">70,00€</td>
                                <td data-label="Lang"  >95,00€</td>
                            </tr>
                            <tr>
                                <td>Keratinbehandlung</td>
                                <td data-label="Kurz"  >35,00€</td>
                                <td data-label="Mittel">40,00€</td>
                                <td data-label="Lang"  >ab 45,00€</td>
                            </tr>
                            <tr>
                                <td>Intesivpflege</td>
                                <td data-label="Kurz"  >8,00€</td>
                                <td data-label="Mittel">10,00€</td>
                                <td data-label="Lang"  >ab 13,00€</td>
                            </tr>
                            <tr>
                                <td>Feuchtigkeitspflege</td>
                                <td data-label="Kurz"  >4,00€</td>
                                <td data-label="Mittel">5,00€</td>
                                <td data-label="Lang"  >ab 6,50€</td>
                            </tr>
                            </tbody>
                        </table>
              </TabPanel>
              <TabPanel>
              <table className="table">
                        <thead>
                        <tr>
                                <th>Kinder</th>
                                <th></th>
                                <th>Kurz</th>
                                <th>Mittel</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>bis 5 Jahre </td>
                                <td>Schneiden</td>
                                <td data-label="Kurz"  >11,00€</td>
                                <td data-label="Mittel">11,00€</td>
                            </tr>
                            <tr>
                                <td>bis 12 Jahre </td>
                                <td>Schneiden</td>
                                <td data-label="Kurz"  >16,00€</td>
                                <td data-label="Mittel">18,00€</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>mit Waschen</td>
                                <td data-label="Kurz"  >19,50€</td>
                                <td data-label="Mittel">24,00€</td>
                            </tr>
                            </tbody>
                        </table>
              </TabPanel>
              <TabPanel>
              <table className="table">
                            <thead>
                            <tr>
                                <th>Kosmetik</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Wimpern färben</td>
                                <td>12,50€</td>
                            </tr>
                            <tr>
                                <td>Augenbrauen färben</td>
                                <td>8,50€</td>
                            </tr>
                            <tr>
                                <td>Augenbrauen zupfen</td>
                                <td>ab 8,50€</td>
                            </tr>
                            <tr>
                                <td>Härchenentfernung mit Faden</td>
                                <td>ab 5,00€</td>
                            </tr>
                            <tr>
                                <td>Tages Make Up</td>
                                <td>ab 15,00€</td>
                            </tr>
                            <tr>
                                <td>Abend Make Up</td>
                                <td>ab 25,00€</td>
                            </tr>
                            </tbody>
                        </table>
              </TabPanel>
              <TabPanel>
              <table className="table">
                            <thead>
                            <tr>
                                <th>Finish</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Gel, Wax, Spray</td>
                                <td>1,50€</td>
                            </tr>
                            <tr>
                                <td>Festiger</td>
                                <td>3,50€</td>
                            </tr>
                            </tbody>
                        </table>
              </TabPanel>
            </Tabs>
          </div>
        )
    }
}

export default MyTabs;

class Tabs extends Component {
  state = { selected: this.props.selected };

  setSelected(selected) {
    if (selected !== this.state.selected) {
      this.setState({ selected })
    }
  }

  handleClick(tab) {
    return () => this.setSelected(tab)
  }

  renderTabList(child) {
    let tab = 0

    return React.cloneElement(child, {
      children: React.Children.map(child.props.children, (childTab) => {
        if (childTab.type.name === "Tab") {
          const _isActive = (tab === this.state.selected)
          const _onClick = this.handleClick(tab)

          tab++

          return React.cloneElement(childTab, { _isActive, _onClick })
        }

        return childTab
      }),
    })
  }

  renderChildren(children) {
    let panel = 0

    return React.Children.map(children, (child) => {
      if (child.type.name === "TabList") {
        return this.renderTabList(child)
      }

      if (child.type.name === "TabPanel") {
        const _isActive = (panel === this.state.selected)

        panel++

        return React.cloneElement(child, { _isActive })
      }

      return child
    })
  }

  render() {
    return (
      <div className="Tabs">
        { this.renderChildren(this.props.children) }
      </div>
    )
  }
}

const TabList = ({ children }) => (
  <ul className="TabList">
    { children }
  </ul>
)

const Tab = ({
  _onClick,
  _isActive,
  children,
}) => (
  <li
    className={ `Tab  ${ _isActive ? "is-active" : "" }` }
    onClick={ _onClick }>
    { children }
  </li>
)

const TabPanel = ({
  _isActive,
  children,
}) => (
  <div className={ `TabPanel  ${ _isActive ? "is-active" : "" }` }>
    { children }
  </div>
)

/* --- */

const Button = ({ children }) => (
  <button className="Button">
    { children }
  </button>
)

    