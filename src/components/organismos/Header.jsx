import styled from 'styled-components';

import { ContentHeader } from '../atomos/ContentHeader';
import { DataUser } from '../organismos/DataUser';

export function Header({ stateConfig }) {
    return (
        <ContentHeader>
            <DataUser stateConfig={stateConfig}/>            
        </ContentHeader>
    );
}

