import React from 'react';
import { Footer, HeaderTwo } from '../../../layout';
import Breadcrumb from '../../breadcrumb/breadcrumb-3';
import TeamArea from './team-area';

const TeamOne = () => {
    return (
        <div className='sticky-header'>
            <div id="main-wrapper" className="main-wrapper">
                
                <TeamArea/>
                
            </div>
        </div>
    )
}

export default TeamOne;