import styled from "styled-components";
import { ReactComponent as LocationIconSvg } from "../../assets/location-icon.svg";
import { ReactComponent as SearchIconSvg } from "../../assets/search-icon.svg";

// the assume the custom theme is defined
export const SearchElement = styled.div`
  position: relative;
  height: 3.25rem;
  border-radius: 26px;
  background: ${({ theme }) => theme?.panelBgColor ?? "#fff"};
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.4rem;
  display: flex;
  align-items: center;
  z-index: 1;
`;

export const SearchInput = styled.input`
  flex: 1;
  margin-left: 1rem;
  height: 3.25rem;
  border: none;
  background-color: ${({ theme }) => theme?.panelBgColor ?? "#fff"};
  font-size: 1.125rem;
  color: ${({ theme }) => theme?.searchInput?.color ?? "#000"};
  width: 100%;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${({ theme }) => theme?.searchInput?.placeholderColor ?? "#000"};
  }
`;

export const SearchIcon = styled(SearchIconSvg)`
  margin-left: 1.2rem;
  fill: #4a6fa1;
`;
export const LocationButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
  height: 100%;
  display: contents;
  &:hover svg {
  }
`;
export const LocationIcon = styled(LocationIconSvg)`
  margin-right: 1.2rem;
  fill: #4a6fa1;
`;
export const LocationParagraph = styled.p`
  margin: 1rem;
  background-color: ${({ theme }) =>
    theme?.paragraph?.paragraphColor ?? "#eee"};
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
