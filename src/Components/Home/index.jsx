import React from 'react'
import Card from '../Card/Card'
import Footer from './Footer'
import Navbar from './Navbar'
import { makeStyles } from '@material-ui/core/styles';
import Sidebar from '../Sidebar';
import { ProductProvider } from '../Context/ProductContext';

const useStyles = makeStyles((theme) => ({
    parent:{
        display:'grid',
        // gridTemplateColumns: 'minmax(150px, 10%) 1fr'
        gridTemplateColumns: '4fr'

    }
}))
export default function Home() {
    const classes=useStyles()
    return (
        <ProductProvider>
            <div>
            <Navbar/>
            <main className={classes.parent}>
                <Sidebar/>
                <Card />
            </main>
            <Footer/>
        </div>
        </ProductProvider>
       
    )
}
