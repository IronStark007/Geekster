import { Avatar, Paper, Stack, Typography } from "@mui/material"
import moment from "moment"
import { Link } from "react-router-dom"

export const Comment = ({ comment }) => {

    return (<>
        <Paper>
            <Stack my={1} mx={2}>
                <Stack direction="row" gap={2}>
                    <Link to={`/profile/${comment?.owner?.id}`}>
                    <Avatar
                        alt="Comment Profile"
                        src={comment?.owner?.picture}
                    />

                    </Link>
                    <Stack>
                       <Link to={`/profile/${comment?.owner?.id}`}>
                        <Typography variant="body1">{comment?.owner?.firstName} {comment?.owner?.lastName}</Typography>
                       </Link>
                        <Typography variant="caption">{moment(comment?.publishDate).fromNow()}</Typography>
                    </Stack>
                </Stack>
                <Typography variant="h6">{comment?.message}</Typography>
            </Stack>
        </Paper>
    </>)
}