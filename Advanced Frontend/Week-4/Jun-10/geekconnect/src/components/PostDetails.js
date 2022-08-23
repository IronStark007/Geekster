import {LinearProgress, Paper } from "@mui/material"

export const PostDetails = ({ details }) => {
// 1.1.32
    return (<>
        {details !==null ? (
            <Paper elevation={0}>
                <img src={details?.image} alt="Post" style={{ width: "100%", borderRadius: "5px", height: "100%" }} />
            </Paper>
        ) : (
            <>
        <LinearProgress />
        {console.log("i am running")}
        </>
        )}

    </>)
}