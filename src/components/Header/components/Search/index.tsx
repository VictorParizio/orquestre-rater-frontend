import styled from "styled-components";
import { Button, ButtonDark } from "../../../Button";
import { Input } from "../../../Input";
import { colors } from "../../../../theme/colors";
import { RiSearchLine } from "react-icons/ri";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";

const SearchContainer = styled.div`
  display: flex;
  gap: 1.2rem;
`;

const SearchForm = styled.form`
  position: relative;
`;

const BtnSearch = styled(Button)`
  background: ${colors.tertiaryInteractive};
  height: 4rem;
  width: 4rem;
  border-radius: 100%;
  position: absolute;
  left: 0.4rem;
  top: 0.4rem;
`;

const BtnFilter = styled(ButtonDark)`
  height: 4.8rem;
  width: 4.8rem;
  border-radius: 100%;
`;

export const Search = () => {
  return (
    <SearchContainer>
      <SearchForm action="">
        <Input type="search" placeholder="Pesquisar..." />
        <BtnSearch>
          <RiSearchLine />
        </BtnSearch>
      </SearchForm>
      <BtnFilter>
        <HiAdjustmentsHorizontal />
      </BtnFilter>
    </SearchContainer>
  );
};
