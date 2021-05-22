
import styled from 'styled-components'

export const RecipeImage = styled.img`
    width: 250px;
`;

export const flexWrapper = styled.div`
    display: flex;
    flex-wrapper: wrap;
`;

export const RecipeTitle = styled.div`
    width: 250px;
    min-height: 100px;
    padding: 5px;
    text-align: center;
`;

export const CardStyle = styled.div`
    width: 250px;
    background: white;
    
    &:hover {
        box-shadow: 0 15px 30px -5px rgba(0,0,0,.15), 0 0 5px rgba(0,0,0,.1);
	transform: translateY(-4px);
    }
`;