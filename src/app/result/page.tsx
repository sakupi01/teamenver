'use client'
import dynamic from 'next/dynamic';

import { css } from 'styled-system/css';

export default function Result(){
    const NodeContainer = dynamic(() => import('../../components/organisms/NodeContainer/NodeContainer').then(module => module.NodeContainer), {
        ssr: false
      });
    return (<main className={css({ padding: '5%' })}><NodeContainer /></main>)
}