import React from 'react'
import { Route, Routes } from 'react-router-dom'
//import NavBar from './components/NavBar'
//import ScrollableTabsButtonAuto from './components/Tabs'
//import IconLabelTabs from './components/MobileTabs'
//import RecipeReviewCard from './components/Movies'
import ResponsiveAppBar from './components/AppBar'
import SimpleBottomNavigation from './components/BottomNav'
import Latest from './pages/Latest/Latest'
import Movies from './pages/Movies/Movies'
import Search from './pages/Search/Search'
import TvSeries from './pages/TvSeries/TvSeries'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Latest />} exact />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tvseries" element={<TvSeries />} />
        <Route path="/search" element={<Search/>} />
      </Routes>
      <ResponsiveAppBar /><br />

      
      <SimpleBottomNavigation/>
    </div>
  )
}

export default App