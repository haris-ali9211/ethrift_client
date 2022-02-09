import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import SubMin2 from './SubMIn2';

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Filter = styled.div`
  margin: 20px;
  `;
//   ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  `;
//   ${mobile({ marginRight: "0px" })}

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  `;
//   ${mobile({ margin: "10px 0px" })}

const Option = styled.option``;

const ProductList = () => {

    const location = useLocation();
    const cat = location.pathname.split('/')[2];
    const [filters, setFilter] = useState({});
    const [sort, setSort] = useState("newest");

    // console.log("===>",cat,filters,sort)

    const handeFilter = (e) => {
        const value = e.target.value;
        setFilter({
            ...filters,
            [e.target.name]: value,
        })
    };

    return (
        <div>
            <Container>
                <Title>Just Buy it🤩</Title>
                <FilterContainer>
                    <Filter>
                        <FilterText>Filter Products:</FilterText>
                        <Select name="color" onChange={handeFilter}>
                            <Option disabled >
                                Color
                            </Option>
                            <Option>Blue</Option>
                            <Option>Green</Option>
                            <Option>yellow</Option>
                            <Option>purple</Option>
                            <Option>Red</Option>
                            <Option>stainless steel</Option>
                            <Option>Black</Option>
                            <Option>pink</Option>
                            <Option>silver</Option>
                            <Option>white</Option>
                            <Option>Brown</Option>
                            <Option>Milk</Option>
                        </Select>
                        <Select name="size" onChange={handeFilter}>
                            <Option disabled>Size</Option>
                            <Option>XS</Option>
                            <Option>S</Option>
                            <Option>M</Option>
                            <Option>L</Option>
                            <Option>XL</Option>
                        </Select>
                    </Filter>
                    <Filter>
                        <FilterText>Sort Products:</FilterText>
                        <Select onChange={(e) => setSort(e.target.value)}>
                            <Option value="newest">Newest</Option>
                            <Option value="asc">Price (asc)</Option>
                            <Option value="desc">Price (desc)</Option>
                        </Select>
                    </Filter>
                </FilterContainer>
            </Container>
            <SubMin2 cat={cat} filters={filters} sort={sort} />
        </div>
    );
};

export default ProductList;