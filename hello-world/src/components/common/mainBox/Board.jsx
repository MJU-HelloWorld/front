import { useState } from 'react';

import {Link, useParams} from 'react-router-dom';
    const {category} = useParams();

    <ul className='category'>
        {['전체', '소통', '학업', '취업', '생활', '친구'].map(cate => {
            return(
                <li key={cate} className={category === cate ? 'postLinkOn' : 'postLink'}>
                    <Link to={`/${notice_board}/${category}`}>{cate}</Link>
                </li>
            );
        })}
    </ul>

