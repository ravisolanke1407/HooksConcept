import React,{useContext} from 'react'
import { makeStyles } from '@material-ui/core/styles';
// import { motion } from "framer-motion"
import {ProductContext} from '../Context/ProductContext'
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'grid',
        gridGap: '1rem',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        // height: 'auto',
    //     flex: '1 1 150px', /*  Stretching: */
    // flex: '0 1 150px',
        background:'cyan'

    },
    pink: {
        background: 'pink',
        display: 'flex',
        flexDirection: 'column',
        padding: '1rem',
        justifyContent: 'space-between',
    },
    purple: {
        background: 'purple',
        display: 'flex',
        flexDirection: 'column',
        padding: '1rem',
        justifyContent: 'space-between',

    },
    blue: {
        background: 'blue',
        display: 'flex',
        flexDirection: 'column',
        padding: '1rem',
        justifyContent: 'space-between',
    },
    green: {
        background: 'green',
        display: 'flex',
        flexDirection: 'column',
        padding: '1rem',
        justifyContent: 'space-between',
    },
    boxGrey: {
        background: 'grey',
        // height: 100,
        // width: '100%',
        aspectRatio:'16 / 9'
        // padding:10
    },
    h3: {
        margin: 0
    }

}))



export default function Card() {
    const classes = useStyles()
    const [products, setProducts] =useContext(ProductContext)
    console.log(products)

    return (
        <div className={classes.root}>
            {/* {products.map((item,idx)=>(
                <>
                <h4>{item.name+" "+idx+1}</h4>
                <p>{item.quantity}</p>
                </>
            ))} */}
            <div className={classes.pink}>
                <h3 className={classes.h3}>Title - Card 1</h3>
                <p>Medium length description with a few more words here.</p>
                <div className={classes.boxGrey}></div>
                <button onClick={()=>setProducts(prevProd => [...prevProd,{name:'New name',quantity:9}])}>Add data</button>
            </div>
            <div className={classes.purple}>
                <h3 className={classes.h3}>Title - Card 1</h3>
                <p>Medium length .</p>
                <div className={classes.boxGrey}></div>
            </div>
            <div className={classes.blue}>
                <h3 className={classes.h3}>Title - Card 1</h3>
                <p>
                    Long Description. Lorem ipsum dolor sit, amet consectetur adipisicing elit.

                </p>
                <div className={classes.boxGrey}>
                </div>
            </div>
            <div className={classes.green}>
                <h3 className={classes.h3}>Title - Card 1</h3>
                <p>with a few more words here.</p>
                <div className={classes.boxGrey}></div>
            </div>


        
        


        </div>
    )
}
