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
    width: 900px;
    margin: 0 auto;
`;

export const Searchbar = styled.input`
    width: 400px;
    height: 40px;
    border-radius: 10px;
    border: lightgray 1px solid;
    padding: 0 10px;
    position: absolute;
    font-size: 20px;
`;

export const Searchimg = styled.img`
    width: 25px;
    position: absolute;
    left: 380px;
    top: 10px;
`;

export const SearchWrapper = styled.form`
    position: relative;
    height: 100px;
    width: 450px;
    margin: 5px auto;
`;

export const AddIngreButton = styled.button`
    top: 50px;
    left: 230px;
    position: absolute;
    font-size: 15px;
    background: transparent;
    border: transparent;
    color: #003f8e;
    &:hover {
        cursor: pointer;
    }
`;

export const IngredientsSearch = styled.input`
    
`;