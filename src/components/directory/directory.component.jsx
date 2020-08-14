import React from 'react';

import './directory.styles.scss'
import MenuItem from '../menu-item/menu-item.component';

class  Directory extends React.Component{
    constructor(){
        super();
        this.state ={
            section : [
                        {
                            title : 'HATS',
                            imageurl : 'https://i.ibb.co/cvpntL1/hats.png',
                            id : 1
                        },
                        {
                            title : 'JACKETS',
                            imageurl : 'https://i.ibb.co/px2tCc3/jackets.png',
                            id : 2
                        },
                        {
                            title : 'SNEAKERS',
                            imageurl : 'https://i.ibb.co/0jqHpnp/sneakers.png',
                            id : 3
                        },
                        {
                            title : 'WOMENS',
                            imageurl : 'https://i.ibb.co/GCCdy8t/womens.png',
                            size : 'large',
                            id : 4
                        },
                        {
                            title : 'MENS',
                            imageurl : 'https://i.ibb.co/R70vBrQ/mens.png',
                            size : 'large',
                            id : 5
                        }
                      ]
                }
            }
    render(){
        return(
            <div className='directory-menu'>
                {this.state.section.map(
                    section => <MenuItem key={section.id} title={section.title} imageurl={section.imageurl} size={section.size}/>
                )}
            </div>
        )
}}

export default Directory;