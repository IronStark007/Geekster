import { Avatar, Stack, Typography } from "@mui/material"
import { Container } from "@mui/system"

export const ProfileDetail = ({ details }) => {
    return (
        <Container sx={{ maxWidth: 520 }}>
            <Stack direction="row" mt={4} mb={4} gap={4}>
                <Avatar
                    alt="Profile picture"
                    src={details?.picture}
                    sx={{ width: "16rem", height: "16rem" }}
                />
                <Stack ml={4}>
                    <Typography variant="h3">{details?.firstName} {details?.lastName}</Typography>
                    <Typography variant="h4">{details?.location?.city}, {details?.location?.country}</Typography>
                    <Typography variant="h6">Member since {(new Date(details?.registerDate)).getUTCFullYear()}</Typography>
                    <Typography variant="p">{details?.email}</Typography>
                    <Typography variant="p">{details?.phone}</Typography>
                </Stack>
            </Stack>
        </Container>
    )
}