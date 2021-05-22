import styled from 'styled-components'

export const AppStyles = styled.div`
    background: #F0F9F9;
    width: 100%;
`;

export const FlexWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const RecipeWrapper = styled.div`
    width: 1000px;
`;

export const Searchbar = styled.input`
    width: 400px;
    height: 30px;
    border-radius: 10px 0 0 10px;
    border: lightgray 1px solid;
    padding: 0 10px;
    position: absolute;
`;

export const Searchimg = styled.img`
    width: 25px;
    position: absolute;
    left: 490px;
`;

export const SearchWrapper = styled.div`
    position: relative;
    height: 50px;
    width: 400px;
    margin: 5px auto;
`;