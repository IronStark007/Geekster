import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ProductCard from "./ProductCard";
import Masonry from 'react-masonry-css';


export default function ProductList(props) {
    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    };
    return (
        <Box sx={{ flexGrow: 1 }} mt={4}>
            <Grid container gap={4} justifyContent="center">
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                >
                    {props?.products?.map((product, idx) => {
                        return (<ProductCard key={idx} product={product} />)
                    })}
                </Masonry>
            </Grid>
        </Box>
    );
}
