import styled from 'styled-components';

import { ContentHeader } from '../atomos/ContentHeader';
import { DataUser } from '../organismos/DataUser';

export function Header({ state, setState }) {
    return (
        <ContentHeader>
            <DataUser state={state} setState={setState}/>            
        </ContentHeader>
    );
}

