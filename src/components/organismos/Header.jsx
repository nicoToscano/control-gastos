import styled from "styled-components";

import { ContentHeader } from "../atomos/ContentHeader";
import { DataUser } from "../organismos/DataUser";

export function Header({ stateConfig }) {
  return (
    <ContentHeader>
      <div onClick={(e) => e.stopPropagation()}>
        <DataUser stateConfig={stateConfig} />
      </div>
    </ContentHeader>
  );
}
