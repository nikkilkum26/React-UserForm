import React from 'react';
import { Button } from 'reactstrap';
import {Link} from 'react-router-dom';
import Data from './data'

const Title=()=>{
    let styles={
        header:{
            background:'#03a9f4',
            marginTop:'5px',
            textAlign:'center',
            color:'#F5F7FA'
        },
        button:{
            lineHeight: '20px',
            width:'100px',
            fontSize:'12pt',
            marginTop:'5px',
            marginRight:'10px',
            position:'absolute',
            top:'0',
            right:'0'
        },
        button2:{
            lineHeight: '20px',
            width:'100px',
            fontSize:'12pt',
            marginTop:'45px',
            marginRight:'10px',
            position:'absolute',
            top:'0',
            right:'0'
        }
    }
    return(
        
        <div>
            <h3 style={styles.header}>User Detial Form</h3>
            <Link to="/" >
                
            <Button style={styles.button2} > 
                Insert Form
                </Button>
                </Link>

                <Link to="/data" >
                
            <Button style={styles.button} > 
                Get Data
                </Button>
                </Link>
        </div>
    )
}

export default Title;