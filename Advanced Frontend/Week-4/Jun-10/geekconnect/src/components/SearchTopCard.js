import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

//2.09.20

export default function SearchTopCard({ query }) {
    return (
        <Card variant="outlined" sx={{ maxWidth: 520, margin: "auto", marginTop: "2rem" }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    Search Results For - {query}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                </Typography>
                <Typography variant="body2">
                    Love Animals ❣️
                </Typography>
            </CardContent>
        </Card>
    );
}
