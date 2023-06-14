import React  from 'react';
import { Route, Switch } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { lightTheme } from "./components/Themes"
import GlobalStyle from "./globalStyles"
import Main from "./components/Main"
import About from "./components/AboutPage"
import BlogPage from "./components/BlogPage"
import MySkillsPage from "./components/MySkillsPage"
import WorkPage from "./components/WorkPage";

function App() {
  return <>
    <GlobalStyle/>
    <ThemeProvider theme={lightTheme}>
      <Switch>
        <Route exact path='/' component={Main}></Route>
        <Route exact path='/about' component={About}></Route>
        <Route exact path='/blog' component={BlogPage}></Route>
        <Route exact path='/skills' component={MySkillsPage}></Route>
        <Route exact path='/work' component={WorkPage}></Route>
      </Switch>
    </ThemeProvider>
    </>
    
}

export default App

